"use client";

import { FORMACION_MOMENTS } from "@/constants/formacion";
import FormacionAccordion, {
  OfficialText,
  Paragraphs,
} from "./FormacionAccordion";

export default function FormacionMoments() {
  return (
    <div>
      <h2 className="mb-4 text-xl font-bold text-ink">
        Momentos de la Misa
      </h2>
      <p className="mb-6 text-sm text-ink-muted">
        Cada momento de la misa tiene su propósito y sus criterios para la
        selección de cantos. Conocerlos nos ayuda a servir mejor.
      </p>
      <div className="space-y-3">
        {FORMACION_MOMENTS.map((section) => (
          <FormacionAccordion key={section.id} title={section.title}>
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
        ))}
      </div>
    </div>
  );
}
