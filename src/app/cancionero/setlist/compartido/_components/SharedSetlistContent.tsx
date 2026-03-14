"use client";

import { useMemo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeftIcon, MusicIcon } from "@/icons";
import { CANCIONES } from "@/constants/canciones";
import type { Song } from "@/interfaces";

interface ParsedSlot {
  label: string;
  songs: Song[];
}

function parseSetlistParam(raw: string): ParsedSlot[] {
  if (!raw) return [];
  return raw.split(";").map((segment) => {
    const colonIdx = segment.indexOf(":");
    if (colonIdx === -1) return { label: segment, songs: [] };
    const label = decodeURIComponent(segment.slice(0, colonIdx));
    const ids = segment
      .slice(colonIdx + 1)
      .split(",")
      .map(Number)
      .filter((n) => !isNaN(n) && n > 0);
    const songs = ids
      .map((id) => CANCIONES.find((s) => s.id === id))
      .filter((s): s is Song => s != null);
    return { label, songs };
  });
}

export default function SharedSetlistContent() {
  const searchParams = useSearchParams();
  const raw = searchParams.get("s") || "";

  const slots = useMemo(() => parseSetlistParam(raw), [raw]);

  if (slots.length === 0) {
    return (
      <section className="mx-auto w-full max-w-4xl px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 py-20 text-center">
          <MusicIcon size={40} className="text-stone-300" />
          <p className="text-ink-muted">
            No se encontró un setlist válido en el enlace.
          </p>
          <Link
            href="/cancionero/setlist"
            className="text-sm font-medium text-dorado hover:underline"
          >
            Ir al armador de setlist
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto w-full max-w-4xl px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Link
          href="/cancionero/setlist"
          className="mb-4 inline-flex items-center gap-2 text-sm text-ink-muted hover:text-dorado transition-300"
        >
          <ArrowLeftIcon size={16} />
          Volver al setlist
        </Link>
        <h1 className="text-3xl font-bold text-ink sm:text-4xl">
          Setlist{" "}
          <span className="text-dorado">para la Misa</span>
        </h1>
        <p className="mt-2 text-sm text-ink-muted">
          {slots.length} momentos · {slots.reduce((n, s) => n + s.songs.length, 0)} canciones
        </p>
      </motion.div>

      {/* Slots with lyrics */}
      <div className="space-y-8">
        {slots.map((slot, slotIdx) => (
          <motion.div
            key={slotIdx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: slotIdx * 0.05 }}
          >
            {/* Moment title */}
            <h2 className="mb-3 text-lg font-bold text-ink border-b border-stone-200 pb-2">
              {slot.label}
            </h2>

            {slot.songs.length === 0 ? (
              <p className="text-sm text-ink-faint italic">
                Sin canciones asignadas
              </p>
            ) : (
              <div className="space-y-4">
                {slot.songs.map((song) => (
                  <div
                    key={song.id}
                    className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm sm:p-5"
                  >
                    {/* Song header */}
                    <div className="mb-3 flex items-center gap-2">
                      <span className="flex h-7 min-w-7 items-center justify-center rounded-lg bg-dorado/10 text-xs font-bold text-dorado">
                        {song.id}
                      </span>
                      <h3 className="text-base font-semibold text-ink">
                        {song.title}
                      </h3>
                    </div>

                    {/* Lyrics */}
                    {song.lyrics ? (
                      <div className="whitespace-pre-line text-sm leading-relaxed text-ink-light">
                        {song.lyrics}
                      </div>
                    ) : (
                      <p className="text-sm text-ink-faint italic">
                        Letra no disponible
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
