"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@/icons";

interface Props {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function FormacionAccordion({
  title,
  children,
  defaultOpen = false,
}: Props) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="rounded-xl border border-stone-200 bg-white overflow-hidden shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-5 py-4 text-left transition-300 hover:bg-stone-50"
        aria-expanded={isOpen}
      >
        <h3 className="text-base font-semibold text-ink">{title}</h3>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-ink-faint"
        >
          <ChevronDownIcon size={18} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="border-t border-stone-100 px-5 py-4">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function OfficialText({ text }: { text: string }) {
  return (
    <blockquote className="my-4 rounded-lg border-l-2 border-dorado/50 bg-dorado/5 px-4 py-3 text-sm italic leading-relaxed text-ink-muted">
      {text}
    </blockquote>
  );
}

export function Paragraphs({ texts }: { texts: string[] }) {
  return (
    <div className="space-y-3">
      {texts.map((text, i) => (
        <p key={i} className="text-sm leading-relaxed text-ink-muted">
          {text}
        </p>
      ))}
    </div>
  );
}
