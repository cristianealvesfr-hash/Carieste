import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQ_ITEMS, getWhatsAppUrl } from "../config/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="duvidas" className="bg-porcelana py-20 lg:py-28">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Acordeão */}
          <div className="lg:col-span-7">
            <h2 className="border-l-4 border-caramelo pl-4 text-3xl font-bold text-marrom-profundo sm:text-4xl">
              Perguntas Frequentes
            </h2>

            <div className="mt-8 space-y-3">
              {FAQ_ITEMS.map((item, idx) => {
                const isOpen = openIndex === idx;
                const panelId = `faq-panel-${idx}`;
                return (
                  <div key={item.question} className="overflow-hidden rounded-xl">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[15px] font-semibold transition-colors sm:text-base ${
                        isOpen
                          ? "bg-marrom text-white"
                          : "bg-white text-marrom-profundo hover:bg-dourado-claro/40"
                      }`}
                    >
                      <span>{item.question}</span>
                      {isOpen ? (
                        <Minus className="h-4 w-4 shrink-0" />
                      ) : (
                        <Plus className="h-4 w-4 shrink-0 text-marrom" />
                      )}
                    </button>

                    {isOpen && (
                      <div
                        id={panelId}
                        className="border border-t-0 border-dourado/50 bg-white px-5 py-4 text-[15px] leading-relaxed text-marrom-profundo/85"
                      >
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Ainda com dúvidas? */}
          <div className="lg:col-span-5">
            <h3 className="border-l-4 border-caramelo pl-4 text-3xl font-bold text-marrom-profundo sm:text-4xl">
              Ainda com dúvidas?
            </h3>
            <p className="mt-5 text-base leading-relaxed text-marrom-profundo/80">
              Fale agora pelo WhatsApp e receba um atendimento personalizado.
            </p>

            <a
              href={getWhatsAppUrl(
                "Olá! Tenho algumas dúvidas sobre os procedimentos e gostaria de agendar uma avaliação."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-marrom px-6 py-4 text-base font-semibold text-white shadow-sm transition-colors hover:bg-marrom-profundo focus:outline-none focus-visible:ring-2 focus-visible:ring-marrom focus-visible:ring-offset-2 sm:w-auto sm:px-8"
            >
              <WhatsAppIcon className="h-5 w-5 text-white" />
              <span>Falar pelo WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
