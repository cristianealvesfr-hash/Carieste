import { SITE_CONFIG } from "../config/site";

export function InstagramFloat() {
  return (
    <a
      href={SITE_CONFIG.instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram @carinesenaesteticafacial"
      className="animate-float-soft-delayed group fixed bottom-[76px] right-[18px] z-50 flex items-center gap-2 rounded-[22%] transition-transform active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DD2A7B] focus-visible:ring-offset-2 sm:bottom-28 sm:right-8 sm:gap-3"
    >
      <span className="inline-block whitespace-nowrap rounded-full border border-black/5 bg-white/95 px-3 py-1.5 text-xs font-semibold text-marrom-profundo shadow-md backdrop-blur-sm transition-transform duration-300 group-hover:-translate-x-1 sm:px-4 sm:py-2 sm:text-sm">
        {SITE_CONFIG.instagramHandle}
      </span>
      <span className="relative flex h-11 w-11 items-center justify-center sm:h-14 sm:w-14">
        {/* Brilho e pulso animado */}
        <span
          aria-hidden="true"
          className="animate-pulse-halo absolute inset-0 rounded-[22%] bg-gradient-to-tr from-[#FEDA75] via-[#DD2A7B] to-[#515BD4]"
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 animate-pulse rounded-[22%] bg-gradient-to-tr from-[#FEDA75] via-[#DD2A7B] to-[#515BD4] opacity-70 blur-md"
        />
        {/* Ícone enviado pela cliente */}
        <img
          src="/images/instagram-float.png"
          alt="Instagram"
          width={256}
          height={256}
          className="relative h-11 w-11 rounded-[22%] shadow-lg shadow-black/25 transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14"
        />
      </span>
    </a>
  );
}
