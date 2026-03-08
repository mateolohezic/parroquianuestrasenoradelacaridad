import type { Metadata } from "next";
import "./globals.css";
import { ScrollProgress, Navbar, Footer } from "@/components";

export const metadata: Metadata = {
  title: {
    default: "Parroquia Nuestra Señora de la Caridad",
    template: "%s | Parroquia Nuestra Señora de la Caridad",
  },
  description:
    "Sitio oficial de la Parroquia Nuestra Señora de la Caridad — Yerba Buena, Tucumán, Argentina. Conocé la historia del Padre Jorge Gandur y el proyecto del Nuevo Templo.",
  keywords: [
    "Parroquia",
    "Nuestra Señora de la Caridad",
    "Padre Jorge Gandur",
    "Nuevo Templo",
    "Tucumán",
    "Yerba Buena",
    "Iglesia",
  ],
  openGraph: {
    title: "Parroquia Nuestra Señora de la Caridad",
    description:
      "Conocé la historia del Padre Jorge Gandur y el proyecto del Nuevo Templo parroquial.",
    type: "website",
    locale: "es_AR",
    siteName: "Parroquia Nuestra Señora de la Caridad",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="flex min-h-svh w-full flex-col bg-stone-950 text-white antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-dorado focus:text-stone-950 focus:rounded-lg focus:text-sm focus:font-semibold"
        >
          Saltar al contenido
        </a>
        <ScrollProgress />
        <Navbar />
        <main id="main-content" className="flex w-full grow flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
