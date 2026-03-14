"use client";

import { useState, useMemo, useCallback, useEffect, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Fuse from "fuse.js";
import { CANCIONES } from "@/constants/canciones";
import type { Song, LiturgicalSeason, MassMoment } from "@/interfaces";

type SortBy = "id" | "title" | "relevance";

const fuse = new Fuse(CANCIONES, {
  keys: [
    { name: "title", weight: 0.7 },
    { name: "lyrics", weight: 0.3 },
  ],
  threshold: 0.3,
  includeScore: true,
  minMatchCharLength: 2,
});

export function useFilteredSongs() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const isInitialized = useRef(false);
  const skipNextUrlSync = useRef(true);

  const [query, setQueryState] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [seasonFilters, setSeasonFilters] = useState<LiturgicalSeason[]>([]);
  const [momentFilters, setMomentFilters] = useState<MassMoment[]>([]);
  const [sortBy, setSortBy] = useState<SortBy>("id");

  // Initialize from URL params on mount
  useEffect(() => {
    if (isInitialized.current) return;
    isInitialized.current = true;

    const tiempos = searchParams.getAll("tiempo");
    const momentos = searchParams.getAll("momento");
    const q = searchParams.get("q") || "";

    if (tiempos.length > 0) {
      setSeasonFilters(tiempos as LiturgicalSeason[]);
    }
    if (momentos.length > 0) {
      setMomentFilters(momentos as MassMoment[]);
    }
    if (q) {
      setQueryState(q);
      setDebouncedQuery(q);
    }
  }, [searchParams]);

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query), 300);
    return () => clearTimeout(timer);
  }, [query]);

  // Sync state to URL
  useEffect(() => {
    if (!isInitialized.current) return;
    if (skipNextUrlSync.current) {
      skipNextUrlSync.current = false;
      return;
    }

    const params = new URLSearchParams();
    if (debouncedQuery) params.set("q", debouncedQuery);
    seasonFilters.forEach((s) => params.append("tiempo", s));
    momentFilters.forEach((m) => params.append("momento", m));

    const newUrl = params.toString()
      ? `/cancionero?${params.toString()}`
      : "/cancionero";

    router.replace(newUrl, { scroll: false });
  }, [debouncedQuery, seasonFilters, momentFilters, router]);

  const setQuery = useCallback((q: string) => {
    setQueryState(q);
    if (q) setSortBy("relevance");
    else setSortBy("id");
  }, []);

  const toggleSeason = useCallback((season: LiturgicalSeason) => {
    setSeasonFilters((prev) =>
      prev.includes(season)
        ? prev.filter((s) => s !== season)
        : [...prev, season]
    );
  }, []);

  const toggleMoment = useCallback((moment: MassMoment) => {
    setMomentFilters((prev) =>
      prev.includes(moment)
        ? prev.filter((m) => m !== moment)
        : [...prev, moment]
    );
  }, []);

  const clearFilters = useCallback(() => {
    setSeasonFilters([]);
    setMomentFilters([]);
    setQueryState("");
    setDebouncedQuery("");
    setSortBy("id");
  }, []);

  const filteredSongs = useMemo(() => {
    let results: Song[];

    // Step 1: fuzzy search or full list
    if (debouncedQuery) {
      results = fuse.search(debouncedQuery).map((r) => r.item);
    } else {
      results = [...CANCIONES];
    }

    // Step 2: filter by liturgical season
    if (seasonFilters.length > 0) {
      results = results.filter(
        (song) =>
          song.liturgicalSeasons.includes("Comodín") ||
          song.liturgicalSeasons.some((s) => seasonFilters.includes(s))
      );
    }

    // Step 3: filter by mass moment
    if (momentFilters.length > 0) {
      results = results.filter((song) =>
        song.massMoments.some((m) => momentFilters.includes(m))
      );
    }

    // Step 4: sort (only if not searching — search already returns by relevance)
    if (!debouncedQuery || sortBy !== "relevance") {
      if (sortBy === "title") {
        results.sort((a, b) => a.title.localeCompare(b.title, "es"));
      } else if (sortBy === "id") {
        results.sort((a, b) => a.id - b.id);
      }
    }

    return results;
  }, [debouncedQuery, seasonFilters, momentFilters, sortBy]);

  return {
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
    totalCount: CANCIONES.length,
  };
}
