"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MusicIcon, BookOpenIcon, ListIcon } from "@/icons";

const TABS = [
  { label: "Cancionero", href: "/cancionero", icon: MusicIcon },
  { label: "Setlist", href: "/cancionero/setlist", icon: ListIcon },
  { label: "Formación", href: "/cancionero/formacion", icon: BookOpenIcon },
] as const;

export default function CancioneroNav() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-1 rounded-xl bg-stone-100 p-1" aria-label="Secciones del cancionero">
      {TABS.map(({ label, href, icon: Icon }) => {
        const isActive =
          href === "/cancionero"
            ? pathname === "/cancionero" || /^\/cancionero\/\d+/.test(pathname)
            : pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-300 ${
              isActive
                ? "bg-white text-dorado shadow-sm"
                : "text-ink-muted hover:text-ink"
            }`}
            aria-current={isActive ? "page" : undefined}
          >
            <Icon size={16} />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
