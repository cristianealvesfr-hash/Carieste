import { getWhatsAppUrl } from "../config/site";

export function WhatsAppFloat() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar pelo WhatsApp (71) 98389-5252"
      className="animate-float-soft group fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full transition-transform active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 sm:bottom-7 sm:right-7 sm:gap-3"
    >
      <span className="inline-block whitespace-nowrap rounded-full border border-black/5 bg-white/95 px-3 py-1.5 text-xs font-semibold text-marrom-profundo shadow-md backdrop-blur-sm transition-transform duration-300 group-hover:-translate-x-1 sm:px-4 sm:py-2 sm:text-sm">
        Agende seu horário
      </span>
      <span className="relative flex h-12 w-12 items-center justify-center sm:h-16 sm:w-16">
        {/* Pulso animado */}
        <span
          aria-hidden="true"
          className="animate-pulse-halo absolute inset-0 rounded-full bg-[#25D366]/60"
        />
        {/* Ícone enviado pela cliente */}
        <img
          src="/images/whatsapp-float.png"
          alt="WhatsApp"
          width={256}
          height={256}
          className="relative h-12 w-12 rounded-full shadow-lg shadow-black/25 transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16"
        />
      </span>
    </a>
  );
}
