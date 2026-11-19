import { useState } from "react";
import {
  MapPin,
  Navigation,
  Car,
  Bus,
  Footprints,
  Map as MapIcon,
  Layers,
  Copy,
  Check,
  ExternalLink,
  X,
} from "lucide-react";
import {
  SITE_CONFIG,
  getGoogleMapsDirectionsUrl,
  getGoogleMapsEmbedUrl,
  type TravelMode,
} from "../config/site";

const QUICK_NEIGHBORHOODS = [
  "Pituba",
  "Itaigara",
  "Barra",
  "Horto Florestal",
  "Ondina",
  "Alphaville",
];

const TRAVEL_MODES: { id: TravelMode; label: string; icon: typeof Car }[] = [
  { id: "driving", label: "Carro", icon: Car },
  { id: "transit", label: "Transporte", icon: Bus },
  { id: "walking", label: "A pé", icon: Footprints },
];

export function GoogleMapsSection() {
  const [origin, setOrigin] = useState("");
  const [travelMode, setTravelMode] = useState<TravelMode>("driving");
  const [mapType, setMapType] = useState<"m" | "k">("m");
  const [copied, setCopied] = useState(false);

  const directionsUrl = getGoogleMapsDirectionsUrl(origin, travelMode);
  const embedUrl = getGoogleMapsEmbedUrl(mapType);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(SITE_CONFIG.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback silencioso
    }
  };

  return (
    <section
      id="como-chegar"
      aria-labelledby="como-chegar-titulo"
      className="border-t border-dourado/40 bg-champagne/55 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da seção + seletor dinâmico de visualização do mapa */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-caramelo">
              Como chegar • Google Maps
            </p>
            <h2
              id="como-chegar-titulo"
              className="mt-2 text-3xl font-bold leading-[1.15] tracking-[-0.01em] text-marrom-profundo sm:text-4xl lg:text-[42px]"
            >
              Trace sua rota até a clínica
            </h2>
            <p className="mt-3 text-base leading-relaxed text-marrom-profundo/80 sm:text-[17px]">
              Explore o mapa interativo ou informe seu bairro de saída para abrir o
              direcionamento exato no Google Maps até o{" "}
              <strong className="font-semibold text-marrom-profundo">
                Ed. CEO, Torre Londres, sala 1309
              </strong>
              .
            </p>
          </div>

          {/* Alternador dinâmico Mapa / Satélite */}
          <div
            role="group"
            aria-label="Modo de visualização do mapa"
            className="inline-flex w-fit items-center gap-1 rounded-full border border-dourado/60 bg-white p-1 shadow-sm"
          >
            <button
              type="button"
              onClick={() => setMapType("m")}
              aria-pressed={mapType === "m"}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-colors sm:text-sm ${
                mapType === "m"
                  ? "bg-marrom text-white shadow-sm"
                  : "text-marrom-profundo/80 hover:bg-porcelana"
              }`}
            >
              <MapIcon className="h-4 w-4" />
              <span>Mapa</span>
            </button>
            <button
              type="button"
              onClick={() => setMapType("k")}
              aria-pressed={mapType === "k"}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-colors sm:text-sm ${
                mapType === "k"
                  ? "bg-marrom text-white shadow-sm"
                  : "text-marrom-profundo/80 hover:bg-porcelana"
              }`}
            >
              <Layers className="h-4 w-4" />
              <span>Satélite</span>
            </button>
          </div>
        </div>

        {/* Cartão dividido: Planejador dinâmico de rota + Mapa interativo */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-dourado/60 bg-white shadow-xl shadow-marrom-profundo/10">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Painel de direcionamento dinâmico + NAP semântico para SEO local */}
            <div className="flex flex-col justify-between border-b border-dourado/40 p-6 sm:p-8 lg:col-span-5 lg:border-b-0 lg:border-r">
              <div>
                {/* Endereço estruturado com microdados Schema.org (SEO local) */}
                <address
                  itemScope
                  itemType="https://schema.org/PostalAddress"
                  className="rounded-2xl border border-dourado/50 bg-porcelana/80 p-4 not-italic"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-champagne text-caramelo">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <div className="text-sm leading-relaxed text-marrom-profundo/85">
                      <p className="font-bold text-marrom-profundo">
                        {SITE_CONFIG.location.building}, {SITE_CONFIG.location.tower},{" "}
                        {SITE_CONFIG.location.room}
                      </p>
                      <p itemProp="streetAddress">{SITE_CONFIG.location.street}</p>
                      <p>
                        <span>{SITE_CONFIG.location.neighborhood}</span>,{" "}
                        <span itemProp="addressLocality">Salvador</span> -{" "}
                        <span itemProp="addressRegion">BA</span>{" "}
                        <span className="whitespace-nowrap">
                          • CEP <span itemProp="postalCode">{SITE_CONFIG.location.postalCode}</span>
                        </span>
                      </p>
                    </div>
                  </div>
                </address>

                {/* Campo de origem dinâmico */}
                <div className="mt-6">
                  <label
                    htmlFor="maps-origin-input"
                    className="block text-sm font-bold text-marrom-profundo"
                  >
                    De onde você vai sair?{" "}
                    <span className="font-normal text-marrom-profundo/65">(opcional)</span>
                  </label>
                  <div className="relative mt-2">
                    <input
                      id="maps-origin-input"
                      type="text"
                      value={origin}
                      onChange={(e) => setOrigin(e.target.value)}
                      placeholder="Digite seu bairro ou endereço em Salvador..."
                      className="w-full rounded-xl border border-dourado/70 bg-porcelana/50 py-3 pl-4 pr-10 text-sm text-marrom-profundo placeholder:text-marrom-profundo/50 focus:border-marrom focus:bg-white focus:outline-none focus:ring-2 focus:ring-marrom/20"
                    />
                    {origin && (
                      <button
                        type="button"
                        onClick={() => setOrigin("")}
                        aria-label="Limpar endereço de saída"
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full p-1 text-marrom-profundo/60 hover:bg-champagne hover:text-marrom-profundo"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    )}
                  </div>

                  {/* Atalhos rápidos de bairros de Salvador */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {QUICK_NEIGHBORHOODS.map((bairro) => {
                      const isSelected = origin.trim().toLowerCase() === bairro.toLowerCase();
                      return (
                        <button
                          key={bairro}
                          type="button"
                          onClick={() => setOrigin(isSelected ? "" : bairro)}
                          className={`rounded-full border px-3 py-1 text-xs font-semibold transition-colors ${
                            isSelected
                              ? "border-marrom bg-marrom text-white"
                              : "border-dourado/60 bg-porcelana/70 text-marrom-profundo/80 hover:border-marrom/50 hover:bg-champagne"
                          }`}
                        >
                          {bairro}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Seletor dinâmico de meio de transporte */}
                <div className="mt-6">
                  <p className="text-sm font-bold text-marrom-profundo">Como prefere ir?</p>
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    {TRAVEL_MODES.map((mode) => {
                      const Icon = mode.icon;
                      const active = travelMode === mode.id;
                      return (
                        <button
                          key={mode.id}
                          type="button"
                          onClick={() => setTravelMode(mode.id)}
                          aria-pressed={active}
                          className={`flex items-center justify-center gap-1.5 rounded-xl border px-3 py-2.5 text-xs font-semibold transition-colors sm:text-sm ${
                            active
                              ? "border-marrom bg-marrom text-white shadow-sm"
                              : "border-dourado/60 bg-porcelana/60 text-marrom-profundo/85 hover:bg-champagne"
                          }`}
                        >
                          <Icon className="h-4 w-4 shrink-0" />
                          <span>{mode.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Botões de direcionamento direto */}
              <div className="mt-7 space-y-2.5">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-marrom px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-marrom/20 transition-colors hover:bg-marrom-profundo focus:outline-none focus-visible:ring-2 focus-visible:ring-marrom focus-visible:ring-offset-2 sm:text-base"
                >
                  <Navigation className="h-4 w-4 shrink-0" />
                  <span>
                    {origin.trim()
                      ? `Traçar rota saindo de ${origin.trim()}`
                      : "Traçar rota no Google Maps"}
                  </span>
                </a>

                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href={SITE_CONFIG.location.wazeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-full border border-dourado/70 bg-porcelana/70 px-4 py-2.5 text-xs font-semibold text-marrom-profundo transition-colors hover:bg-champagne sm:text-sm"
                  >
                    <span>Abrir no Waze</span>
                    <ExternalLink className="h-3.5 w-3.5 text-caramelo" />
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    className="inline-flex items-center justify-center gap-1.5 rounded-full border border-dourado/70 bg-porcelana/70 px-4 py-2.5 text-xs font-semibold text-marrom-profundo transition-colors hover:bg-champagne sm:text-sm"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-caramelo" />
                        <span>Copiado!</span>
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
            </div>

            {/* Iframe dinâmico do Google Maps */}
            <div className="relative min-h-[380px] bg-champagne lg:col-span-7 lg:min-h-[540px]">
              <iframe
                key={mapType}
                src={embedUrl}
                title="Mapa Google Maps: Dra. Carine Sena, Av. Tancredo Neves, 2539, Ed. CEO, Torre Londres, sala 1309, Caminho das Árvores, Salvador-BA"
                className="h-full min-h-[380px] w-full border-0 lg:min-h-[540px]"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
