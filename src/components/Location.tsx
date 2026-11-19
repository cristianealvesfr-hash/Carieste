import { useState } from "react";
import {
  MapPin,
  Building2,
  Navigation,
  Copy,
  Check,
  Clock,
  ExternalLink,
} from "lucide-react";
import { SITE_CONFIG } from "../config/site";

export function Location() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(SITE_CONFIG.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback silencioso caso o navegador bloqueie clipboard
    }
  };

  return (
    <section
      id="localizacao"
      className="relative overflow-hidden border-y border-dourado/40 bg-champagne/65 py-20 lg:py-28"
    >
      {/* Aura sutil na paleta da marca */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-dourado/25 blur-3xl"
      />

      <div className="relative mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Colagem editorial criativa das duas fotos do Ed. CEO */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-[560px]">
              {/* Moldura arquitetônica decorativa atrás das fotos */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-3 -top-3 hidden h-[64%] w-[78%] rounded-[2rem] border border-dourado/75 sm:block"
              />

              {/* Foto principal: Fachada panorâmica Ed. CEO 2539 */}
              <div className="group relative w-[86%] overflow-hidden rounded-[1.75rem] border border-dourado/60 bg-porcelana shadow-xl shadow-marrom-profundo/15 sm:w-[78%]">
                <div className="aspect-[16/15] w-full overflow-hidden">
                  <img
                    src="/images/localizacao-ceo-fachada.jpg"
                    alt="Fachada do Edifício CEO na Av. Tancredo Neves, 2539, Caminho das Árvores, Salvador"
                    width={1024}
                    height={980}
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Selo arquitetônico flutuante: Torre Londres, Sala 1309 */}
              <div className="absolute right-0 top-5 z-20 hidden rounded-2xl border border-dourado/40 bg-marrom-profundo px-5 py-4 text-porcelana shadow-xl shadow-marrom-profundo/25 sm:block">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-dourado">
                  <Building2 className="h-3.5 w-3.5" />
                  <span>Ed. CEO</span>
                </div>
                <p className="mt-1 text-base font-bold leading-tight text-white">
                  {SITE_CONFIG.location.tower}
                </p>
                <p className="mt-0.5 text-sm font-semibold text-champagne/90">
                  {SITE_CONFIG.location.room}
                </p>
              </div>

              {/* Foto secundária sobreposta com moldura de galeria: Acesso principal */}
              <div className="group relative z-10 ml-auto -mt-16 w-[72%] overflow-hidden rounded-[1.75rem] border-[6px] border-porcelana bg-porcelana shadow-2xl shadow-marrom-profundo/20 sm:-mt-32 sm:w-[60%]">
                <div className="aspect-[16/15] w-full overflow-hidden">
                  <img
                    src="/images/localizacao-ceo-entrada.jpg"
                    alt="Entrada principal e rampa de acesso do Edifício CEO, 2539, Salvador-BA"
                    width={1206}
                    height={1135}
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Etiqueta flutuante inferior esquerda: Bairro e Cidade */}
              <div className="relative z-20 mt-4 inline-flex items-center gap-3 rounded-2xl border border-dourado/60 bg-white/95 px-4 py-3 shadow-lg shadow-marrom-profundo/10 backdrop-blur-sm sm:absolute sm:bottom-6 sm:left-0 sm:mt-0">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-champagne text-caramelo">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold leading-tight text-marrom-profundo">
                    {SITE_CONFIG.location.neighborhood}
                  </p>
                  <p className="mt-0.5 text-xs font-semibold text-caramelo">
                    {SITE_CONFIG.location.city}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Informações de endereço, destaques e botões de rota */}
          <div className="lg:col-span-6">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-caramelo">
              Localização privilegiada
            </p>
            <h2 className="mt-2 text-3xl font-bold leading-[1.15] tracking-[-0.01em] text-marrom-profundo sm:text-4xl lg:text-[44px]">
              Onde estamos em Salvador
            </h2>
            <p className="mt-4 text-base leading-relaxed text-marrom-profundo/80 sm:text-[17px]">
              Atendimento em um dos endereços mais tradicionais e de fácil acesso de
              Salvador, no coração do Caminho das Árvores, pensado para oferecer
              conforto, praticidade e acolhimento desde a sua chegada.
            </p>

            {/* Cartão principal de endereço */}
            <div className="mt-7 rounded-2xl border border-dourado/60 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-champagne text-caramelo">
                  <MapPin className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <p className="text-lg font-bold text-marrom-profundo">
                    {SITE_CONFIG.location.building}, {SITE_CONFIG.location.tower},{" "}
                    {SITE_CONFIG.location.room}
                  </p>
                  <p className="mt-1 text-[15px] font-medium text-marrom-profundo/85">
                    {SITE_CONFIG.location.street}
                  </p>
                  <p className="text-[15px] text-marrom-profundo/75">
                    {SITE_CONFIG.location.neighborhood}, {SITE_CONFIG.location.city}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-dourado/40 pt-4">
                <span className="text-xs font-medium text-marrom-profundo/70">
                  Fácil acesso pela Av. Tancredo Neves
                </span>
                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-1.5 rounded-full border border-dourado/60 bg-porcelana px-3.5 py-1.5 text-xs font-semibold text-marrom-profundo transition-colors hover:bg-champagne focus:outline-none focus-visible:ring-2 focus-visible:ring-marrom"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-caramelo" />
                      <span>Endereço copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 text-caramelo" />
                      <span>Copiar endereço</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Destaques de praticidade */}
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-2xl border border-dourado/50 bg-porcelana/80 p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-champagne text-caramelo">
                  <Building2 className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-bold text-marrom-profundo">Ed. CEO Salvador</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-marrom-profundo/75">
                    Estrutura moderna, segura e de referência no Caminho das Árvores.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-dourado/50 bg-porcelana/80 p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-champagne text-caramelo">
                  <Clock className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-bold text-marrom-profundo">Hora marcada</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-marrom-profundo/75">
                    Atendimento individualizado com privacidade e atenção exclusiva.
                  </p>
                </div>
              </div>
            </div>

            {/* Botões de rota */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={SITE_CONFIG.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-marrom px-7 py-4 text-sm font-semibold text-white shadow-md shadow-marrom/20 transition-colors hover:bg-marrom-profundo focus:outline-none focus-visible:ring-2 focus-visible:ring-marrom focus-visible:ring-offset-2 sm:text-base"
              >
                <Navigation className="h-4 w-4" />
                <span>Abrir no Google Maps</span>
              </a>

              <a
                href={SITE_CONFIG.location.wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-marrom/35 bg-white px-7 py-4 text-sm font-semibold text-marrom-profundo transition-colors hover:bg-porcelana focus:outline-none focus-visible:ring-2 focus-visible:ring-marrom sm:text-base"
              >
                <span>Traçar rota no Waze</span>
                <ExternalLink className="h-4 w-4 text-caramelo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
