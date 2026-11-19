import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { getWhatsAppUrl, SITE_CONFIG } from "../config/site";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { InstagramIcon as Instagram } from "./InstagramIcon";

const LINKS = [
  { label: "Início", href: "/#inicio" },
  { label: "Procedimentos", href: "/#procedimentos" },
  { label: "Resultados", href: "/#resultados" },
  { label: "Sobre Dra. Carine Sena", href: "/#sobre" },
  { label: "Localização", href: "/#localizacao" },
  { label: "Como Chegar (Mapa)", href: "/#como-chegar" },
  { label: "Dúvidas", href: "/#duvidas" },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#7E6350] to-[#685040] text-[#FAF5F0]">
      <div className="mx-auto max-w-container px-4 pb-28 pt-14 sm:px-6 sm:pb-24 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Marca original */}
          <div className="md:col-span-5">
            <img
              src="/images/logo-carine-sena-horizontal.jpg"
              alt="Logo Carine Sena"
              width={964}
              height={680}
              loading="lazy"
              className="h-28 w-auto rounded-xl shadow-md"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#FAF5F0]/85">
              Estética avançada guiada pela ciência e pelo olhar individualizado.
              Cuidados personalizados para realçar a sua beleza natural em cada fase
              da vida.
            </p>
          </div>

          {/* Navegação */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#EAD5C3]">Navegação</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-[#FAF5F0]/90">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-[#EAD5C3]">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div className="md:col-span-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#EAD5C3]">Contato</h3>
            <div className="mt-4 space-y-3 text-sm">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white transition-colors hover:text-[#EAD5C3]"
              >
                <WhatsAppIcon className="h-5 w-5 text-[#EAD5C3]" />
                <span>{SITE_CONFIG.whatsappDisplay}</span>
              </a>
              {SITE_CONFIG.instagramUrl && (
                <a
                  href={SITE_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-white transition-colors hover:text-[#EAD5C3]"
                >
                  <Instagram className="h-5 w-5 text-[#EAD5C3]" />
                  <span>{SITE_CONFIG.instagramHandle}</span>
                </a>
              )}
              <a
                href={SITE_CONFIG.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 pt-1 text-[#FAF5F0]/90 transition-colors hover:text-[#EAD5C3]"
              >
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#EAD5C3]" />
                <span className="leading-relaxed">
                  {SITE_CONFIG.location.street}, {SITE_CONFIG.location.neighborhood},{" "}
                  <span className="whitespace-nowrap">Salvador-BA.</span>{" "}
                  {SITE_CONFIG.location.building}, {SITE_CONFIG.location.tower},{" "}
                  <span className="whitespace-nowrap">{SITE_CONFIG.location.room}.</span>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-6 text-xs text-[#FAF5F0]/80 sm:flex sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.brandName}. Todos os direitos reservados.
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-4 sm:mt-0">
            <Link
              to="/politica-de-privacidade"
              className="underline transition-colors hover:text-[#EAD5C3]"
            >
              Política de Privacidade (LGPD)
            </Link>
            <span className="text-white/40">•</span>
            <Link
              to="/termos-de-uso"
              className="underline transition-colors hover:text-[#EAD5C3]"
            >
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
