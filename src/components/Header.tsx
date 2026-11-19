import { useState } from "react";
import { Menu, X } from "lucide-react";
import { getWhatsAppUrl } from "../config/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

const NAV_LINKS = [
  { label: "Início", href: "/#inicio" },
  { label: "Procedimentos", href: "/#procedimentos" },
  { label: "Resultados", href: "/#resultados" },
  { label: "Sobre Dra. Carine", href: "/#sobre" },
  { label: "Localização", href: "/#localizacao" },
  { label: "Dúvidas", href: "/#duvidas" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-dourado/50 bg-[#EFE4DA]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-container items-center justify-between px-4 py-2.5 sm:px-6 lg:px-8">
        {/* Logotipo original (somente as margens foram recortadas) */}
        <a
          href="/#inicio"
          className="block shrink-0 overflow-hidden rounded-lg shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-marrom"
          aria-label="Carine Sena - Início"
        >
          <img
            src="/images/logo-carine-sena-horizontal.jpg"
            alt="Logo Carine Sena"
            width={964}
            height={680}
            className="h-14 w-auto sm:h-16"
          />
        </a>

        {/* Navegação Desktop */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] font-semibold text-marrom-profundo/85 transition-colors hover:text-marrom focus:outline-none focus-visible:ring-2 focus-visible:ring-marrom"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-marrom px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-marrom-profundo focus:outline-none focus-visible:ring-2 focus-visible:ring-marrom focus-visible:ring-offset-2 sm:inline-flex"
          >
            <WhatsAppIcon className="h-5 w-5 text-white" />
            <span>Agendar horário</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-dourado/50 text-marrom-profundo transition-colors hover:bg-champagne lg:hidden"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {mobileOpen && (
        <div className="border-t border-dourado/30 bg-porcelana px-4 pb-6 pt-3 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Navegação mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-semibold text-marrom-profundo transition-colors hover:bg-champagne/70"
              >
                {link.label}
              </a>
            ))}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-marrom px-5 py-3.5 text-sm font-semibold text-white"
            >
              <WhatsAppIcon className="h-5 w-5 text-white" />
              <span>Agendar pelo WhatsApp</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
