import { MessageSquareQuote } from "lucide-react";

export function Testimonials() {
  return (
    <section className="border-t border-dourado/30 bg-champagne/30 py-16 lg:py-20">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-caramelo">
            Experiência das Pacientes
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-[1.12] tracking-[-0.02em] text-marrom-profundo sm:text-4xl">
            Confiança construída em cada atendimento.
          </h2>
        </div>

        {/* Estrutura preparada para inclusão de depoimentos reais autorizados */}
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-dashed border-dourado/70 bg-porcelana/80 p-8 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-champagne text-marrom">
            <MessageSquareQuote className="h-5 w-5" />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-marrom-profundo/80 sm:text-base">
            Espaço reservado para avaliações e relatos reais de pacientes
            atendidas por Carine Sena, publicados mediante autorização.
          </p>
        </div>
      </div>
    </section>
  );
}
