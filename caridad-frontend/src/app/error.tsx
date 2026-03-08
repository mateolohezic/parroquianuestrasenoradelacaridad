"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="min-h-svh flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-dorado text-xs font-semibold uppercase tracking-[4px] mb-4">
          Error
        </p>
        <h1 className="text-5xl sm:text-7xl font-black text-white mb-4">
          Algo salió mal
        </h1>
        <p className="text-text-secondary text-lg font-light mb-8">
          Ocurrió un error inesperado. Por favor, intentá de nuevo.
        </p>
        <button
          onClick={reset}
          className="inline-block px-8 py-4 rounded-xl bg-linear-to-r from-dorado to-dorado-dark text-stone-950 font-bold text-sm uppercase tracking-wider hover:shadow-lg hover:shadow-dorado/20 transition-500 cursor-pointer"
        >
          Intentar de nuevo
        </button>
      </div>
    </section>
  );
}
