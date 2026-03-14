import type { Metadata } from "next";
import { Suspense } from "react";
import CancioneroContent from "./_components/CancioneroContent";

export const metadata: Metadata = {
  title: "Cancionero Litúrgico",
  description:
    "Cancionero litúrgico de la Parroquia Nuestra Señora de la Caridad. Buscá por título, tiempo litúrgico o momento de la misa.",
  keywords: [
    "cancionero",
    "litúrgico",
    "canciones",
    "misa",
    "coro",
    "parroquia",
    "caridad",
    "Tucumán",
  ],
  openGraph: {
    title: "Cancionero Litúrgico | Parroquia Nuestra Señora de la Caridad",
    description:
      "Cancionero litúrgico completo. Buscá por título, tiempo litúrgico o momento de la misa.",
  },
};

export default function CancioneroPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-svh items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-dorado border-t-transparent" />
        </div>
      }
    >
      <CancioneroContent />
    </Suspense>
  );
}
