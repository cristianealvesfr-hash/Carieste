import { SITE_CONFIG } from "../config/site";

export function InstagramFloat() {
  return (
    <a
      href={SITE_CONFIG.instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram @carinesenaesteticafacial"
      className="group fixed bottom-24 right-6 z-50 flex items-center gap-3 rounded-[22%] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DD2A7B] focus-visible:ring-offset-2 sm:bottom-28 sm:right-8"
    >
      <span className="hidden rounded-full border border-black/5 bg-white px-4 py-2 text-sm font-semibold text-marrom-profundo shadow-md transition-transform duration-300 group-hover:-translate-x-1 sm:inline-block">
        {SITE_CONFIG.instagramHandle}
      </span>
      <span className="relative flex h-12 w-12 items-center justify-center sm:h-14 sm:w-14">
        {/* Brilho animado */}
        <span
          aria-hidden="true"
          className="absolute inset-0 animate-pulse rounded-[22%] bg-gradient-to-tr from-[#FEDA75] via-[#DD2A7B] to-[#515BD4] opacity-70 blur-md motion-reduce:animate-none"
        />
        {/* Ícone enviado pela cliente */}
        <img
          src="/images/instagram-float.png"
          alt="Instagram"
          width={256}
          height={256}
          className="relative h-12 w-12 rounded-[22%] shadow-lg shadow-black/25 transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14"
        />
      </span>
    </a>
  );
}
