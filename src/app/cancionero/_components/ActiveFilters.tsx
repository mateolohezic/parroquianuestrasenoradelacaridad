"use client";

import { CloseIcon } from "@/icons";
import { SEASON_COLORS, MOMENT_COLORS } from "@/interfaces";
import type { LiturgicalSeason, MassMoment } from "@/interfaces";

interface Props {
  seasonFilters: LiturgicalSeason[];
  momentFilters: MassMoment[];
  onToggleSeason: (season: LiturgicalSeason) => void;
  onToggleMoment: (moment: MassMoment) => void;
  onClearAll: () => void;
}

export default function ActiveFilters({
  seasonFilters,
  momentFilters,
  onToggleSeason,
  onToggleMoment,
  onClearAll,
}: Props) {
  if (seasonFilters.length === 0 && momentFilters.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-xs text-ink-faint">Filtros activos:</span>

      {seasonFilters.map((season) => {
        const colors = SEASON_COLORS[season];
        return (
          <button
            key={season}
            onClick={() => onToggleSeason(season)}
            className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium transition-300 ${colors.bg} ${colors.text} hover:opacity-80`}
          >
            {season}
            <CloseIcon size={12} />
          </button>
        );
      })}

      {momentFilters.map((moment) => (
        <button
          key={moment}
          onClick={() => onToggleMoment(moment)}
          className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium transition-300 ${MOMENT_COLORS.bg} ${MOMENT_COLORS.text} hover:opacity-80`}
        >
          {moment}
          <CloseIcon size={12} />
        </button>
      ))}

      <button
        onClick={onClearAll}
        className="text-xs text-ink-faint hover:text-dorado transition-300 underline underline-offset-2"
      >
        Limpiar todo
      </button>
    </div>
  );
}
