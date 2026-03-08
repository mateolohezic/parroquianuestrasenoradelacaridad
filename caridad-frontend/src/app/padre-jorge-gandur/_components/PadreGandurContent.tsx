"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  HeartIcon,
  ArrowRightIcon,
  BuildingIcon,
  BookOpenIcon,
  UsersIcon,
  StarIcon,
  ChurchIcon,
  MusicIcon,
} from "@/icons";
import { SectionHeading, FloatingCrosses } from "@/components";
import { NOTAS, type Nota } from "@/constants/notas";
import padreGandur from "@/assets/photos/padre-gandur.webp";

/* ────────────────── helpers ────────────────── */

function getNotasByCategory(category: Nota["category"]) {
  return NOTAS.filter((n) => n.category === category);
}

/* ────────────────── sub-components ────────────────── */

function NotaCard({ nota, delay = 0 }: { nota: Nota; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -4 }}
    >
      <Link
        href={`/padre-jorge-gandur/${nota.slug}`}
        className="group block p-6 rounded-2xl bg-surface border border-dorado/10 hover:border-dorado/30 transition-500 h-full"
      >
        {nota.images[0] && (
          <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
            <Image
              src={`/photos/${nota.images[0]}`}
              alt={nota.title}
              fill
              className="object-cover no-interact group-hover:scale-105 transition-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-stone-950/60 via-transparent to-transparent" />
          </div>
        )}
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-dorado transition-300 line-clamp-2">
          {nota.title}
        </h3>
        {nota.author && (
          <p className="text-text-secondary text-sm mb-3">{nota.author}</p>
        )}
        <p className="text-text-tertiary text-sm leading-relaxed line-clamp-3 mb-4">
          {nota.content[0]}
        </p>
        <span className="inline-flex items-center gap-2 text-dorado text-sm font-medium group-hover:gap-3 transition-all duration-300">
          Leer más <ArrowRightIcon size={14} />
        </span>
      </Link>
    </motion.div>
  );
}

function CategorySection({
  eyebrow,
  title,
  description,
  icon,
  notas,
  bgClass = "",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  icon: React.ReactNode;
  notas: Nota[];
  bgClass?: string;
}) {
  return (
    <section className={`relative py-32 px-4 overflow-hidden ${bgClass}`}>
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="text-dorado/30" aria-hidden>
            {icon}
          </div>
        </motion.div>

        <div
          className={`grid gap-8 ${
            notas.length === 1
              ? "grid-cols-1 max-w-2xl mx-auto"
              : notas.length === 2
                ? "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto"
                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {notas.map((nota, i) => (
            <NotaCard key={nota.slug} nota={nota} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────── main page ────────────────── */

export default function PadreGandurContent() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useSpring(useTransform(heroProgress, [0, 1], [0, 150]), {
    stiffness: 100,
    damping: 30,
  });
  const heroOpacity = useTransform(heroProgress, [0, 0.7], [1, 0]);

  const obrasNotas = getNotasByCategory("obras");
  const vidaNotas = getNotasByCategory("vida");
  const testimonioNotas = getNotasByCategory("testimonios");
  const mariaNotas = getNotasByCategory("maria");
  const gruposNotas = getNotasByCategory("grupos");

  return (
    <div className="bg-stone-950">
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section
        ref={heroRef}
        className="relative h-svh flex items-center justify-center overflow-hidden"
      >
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <Image
            src={padreGandur}
            alt="Padre Jorge Antonio Gandur"
            fill
            className="object-cover object-top no-interact"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-b from-stone-950/60 via-stone-950/30 to-stone-950" />
        </motion.div>

        <FloatingCrosses count={8} />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <motion.span
              className="h-px bg-dorado/50"
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 1, delay: 0.8 }}
            />
            <span className="text-dorado text-xs font-semibold uppercase tracking-[6px]">
              En memoria
            </span>
            <motion.span
              className="h-px bg-dorado/50"
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 1, delay: 0.8 }}
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.95] mb-6"
          >
            <span className="text-white">Padre Jorge</span>
            <br />
            <span className="bg-linear-to-r from-dorado to-dorado-light bg-clip-text text-transparent">
              Gandur
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-text-light text-lg sm:text-xl font-light"
          >
            1953 — 2013
          </motion.p>
        </motion.div>
      </section>

      {/* ═══════════════════ INTRO QUOTE ═══════════════════ */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-dorado/3 blur-[100px] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <HeartIcon
              size={36}
              className="text-dorado mx-auto mb-8 animate-float"
              aria-hidden
            />

            <h2 className="text-3xl sm:text-4xl font-black text-white mb-8">
              Primer Párroco de Nuestra Señora de la Caridad
            </h2>

            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative bg-surface rounded-2xl p-8 sm:p-12 border border-dorado/10"
            >
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-dorado/30 rounded-tl-lg" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-dorado/30 rounded-br-lg" />

              <p className="text-text-light text-base sm:text-lg font-light leading-relaxed italic">
                &ldquo;En el año 1976, cuando fui al seminario de Tucumán a
                averiguar los requisitos para ingresar, me encontré con un
                joven de sotana que me recibió con mucha alegría, como quien
                va a comprarle algo, y él por su parte me ofrecía su
                maravillosa mercancía. La impresión que tuve del entonces
                seminarista, Jorge Antonio Gandur, fue de estar ante un joven
                con un espíritu arrollador que, a mi parecer era, ni más ni
                menos que el de un corazón enamorado de Jesús.&rdquo;
              </p>
              <footer className="mt-6 text-dorado text-sm font-medium">
                — Pbro. Lic. Horacio A. Gómez, Párroco de Nuestra Señora de
                La Caridad
              </footer>
            </motion.blockquote>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8"
            >
              <Link
                href="/padre-jorge-gandur/en-memoria-del-padre-jorge-gandur"
                className="inline-flex items-center gap-2 text-dorado text-sm font-medium hover:gap-3 transition-all duration-300"
              >
                Leer la nota completa <ArrowRightIcon size={14} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ SU VIDA ═══════════════════ */}
      <CategorySection
        eyebrow="Su Vida"
        title="Niñez, Vocación y Recuerdos"
        description="Desde su infancia hasta su ordenación sacerdotal, la vida de Jorge Gandur fue un camino de fe y entrega."
        icon={<BookOpenIcon size={48} />}
        notas={vidaNotas}
      />

      {/* ═══════════════════ SUS OBRAS ═══════════════════ */}
      <CategorySection
        eyebrow="Sus Obras"
        title="Capillas, Colegios y Obras"
        description="El Padre Jorge levantó capillas, comedores, colegios y la Capilla de Adoración Perpetua, transformando la comunidad de Yerba Buena."
        icon={<ChurchIcon size={48} />}
        notas={obrasNotas}
        bgClass="bg-stone-900/30"
      />

      {/* ═══════════════════ TESTIMONIOS ═══════════════════ */}
      <CategorySection
        eyebrow="Testimonios"
        title="Quienes lo conocieron"
        description="Testimonios de personas que vivieron y trabajaron junto al Padre Jorge."
        icon={<StarIcon size={48} />}
        notas={testimonioNotas}
      />

      {/* ═══════════════════ MARIA ═══════════════════ */}
      <CategorySection
        eyebrow="María"
        title="Su devoción a la Virgen"
        description='Su amor a la Santísima Virgen María lo llevó a promover la Consagración Mariana y a dar testimonio sobre La Virgen de la Eucaristía.'
        icon={<HeartIcon size={48} />}
        notas={mariaNotas}
        bgClass="bg-stone-900/30"
      />

      {/* ═══════════════════ GRUPOS ═══════════════════ */}
      <CategorySection
        eyebrow="Apostolado de Grupos"
        title="Acción Católica y la Orquesta"
        description="El Padre Jorge supo acercar a los jóvenes a Cristo a través de la Acción Católica y la música."
        icon={<MusicIcon size={48} />}
        notas={gruposNotas}
      />

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 rounded-full bg-dorado/5 blur-[150px] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <BuildingIcon
              size={48}
              className="text-dorado mx-auto mb-6 animate-float"
              aria-hidden
            />

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Su sueño sigue{" "}
              <span className="bg-linear-to-r from-dorado to-dorado-light bg-clip-text text-transparent">
                vivo
              </span>
            </h2>

            <p className="text-text-secondary text-lg font-light leading-relaxed mb-10">
              El Padre Jorge soñó con un nuevo templo para la Parroquia. Hoy,
              ese sueño está en marcha.
            </p>

            <Link href="/nuevo-templo">
              <motion.span
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="relative group inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-linear-to-r from-dorado to-dorado-dark text-stone-950 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-all duration-1000" />
                <UsersIcon size={20} aria-hidden className="relative" />
                <span className="relative font-bold text-sm uppercase tracking-wider">
                  Conocer el Nuevo Templo
                </span>
                <ArrowRightIcon size={20} aria-hidden className="relative" />
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
