import type { Metadata } from "next";
import { Suspense } from "react";
import SharedSetlistContent from "./_components/SharedSetlistContent";

export const metadata: Metadata = {
  title: "Setlist Compartido — Cancionero Litúrgico",
  description: "Setlist para la misa con las letras de cada canción.",
};

export default function SharedSetlistPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-svh items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-dorado border-t-transparent" />
        </div>
      }
    >
      <SharedSetlistContent />
    </Suspense>
  );
}
