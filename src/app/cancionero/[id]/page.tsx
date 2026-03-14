import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { CANCIONES } from "@/constants/canciones";
import SongDetailContent from "./_components/SongDetailContent";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return CANCIONES.map((song) => ({ id: String(song.id) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const song = CANCIONES.find((s) => s.id === Number(id));

  if (!song) {
    return { title: "Canción no encontrada" };
  }

  return {
    title: `${song.title} — Cancionero Litúrgico`,
    description: `Letra y detalles de "${song.title}" del cancionero litúrgico parroquial.`,
    openGraph: {
      title: `${song.title} — Cancionero Litúrgico`,
      description: `Letra y detalles de "${song.title}" del cancionero litúrgico parroquial.`,
    },
  };
}

export default async function SongPage({ params }: Props) {
  const { id } = await params;
  const song = CANCIONES.find((s) => s.id === Number(id));

  if (!song) {
    notFound();
  }

  return (
    <Suspense
      fallback={
        <div className="flex min-h-svh items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-dorado border-t-transparent" />
        </div>
      }
    >
      <SongDetailContent song={song} />
    </Suspense>
  );
}
