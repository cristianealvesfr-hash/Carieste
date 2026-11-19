import { getWhatsAppUrl } from "../config/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Authority() {
  return (
    <section id="sobre" className="border-y border-dourado/40 bg-champagne/60 py-20 lg:py-28">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Fotografia de autoridade */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-[440px]">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-[2rem] border border-dourado/70"
              />
              <div className="relative overflow-hidden rounded-[1.75rem] bg-champagne shadow-lg shadow-marrom-profundo/10">
                <img
                  src="/images/carine-autoridade.jpg"
                  alt="Dra. Carine Sena realizando atendimento de estética facial"
                  width={960}
                  height={1280}
                  className="aspect-[3/4] w-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Texto da Carine */}
          <div className="lg:col-span-7">
            <p className="text-base font-semibold text-caramelo">Sobre Dra. Carine Sena</p>
            <h2 className="mt-2 text-3xl font-bold leading-[1.15] tracking-[-0.01em] text-marrom-profundo sm:text-4xl lg:text-[44px]">
              Ciência, experiência e um olhar único para a sua beleza.
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-marrom-profundo/85 sm:text-[17px]">
              <p>
                Sou Dra. Carine Sena, especialista em estética avançada, com 20 anos de
                atuação na área da saúde, incluindo experiência em terapia
                intensiva e emergência.
              </p>
              <p>
                Minha trajetória é construída sobre conhecimento científico,
                responsabilidade e um olhar individualizado para cada paciente.
              </p>
              <p>
                Acredito que a estética vai muito além dos procedimentos. Por
                isso, meu trabalho é fundamentado em evidências científicas e no
                gerenciamento personalizado do envelhecimento, respeitando a
                anatomia, as características da pele e as necessidades de cada
                pessoa.
              </p>
              <p>
                Meu propósito não é transformar rostos, mas valorizar a beleza
                natural, preservando a identidade e a singularidade de cada
                paciente.
              </p>
            </div>

            <blockquote className="mt-8 border-l-4 border-caramelo pl-5 text-lg font-bold leading-snug text-marrom-profundo sm:text-xl">
              Porque cada rosto carrega uma história. E cada história merece um
              cuidado único.
            </blockquote>

            <div className="mt-9">
              <a
                href={getWhatsAppUrl(
                  "Olá, Dra. Carine! Gostaria de tirar algumas dúvidas e agendar um horário."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-marrom px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-marrom-profundo focus:outline-none focus-visible:ring-2 focus-visible:ring-marrom focus-visible:ring-offset-2"
              >
                <WhatsAppIcon className="h-5 w-5 text-white" />
                <span>Falar com a Dra. Carine</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
