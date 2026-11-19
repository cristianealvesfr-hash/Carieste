import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const STORAGE_KEY = "carine_sena_lgpd_consent_v1";

export function LgpdBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verifica se o usuário já consentiu anteriormente (com fallback seguro para modo anônimo)
    let consent: string | null = null;
    try {
      consent = localStorage.getItem(STORAGE_KEY);
    } catch {
      consent = null;
    }
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {
      // Ignora caso o navegador bloqueie armazenamento local
    }
    setIsVisible(false);
  };

  const handleDismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {
      // Ignora caso o navegador bloqueie armazenamento local
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de Privacidade e Termos de Uso"
      className="fixed bottom-4 left-4 right-4 z-[60] mx-auto max-w-4xl animate-in fade-in slide-in-from-bottom-5 duration-300 sm:bottom-6 sm:left-6 sm:right-6 lg:mx-0 lg:left-6 lg:right-auto lg:max-w-3xl"
    >
      <div className="relative rounded-2xl border border-dourado/60 bg-porcelana/95 p-5 pr-12 shadow-2xl backdrop-blur-md sm:p-6 sm:pr-12">
        {/* Botão fechar */}
        <button
          type="button"
          onClick={handleDismiss}
          className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full text-marrom-profundo/70 transition-colors hover:bg-champagne hover:text-marrom-profundo focus:outline-none focus-visible:ring-2 focus-visible:ring-marrom"
          aria-label="Fechar aviso"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3.5">
            {/* Ícone editorial autêntico: Documento de Termos + Cadeado de Privacidade */}
            <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-champagne text-marrom shadow-sm">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-marrom"
                aria-hidden="true"
              >
                {/* Folha/Termos de Uso */}
                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h7" />
                <polyline points="13 2 13 8 19 8" />
                <path d="M19 8v4" />
                <line x1="8" y1="12" x2="11" y2="12" />
                <line x1="8" y1="16" x2="11" y2="16" />
                {/* Cadeado de Privacidade e Proteção de Dados */}
                <rect x="14" y="14" width="7" height="6" rx="1.5" className="fill-porcelana" />
                <path d="M15.5 14v-2a2 2 0 0 1 4 0v2" />
              </svg>
            </div>

            <div className="text-xs leading-relaxed text-marrom-profundo/85 sm:text-sm">
              <p className="font-bold text-marrom-profundo">
                Políticas de Privacidade e Termos de Uso
              </p>
              <p className="mt-1">
                Este site utiliza cookies essenciais e segue a{" "}
                <strong>Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)</strong>. Ao
                continuar navegando, você concorda com a nossa{" "}
                <Link
                  to="/politica-de-privacidade"
                  className="font-semibold text-marrom underline decoration-dourado underline-offset-2 hover:text-marrom-profundo"
                >
                  Política de Privacidade
                </Link>{" "}
                e nossos{" "}
                <Link
                  to="/termos-de-uso"
                  className="font-semibold text-marrom underline decoration-dourado underline-offset-2 hover:text-marrom-profundo"
                >
                  Termos de Uso
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2 sm:self-center">
            <button
              type="button"
              onClick={handleAccept}
              className="w-full rounded-full bg-marrom px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-marrom-profundo focus:outline-none focus-visible:ring-2 focus-visible:ring-marrom sm:w-auto sm:text-sm"
            >
              Concordar e continuar
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
