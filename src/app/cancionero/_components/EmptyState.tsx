"use client";

import { MusicIcon } from "@/icons";

interface Props {
  onClearFilters: () => void;
}

export default function EmptyState({ onClearFilters }: Props) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="mb-4 rounded-full bg-stone-100 p-6">
        <MusicIcon size={32} className="text-ink-faint" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-ink">
        No se encontraron canciones
      </h3>
      <p className="mb-6 max-w-sm text-sm text-ink-muted">
        Intentá con otros filtros o una búsqueda diferente
      </p>
      <button
        onClick={onClearFilters}
        className="rounded-lg border border-dorado/30 px-4 py-2 text-sm font-medium text-dorado transition-300 hover:bg-dorado/10"
      >
        Limpiar filtros
      </button>
    </div>
  );
}
