"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HeartIcon, MapPinIcon, FacebookIcon, InstagramIcon } from "@/icons";
import { NAV_LINKS } from "@/constants/navigation";
import logoBlanco from "@/assets/logos/logo-blanco.png";

export default function Footer() {
  return (
    <footer className="relative bg-stone-50 border-t border-stone-200">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-px bg-linear-to-r from-transparent via-dorado/30 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Image
              src={logoBlanco}
              alt="Parroquia Nuestra Señora de la Caridad"
              width={200}
              height={60}
              className="h-16 w-auto no-interact logo-dark opacity-70"
            />
            <p className="text-ink-muted text-sm leading-relaxed">
              Parroquia Nuestra Señora de la Caridad — San Miguel de Tucumán,
              Argentina.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-dorado-dark text-sm font-semibold uppercase tracking-[3px]">
              Navegación
            </h3>
            <nav className="space-y-2" aria-label="Footer">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-ink-muted hover:text-dorado transition-300 text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-dorado-dark text-sm font-semibold uppercase tracking-[3px]">
              Contacto
            </h3>
            <div className="space-y-3">
              <address className="flex items-start gap-3 text-ink-muted text-sm not-italic">
                <MapPinIcon className="text-dorado mt-0.5 shrink-0" size={16} />
                <span>Perú y Panamá — Yerba Buena, Tucumán</span>
              </address>
              <div className="flex items-center gap-4 pt-2">
                <FacebookIcon
                  size={20}
                  className="text-ink-faint opacity-40"
                  aria-hidden
                />
                <InstagramIcon
                  size={20}
                  className="text-ink-faint opacity-40"
                  aria-hidden
                />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-200">
          <p className="text-center text-ink-faint text-xs flex items-center justify-center gap-1.5">
            Hecho con <HeartIcon className="text-dorado" size={12} aria-hidden /> para la
            comunidad parroquial
          </p>
        </div>
      </div>
    </footer>
  );
}
