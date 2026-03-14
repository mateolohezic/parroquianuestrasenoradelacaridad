export interface Song {
  id: number;
  title: string;
  lyrics: string | null;
  liturgicalSeasons: LiturgicalSeason[];
  massMoments: MassMoment[];
}

export type LiturgicalSeason =
  | "Tiempo Ordinario"
  | "Cuaresma"
  | "Adviento"
  | "Navidad"
  | "Pascua"
  | "Semana Santa"
  | "Tiempo Pascual"
  | "Pentecostés"
  | "Días festivos (no Cuaresma)"
  | "Domingo de Ramos"
  | "Comodín";

export type MassMoment =
  | "Entrada"
  | "Ofertorio"
  | "Comunión"
  | "Postcomunión"
  | "Salida"
  | "Adoración"
  | "Liturgia de la Palabra"
  | "Lavatorio de pies"
  | "Villancico"
  | "Adoración al niño"
  | "Adoración (Espíritu Santo)"
  | "Peregrinación";

export const ALL_LITURGICAL_SEASONS: LiturgicalSeason[] = [
  "Tiempo Ordinario",
  "Cuaresma",
  "Adviento",
  "Navidad",
  "Pascua",
  "Semana Santa",
  "Tiempo Pascual",
  "Pentecostés",
  "Días festivos (no Cuaresma)",
  "Domingo de Ramos",
  "Comodín",
];

export const ALL_MASS_MOMENTS: MassMoment[] = [
  "Entrada",
  "Ofertorio",
  "Comunión",
  "Postcomunión",
  "Salida",
  "Adoración",
  "Liturgia de la Palabra",
  "Lavatorio de pies",
  "Villancico",
  "Adoración al niño",
  "Adoración (Espíritu Santo)",
  "Peregrinación",
];

export const SEASON_COLORS: Record<LiturgicalSeason, { text: string; bg: string }> = {
  "Tiempo Ordinario": { text: "text-green-700", bg: "bg-green-50" },
  "Cuaresma": { text: "text-violet-700", bg: "bg-violet-50" },
  "Adviento": { text: "text-blue-700", bg: "bg-blue-50" },
  "Navidad": { text: "text-amber-700", bg: "bg-amber-50" },
  "Pascua": { text: "text-yellow-700", bg: "bg-yellow-50" },
  "Semana Santa": { text: "text-red-700", bg: "bg-red-50" },
  "Tiempo Pascual": { text: "text-yellow-700", bg: "bg-yellow-50" },
  "Pentecostés": { text: "text-red-700", bg: "bg-red-50" },
  "Días festivos (no Cuaresma)": { text: "text-pink-700", bg: "bg-pink-50" },
  "Domingo de Ramos": { text: "text-rose-700", bg: "bg-rose-50" },
  "Comodín": { text: "text-stone-600", bg: "bg-stone-100" },
};

export const MOMENT_COLORS = { text: "text-sky-700", bg: "bg-sky-50" };
