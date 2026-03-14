"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowLeftIcon } from "@/icons";
import { FloatingCrosses } from "@/components";
import type { Nota } from "@/constants/notas";

export default function NotaContent({ nota }: { nota: Nota }) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useSpring(useTransform(heroProgress, [0, 1], [0, 120]), {
    stiffness: 100,
    damping: 30,
  });
  const heroOpacity = useTransform(heroProgress, [0, 0.7], [1, 0]);

  const heroImage = nota.images[0];
  const galleryImages = nota.images.slice(1);

  return (
    <div>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section
        ref={heroRef}
        className="relative h-[70svh] flex items-end justify-center overflow-hidden"
      >
        {heroImage && (
          <motion.div className="absolute inset-0" style={{ y: heroY }}>
            <Image
              src={`/photos/${heroImage}`}
              alt={nota.title}
              fill
              className="object-cover no-interact"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-white" />
          </motion.div>
        )}

        {!heroImage && (
          <div className="absolute inset-0 bg-linear-to-b from-stone-100 to-white" />
        )}

        <FloatingCrosses count={6} />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto pb-16"
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
              Padre Jorge Gandur
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
            className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight text-white drop-shadow-lg"
          >
            {nota.title}
          </motion.h1>

          {nota.author && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-4 text-dorado text-base sm:text-lg font-medium"
            >
              {nota.author}
            </motion.p>
          )}

          {nota.subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-2 text-white/70 text-sm sm:text-base font-light"
            >
              {nota.subtitle}
            </motion.p>
          )}
        </motion.div>
      </section>

      {/* ═══════════════════ BACK LINK ═══════════════════ */}
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/padre-jorge-gandur"
            className="inline-flex items-center gap-2 text-dorado text-sm font-medium hover:gap-3 transition-all duration-300"
          >
            <ArrowLeftIcon size={16} />
            Volver a Padre Jorge Gandur
          </Link>
        </motion.div>
      </div>

      {/* ═══════════════════ CONTENT ═══════════════════ */}
      <section className="relative py-16 px-4">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-dorado/3 blur-[100px] pointer-events-none" />

        <article className="relative max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-stone-50 rounded-2xl p-8 sm:p-12 border border-stone-200"
          >
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-dorado/30 rounded-tl-lg" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-dorado/30 rounded-br-lg" />

            <div className="space-y-6">
              {nota.content.map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: Math.min(i * 0.05, 0.5) }}
                  className="text-ink-light text-base sm:text-lg font-light leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {nota.author && (
              <motion.footer
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mt-10 pt-8 border-t border-stone-200"
              >
                <p className="text-dorado font-semibold text-base">
                  {nota.author}
                </p>
                {nota.subtitle && (
                  <p className="text-ink-muted text-sm mt-1">
                    {nota.subtitle}
                  </p>
                )}
              </motion.footer>
            )}
          </motion.div>
        </article>
      </section>

      {/* ═══════════════════ GALLERY ═══════════════════ */}
      {galleryImages.length > 0 && (
        <section className="relative py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="h-px w-12 bg-linear-to-r from-transparent to-dorado/50" />
                <span className="text-dorado text-xs font-semibold uppercase tracking-[4px]">
                  Galería
                </span>
                <span className="h-px w-12 bg-linear-to-l from-transparent to-dorado/50" />
              </div>
            </motion.div>

            <div
              className={`grid gap-6 ${
                galleryImages.length === 1
                  ? "grid-cols-1 max-w-2xl mx-auto"
                  : galleryImages.length === 2
                    ? "grid-cols-1 md:grid-cols-2"
                    : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {galleryImages.map((img, i) => (
                <motion.div
                  key={img}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group relative rounded-2xl overflow-hidden border border-stone-200 hover:border-dorado/30 hover:shadow-lg transition-500"
                >
                  <div className="relative aspect-4/3 overflow-hidden">
                    <Image
                      src={`/photos/${img}`}
                      alt={`${nota.title} - Foto ${i + 2}`}
                      fill
                      className="object-cover no-interact group-hover:scale-105 transition-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════ HERO IMAGE (if only 1 image, show it full) ═══════════════════ */}
      {galleryImages.length === 0 && heroImage && (
        <section className="relative py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden border border-stone-200"
            >
              <div className="relative aspect-4/3">
                <Image
                  src={`/photos/${heroImage}`}
                  alt={nota.title}
                  fill
                  className="object-cover no-interact"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ═══════════════════ BOTTOM NAV ═══════════════════ */}
      <section className="py-16 px-4 border-t border-stone-200">
        <div className="max-w-3xl mx-auto text-center">
          <Link
            href="/padre-jorge-gandur"
            className="inline-flex items-center gap-2 text-dorado text-sm font-medium hover:gap-3 transition-all duration-300"
          >
            <ArrowLeftIcon size={16} />
            Volver a Padre Jorge Gandur
          </Link>
        </div>
      </section>
    </div>
  );
}
