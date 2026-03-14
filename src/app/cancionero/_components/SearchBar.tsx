"use client";

import { useRef } from "react";
import { SearchIcon, CloseIcon } from "@/icons";

interface Props {
  query: string;
  onQueryChange: (q: string) => void;
}

export default function SearchBar({ query, onQueryChange }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="relative">
      <SearchIcon
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-faint"
      />
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder="Buscar por título o letra..."
        className="w-full rounded-xl border border-stone-200 bg-white py-3 pl-11 pr-10 text-sm text-ink placeholder:text-ink-faint transition-300 focus:border-dorado focus:outline-none focus:ring-2 focus:ring-dorado/20 shadow-sm"
        aria-label="Buscar canciones"
      />
      {query && (
        <button
          onClick={() => {
            onQueryChange("");
            inputRef.current?.focus();
          }}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-ink-faint hover:text-ink transition-300"
          aria-label="Limpiar búsqueda"
        >
          <CloseIcon size={16} />
        </button>
      )}
    </div>
  );
}
