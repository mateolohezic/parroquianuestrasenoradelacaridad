"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { motion, AnimatePresence, Reorder, useDragControls } from "framer-motion";
import Fuse from "fuse.js";
import {
  PlusIcon,
  TrashIcon,
  WhatsAppIcon,
  CloseIcon,
  SearchIcon,
  GripIcon,
  ShareIcon,
  CopyIcon,
  CheckIcon,
} from "@/icons";
import { MOMENT_COLORS } from "@/interfaces";
import type { Song, MassMoment } from "@/interfaces";
import { CANCIONES } from "@/constants/canciones";
import CancioneroNav from "../../_components/CancioneroNav";

const STORAGE_KEY = "cancionero-setlist-v2";

interface SetlistSlot {
  id: string;
  label: string;
  songIds: number[];
}

const DEFAULT_SLOTS: SetlistSlot[] = [
  { id: "entrada", label: "Entrada", songIds: [] },
  { id: "ofertorio", label: "Ofertorio", songIds: [] },
  { id: "comunion", label: "Comunión", songIds: [] },
  { id: "postcomunion", label: "Postcomunión", songIds: [] },
  { id: "salida", label: "Salida", songIds: [] },
];

/** Map slot labels to MassMoment for "sugerida" hints in picker */
const LABEL_TO_MOMENT: Record<string, MassMoment> = {
  Entrada: "Entrada",
  Ofertorio: "Ofertorio",
  Comunión: "Comunión",
  Postcomunión: "Postcomunión",
  Salida: "Salida",
  Adoración: "Adoración",
  "Liturgia de la Palabra": "Liturgia de la Palabra",
  "Lavatorio de pies": "Lavatorio de pies",
  Villancico: "Villancico",
  "Adoración al niño": "Adoración al niño",
  "Adoración (Espíritu Santo)": "Adoración (Espíritu Santo)",
  Peregrinación: "Peregrinación",
};

const fuse = new Fuse(CANCIONES, {
  keys: [{ name: "title", weight: 1 }],
  threshold: 0.3,
  minMatchCharLength: 1,
});

function loadSetlist(): SetlistSlot[] {
  if (typeof window === "undefined") return DEFAULT_SLOTS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      // Migrate from v1 format
      const v1 = localStorage.getItem("cancionero-setlist");
      if (v1) {
        const old = JSON.parse(v1) as Record<string, number | null>;
        const migrated = DEFAULT_SLOTS.map((slot) => {
          const songId = old[slot.label];
          return { ...slot, songIds: songId ? [songId] : [] };
        });
        localStorage.setItem(STORAGE_KEY, JSON.stringify(migrated));
        localStorage.removeItem("cancionero-setlist");
        return migrated;
      }
      return DEFAULT_SLOTS;
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return DEFAULT_SLOTS;
    const valid = (parsed as SetlistSlot[]).filter(
      (s) =>
        typeof s === "object" &&
        s !== null &&
        "id" in s &&
        "label" in s &&
        "songIds" in s
    );
    return valid.length > 0 ? valid : DEFAULT_SLOTS;
  } catch {
    return DEFAULT_SLOTS;
  }
}

function saveSetlist(slots: SetlistSlot[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(slots));
}

let nextCustomId = 1;

export default function SetlistContent() {
  const [slots, setSlots] = useState<SetlistSlot[]>(DEFAULT_SLOTS);
  const [activeSlot, setActiveSlot] = useState<string | null>(null);
  const [addingMoment, setAddingMoment] = useState(false);
  const [customLabel, setCustomLabel] = useState("");
  const customInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const loaded = loadSetlist();
    setSlots(loaded);
    // Set nextCustomId beyond any existing custom ids
    const maxCustom = loaded.reduce((max, s) => {
      const match = s.id.match(/^custom-(\d+)$/);
      return match ? Math.max(max, Number(match[1])) : max;
    }, 0);
    nextCustomId = maxCustom + 1;
  }, []);

  const persist = useCallback((updater: (prev: SetlistSlot[]) => SetlistSlot[]) => {
    setSlots((prev) => {
      const next = updater(prev);
      saveSetlist(next);
      return next;
    });
  }, []);

  const addSong = useCallback(
    (slotId: string, songId: number) => {
      persist((prev) =>
        prev.map((s) =>
          s.id === slotId && !s.songIds.includes(songId)
            ? { ...s, songIds: [...s.songIds, songId] }
            : s
        )
      );
    },
    [persist]
  );

  const removeSong = useCallback(
    (slotId: string, songId: number) => {
      persist((prev) =>
        prev.map((s) =>
          s.id === slotId
            ? { ...s, songIds: s.songIds.filter((id) => id !== songId) }
            : s
        )
      );
    },
    [persist]
  );

  const removeSlot = useCallback(
    (slotId: string) => {
      persist((prev) => prev.filter((s) => s.id !== slotId));
      if (activeSlot === slotId) setActiveSlot(null);
    },
    [persist, activeSlot]
  );

  const addCustomMoment = useCallback(
    (label: string) => {
      const trimmed = label.trim();
      if (!trimmed) return;
      // Prevent duplicates
      const exists = slots.some(
        (s) => s.label.toLowerCase() === trimmed.toLowerCase()
      );
      if (exists) {
        setAddingMoment(false);
        setCustomLabel("");
        return;
      }
      const id = `custom-${nextCustomId++}`;
      persist((prev) => [...prev, { id, label: trimmed, songIds: [] }]);
      setAddingMoment(false);
      setCustomLabel("");
    },
    [persist, slots]
  );

  const handleReorder = useCallback(
    (reordered: SetlistSlot[]) => {
      setSlots(reordered);
      saveSetlist(reordered);
    },
    []
  );

  const clearAll = useCallback(() => {
    setSlots(DEFAULT_SLOTS);
    saveSetlist(DEFAULT_SLOTS);
    setActiveSlot(null);
  }, []);

  const [copied, setCopied] = useState(false);
  const copyTimeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
    };
  }, []);

  const buildShareUrl = useCallback(() => {
    const filledSlots = slots.filter((s) => s.songIds.length > 0);
    const param = filledSlots
      .map((s) => `${encodeURIComponent(s.label)}:${s.songIds.join(",")}`)
      .join(";");
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    return `${origin}/cancionero/setlist/compartido?s=${param}`;
  }, [slots]);

  const handleCopyLink = useCallback(() => {
    const url = buildShareUrl();
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
      copyTimeoutRef.current = setTimeout(() => setCopied(false), 2000);
    }).catch(() => {
      // Fallback: silent fail
    });
  }, [buildShareUrl]);

  const handleShareWhatsApp = useCallback(() => {
    const shareUrl = buildShareUrl();
    const lines = slots
      .filter((s) => s.songIds.length > 0)
      .map(({ label, songIds }) => {
        const songs = songIds
          .map((id) => CANCIONES.find((s) => s.id === id))
          .filter(Boolean)
          .map((s) => `${s!.title} (#${s!.id})`);
        return `*${label}:* ${songs.join(", ")}`;
      });
    const text = `🎵 *Setlist para la Misa*\n\n${lines.join("\n")}\n\n${shareUrl}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  }, [slots, buildShareUrl]);

  // All song IDs assigned across all slots
  const allAssignedIds = useMemo(
    () => new Set(slots.flatMap((s) => s.songIds)),
    [slots]
  );

  // Detect songs used in more than one slot
  const duplicatedIds = useMemo(() => {
    const counts = new Map<number, number>();
    for (const slot of slots) {
      for (const id of slot.songIds) {
        counts.set(id, (counts.get(id) || 0) + 1);
      }
    }
    const dupes = new Set<number>();
    for (const [id, count] of counts) {
      if (count > 1) dupes.add(id);
    }
    return dupes;
  }, [slots]);

  const filledCount = slots.filter((s) => s.songIds.length > 0).length;

  useEffect(() => {
    if (addingMoment) customInputRef.current?.focus();
  }, [addingMoment]);

  return (
    <section className="mx-auto w-full max-w-4xl px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-ink sm:text-4xl">
              Setlist{" "}
              <span className="text-dorado">para la Misa</span>
            </h1>
            <p className="mt-2 text-sm text-ink-muted">
              Armá el repertorio eligiendo canciones para cada momento
            </p>
          </div>
          <CancioneroNav />
        </div>
      </motion.div>

      {/* Slots — reorderable */}
      <Reorder.Group
        axis="y"
        values={slots}
        onReorder={handleReorder}
        className="space-y-3"
      >
        {slots.map((slot) => (
          <SlotItem
            key={slot.id}
            slot={slot}
            isActive={activeSlot === slot.id}
            duplicatedIds={duplicatedIds}
            allAssignedIds={allAssignedIds}
            onToggle={() =>
              setActiveSlot(activeSlot === slot.id ? null : slot.id)
            }
            onAddSong={(id) => addSong(slot.id, id)}
            onRemoveSong={(songId) => removeSong(slot.id, songId)}
            onRemoveSlot={() => removeSlot(slot.id)}
            onClosePicker={() => setActiveSlot(null)}
          />
        ))}
      </Reorder.Group>

      {/* Add custom moment */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-3"
      >
        <AnimatePresence>
          {addingMoment ? (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  addCustomMoment(customLabel);
                }}
                className="flex items-center gap-2 rounded-xl border border-dashed border-stone-300 bg-white px-4 py-3"
              >
                <input
                  ref={customInputRef}
                  type="text"
                  value={customLabel}
                  onChange={(e) => setCustomLabel(e.target.value)}
                  placeholder="Nombre del momento (ej: Gloria, Imposición de ceniza...)"
                  className="flex-1 bg-transparent text-sm text-ink placeholder:text-ink-faint focus:outline-none"
                  maxLength={50}
                />
                <button
                  type="submit"
                  disabled={!customLabel.trim()}
                  className="shrink-0 rounded-lg bg-dorado px-3 py-1.5 text-xs font-medium text-white disabled:opacity-40 hover:bg-dorado/90 transition-300"
                >
                  Agregar
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setAddingMoment(false);
                    setCustomLabel("");
                  }}
                  className="shrink-0 text-ink-faint hover:text-ink transition-300"
                >
                  <CloseIcon size={16} />
                </button>
              </form>
            </motion.div>
          ) : (
            <button
              onClick={() => setAddingMoment(true)}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-stone-300 px-4 py-3 text-sm text-ink-faint hover:text-dorado hover:border-dorado transition-300"
            >
              <PlusIcon size={14} />
              Agregar momento
            </button>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="mt-6 flex items-center justify-between"
      >
        {filledCount > 0 ? (
          <>
            <button
              onClick={clearAll}
              className="text-xs text-ink-faint hover:text-red-500 transition-300 underline"
            >
              Limpiar todo
            </button>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyLink}
                className="flex items-center gap-2 rounded-xl border border-stone-200 bg-white px-4 py-2.5 text-sm font-medium text-ink hover:border-dorado hover:text-dorado transition-300 shadow-sm"
              >
                {copied ? <CheckIcon size={16} /> : <CopyIcon size={16} />}
                {copied ? "Copiado" : "Copiar enlace"}
              </button>
              <button
                onClick={handleShareWhatsApp}
                className="flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-green-700 transition-300 shadow-sm"
              >
                <WhatsAppIcon size={16} />
                WhatsApp
              </button>
            </div>
          </>
        ) : (
          <p className="text-xs text-ink-faint mx-auto">
            Elegí canciones para cada momento de la misa
          </p>
        )}
      </motion.div>
    </section>
  );
}

function SlotItem({
  slot,
  isActive,
  duplicatedIds,
  allAssignedIds,
  onToggle,
  onAddSong,
  onRemoveSong,
  onRemoveSlot,
  onClosePicker,
}: {
  slot: SetlistSlot;
  isActive: boolean;
  duplicatedIds: Set<number>;
  allAssignedIds: Set<number>;
  onToggle: () => void;
  onAddSong: (id: number) => void;
  onRemoveSong: (songId: number) => void;
  onRemoveSlot: () => void;
  onClosePicker: () => void;
}) {
  const dragControls = useDragControls();

  return (
    <Reorder.Item
      value={slot}
      dragListener={false}
      dragControls={dragControls}
      className="rounded-xl border border-stone-200 bg-white shadow-sm overflow-hidden list-none"
      whileDrag={{ scale: 1.02, boxShadow: "0 8px 25px rgba(0,0,0,0.1)" }}
    >
      {/* Slot header — clickable to toggle picker */}
      <div
        className="flex items-center gap-2 px-3 py-3 sm:px-4 cursor-pointer hover:bg-stone-50 transition-300"
        onClick={onToggle}
      >
        {/* Drag handle */}
        <div
          className="shrink-0 cursor-grab active:cursor-grabbing touch-none text-stone-300 hover:text-stone-500 transition-300"
          onPointerDown={(e) => {
            e.stopPropagation();
            dragControls.start(e);
          }}
          onClick={(e) => e.stopPropagation()}
          aria-label="Arrastrar para reordenar"
        >
          <GripIcon size={16} />
        </div>

        {/* Moment label */}
        <span className="shrink-0 text-sm font-bold text-ink">
          {slot.label}
        </span>

        {/* Songs list */}
        <div className="flex-1 min-w-0">
          {slot.songIds.length > 0 ? (
            <div className="flex flex-wrap items-center gap-1.5">
              {slot.songIds.map((songId) => {
                const song = CANCIONES.find((s) => s.id === songId);
                if (!song) return null;
                const isDupe = duplicatedIds.has(songId);
                return (
                  <span
                    key={songId}
                    className="group/chip inline-flex items-center gap-1 rounded-lg bg-stone-50 px-2 py-1 text-xs"
                    title={isDupe ? "Esta canción se repite en otro momento" : undefined}
                  >
                    {isDupe && (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-ink">
                        <path d="M16 16v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1" />
                        <rect x="8" y="2" width="13" height="13" rx="2" />
                      </svg>
                    )}
                    <span className="font-bold text-dorado">
                      {song.id}
                    </span>
                    <span className="text-ink truncate max-w-30 sm:max-w-50">
                      {song.title}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onRemoveSong(songId);
                      }}
                      className="ml-0.5 text-red-300 hover:text-red-500 transition-300"
                      aria-label={`Quitar ${song.title}`}
                    >
                      <CloseIcon size={10} />
                    </button>
                  </span>
                );
              })}
            </div>
          ) : null}
        </div>

        {/* Plus icon indicator */}
        <span
          className={`shrink-0 transition-300 ${
            isActive ? "text-dorado" : "text-ink-faint"
          }`}
        >
          <PlusIcon size={14} />
        </span>

        {/* Remove slot (custom only) */}
        {slot.id.startsWith("custom-") && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onRemoveSlot();
            }}
            className="shrink-0 rounded-lg p-1.5 text-red-300 hover:text-red-500 hover:bg-red-50 transition-300"
            aria-label="Eliminar momento"
          >
            <TrashIcon size={14} />
          </button>
        )}
      </div>

      {/* Song picker */}
      <AnimatePresence>
        {isActive && (
          <SongPicker
            moment={LABEL_TO_MOMENT[slot.label]}
            onSelect={onAddSong}
            onClose={onClosePicker}
            excludeIds={allAssignedIds}
          />
        )}
      </AnimatePresence>
    </Reorder.Item>
  );
}

function SongPicker({
  moment,
  onSelect,
  onClose,
  excludeIds,
}: {
  moment?: MassMoment;
  onSelect: (id: number) => void;
  onClose: () => void;
  excludeIds: Set<number>;
}) {
  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const results = useMemo(() => {
    let songs: Song[];
    if (search) {
      songs = fuse.search(search).map((r) => r.item);
    } else if (moment) {
      // Show songs that match the moment first
      const matching = CANCIONES.filter((s) =>
        s.massMoments.includes(moment)
      );
      const rest = CANCIONES.filter(
        (s) => !s.massMoments.includes(moment)
      );
      songs = [...matching, ...rest];
    } else {
      songs = [...CANCIONES];
    }
    return songs.filter((s) => !excludeIds.has(s.id)).slice(0, 15);
  }, [search, moment, excludeIds]);

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="overflow-hidden border-t border-stone-100"
    >
      <div className="p-3">
        {/* Search input */}
        <div className="relative mb-2">
          <SearchIcon
            size={14}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-faint"
          />
          <input
            ref={inputRef}
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar canción..."
            className="w-full rounded-lg border border-stone-200 bg-stone-50 py-2 pl-9 pr-8 text-sm text-ink placeholder:text-ink-faint focus:border-dorado focus:outline-none transition-300"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-ink-faint hover:text-ink"
            >
              <CloseIcon size={14} />
            </button>
          )}
        </div>

        {/* Results */}
        <div className="max-h-48 overflow-y-auto space-y-0.5">
          {results.map((song) => (
            <button
              key={song.id}
              onClick={() => onSelect(song.id)}
              className="flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-ink-muted hover:bg-dorado/5 hover:text-dorado transition-300"
            >
              <span className="flex h-5 min-w-5 items-center justify-center rounded text-[10px] font-bold text-dorado bg-stone-100">
                {song.id}
              </span>
              <span className="truncate">{song.title}</span>
              {moment && song.massMoments.includes(moment) && (
                <span className="shrink-0 ml-auto text-[10px] text-dorado/60">
                  sugerida
                </span>
              )}
            </button>
          ))}
          {results.length === 0 && (
            <p className="py-4 text-center text-xs text-ink-faint">
              No se encontraron canciones
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
