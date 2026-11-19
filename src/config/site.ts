export const SITE_CONFIG = {
  brandName: "Carine Sena Estética Avançada",
  whatsappNumber: "5571983895252",
  whatsappDisplay: "(71) 98389-5252",
  instagramUrl: "https://www.instagram.com/carinesenaesteticafacial/?hl=pt-br",
  instagramHandle: "@carinesenaesteticafacial",
  address:
    "Av. Tancredo Neves, 2539, Caminho das Árvores, Salvador-BA. Ed. CEO, Torre Londres, sala 1309.",
  location: {
    street: "Av. Tancredo Neves, 2539",
    neighborhood: "Caminho das Árvores",
    city: "Salvador - BA",
    postalCode: "41820-021",
    building: "Ed. CEO",
    tower: "Torre Londres",
    room: "Sala 1309",
    latitude: -12.9793,
    longitude: -38.4521,
    mapsQuery:
      "Ed. CEO Salvador Shopping, Av. Tancredo Neves, 2539, Caminho das Árvores, Salvador - BA, 41820-021",
    googleMapsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Ed.+CEO+Salvador+Shopping,+Av.+Tancredo+Neves,+2539,+Caminho+das+%C3%81rvores,+Salvador+-+BA,+41820-021",
    wazeUrl:
      "https://waze.com/ul?q=Av.%20Tancredo%20Neves%202539%20Caminho%20das%20Arvores%20Salvador%20BA&navigate=yes",
  },
  // Preencher quando confirmado:
  professionalRegistry: "",
};

export type TravelMode = "driving" | "transit" | "walking";

export function getGoogleMapsDirectionsUrl(
  origin?: string,
  travelMode: TravelMode = "driving"
): string {
  const params = new URLSearchParams({
    api: "1",
    destination: SITE_CONFIG.location.mapsQuery,
    travelmode: travelMode,
  });
  if (origin && origin.trim().length > 0) {
    params.set("origin", `${origin.trim()}, Salvador - BA`);
  }
  return `https://www.google.com/maps/dir/?${params.toString()}`;
}

export function getGoogleMapsEmbedUrl(mapType: "m" | "k" = "m"): string {
  const query = encodeURIComponent(SITE_CONFIG.location.mapsQuery);
  return `https://maps.google.com/maps?q=${query}&t=${mapType}&z=${mapType === "k" ? 17 : 16}&ie=UTF8&iwloc=&output=embed`;
}

export function getWhatsAppUrl(customMessage?: string): string {
  const defaultMessage = "Olá, Dra. Carine! Gostaria de agendar um horário.";
  const text = encodeURIComponent(customMessage || defaultMessage);
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`;
}

export interface Procedure {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  showInResults?: boolean;
  description: string;
  highlightsTitle?: string;
  highlights: { label?: string; value: string }[];
  whatsappMessage: string;
}

export const PROCEDURES: Procedure[] = [
  {
    id: "botox",
    name: "Botox",
    subtitle: "Toxina botulínica",
    image: "/images/servico-botox.jpg",
    imageAlt: "Antes e depois de aplicação de botox na testa",
    showInResults: true,
    description:
      "Suaviza linhas de expressão e rugas, como as da testa, entre as sobrancelhas, os pés-de-galinha e as bandas do pescoço. Também pode ser usado para reposicionar as sobrancelhas e ajuda a prevenir novas rugas.",
    highlights: [
      { label: "Começa a agir", value: "entre 3 e 6 dias" },
      { label: "Efeito máximo", value: "por volta de 15 dias" },
      { label: "Duração", value: "de 3 a 6 meses" },
    ],
    whatsappMessage: "Olá, Dra. Carine! Gostaria de agendar um horário para Botox.",
  },
  {
    id: "bioestimulador",
    name: "Bioestimulador de Colágeno",
    subtitle: "Firmeza e qualidade da pele",
    image: "/images/servico-bioestimulador.jpg",
    imageAlt: "Antes e depois com bioestimulador de colágeno",
    showInResults: true,
    description:
      "Produto injetável que estimula a pele a produzir colágeno, elastina e ácido hialurônico de forma natural. Melhora a firmeza, a espessura e a elasticidade da pele, ajudando a combater a flacidez.",
    highlights: [
      { label: "Começa a aparecer", value: "entre 30 e 45 dias" },
      { label: "Efeito máximo", value: "entre 3 e 6 meses" },
      { label: "Duração", value: "de 18 a 24 meses" },
    ],
    whatsappMessage:
      "Olá, Dra. Carine! Gostaria de agendar um horário para Bioestimulador de Colágeno.",
  },
  {
    id: "preenchimento-labial",
    name: "Preenchimento Labial",
    subtitle: "Ácido hialurônico",
    image: "/images/servico-preenchimento-labial.jpg",
    imageAlt: "Resultado de preenchimento labial com ácido hialurônico",
    showInResults: true,
    description:
      "Feito com ácido hialurônico, substância compatível com o organismo e absorvida com o tempo. Dá volume, define o contorno, corrige assimetrias e hidrata os lábios. Pode ser desfeito, se necessário.",
    highlights: [
      { label: "Sessão", value: "de 30 minutos a 1 hora" },
      { label: "Duração", value: "de 6 a 18 meses" },
      { label: "Pós", value: "inchaço leve nos primeiros 3 dias" },
    ],
    whatsappMessage:
      "Olá, Dra. Carine! Gostaria de agendar um horário para Preenchimento Labial.",
  },
  {
    id: "microagulhamento",
    name: "Microagulhamento",
    subtitle: "Renovação celular e estímulo de colágeno",
    image: "/images/servico-microagulhamento.jpg",
    imageAlt: "Dra. Carine Sena realizando procedimento de microagulhamento facial",
    imagePosition: "object-[center_32%]",
    showInResults: false,
    description:
      "O microagulhamento facial é um procedimento estético minimamente invasivo que utiliza microagulhas finas para criar pequenas perfurações controladas na pele. Nosso protocolo inclui limpeza de pele antes do procedimento.",
    highlightsTitle: "Principais Indicações",
    highlights: [
      { value: "Suavização de rugas finas e linhas de expressão." },
      { value: "Melhora da textura, viço e poros dilatados." },
      { value: "Atenuação de cicatrizes de acne e manchas." },
      { value: "Melhora da flacidez leve da face e pescoço." },
    ],
    whatsappMessage:
      "Olá, Dra. Carine! Gostaria de agendar um horário para Microagulhamento.",
  },
  {
    id: "skinbooster",
    name: "Skinbooster",
    subtitle: "Hidratação profunda com ácido hialurônico",
    image: "/images/servico-skinbooster.jpg",
    imageAlt: "Dra. Carine Sena realizando procedimento de skinbooster facial",
    imagePosition: "object-[center_60%]",
    showInResults: false,
    description:
      "Aplicação de microinjeções de ácido hialurônico de baixa densidade (muito mais fluido que o de preenchimento) diretamente nas camadas mais profundas da derme. Promove uma hidratação profunda de dentro para fora, melhora a elasticidade, a firmeza, o viço e suaviza rugas finas, sem alterar o volume ou os traços do rosto.",
    highlights: [
      { label: "Protocolo indicado", value: "cerca de 3 sessões" },
      { label: "Intervalo", value: "de 15 a 30 dias" },
      { label: "Duração", value: "entre 6 e 12 meses" },
    ],
    whatsappMessage:
      "Olá, Dra. Carine! Gostaria de agendar um horário para Skinbooster.",
  },
];

export const FAQ_ITEMS = [
  {
    question: "Como funciona a avaliação?",
    answer:
      "Na avaliação, a Carine conversa com você sobre o que deseja melhorar, analisa o seu rosto e explica quais procedimentos fazem sentido para o seu caso.",
  },
  {
    question: "Como saber qual procedimento é indicado para mim?",
    answer:
      "A indicação é feita na avaliação presencial, de acordo com o seu rosto, a sua pele e o resultado que você busca.",
  },
  {
    question: "Os resultados são iguais para todas as pessoas?",
    answer:
      "Não. O resultado varia de pessoa para pessoa, conforme o organismo, a pele, os hábitos e os cuidados depois do procedimento.",
  },
  {
    question: "Quais cuidados são necessários depois do procedimento?",
    answer:
      "Depende do procedimento. De modo geral, nas primeiras 24 a 48 horas é recomendado evitar sol, exercícios intensos, bebida alcoólica e não mexer na região tratada. Você recebe todas as orientações no dia do atendimento.",
  },
];
