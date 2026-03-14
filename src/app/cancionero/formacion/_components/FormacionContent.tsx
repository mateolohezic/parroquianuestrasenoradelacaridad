"use client";

import { motion } from "framer-motion";
import CancioneroNav from "../../_components/CancioneroNav";
import {
  FORMACION_INTRO,
  FORMACION_SECTIONS,
  FORMACION_PRAYER,
  FORMACION_FINAL_MESSAGE,
} from "@/constants/formacion";
import FormacionAccordion, {
  OfficialText,
  Paragraphs,
} from "./FormacionAccordion";
import FormacionMoments from "./FormacionMoments";
import FormacionSeasons from "./FormacionSeasons";

export default function FormacionContent() {
  return (
    <section className="mx-auto w-full max-w-4xl px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-ink sm:text-4xl">
              Formación para{" "}
              <span className="text-dorado">Coro</span>
            </h1>
            <p className="mt-2 text-sm text-ink-muted">
              Guía de formación litúrgica para el coro parroquial
            </p>
          </div>
          <CancioneroNav />
        </div>

        {/* Intro quote */}
        <div className="rounded-2xl border border-dorado/20 bg-dorado/5 p-6 sm:p-8">
          <blockquote className="mb-4 text-center text-xl font-semibold italic text-dorado sm:text-2xl">
            &ldquo;{FORMACION_INTRO.quote}&rdquo;
          </blockquote>
          <div className="space-y-3">
            {FORMACION_INTRO.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-sm leading-relaxed text-ink-muted"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </motion.div>

      {/* General sections */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="space-y-8"
      >
        {/* Formation sections */}
        <div className="space-y-3">
          {FORMACION_SECTIONS.map((section) => (
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

        {/* Moments of the Mass */}
        <FormacionMoments />

        {/* Liturgical Seasons */}
        <FormacionSeasons />

        {/* Final message */}
        <div className="rounded-xl border border-stone-200 bg-stone-50 px-5 py-4">
          <p className="text-sm leading-relaxed text-ink-muted">
            {FORMACION_FINAL_MESSAGE}
          </p>
        </div>

        {/* Prayer */}
        <div className="rounded-2xl border border-dorado/20 bg-dorado/5 p-6 sm:p-8">
          <h2 className="mb-4 text-center text-lg font-bold text-dorado">
            Oración del Coro
          </h2>
          <p className="text-center text-sm italic leading-relaxed text-ink-muted">
            {FORMACION_PRAYER}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
