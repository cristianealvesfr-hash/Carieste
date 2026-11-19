const STEPS = [
  {
    number: "1",
    title: "Avaliação",
    description:
      "Conversa para entender seus objetivos e análise das suas características.",
  },
  {
    number: "2",
    title: "Planejamento",
    description:
      "Definição dos procedimentos indicados e das expectativas reais para o seu caso.",
  },
  {
    number: "3",
    title: "Atendimento",
    description:
      "Procedimento realizado com cuidado, priorizando conforto, técnica e segurança.",
  },
  {
    number: "4",
    title: "Acompanhamento",
    description:
      "Orientações pós-procedimento e suporte para acompanhar a sua evolução.",
  },
];

export function Experience() {
  return (
    <section className="bg-porcelana py-20 lg:py-24">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold leading-[1.15] tracking-[-0.01em] text-marrom-profundo sm:text-4xl">
          Como funciona o atendimento
        </h2>

        <ol className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <li key={step.number} className="rounded-2xl border border-dourado/60 bg-white p-7">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-marrom text-base font-bold text-white">
                {step.number}
              </span>
              <h3 className="mt-5 text-lg font-bold text-marrom-profundo">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-marrom-profundo/80">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
