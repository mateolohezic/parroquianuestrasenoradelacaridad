import type { Metadata } from "next";
import FormacionContent from "./_components/FormacionContent";

export const metadata: Metadata = {
  title: "Formación para Coro",
  description:
    "Guía de formación litúrgica para el coro parroquial. Momentos de la misa, tiempos litúrgicos, criterios para la selección de cantos.",
  keywords: [
    "formación",
    "coro",
    "litúrgico",
    "misa",
    "cantos",
    "parroquia",
    "caridad",
    "Tucumán",
  ],
  openGraph: {
    title: "Formación para Coro | Parroquia Nuestra Señora de la Caridad",
    description:
      "Guía de formación litúrgica para el coro parroquial.",
  },
};

export default function FormacionPage() {
  return <FormacionContent />;
}
