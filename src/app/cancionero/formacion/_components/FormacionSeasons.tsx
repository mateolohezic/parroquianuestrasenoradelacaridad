"use client";

import { FORMACION_SEASONS } from "@/constants/formacion";
import { SEASON_COLORS } from "@/interfaces";
import type { LiturgicalSeason } from "@/interfaces";
import FormacionAccordion, {
  OfficialText,
  Paragraphs,
} from "./FormacionAccordion";

const SEASON_TO_KEY: Record<string, LiturgicalSeason> = {
  "Adviento": "Adviento",
  "Navidad": "Navidad",
  "Cuaresma": "Cuaresma",
  "Domingo de Ramos": "Domingo de Ramos",
  "Jueves Santo": "Semana Santa",
  "Viernes Santo": "Semana Santa",
  "Vigilia Pascual": "Pascua",
  "Tiempo de Pascua": "Pascua",
  "Pentecostés": "Pentecostés",
  "Tiempo Ordinario": "Tiempo Ordinario",
};

export default function FormacionSeasons() {
  return (
    <div>
      <h2 className="mb-4 text-xl font-bold text-ink">
        Tiempos Litúrgicos
      </h2>
      <p className="mb-6 text-sm text-ink-muted">
        El año litúrgico organiza las celebraciones de la Iglesia. Cada tiempo
        tiene su carácter propio y sus criterios para el canto.
      </p>
      <div className="space-y-3">
        {FORMACION_SEASONS.map((section) => {
          const seasonKey = SEASON_TO_KEY[section.title];
          const colors = seasonKey ? SEASON_COLORS[seasonKey] : null;

          return (
            <FormacionAccordion key={section.id} title={section.title}>
              {colors && (
                <div className="mb-3">
                  <span
                    className={`inline-block rounded-lg px-2.5 py-1 text-xs font-medium ${colors.bg} ${colors.text}`}
                  >
                    Color litúrgico
                  </span>
                </div>
              )}
              <Paragraphs texts={section.content} />
              {section.officialText && (
                <OfficialText text={section.officialText} />
              )}
              {section.subsections?.map((sub) => (
                <div key={sub.id} className="mt-4">
                  <h4 className="mb-2 text-sm font-semibold text-dorado">
                    {sub.title}
                  </h4>
                  <Paragraphs texts={sub.content} />
                  {sub.officialText && (
                    <OfficialText text={sub.officialText} />
                  )}
                </div>
              ))}
            </FormacionAccordion>
          );
        })}
      </div>
    </div>
  );
}
