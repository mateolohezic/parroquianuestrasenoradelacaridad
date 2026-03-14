"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useFilteredSongs, useFavorites } from "@/hooks";
import CancioneroNav from "./CancioneroNav";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import ActiveFilters from "./ActiveFilters";
import SongList from "./SongList";

export default function CancioneroContent() {
  const {
    filteredSongs,
    query,
    setQuery,
    seasonFilters,
    momentFilters,
    toggleSeason,
    toggleMoment,
    clearFilters,
    sortBy,
    setSortBy,
    totalCount,
  } = useFilteredSongs();

  const { favorites, toggleFavorite, isFavorite } = useFavorites();
  const [showFavorites, setShowFavorites] = useState(false);

  const displayedSongs = showFavorites
    ? filteredSongs.filter((s) => favorites.includes(s.id))
    : filteredSongs;

  // Scroll to top when filters change
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [seasonFilters, momentFilters]);

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
              Cancionero{" "}
              <span className="text-dorado">Litúrgico</span>
            </h1>
            <p className="mt-2 text-sm text-ink-muted">
              Canciones para la liturgia parroquial
            </p>
          </div>
          <CancioneroNav />
        </div>

        {/* Search */}
        <SearchBar query={query} onQueryChange={setQuery} />
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="mb-6 space-y-3"
      >
        <FilterBar
          seasonFilters={seasonFilters}
          momentFilters={momentFilters}
          onToggleSeason={toggleSeason}
          onToggleMoment={toggleMoment}
        />
        <ActiveFilters
          seasonFilters={seasonFilters}
          momentFilters={momentFilters}
          onToggleSeason={toggleSeason}
          onToggleMoment={toggleMoment}
          onClearAll={clearFilters}
        />
      </motion.div>

      {/* Song List */}
      <SongList
        songs={displayedSongs}
        sortBy={sortBy}
        onSortChange={setSortBy}
        onClearFilters={() => { clearFilters(); setShowFavorites(false); }}
        totalCount={totalCount}
        showFavorites={showFavorites}
        onToggleShowFavorites={() => setShowFavorites((v) => !v)}
        favoritesCount={favorites.length}
        isFavorite={isFavorite}
        onToggleFavorite={toggleFavorite}
      />
    </section>
  );
}
