"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FileTextIcon, HeartIcon } from "@/icons";
import { SEASON_COLORS, MOMENT_COLORS } from "@/interfaces";
import type { Song } from "@/interfaces";
import EmptyState from "./EmptyState";

type SortBy = "id" | "title" | "relevance";

interface Props {
  songs: Song[];
  sortBy: SortBy;
  onSortChange: (sort: SortBy) => void;
  onClearFilters: () => void;
  totalCount: number;
  showFavorites: boolean;
  onToggleShowFavorites: () => void;
  favoritesCount: number;
  isFavorite: (id: number) => boolean;
  onToggleFavorite: (id: number) => void;
}

export default function SongList({
  songs,
  sortBy,
  onSortChange,
  onClearFilters,
  totalCount,
  showFavorites,
  onToggleShowFavorites,
  favoritesCount,
  isFavorite,
  onToggleFavorite,
}: Props) {
  if (songs.length === 0) {
    return <EmptyState onClearFilters={onClearFilters} />;
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-4 flex items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <p className="text-sm text-ink-faint" aria-live="polite">
            Mostrando{" "}
            <span className="font-semibold text-ink">{songs.length}</span> de{" "}
            <span className="font-semibold text-ink">{totalCount}</span>{" "}
            canciones
          </p>
          {favoritesCount > 0 && (
            <button
              onClick={onToggleShowFavorites}
              className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-300 ${
                showFavorites
                  ? "bg-red-50 text-red-600 ring-1 ring-red-200"
                  : "bg-stone-100 text-ink-faint hover:text-red-500"
              }`}
              aria-pressed={showFavorites}
            >
              <HeartIcon size={12} className={showFavorites ? "fill-current" : ""} />
              {favoritesCount}
            </button>
          )}
        </div>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value as SortBy)}
          className="rounded-lg border border-stone-200 bg-white px-3 py-1.5 text-xs text-ink-muted transition-300 focus:border-dorado focus:outline-none shadow-sm"
          aria-label="Ordenar canciones"
        >
          <option value="id">Por número</option>
          <option value="title">Por título (A-Z)</option>
          <option value="relevance">Por relevancia</option>
        </select>
      </div>

      {/* Track List */}
      <div className="rounded-xl border border-stone-200 bg-white shadow-sm overflow-hidden divide-y divide-stone-100">
        {songs.map((song, i) => (
          <SongTrackItem
            key={song.id}
            song={song}
            index={i}
            isFavorite={isFavorite(song.id)}
            onToggleFavorite={() => onToggleFavorite(song.id)}
          />
        ))}
      </div>
    </div>
  );
}

function SongTrackInfo({ song, hasLyrics }: { song: Song; hasLyrics: boolean }) {
  return (
    <>
      {/* Track number */}
      <span className={`flex h-8 min-w-8 items-center justify-center rounded-lg bg-stone-100 text-xs font-bold transition-300 ${hasLyrics ? "text-dorado group-hover:bg-dorado group-hover:text-white" : "text-stone-400"}`}>
        {String(song.id).padStart(3, "0")}
      </span>

      {/* Title + badges */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h3 className={`text-sm font-medium transition-300 truncate ${hasLyrics ? "text-ink group-hover:text-dorado" : "text-ink-faint"}`}>
            {song.title}
          </h3>
          {hasLyrics ? (
            <FileTextIcon size={12} className="text-dorado/40 shrink-0" title="Letra disponible" />
          ) : (
            <span className="shrink-0 text-[10px] text-ink-faint/60 italic">sin letra</span>
          )}
        </div>

        {/* Season + moment pills (mobile: hidden, desktop: visible) */}
        <div className="hidden sm:flex flex-wrap gap-1 mt-1">
          {song.liturgicalSeasons.slice(0, 3).map((season) => {
            const colors = SEASON_COLORS[season];
            return (
              <span
                key={season}
                className={`rounded px-1.5 py-0.5 text-[10px] font-medium ${colors.bg} ${colors.text}`}
              >
                {season}
              </span>
            );
          })}
          {song.liturgicalSeasons.length > 3 && (
            <span className="rounded px-1.5 py-0.5 text-[10px] font-medium bg-stone-100 text-ink-faint">
              +{song.liturgicalSeasons.length - 3}
            </span>
          )}
          {song.massMoments.slice(0, 2).map((moment) => (
            <span
              key={moment}
              className={`rounded px-1.5 py-0.5 text-[10px] font-medium ${MOMENT_COLORS.bg} ${MOMENT_COLORS.text}`}
            >
              {moment}
            </span>
          ))}
          {song.massMoments.length > 2 && (
            <span className="rounded px-1.5 py-0.5 text-[10px] font-medium bg-stone-100 text-ink-faint">
              +{song.massMoments.length - 2}
            </span>
          )}
        </div>
      </div>

      {/* Arrow indicator — only for songs with lyrics */}
      {hasLyrics && (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-stone-300 group-hover:text-dorado shrink-0 transition-300"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      )}
    </>
  );
}

function SongTrackItem({
  song,
  index,
  isFavorite,
  onToggleFavorite,
}: {
  song: Song;
  index: number;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: Math.min(index * 0.02, 0.5) }}
      className="group flex items-center"
    >
      {/* Favorite button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          onToggleFavorite();
        }}
        className={`shrink-0 pl-3 pr-1 py-3 sm:pl-4 transition-300 ${
          isFavorite
            ? "text-red-400"
            : "text-stone-200 hover:text-red-300"
        }`}
        aria-label={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
        aria-pressed={isFavorite}
      >
        <HeartIcon size={14} className={isFavorite ? "fill-current" : ""} />
      </button>

      {song.lyrics ? (
        <Link
          href={`/cancionero/${song.id}`}
          className="flex flex-1 items-center gap-3 pr-4 py-3 sm:pr-5 transition-300 hover:bg-dorado/5 min-w-0"
        >
          <SongTrackInfo song={song} hasLyrics />
        </Link>
      ) : (
        <div className="flex flex-1 items-center gap-3 pr-4 py-3 sm:pr-5 min-w-0 cursor-default">
          <SongTrackInfo song={song} hasLyrics={false} />
        </div>
      )}
    </motion.div>
  );
}
