import { getWhatsAppUrl } from "../config/site";

export function WhatsAppFloat() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar pelo WhatsApp (71) 98389-5252"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 sm:bottom-7 sm:right-7"
    >
      <span className="hidden rounded-full border border-black/5 bg-white px-4 py-2 text-sm font-semibold text-marrom-profundo shadow-md transition-transform duration-300 group-hover:-translate-x-1 sm:inline-block">
        Agende seu horário
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center sm:h-16 sm:w-16">
        {/* Pulso animado */}
        <span
          aria-hidden="true"
          className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/50 motion-reduce:animate-none"
        />
        {/* Ícone enviado pela cliente */}
        <img
          src="/images/whatsapp-float.png"
          alt="WhatsApp"
          width={256}
          height={256}
          className="relative h-14 w-14 rounded-full shadow-lg shadow-black/25 transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16"
        />
      </span>
    </a>
  );
}
