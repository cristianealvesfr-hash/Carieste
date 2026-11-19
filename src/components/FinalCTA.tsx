import { getWhatsAppUrl } from "../config/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function FinalCTA() {
  return (
    <section className="bg-porcelana py-16 lg:py-24">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-[#B28E74]/50 bg-gradient-to-br from-[#BA967C] via-[#C6A58D] to-[#D8BFA9] px-6 py-14 text-center shadow-xl shadow-marrom-profundo/10 sm:px-12 lg:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/25 blur-3xl"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold leading-[1.15] tracking-[-0.01em] text-[#3A2B21] sm:text-4xl lg:text-[44px]">
              Vamos agendar o seu horário?
            </h2>
            <p className="mt-4 text-base font-medium text-[#3A2B21]/85 sm:text-lg">
              Fale com a Dra. Carine pelo WhatsApp e tire suas dúvidas.
            </p>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2.5 rounded-full bg-[#4A382C] px-8 py-4 text-base font-bold text-[#FAF6F2] shadow-md transition-colors hover:bg-[#3A2B21] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A382C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#C6A58D]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              <span>Agendar pelo WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
