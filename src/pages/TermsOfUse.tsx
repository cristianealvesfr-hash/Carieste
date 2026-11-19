import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { WhatsAppFloat } from "../components/WhatsAppFloat";
import { InstagramFloat } from "../components/InstagramFloat";
import { SITE_CONFIG } from "../config/site";

export function TermsOfUse() {
  return (
    <div className="min-h-screen bg-porcelana text-marrom-profundo">
      <Header />

      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {/* Botão de retorno */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-marrom transition-colors hover:text-marrom-profundo"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Voltar à página inicial</span>
          </Link>
        </div>

        {/* Cartão principal dos Termos */}
        <article className="rounded-3xl border border-dourado/50 bg-white p-6 shadow-sm sm:p-10 lg:p-12">
          <header className="border-b border-dourado/30 pb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-caramelo">
              Regras e Condições
            </span>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-marrom-profundo sm:text-4xl">
              Termos de Uso
            </h1>
            <p className="mt-2 text-sm text-marrom-profundo/70">
              Última atualização: Novembro de 2026
            </p>
          </header>

          <div className="mt-8 space-y-8 text-[15px] leading-relaxed text-marrom-profundo/85 sm:text-base">
            <section>
              <h2 className="text-xl font-bold text-marrom-profundo">
                1. Aceitação dos Termos
              </h2>
              <p className="mt-3">
                Ao acessar e utilizar este site institucional pertencente a{" "}
                <strong>Dra. Carine Sena</strong>, você concorda expressamente em cumprir estes
                Termos de Uso e todas as leis e regulamentos aplicáveis. Caso você não concorde com
                qualquer uma das condições aqui descritas, solicitamos que não continue a navegação.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-marrom-profundo">
                2. Finalidade Exclusivamente Informativa
              </h2>
              <p className="mt-3">
                Todo o conteúdo divulgado neste site, incluindo descrições sobre Botox,
                Bioestimulador de Colágeno, Preenchimento Labial, Microagulhamento, Skinbooster,
                fotos de resultados e orientações gerais, possui{" "}
                <strong>caráter exclusivamente educacional e informativo</strong>.
              </p>
              <p className="mt-3 rounded-2xl border border-dourado/40 bg-champagne/30 p-4 text-sm font-medium">
                As informações deste site <strong>não substituem, em hipótese alguma</strong>, uma
                consulta e avaliação clínica presencial com a Dra. Carine Sena. Cada procedimento
                estético depende de rigorosa análise individualizada de saúde, anatomia, contraindicações
                e expectativas reais.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-marrom-profundo">
                3. Propriedade Intelectual e Uso das Imagens
              </h2>
              <p className="mt-3">
                Todos os direitos autorais, marcas, logotipo original com as iniciais CS, fotografias
                pessoais da Dra. Carine Sena, textos, identidade visual e imagens reais de resultados
                divulgadas com expressa autorização são de propriedade exclusiva da Dra. Carine Sena ou
                licenciados a ela.
              </p>
              <ul className="mt-3 list-inside list-disc space-y-2 pl-2">
                <li>
                  É estritamente proibido copiar, reproduzir, republicar, distribuir, modificar ou
                  utilizar comercialmente qualquer elemento deste site sem prévia autorização por
                  escrito.
                </li>
                <li>
                  O uso indevido de fotografias ou marcas configura violação de direitos autorais e de
                  imagem, passível das medidas judiciais cabíveis.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-marrom-profundo">
                4. Resultados e Variação Individual
              </h2>
              <p className="mt-3">
                Em consonância com as normas éticas da área da saúde e estética, esclarecemos que os
                resultados apresentados nas galerias e descrições do site refletem casos reais
                específicos e não constituem garantia de resultado idêntico para outros pacientes. A
                resposta biológica aos tratamentos varia conforme idade, qualidade tecidual,
                metabolismo, hábitos de vida e cumprimento dos cuidados pós-procedimento.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-marrom-profundo">
                5. Agendamentos e Comunicação via WhatsApp
              </h2>
              <p className="mt-3">
                Os links de agendamento direcionam o usuário para o aplicativo de mensagens WhatsApp
                oficial: <strong>{SITE_CONFIG.whatsappDisplay}</strong>. A confirmação de horários e
                condições de atendimento são formalizadas diretamente pela equipe no momento da
                conversa.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-marrom-profundo">
                6. Links para Plataformas Externas
              </h2>
              <p className="mt-3">
                Este site contém integrações e redirecionamentos para serviços externos, como
                WhatsApp, Instagram, Google Maps e Waze. Não temos controle sobre os termos e
                políticas de privacidade dessas plataformas de terceiros e recomendamos a leitura
                dos termos de cada aplicativo ao utilizá-los.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-marrom-profundo">
                7. Legislação Aplicável e Foro
              </h2>
              <p className="mt-3">
                Estes Termos de Uso são regidos e interpretados em conformidade com as Leis da
                República Federativa do Brasil, em especial o Código de Defesa do Consumidor, o Marco
                Civil da Internet e a Lei Geral de Proteção de Dados (LGPD). Fica eleito o foro da
                comarca de Salvador - BA para dirimir quaisquer controvérsias decorrentes deste termo.
              </p>
            </section>

            <section className="rounded-2xl border border-dourado/40 bg-champagne/40 p-5">
              <p className="font-semibold text-marrom-profundo">Dúvidas sobre os Termos?</p>
              <p className="mt-1 text-sm text-marrom-profundo/85">
                Entre em contato pelo WhatsApp: <strong>{SITE_CONFIG.whatsappDisplay}</strong>
              </p>
            </section>
          </div>
        </article>
      </main>

      <Footer />
      <InstagramFloat />
      <WhatsAppFloat />
    </div>
  );
}
