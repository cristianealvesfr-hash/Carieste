import { PROCEDURES } from "../config/site";

export function Results() {
  const resultProcedures = PROCEDURES.filter((proc) => proc.showInResults !== false);

  return (
    <section id="resultados" className="bg-porcelana pb-20 lg:pb-28">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#C2A087] via-[#D3B9A5] to-[#E8DACF] p-6 sm:p-10 lg:p-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold leading-[1.15] tracking-[-0.01em] text-marrom-profundo sm:text-4xl lg:text-[44px]">
              Resultados
            </h2>
            <p className="mt-3 text-base text-marrom-profundo/85 sm:text-lg">
              Veja alguns resultados de pacientes atendidos pela Dra. Carine.
            </p>
            <div className="mt-5 h-0.5 w-16 bg-marrom-profundo/70" />
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {resultProcedures.map((proc) => (
              <figure
                key={proc.id}
                className="overflow-hidden rounded-2xl bg-white shadow-md shadow-marrom-profundo/10"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={proc.image}
                    alt={proc.imageAlt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <figcaption className="px-5 py-4">
                  <p className="text-base font-bold text-marrom-profundo">{proc.name}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="mt-6 text-xs text-marrom-profundo/75">
            Os resultados variam de pessoa para pessoa.
          </p>
        </div>
      </div>
    </section>
  );
}
