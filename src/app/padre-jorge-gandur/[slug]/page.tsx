import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NOTAS } from "@/constants/notas";
import NotaContent from "./_components/NotaContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return NOTAS.map((nota) => ({ slug: nota.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const nota = NOTAS.find((n) => n.slug === slug);

  if (!nota) {
    return { title: "Nota no encontrada" };
  }

  return {
    title: `${nota.title} — Padre Jorge Gandur`,
    description: nota.content[0].slice(0, 200),
    openGraph: {
      title: `${nota.title} — Padre Jorge Gandur`,
      description: nota.content[0].slice(0, 200),
    },
  };
}

export default async function NotaPage({ params }: Props) {
  const { slug } = await params;
  const nota = NOTAS.find((n) => n.slug === slug);

  if (!nota) {
    notFound();
  }

  return <NotaContent nota={nota} />;
}
