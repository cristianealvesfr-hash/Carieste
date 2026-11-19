import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { WhatsAppFloat } from "../components/WhatsAppFloat";
import { InstagramFloat } from "../components/InstagramFloat";
import { SITE_CONFIG } from "../config/site";

export function PrivacyPolicy() {
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

        {/* Cartão principal da Política */}
        <article className="rounded-3xl border border-dourado/50 bg-white p-6 shadow-sm sm:p-10 lg:p-12">
          <header className="border-b border-dourado/30 pb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-caramelo">
              LGPD (Lei nº 13.709/2018)
            </span>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-marrom-profundo sm:text-4xl">
              Política de Privacidade
            </h1>
            <p className="mt-2 text-sm text-marrom-profundo/70">
              Última atualização: Novembro de 2026
            </p>
          </header>

          <div className="mt-8 space-y-8 text-[15px] leading-relaxed text-marrom-profundo/85 sm:text-base">
            <section>
              <h2 className="text-xl font-bold text-marrom-profundo">
                1. Compromisso com a sua Privacidade
              </h2>
              <p className="mt-3">
                A <strong>Dra. Carine Sena</strong> valoriza a confiança depositada por seus
                pacientes e visitantes. Esta Política de Privacidade explica de forma transparente
                como os dados pessoais são coletados, utilizados, armazenados e protegidos ao
                utilizar este site institucional, em total conformidade com a{" "}
                <strong>Lei Geral de Proteção de Dados Pessoais (LGPD - Lei Federal nº 13.709/2018)</strong>{" "}
                e com as normas éticas e de sigilo profissional aplicáveis à área da saúde e estética.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-marrom-profundo">
                2. Informações que Coletamos
              </h2>
              <p className="mt-3">
                Coletamos apenas as informações estritamente necessárias para viabilizar o seu
                atendimento e proporcionar uma experiência segura:
              </p>
              <ul className="mt-3 list-inside list-disc space-y-2 pl-2">
                <li>
                  <strong>Dados de contato fornecidos voluntariamente:</strong> Nome, número de
                  telefone celular e eventuais mensagens enviadas por você ao iniciar uma conversa
                  através do nosso canal oficial de agendamento via WhatsApp.
                </li>
                <li>
                  <strong>Dados técnicos de navegação (Cookies essenciais):</strong> Informações
                  básicas de acesso (endereço IP anonimizado, tipo de navegador, páginas visualizadas
                  e data/hora), utilizadas exclusivamente para garantir o correto funcionamento,
                  segurança do site e melhoria técnica da experiência do usuário.
                </li>
              </ul>
              <p className="mt-3 text-sm italic text-marrom-profundo/75">
                Importante: Este site institucional não coleta dados sensíveis de saúde por meio de
                formulários abertos. Todas as anamneses e avaliações clínicas ocorrem exclusivamente
                em ambiente de consulta individualizada e confidencial.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-marrom-profundo">
                3. Finalidade do Tratamento dos Dados
              </h2>
              <p className="mt-3">
                Os dados coletados são tratados exclusivamente para as seguintes finalidades legítimas:
              </p>
              <ul className="mt-3 list-inside list-disc space-y-2 pl-2">
                <li>Atender às suas solicitações de informações, dúvidas e agendamento de horários;</li>
                <li>Confirmar e enviar lembretes sobre horários agendados previamente solicitados;</li>
                <li>Garantir a segurança técnica e prevenir abusos em nossa plataforma online;</li>
                <li>Cumprir obrigações legais, éticas e regulatórias.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-marrom-profundo">
                4. Compartilhamento e Sigilo de Dados
              </h2>
              <p className="mt-3">
                <strong>Não comercializamos, alugamos ou compartilhamos</strong> seus dados pessoais
                com terceiros para fins de marketing ou publicidade. O compartilhamento ocorre
                somente nos casos estritamente necessários para a prestação do serviço (como
                plataformas de comunicação de mensagens autorizadas por você, como o WhatsApp) ou
                quando exigido por lei ou determinação de autoridade competente.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-marrom-profundo">
                5. Uso de Cookies e Tecnologias Semelhantes
              </h2>
              <p className="mt-3">
                Utilizamos cookies técnicos mínimos para memorizar suas preferências (como a
                confirmação do aviso de LGPD) e garantir a estabilidade do site. O mapa interativo
                incorporado na página utiliza o serviço Google Maps, sujeito às políticas de
                privacidade do Google. Você pode desabilitar os cookies nas configurações do seu
                navegador a qualquer momento, sem que isso impeça o acesso ao conteúdo informativo
                do site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-marrom-profundo">
                6. Seus Direitos como Titular de Dados (Art. 18 da LGPD)
              </h2>
              <p className="mt-3">
                Conforme estabelecido pela LGPD, você tem o direito de, a qualquer momento e
                gratuitamente:
              </p>
              <ul className="mt-3 list-inside list-disc space-y-2 pl-2">
                <li>Confirmar a existência de tratamento de seus dados;</li>
                <li>Acessar os dados que temos sobre você;</li>
                <li>Solicitar a correção de dados incompletos, inexatos ou desatualizados;</li>
                <li>Solicitar a eliminação dos dados tratados com o seu consentimento;</li>
                <li>Revogar o consentimento previamente fornecido.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-marrom-profundo">
                7. Canal de Contato com o Encarregado (DPO)
              </h2>
              <p className="mt-3">
                Para exercer seus direitos de titular ou esclarecer qualquer dúvida sobre o
                tratamento de seus dados pessoais, entre em contato diretamente pelo nosso canal
                oficial:
              </p>
              <div className="mt-4 rounded-2xl border border-dourado/40 bg-champagne/40 p-5">
                <p className="font-semibold text-marrom-profundo">{SITE_CONFIG.brandName}</p>
                <p className="mt-1 text-sm text-marrom-profundo/85">
                  Endereço: <strong>{SITE_CONFIG.address}</strong>
                </p>
                <p className="mt-1 text-sm text-marrom-profundo/85">
                  WhatsApp Oficial: <strong>{SITE_CONFIG.whatsappDisplay}</strong>
                </p>
                <p className="mt-1 text-sm text-marrom-profundo/85">
                  Instagram: <strong>{SITE_CONFIG.instagramHandle}</strong>
                </p>
              </div>
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
