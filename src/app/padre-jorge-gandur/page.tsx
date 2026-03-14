import type { Metadata } from "next";
import PadreGandurContent from "./_components/PadreGandurContent";

export const metadata: Metadata = {
  title: "Padre Jorge Gandur",
  description:
    "En memoria del Padre Jorge Antonio Gandur (1953-2013), primer párroco de la Parroquia Nuestra Señora de la Caridad. Su vida, obra y legado.",
  openGraph: {
    title: "Padre Jorge Gandur — Parroquia Nuestra Señora de la Caridad",
    description:
      "En memoria del Padre Jorge Antonio Gandur, primer párroco de la Parroquia Nuestra Señora de la Caridad en Yerba Buena, Tucumán.",
  },
};

export default function PadreJorgeGandurPage() {
  return <PadreGandurContent />;
}
