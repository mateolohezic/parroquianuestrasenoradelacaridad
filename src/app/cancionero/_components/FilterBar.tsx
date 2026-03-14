"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon, CloseIcon } from "@/icons";
import {
  ALL_LITURGICAL_SEASONS,
  ALL_MASS_MOMENTS,
  SEASON_COLORS,
  MOMENT_COLORS,
} from "@/interfaces";
import type { LiturgicalSeason, MassMoment } from "@/interfaces";
import { CANCIONES } from "@/constants/canciones";

interface Props {
  seasonFilters: LiturgicalSeason[];
  momentFilters: MassMoment[];
  onToggleSeason: (season: LiturgicalSeason) => void;
  onToggleMoment: (moment: MassMoment) => void;
}

function getSeasonCount(season: LiturgicalSeason): number {
  return CANCIONES.filter((s) => s.liturgicalSeasons.includes(season)).length;
}

function getMomentCount(moment: MassMoment): number {
  return CANCIONES.filter((s) => s.massMoments.includes(moment)).length;
}

function useClickOutside(ref: React.RefObject<HTMLElement | null>, onClose: () => void) {
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onCloseRef.current();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [ref]);
}

export default function FilterBar({
  seasonFilters,
  momentFilters,
  onToggleSeason,
  onToggleMoment,
}: Props) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
      <FilterDropdown
        label="Tiempo Litúrgico"
        activeCount={seasonFilters.length}
        items={ALL_LITURGICAL_SEASONS.map((season) => ({
          key: season,
          label: season,
          count: getSeasonCount(season),
          isActive: seasonFilters.includes(season),
          colors: SEASON_COLORS[season],
          onToggle: () => onToggleSeason(season),
        }))}
      />
      <FilterDropdown
        label="Momento de la Misa"
        activeCount={momentFilters.length}
        items={ALL_MASS_MOMENTS.map((moment) => ({
          key: moment,
          label: moment,
          count: getMomentCount(moment),
          isActive: momentFilters.includes(moment),
          colors: MOMENT_COLORS,
          onToggle: () => onToggleMoment(moment),
        }))}
      />
    </div>
  );
}

interface FilterItem {
  key: string;
  label: string;
  count: number;
  isActive: boolean;
  colors: { text: string; bg: string };
  onToggle: () => void;
}

function FilterDropdown({
  label,
  activeCount,
  items,
}: {
  label: string;
  activeCount: number;
  items: FilterItem[];
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setOpen(false));

  // Lock body scroll on mobile when open
  useEffect(() => {
    if (!open) return;
    const mq = window.matchMedia("(max-width: 639px)");
    if (mq.matches) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div ref={ref} className="relative flex-1">
      <button
        onClick={() => setOpen(!open)}
        className={`flex w-full items-center justify-between rounded-xl border px-4 py-2.5 text-sm transition-300 shadow-sm ${
          activeCount > 0
            ? "border-dorado/40 bg-dorado/5 text-dorado-dark"
            : "border-stone-200 bg-white text-ink-muted hover:border-stone-300"
        }`}
        aria-expanded={open}
      >
        <span>
          {label}
          {activeCount > 0 && (
            <span className="ml-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-dorado text-[10px] font-bold text-white px-1">
              {activeCount}
            </span>
          )}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDownIcon size={16} />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Mobile: backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="sm:hidden fixed inset-0 z-40 bg-black/30"
              onClick={() => setOpen(false)}
            />

            {/* Mobile: bottom sheet */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="sm:hidden fixed inset-x-0 bottom-0 z-50 max-h-[70vh] overflow-y-auto rounded-t-2xl bg-white p-4 pb-8 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-ink">{label}</h3>
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-lg p-1.5 text-ink-faint hover:bg-stone-100 transition-300"
                >
                  <CloseIcon size={18} />
                </button>
              </div>
              <div className="space-y-1">
                {items.map((item) => (
                  <FilterOption key={item.key} item={item} />
                ))}
              </div>
            </motion.div>

            {/* Desktop: dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
              className="hidden sm:block absolute left-0 right-0 top-full z-30 mt-1 max-h-72 overflow-y-auto rounded-xl border border-stone-200 bg-white p-2 shadow-lg"
            >
              {items.map((item) => (
                <FilterOption key={item.key} item={item} />
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function FilterOption({ item }: { item: FilterItem }) {
  return (
    <button
      onClick={item.onToggle}
      className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 sm:py-2 text-sm transition-300 ${
        item.isActive
          ? `${item.colors.bg} ${item.colors.text} font-medium`
          : "text-ink-muted hover:bg-stone-50"
      }`}
      aria-pressed={item.isActive}
    >
      <span className="flex items-center gap-2">
        <span
          className={`h-2 w-2 rounded-full ${
            item.isActive ? "bg-current" : "bg-stone-300"
          }`}
        />
        {item.label}
      </span>
      <span className="text-xs text-ink-faint">{item.count}</span>
    </button>
  );
}
