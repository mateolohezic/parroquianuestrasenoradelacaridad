import type { Metadata } from "next";
import { Suspense } from "react";
import SetlistContent from "./_components/SetlistContent";

export const metadata: Metadata = {
  title: "Setlist — Cancionero Litúrgico",
  description:
    "Armá el repertorio para la misa. Elegí canciones para cada momento de la celebración.",
};

export default function SetlistPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-svh items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-dorado border-t-transparent" />
        </div>
      }
    >
      <SetlistContent />
    </Suspense>
  );
}
