"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <div className="flex items-center justify-center gap-4 mb-4">
        <span className="h-px w-12 bg-linear-to-r from-transparent to-dorado/50" />
        <span className="text-dorado text-xs font-semibold uppercase tracking-[4px]">
          {eyebrow}
        </span>
        <span className="h-px w-12 bg-linear-to-l from-transparent to-dorado/50" />
      </div>
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-text-secondary text-lg max-w-2xl mx-auto font-light leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
