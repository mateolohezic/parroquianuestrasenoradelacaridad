"use client";

import { useRef } from "react";
import Image, { type StaticImageData } from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import {
  BuildingIcon,
  SparklesIcon,
  HeartIcon,
  ChurchIcon,
  HandClickIcon,
} from "@/icons";
import { SectionHeading, AnimatedCounter, FloatingParticles } from "@/components";

import render3d1 from "@/assets/nuevo-templo/render-3d-1.jpg";
import render3d2 from "@/assets/nuevo-templo/render-3d-2.jpg";
import primeraEtapa from "@/assets/nuevo-templo/primera-etapa.jpg";
import maqueta from "@/assets/nuevo-templo/maqueta.jpeg";
import renderFrontal1 from "@/assets/nuevo-templo/render-frontal-1.jpeg";
import renderFrontal2 from "@/assets/nuevo-templo/render-frontal-2.jpeg";
import renderLateral from "@/assets/nuevo-templo/render-lateral.jpeg";

/* ───────────────────── data ──────────────────────── */

const etapas = [
  {
    number: "1ra",
    title: "Estructura y Cubierta",
    items: ["Estructura resistente", "Cubierta completa", "Desagües pluviales"],
    subEtapas: [
      "1.1 — Trabajos preliminares: preparación del terreno",
      "1.2 — Movimiento de suelos: excavación y relleno",
      "1.3 — Estructura resistente: muro de contención con malla",
      "1.4 — Cubiertas, contra pisos, instalación sanitaria, pluviales y limpieza de obra",
    ],
    active: true,
  },
  {
    number: "2da",
    title: "Cerramientos",
    items: ["Carpinterías", "Revoques", "Cerramientos exteriores"],
  },
  {
    number: "3ra",
    title: "Instalaciones",
    items: ["Eléctrica y sanitaria", "Refrigeración y audio", "Cielorrasos y pisos"],
  },
  {
    number: "4ta",
    title: "Ornamentaciones",
    items: ["Detalles finales", "Ornamentación interior", "Terminaciones completas"],
  },
];

const galleryItems = [
  { src: renderFrontal1, alt: "Render frontal del templo", title: "Vista Frontal" },
  { src: renderFrontal2, alt: "Render frontal perspectiva", title: "Perspectiva Frontal" },
  { src: renderLateral, alt: "Render lateral del templo", title: "Vista Lateral" },
  { src: maqueta, alt: "Maqueta del nuevo templo", title: "Maqueta" },
  { src: render3d1, alt: "Render 3D aéreo", title: "Vista Aérea" },
  { src: primeraEtapa, alt: "Estructura primera etapa", title: "Primera Etapa — Estructura" },
];

/* ───────────────────────── page ─────────────────────────── */

export default function NuevoTemploContent() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useSpring(useTransform(heroProgress, [0, 1], [0, 200]), {
    stiffness: 100,
    damping: 30,
  });
  const heroScale = useTransform(heroProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);

  return (
    <div>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section
        ref={heroRef}
        className="relative h-svh flex items-center justify-center overflow-hidden"
      >
        <motion.div
          className="absolute inset-0"
          style={{ y: heroY, scale: heroScale }}
        >
          <Image
            src={renderFrontal1}
            alt="Render del Nuevo Templo"
            fill
            className="object-cover no-interact"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/30 to-white" />
        </motion.div>

        <FloatingParticles count={12} />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <motion.span
                className="h-px bg-dorado/50"
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ duration: 1, delay: 0.8 }}
              />
              <span className="text-dorado text-xs font-semibold uppercase tracking-[6px]">
                El sueño del Padre Gandur
              </span>
              <motion.span
                className="h-px bg-dorado/50"
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.95] mb-6"
          >
            <span className="text-white">Nuevo</span>
            <br />
            <span className="bg-linear-to-r from-dorado to-dorado-light bg-clip-text text-transparent">
              Templo
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-white/80 text-lg sm:text-xl font-light leading-relaxed max-w-2xl mx-auto"
          >
            Queremos hacer el sueño realidad: construir el nuevo templo de la
            Parroquia Nuestra Señora de la Caridad.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-10"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-dorado/50"
            >
              <ChurchIcon size={32} className="mx-auto" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════ INTRO ═══════════════════ */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-dorado/5 blur-[100px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="El Proyecto"
            title="Un viejo sueño hecho proyecto"
          />

          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative bg-stone-50 rounded-2xl p-8 sm:p-12 border border-stone-200"
          >
            <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
              <div className="absolute inset-0 bg-linear-to-r from-dorado/0 via-dorado/5 to-dorado/0 animate-shimmer" />
            </div>

            <div className="relative space-y-6 text-ink-light text-base sm:text-lg font-light leading-relaxed">
              <p>
                Este proyecto fue solicitado por el Párroco{" "}
                <span className="text-dorado font-medium">Horacio Gómez</span>,
                en respuesta a un viejo deseo del{" "}
                <span className="text-dorado font-medium">Padre Jorge Gandur</span>
                , de construir un templo Parroquial más amplio y cómodo que
                estuviera a la altura del crecimiento que había experimentado la
                comunidad religiosa de esta Parroquia.
              </p>
              <p>
                El nuevo templo albergaría a{" "}
                <span className="text-ink font-semibold">más de mil personas</span>{" "}
                sentadas dentro del templo, y se ubicaría dentro del predio actual.
              </p>
            </div>

            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-dorado/30 rounded-tl-lg" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-dorado/30 rounded-br-lg" />
          </motion.blockquote>
        </div>
      </section>

      {/* ═══════════════════ STATS ═══════════════════ */}
      <section className="py-20 px-4 border-y border-stone-200">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedCounter value={1000} label="Personas sentadas" />
          <AnimatedCounter value={4} label="Etapas del proyecto" />
          <AnimatedCounter value={3} label="Naves del templo" />
          <AnimatedCounter value={1} label="Gran cúpula central" />
        </div>
      </section>

      {/* ═══════════════════ ARCHITECTURE ═══════════════════ */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Arquitectura"
            title="Cruz Latina"
            description='El templo se organiza en base a una planta de "cruz latina", con una nave central y dos laterales, y otras dos perpendiculares conformando la forma en "cruz".'
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <ParallaxImage src={render3d1} alt="Vista aérea 3D del nuevo templo" delay={0} />
            <ParallaxImage src={render3d2} alt="Vista lateral 3D del nuevo templo" delay={0.2} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FeatureCard
                icon={<ChurchIcon size={28} />}
                title="La Cúpula"
                description="En la intersección de las naves se encuentra el altar, enfatizado por la gran cúpula que le da mayor protagonismo y logra captar la atención desde cualquier punto del interior."
              />
              <FeatureCard
                icon={<BuildingIcon size={28} />}
                title="Exterior"
                description="El aspecto exterior se resolvió teniendo en cuenta el pedido explícito del Padre Jorge, el cual nos transmitió siempre como inquietud y deseo."
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ GALLERY ═══════════════════ */}
      <section className="relative py-32 px-4 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Galería"
            title="Renders y Maqueta"
            description="Conocé cómo será el nuevo templo desde diferentes perspectivas."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, i) => (
              <GalleryCard key={item.title} {...item} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ ETAPAS ═══════════════════ */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle, var(--color-dorado) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative max-w-5xl mx-auto">
          <SectionHeading
            eyebrow="Hoja de Ruta"
            title="Etapas del Proyecto"
            description="El proyecto se divide en cuatro etapas para hacerse realidad."
          />

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-dorado/50 via-dorado/20 to-transparent md:-translate-x-px" />

            {etapas.map((etapa, i) => (
              <motion.div
                key={etapa.number}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative flex items-start gap-8 mb-12 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    whileInView={{ scale: [0, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 + 0.3 }}
                    className={`w-4 h-4 rounded-full border-2 ${
                      etapa.active
                        ? "bg-dorado border-dorado shadow-lg shadow-dorado/30"
                        : "bg-white border-dorado/30"
                    }`}
                  />
                </div>

                <div
                  className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                    i % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -4 }}
                    className={`p-6 rounded-2xl border transition-500 ${
                      etapa.active
                        ? "bg-dorado/5 border-dorado/30 animate-glow-pulse"
                        : "bg-white border-stone-200 hover:border-dorado/20 shadow-sm"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className={`text-xs font-bold uppercase tracking-[3px] px-3 py-1 rounded-full ${
                          etapa.active
                            ? "bg-dorado/20 text-dorado"
                            : "bg-stone-100 text-ink-muted"
                        }`}
                      >
                        {etapa.number} Etapa
                      </span>
                      {etapa.active && (
                        <span className="text-xs text-dorado animate-pulse">
                          En marcha
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-ink mb-3">
                      {etapa.title}
                    </h3>
                    <ul className="space-y-2">
                      {etapa.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-ink-muted text-sm"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-dorado/50 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    {etapa.subEtapas && (
                      <div className="mt-4 pt-4 border-t border-dorado/10">
                        <p className="text-xs text-dorado/70 uppercase tracking-wider mb-2">
                          Sub-etapas
                        </p>
                        <ul className="space-y-1.5">
                          {etapa.subEtapas.map((sub) => (
                            <li
                              key={sub}
                              className="text-ink-faint text-xs leading-relaxed"
                            >
                              {sub}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section className="relative py-32 px-4 overflow-hidden bg-stone-50">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 rounded-full bg-dorado/5 blur-[150px] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SparklesIcon
              size={48}
              className="text-dorado mx-auto mb-6 animate-float"
              aria-hidden
            />

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-ink leading-tight mb-6">
              ¡Contamos con{" "}
              <span className="bg-linear-to-r from-dorado to-dorado-light bg-clip-text text-transparent">
                vos
              </span>
              !
            </h2>

            <p className="text-ink-muted text-lg font-light leading-relaxed mb-4">
              ¡El proyecto ya está en marcha! Pero necesitamos de tu colaboración.
            </p>

            <p className="text-ink-muted text-lg font-light leading-relaxed mb-4">
              Para la primera etapa necesitamos{" "}
              <span className="text-dorado font-semibold">200 millones de pesos</span>.
            </p>

            <p className="text-ink-muted text-base font-light leading-relaxed mb-10">
              Si estás interesado en colaborar, podés hacerlo por transferencia bancaria.
            </p>

            <motion.button
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="relative group px-10 py-5 rounded-2xl bg-linear-to-r from-dorado to-dorado-dark text-white cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-all duration-1000" />
              <div className="relative flex items-center gap-3">
                <HeartIcon size={20} aria-hidden />
                <span className="font-bold text-sm uppercase tracking-wider">
                  Quiero Colaborar
                </span>
                <HandClickIcon size={20} aria-hidden />
              </div>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

/* ───────────────────── sub-components ───────────────────── */

function ParallaxImage({
  src,
  alt,
  delay,
}: {
  src: StaticImageData;
  alt: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="relative group rounded-2xl overflow-hidden border border-stone-200 hover:border-dorado/30 hover:shadow-lg transition-500"
    >
      <motion.div style={{ y }} className="relative aspect-4/3">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover no-interact group-hover:scale-105 transition-500"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </motion.div>
    </motion.div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="p-6 rounded-2xl bg-white border border-stone-200 hover:border-dorado/20 hover:shadow-lg transition-500 shadow-sm"
    >
      <div className="text-dorado mb-4" aria-hidden>{icon}</div>
      <h3 className="text-lg font-bold text-ink mb-2">{title}</h3>
      <p className="text-ink-muted text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}

function GalleryCard({
  src,
  alt,
  title,
  delay,
}: {
  src: StaticImageData;
  alt: string;
  title: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl overflow-hidden border border-stone-200 hover:border-dorado/30 hover:shadow-lg transition-500"
    >
      <div className="relative aspect-4/3 overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover no-interact group-hover:scale-110 transition-all duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="text-white text-sm font-semibold group-hover:text-dorado-light transition-300">
          {title}
        </p>
      </div>
    </motion.div>
  );
}
