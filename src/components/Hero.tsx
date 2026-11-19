import { getWhatsAppUrl } from "../config/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

const MARQUEE_ITEMS = [
  "Botox",
  "Bioestimulador de Colágeno",
  "Preenchimento Labial",
  "Microagulhamento",
  "Skinbooster",
  "Agende seu horário",
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-br from-[#F2E8DF] via-[#E9DACE] to-[#DFCCBC] pt-10 lg:pt-14"
    >
      {/* Forma orgânica discreta no tom da blusa atrás da fotografia */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-16 h-[560px] w-[560px] rounded-full bg-gradient-to-br from-[#C2A087]/55 via-[#D8C1AE]/45 to-transparent blur-3xl"
      />

      <div className="relative mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 pb-12 lg:grid-cols-12 lg:gap-12 lg:pb-16">
          {/* Texto */}
          <div className="order-2 lg:order-1 lg:col-span-6">
            <h1 className="text-[40px] font-extrabold leading-[1.05] tracking-[-0.02em] text-marrom-profundo sm:text-[56px] lg:text-[72px]">
              Sua beleza,
              <br />
              sua essência.
            </h1>

            <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-marrom-profundo/80 sm:text-lg">
              Protocolos personalizados de estética avançada para valorizar seus
              traços com leveza, ciência e naturalidade. Tudo começa com uma
              avaliação exclusiva para entender o que a sua pele precisa.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-marrom px-7 py-4 text-base font-semibold text-white shadow-md shadow-marrom/20 transition-colors hover:bg-marrom-profundo focus:outline-none focus-visible:ring-2 focus-visible:ring-marrom focus-visible:ring-offset-2"
              >
                <WhatsAppIcon className="h-5 w-5 text-white" />
                <span>Agendar pelo WhatsApp</span>
              </a>

              <a
                href="#procedimentos"
                className="inline-flex items-center justify-center rounded-full border border-marrom/30 px-7 py-4 text-base font-semibold text-marrom-profundo transition-colors hover:bg-champagne"
              >
                Ver procedimentos
              </a>
            </div>
          </div>

          {/* Fotografia 01 original */}
          <div className="order-1 lg:order-2 lg:col-span-6">
            <div className="relative mx-auto max-w-[440px] lg:ml-auto lg:max-w-[500px]">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-[2rem] border border-[#B8957B]/70 bg-gradient-to-br from-[#C2A087]/45 via-[#D8C1AE]/35 to-transparent"
              />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-[#C2A087]/60 bg-champagne shadow-xl shadow-marrom-profundo/15">
                <img
                  src="/images/carine-hero.jpg"
                  alt="Carine Sena sorrindo, segurando frasco e seringa de procedimento estético"
                  width={682}
                  height={1024}
                  className="aspect-[4/5] w-full object-cover object-top"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Faixa com os procedimentos no tom principal da blusa */}
      <div className="border-y border-[#B28E74]/60 bg-gradient-to-r from-[#C2A087] via-[#CEB099] to-[#C2A087] py-3.5">
        <div className="animate-marquee items-center gap-8 text-sm font-bold uppercase tracking-[0.12em] text-[#3B2C22]">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map(
            (item, i) => (
              <span key={i} className="flex items-center gap-8 whitespace-nowrap">
                <span>{item}</span>
                <span className="text-[#5C4535]">•</span>
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
