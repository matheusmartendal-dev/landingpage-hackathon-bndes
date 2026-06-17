import { 
  NavLink, 
  TemaItem, 
  TimelineItem, 
  LiveItem, 
  WinnerItem 
} from "./types";

export const NAV_LINKS: NavLink[] = [
  { id: "home", label: "Home", href: "#home" },
  { id: "what-is", label: "O que é o Hackathon?", href: "#what-is" },
  { id: "themes", label: "Temas", href: "#themes" },
  { id: "schedule", label: "Cronograma", href: "#schedule" },
  { id: "lives", label: "Esquenta BNDES", href: "#lives" },
  { id: "winners", label: "Vencedores", href: "#winners" },
  { id: "rules-faq", label: "Regulamento & FAQ", href: "#rules-faq" }
];

export const THEMES: TemaItem[] = [
  { id: "theme-1", num: "01", title: "Desenvolvimento de soluções digitais para microcrédito." },
  { id: "theme-2", num: "02", title: "Ferramentas e tecnologias focadas em inclusão financeira." },
  { id: "theme-3", num: "03", title: "Aprimoramento da experiência dos usuários e processos." },
  { id: "theme-4", num: "04", title: "Novos modelos de negócio e inovação aplicada ao setor." }
];

export const TIMELINE: TimelineItem[] = [
  { id: "step-1", title: "Inscrições", date: "Julho/Agosto", status: "completed" },
  { id: "step-2", title: "Divulgação dos selecionados", date: "Setembro", status: "completed" },
  { id: "step-3", title: "Lives preparatórias", date: "Outubro", status: "completed" },
  { id: "step-4", title: "Desenvolvimento dos projetos", date: "Outubro", status: "completed" },
  { id: "step-5", title: "Avaliação final", date: "Novembro", status: "completed" },
  { id: "step-6", title: "Resultado", date: "Novembro", status: "completed" }
];

export const LIVES: LiveItem[] = [
  { id: "live-1", number: "Live 1", date: "04/10", theme: "Desafios das operações de microcrédito", ctaUrl: "https://www.bndes.gov.br/arquivos/inovacao-aberta/live_1.mp4" },
  { id: "live-2", number: "Live 2", date: "05/10", theme: "Como a tecnologia pode alavancar o Microcrédito no Brasil", ctaUrl: "https://www.bndes.gov.br/arquivos/inovacao-aberta/live_2.mp4" },
  { id: "live-3", number: "Live 3", date: "06/10", theme: "Desenvolvimento e inovação no mercado de Microcrédito", ctaUrl: "https://www.bndes.gov.br/arquivos/inovacao-aberta/live_3.mp4" },
  { id: "live-4", number: "Live 4", date: "07/10", theme: "Análise de Evento", ctaUrl: "https://www.bndes.gov.br/arquivos/inovacao-aberta/live_4.mp4" },
  { id: "live-5", number: "Live 5", date: "08/10", theme: "Encerramento", ctaUrl: "https://www.bndes.gov.br/arquivos/inovacao-aberta/live_5.mp4" }
];

export const WINNERS: WinnerItem[] = [
  {
    id: "win-1",
    position: "1º LUGAR",
    team: "TIME 17 — Rede Microcred",
    prize: "PRÊMIO: R$ 15.000,00",
    description: "Plataforma avançada de descentralização e análise integrada de dados de tomadores de microcrédito.",
    pitchUrl: "https://www.youtube.com/watch?v=-GCG_-z2FXk",
    githubUrl: "https://dudamello.github.io/rede-microcred/",
    photoUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "win-2",
    position: "2º LUGAR",
    team: "Time 10 — Yunus",
    prize: "PRÊMIO: R$ 10.000,00",
    description: "Solução inclusiva baseada em interfaces simplificadas e IA generativa para acesso facilitado ao crédito.",
    pitchUrl: "https://www.youtube.com/watch?v=O6r_rfNUumA",
    githubUrl: "https://github.com/Leofariasrj25/bndes-hackathon",
    photoUrl: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "win-3",
    position: "3º LUGAR",
    team: "Time 13 — Comunicred",
    prize: "PRÊMIO: R$ 5.000,00",
    description: "Sistema ágil de engajamento do produtor e acompanhamento gamificado de empréstimos produtivos orientados.",
    pitchUrl: "https://www.youtube.com/watch?v=_NFQ1pE2O6o",
    githubUrl: "https://github.com/itsaleplets/comunicred",
    photoUrl: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=600"
  }
];
