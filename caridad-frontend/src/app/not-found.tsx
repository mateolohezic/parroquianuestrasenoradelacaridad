import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-svh flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-dorado text-xs font-semibold uppercase tracking-[4px] mb-4">
          Error 404
        </p>
        <h1 className="text-5xl sm:text-7xl font-black text-white mb-4">
          Página no encontrada
        </h1>
        <p className="text-text-secondary text-lg font-light mb-8">
          La página que buscás no existe o fue movida.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-4 rounded-xl bg-linear-to-r from-dorado to-dorado-dark text-stone-950 font-bold text-sm uppercase tracking-wider hover:shadow-lg hover:shadow-dorado/20 transition-500"
        >
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
