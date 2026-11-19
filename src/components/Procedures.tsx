import { CheckCircle2 } from "lucide-react";
import { PROCEDURES, getWhatsAppUrl } from "../config/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Procedures() {
  return (
    <section id="procedimentos" className="bg-porcelana py-20 lg:py-28">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold leading-[1.15] tracking-[-0.01em] text-marrom-profundo sm:text-4xl lg:text-[46px]">
            Procedimentos
          </h2>
          <p className="mt-4 text-base leading-relaxed text-marrom-profundo/80 sm:text-lg">
            Conheça alguns dos principais protocolos realizados pela Dra. Carine.
          </p>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-8">
          {PROCEDURES.map((proc) => (
            <article
              key={proc.id}
              className="flex w-full flex-col overflow-hidden rounded-2xl border border-dourado/60 bg-white transition-shadow hover:shadow-lg hover:shadow-marrom/10 md:w-[calc(50%-1rem)] lg:w-[calc((100%-4rem)/3)]"
            >
              <div
                className={`${proc.imageAspect || "aspect-[4/3]"} w-full overflow-hidden bg-champagne`}
              >
                <img
                  src={proc.image}
                  alt={proc.imageAlt}
                  className={`h-full w-full object-cover ${proc.imagePosition || "object-center"}`}
                  loading="lazy"
                />
              </div>

              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-2xl font-bold text-marrom-profundo">{proc.name}</h3>
                <p className="mt-1 text-sm font-semibold text-caramelo">{proc.subtitle}</p>

                <p className="mt-4 text-[15px] leading-relaxed text-marrom-profundo/80">
                  {proc.description}
                </p>

                <div className="mt-6 border-t border-dourado/40 pt-5">
                  {proc.highlightsTitle && (
                    <h4 className="mb-3 text-sm font-bold text-marrom-profundo">
                      {proc.highlightsTitle}
                    </h4>
                  )}
                  <ul className="space-y-2.5">
                    {proc.highlights.map((item) => (
                      <li
                        key={item.label || item.value}
                        className="flex items-start gap-2.5 text-sm text-marrom-profundo/85"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-caramelo" />
                        <span>
                          {item.label ? (
                            <>
                              <strong className="font-semibold text-marrom-profundo">
                                {item.label}:
                              </strong>{" "}
                              {item.value}
                            </>
                          ) : (
                            item.value
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-8">
                  <a
                    href={getWhatsAppUrl(proc.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-marrom px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-marrom-profundo focus:outline-none focus-visible:ring-2 focus-visible:ring-marrom focus-visible:ring-offset-2"
                  >
                    <WhatsAppIcon className="h-5 w-5 text-white" />
                    <span>Agendar pelo WhatsApp</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
