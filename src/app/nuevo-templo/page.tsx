import type { Metadata } from "next";
import NuevoTemploContent from "./_components/NuevoTemploContent";

export const metadata: Metadata = {
  title: "Nuevo Templo",
  description:
    "Proyecto de construcción del nuevo templo de la Parroquia Nuestra Señora de la Caridad. Conocé las etapas, renders y cómo colaborar.",
  openGraph: {
    title: "Nuevo Templo — Parroquia Nuestra Señora de la Caridad",
    description:
      "Queremos hacer el sueño realidad: construir el nuevo templo parroquial. Más de 1000 personas sentadas, planta en cruz latina con gran cúpula central.",
  },
};

export default function NuevoTemploPage() {
  return <NuevoTemploContent />;
}
