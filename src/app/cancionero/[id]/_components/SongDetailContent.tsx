"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeftIcon,
  CopyIcon,
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  WhatsAppIcon,
  HeartIcon,
} from "@/icons";
import { useFavorites } from "@/hooks";
import { SEASON_COLORS, MOMENT_COLORS } from "@/interfaces";
import type { Song, LiturgicalSeason, MassMoment } from "@/interfaces";
import { CANCIONES } from "@/constants/canciones";

function getRelatedBySeason(song: Song): { season: LiturgicalSeason; songs: Song[] }[] {
  const results: { season: LiturgicalSeason; songs: Song[] }[] = [];
  for (const season of song.liturgicalSeasons) {
    if (season === "Comodín") continue;
    const related = CANCIONES.filter(
      (s) => s.id !== song.id && s.liturgicalSeasons.includes(season)
    ).slice(0, 5);
    if (related.length > 0) {
      results.push({ season, songs: related });
    }
    if (results.length >= 2) break;
  }
  return results;
}

function getRelatedByMoment(song: Song): { moment: MassMoment; songs: Song[] }[] {
  const results: { moment: MassMoment; songs: Song[] }[] = [];
  for (const moment of song.massMoments) {
    const related = CANCIONES.filter(
      (s) => s.id !== song.id && s.massMoments.includes(moment)
    ).slice(0, 5);
    if (related.length > 0) {
      results.push({ moment, songs: related });
    }
    if (results.length >= 1) break;
  }
  return results;
}

function highlightText(text: string, query: string) {
  if (!query || query.length < 2) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${escaped})`, "gi");
  const parts = text.split(regex);
  const lowerQuery = query.toLowerCase();
  return parts.map((part, i) =>
    part.toLowerCase() === lowerQuery ? (
      <mark key={i} className="bg-dorado/20 text-ink rounded px-0.5">
        {part}
      </mark>
    ) : (
      part
    )
  );
}

export default function SongDetailContent({ song }: { song: Song }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const [copied, setCopied] = useState(false);
  const copyTimeoutRef = useRef<ReturnType<typeof setTimeout>>(null);
  const { toggleFavorite, isFavorite } = useFavorites();
  const fav = isFavorite(song.id);

  const relatedBySeasons = useMemo(() => getRelatedBySeason(song), [song]);
  const relatedByMoments = useMemo(() => getRelatedByMoment(song), [song]);

  // Prev/Next navigation
  const currentIndex = CANCIONES.findIndex((s) => s.id === song.id);
  const prevSong = currentIndex > 0 ? CANCIONES[currentIndex - 1] : null;
  const nextSong = currentIndex < CANCIONES.length - 1 ? CANCIONES[currentIndex + 1] : null;
  const navQuerySuffix = query ? `?q=${encodeURIComponent(query)}` : "";

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
    };
  }, []);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
      copyTimeoutRef.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: do nothing
    }
  };

  const handleShare = () => {
    const text = song.lyrics
      ? `${song.title}\n\n${song.lyrics.slice(0, 300)}${song.lyrics.length > 300 ? "..." : ""}`
      : song.title;
    const url = window.location.href;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${text}\n\n${url}`)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/cancionero");
    }
  };

  return (
    <section className="mx-auto w-full max-w-3xl px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      {/* Back link */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-8"
      >
        <button
          onClick={handleBack}
          className="inline-flex items-center gap-2 text-dorado text-sm font-medium hover:gap-3 transition-all duration-300"
        >
          <ArrowLeftIcon size={16} />
          Volver al cancionero
        </button>
      </motion.div>

      {/* Song header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="flex h-10 min-w-10 items-center justify-center rounded-xl bg-dorado text-sm font-bold text-white">
                #{String(song.id).padStart(3, "0")}
              </span>
            </div>
            <h1 className="text-2xl font-bold text-ink sm:text-3xl">
              {song.title}
            </h1>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={() => toggleFavorite(song.id)}
              className={`rounded-lg border p-2.5 transition-300 shadow-sm ${
                fav
                  ? "border-red-200 text-red-400"
                  : "border-stone-200 text-ink-faint hover:border-red-200 hover:text-red-400"
              }`}
              aria-label={fav ? "Quitar de favoritos" : "Agregar a favoritos"}
            >
              <HeartIcon size={16} className={fav ? "fill-current" : ""} />
            </button>
            <button
              onClick={handleShare}
              className="rounded-lg border border-stone-200 p-2.5 text-green-600/60 transition-300 hover:border-green-300 hover:text-green-600 shadow-sm"
              aria-label="Compartir por WhatsApp"
              title="Compartir por WhatsApp"
            >
              <WhatsAppIcon size={16} />
            </button>
            <button
              onClick={handleCopyLink}
              className={`rounded-lg border p-2.5 transition-300 shadow-sm ${
                copied
                  ? "border-green-300 text-green-600"
                  : "border-stone-200 text-ink-faint hover:border-dorado/30 hover:text-dorado"
              }`}
              aria-label="Copiar enlace"
              title={copied ? "Enlace copiado" : "Copiar enlace"}
            >
              {copied ? <CheckIcon size={16} /> : <CopyIcon size={16} />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Categories — clickable tags */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="mb-8 space-y-3"
      >
        {song.liturgicalSeasons.length > 0 && (
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-ink-faint mb-2">
              Tiempos Litúrgicos
            </p>
            <div className="flex flex-wrap gap-1.5">
              {song.liturgicalSeasons.map((season) => {
                const colors = SEASON_COLORS[season];
                return (
                  <Link
                    key={season}
                    href={`/cancionero?tiempo=${encodeURIComponent(season)}`}
                    className={`rounded-lg px-2.5 py-1 text-xs font-medium ${colors.bg} ${colors.text} hover:ring-1 hover:ring-current transition-300`}
                  >
                    {season}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
        {song.massMoments.length > 0 && (
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-ink-faint mb-2">
              Momentos de la Misa
            </p>
            <div className="flex flex-wrap gap-1.5">
              {song.massMoments.map((moment) => (
                <Link
                  key={moment}
                  href={`/cancionero?momento=${encodeURIComponent(moment)}`}
                  className={`rounded-lg px-2.5 py-1 text-xs font-medium ${MOMENT_COLORS.bg} ${MOMENT_COLORS.text} hover:ring-1 hover:ring-current transition-300`}
                >
                  {moment}
                </Link>
              ))}
            </div>
          </div>
        )}
      </motion.div>

      {/* Lyrics */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="rounded-xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm"
      >
        {song.lyrics ? (
          <div className="whitespace-pre-line text-sm leading-relaxed text-ink-light">
            {query ? highlightText(song.lyrics, query) : song.lyrics}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="mb-3 rounded-full bg-stone-100 p-4">
              <MusicNoteIcon />
            </div>
            <p className="text-sm text-ink-faint">
              Letra próximamente
            </p>
          </div>
        )}
      </motion.div>

      {/* Prev/Next navigation */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.25 }}
        className="mt-6 flex items-center justify-between gap-4"
      >
        {prevSong ? (
          <Link
            href={`/cancionero/${prevSong.id}${navQuerySuffix}`}
            className="group flex items-center gap-2 rounded-lg border border-stone-200 px-3 py-2 text-sm text-ink-muted hover:border-dorado/30 hover:text-dorado transition-300 shadow-sm min-w-0"
          >
            <ChevronLeftIcon size={16} className="shrink-0" />
            <span className="truncate hidden sm:inline">{prevSong.title}</span>
            <span className="sm:hidden">Anterior</span>
          </Link>
        ) : (
          <div />
        )}
        {nextSong ? (
          <Link
            href={`/cancionero/${nextSong.id}${navQuerySuffix}`}
            className="group flex items-center gap-2 rounded-lg border border-stone-200 px-3 py-2 text-sm text-ink-muted hover:border-dorado/30 hover:text-dorado transition-300 shadow-sm min-w-0"
          >
            <span className="truncate hidden sm:inline">{nextSong.title}</span>
            <span className="sm:hidden">Siguiente</span>
            <ChevronRightIcon size={16} className="shrink-0" />
          </Link>
        ) : (
          <div />
        )}
      </motion.div>

      {/* Related songs */}
      {(relatedBySeasons.length > 0 || relatedByMoments.length > 0) && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-10 space-y-8"
        >
          {relatedBySeasons.map(({ season, songs }) => {
            const colors = SEASON_COLORS[season];
            return (
              <div key={season}>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-ink flex items-center gap-2">
                    <span className={`inline-block h-2 w-2 rounded-full ${colors.bg} ring-1 ring-current ${colors.text}`} />
                    Más canciones de {season}
                  </h3>
                  <Link
                    href={`/cancionero?tiempo=${encodeURIComponent(season)}`}
                    className="text-xs text-dorado hover:underline"
                  >
                    Ver todas
                  </Link>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white shadow-sm overflow-hidden divide-y divide-stone-100">
                  {songs.map((s) => (
                    <RelatedSongRow key={s.id} song={s} />
                  ))}
                </div>
              </div>
            );
          })}

          {relatedByMoments.map(({ moment, songs }) => (
            <div key={moment}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-ink flex items-center gap-2">
                  <span className={`inline-block h-2 w-2 rounded-full ${MOMENT_COLORS.bg} ring-1 ring-current ${MOMENT_COLORS.text}`} />
                  Más canciones para {moment}
                </h3>
                <Link
                  href={`/cancionero?momento=${encodeURIComponent(moment)}`}
                  className="text-xs text-dorado hover:underline"
                >
                  Ver todas
                </Link>
              </div>
              <div className="rounded-xl border border-stone-200 bg-white shadow-sm overflow-hidden divide-y divide-stone-100">
                {songs.map((s) => (
                  <RelatedSongRow key={s.id} song={s} />
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      )}

      {/* Copied toast */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 rounded-full bg-ink px-4 py-2 text-sm text-white shadow-lg flex items-center gap-2"
          >
            <CheckIcon size={14} />
            Enlace copiado
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function RelatedSongRow({ song }: { song: Song }) {
  return (
    <Link
      href={`/cancionero/${song.id}`}
      className="group flex items-center gap-3 px-4 py-2.5 transition-300 hover:bg-dorado/5"
    >
      <span className="flex h-6 min-w-6 items-center justify-center rounded text-[10px] font-bold text-dorado bg-stone-100 group-hover:bg-dorado group-hover:text-white transition-300">
        {song.id}
      </span>
      <span className="text-sm text-ink-muted group-hover:text-dorado transition-300 truncate">
        {song.title}
      </span>
    </Link>
  );
}

function MusicNoteIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-ink-faint"
    >
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}
