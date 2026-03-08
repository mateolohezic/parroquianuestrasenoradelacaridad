"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/icons";
import { FloatingCrosses } from "@/components";
import logoBlanco from "@/assets/logos/logo-blanco.png";

export default function HomeContent() {
  return (
    <section className="relative min-h-svh flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-stone-950 via-stone-900 to-stone-950" />

      <FloatingCrosses count={6} />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 rounded-full bg-dorado/[0.03] blur-[120px] pointer-events-none" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            src={logoBlanco}
            alt="Parroquia Nuestra Señora de la Caridad"
            width={400}
            height={120}
            className="mx-auto h-28 sm:h-36 w-auto no-interact mb-8 opacity-90"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-4 mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-12 bg-linear-to-r from-transparent to-dorado/50" />
            <span className="text-dorado text-xs font-semibold uppercase tracking-[4px]">
              Bienvenidos
            </span>
            <span className="h-px w-12 bg-linear-to-l from-transparent to-dorado/50" />
          </div>
          <p className="text-text-secondary text-lg sm:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Parroquia Nuestra Señora de la Caridad — Yerba Buena, Tucumán
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/padre-jorge-gandur"
            className="group relative px-8 py-4 rounded-xl border border-dorado/20 bg-dorado/5 hover:bg-dorado/10 hover:border-dorado/40 transition-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-linear-to-r from-dorado/0 via-dorado/5 to-dorado/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-all duration-1000" />
            <div className="relative flex items-center gap-3">
              <span className="text-white/90 text-sm font-medium uppercase tracking-wider">
                Padre Jorge Gandur
              </span>
              <ArrowRightIcon
                className="text-dorado group-hover:translate-x-1 transition-300"
                size={16}
              />
            </div>
          </Link>

          <Link
            href="/nuevo-templo"
            className="group relative px-8 py-4 rounded-xl bg-linear-to-r from-dorado to-dorado-dark text-stone-950 hover:shadow-lg hover:shadow-dorado/20 transition-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-all duration-1000" />
            <div className="relative flex items-center gap-3">
              <span className="text-sm font-bold uppercase tracking-wider">
                Nuevo Templo
              </span>
              <ArrowRightIcon
                className="group-hover:translate-x-1 transition-300"
                size={16}
              />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
