import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, Trophy, Landmark, Target, CheckCircle2, ChevronRight, ChevronLeft, Terminal, Sparkles, AlertCircle } from "lucide-react";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"terminal" | "json">("terminal");
  const [typedLineCount, setTypedLineCount] = useState(0);
  const [activeHeroCard, setActiveHeroCard] = useState(0);

  // Dynamic typewriter simulation for realistic tech/console feel
  useEffect(() => {
    const interval = setInterval(() => {
      setTypedLineCount((prev) => (prev < 9 ? prev + 1 : prev));
    }, 450);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const terminalLines = [
    { text: "$ npx initiate-bndes-hackathon-engine", color: "text-zinc-400" },
    { text: "⚡ [SYSTEM] Loading environment coordinates... OK", color: "text-[#008e47]" },
    { text: "✔ Initialized 110 multidisciplinary contestants", color: "text-[#005782]" },
    { text: "✔ Active projects validated on impact guidelines: 28", color: "text-zinc-300" },
    { text: "✔ Generating microcredit models for microentrepreneurs...", color: "text-amber-500" },
    { text: "✔ Evaluation: Financial Feasibility + Technical Scale", color: "text-zinc-300" },
    { text: "✔ [SUCCESS] Jury verdict compiled by specialist bank", color: "text-emerald-400 font-bold" },
    { text: "🏆 Winning concepts chosen for final implementation", color: "text-[#a3e635] font-black" },
    { text: "💰 Total Reward pools unlocked: R$ 30.000,00", color: "text-white font-extrabold" },
  ];

  const jsonCode = `{
  "evento": "Hackathon Microcrédito BNDES",
  "realizacao": ["BNDES", "Sai do Papel"],
  "metricas": {
    "competidores": 110,
    "equipes_finalistas": 12,
    "projetos_entregues": 28
  },
  "premiacao": {
    "total_pago": "R$ 30.000,00",
    "moeda": "BRL",
    "status": "CONCLUÍDO"
  },
  "impacto": "Inclusão Financeira Nacional"
}`;

  const heroCards = [
    {
      id: 0,
      badge: "PREMIAÇÃO TOTAL",
      icon: <Trophy className="w-5 h-5 text-[#adffc5] shrink-0" />,
      title: "R$ 30.000,00",
      bg: "bg-[#008e47] border border-[#008e47]/10",
      accentLine: "bg-[#adffc5]",
      footerLeft: "BNDES // AWARD",
      footerRight: "",
      body: (
        <div className="space-y-2 border-t border-white/15 pt-4 text-[11px] font-mono text-white/95 w-full">
          <div className="flex justify-between items-center bg-white/5 px-2 py-1.5 rounded-lg border border-white/5">
            <span className="text-white/70">1º LUGAR:</span>
            <span className="font-extrabold text-[#adffc5]">R$ 15.000</span>
          </div>
          <div className="flex justify-between items-center px-2 py-1">
            <span className="text-white/70">2º LUGAR:</span>
            <span className="font-bold">R$ 10.000</span>
          </div>
          <div className="flex justify-between items-center px-2 py-1">
            <span className="text-white/70">3º LUGAR:</span>
            <span className="font-bold">R$ 5.000</span>
          </div>
        </div>
      ),
    },
    {
      id: 1,
      badge: "ORGANIZAÇÃO",
      icon: <Landmark className="w-5 h-5 text-[#adffc5] shrink-0" />,
      title: "BNDES & Sai do Papel",
      bg: "bg-[#005782] border border-white/10",
      accentLine: "bg-[#adffc5]",
      footerLeft: "CO-DESIGN",
      footerRight: "BRASIL",
      body: (
        <p className="text-[12px] text-white/85 font-sans font-normal leading-relaxed mt-3 border-t border-white/10 pt-3">
          União estratégica do principal banco de fomento nacional com metodologias ágeis de aceleração corporativa.
        </p>
      ),
    },
    {
      id: 2,
      badge: "COMPROMISSO",
      icon: <Target className="w-5 h-5 text-[#adffc5] shrink-0" />,
      title: "Inclusão Financeira",
      bg: "bg-[#005782] border border-white/10",
      accentLine: "bg-[#adffc5]",
      footerLeft: "SOCIAL IMPACT",
      footerRight: "ESG",
      body: (
        <p className="text-[12px] text-white/85 font-sans font-normal leading-relaxed mt-3 border-t border-white/10 pt-3">
          Democratizar o acesso ao microcrédito e consolidar canais saudáveis para fortalecer produtores locais de baixa renda.
        </p>
      ),
    },
    {
      id: 3,
      badge: "EVENTO CONCLUÍDO",
      icon: <CheckCircle2 className="w-5 h-5 text-[#adffc5] shrink-0" />,
      title: "100% Finalizado",
      bg: "bg-[#005782] border border-white/10",
      accentLine: "bg-[#adffc5]",
      footerLeft: "STATUS // ENDED",
      footerRight: "VERIFIED",
      body: (
        <p className="text-[12px] text-white/85 font-sans font-normal leading-relaxed mt-3 border-t border-white/10 pt-3">
          Maratona de modelagem encerrada. Projetos avaliados pela equipe BNDES e prêmios integralmente pagos.
        </p>
      ),
    },
  ];

  return (
    <section id="home" className="relative min-h-[95vh] pt-36 pb-20 overflow-hidden flex flex-col bg-[#ffffff] text-zinc-900">
      
      {/* BACKGROUND DECORATIVE GLOW SYSTEM */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,142,71,0.05)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(0,87,130,0.06)_0%,transparent_70%)]" />
      </div>

      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10 flex-grow flex flex-col justify-center">
        
        {/* ASYMMETRIC FOLDER DESIGN CONTAINER (Combines Pexels subtle image, Tech theme, and straightforward info) */}
        <div className="relative mt-12 w-full rounded-[32px] rounded-tl-none bg-[#005782] border border-white/10 shadow-[0_30px_70px_rgba(0,87,130,0.3)] text-white">
          
          {/* Physical Tab of the "Folder Aspect" sticking out on the top left */}
          <div className="absolute top-0 left-0 -translate-y-full h-9 bg-[#005782] border-t border-x border-white/10 rounded-t-2xl px-4 sm:px-6 flex items-center gap-2 select-none">
            <Terminal className="w-3.5 h-3.5 text-accent-green" />
            <span className="font-mono text-[9px] text-[#adffc5] uppercase tracking-widest font-extrabold">
              <span className="hidden sm:inline">INICIATIVA </span>HACKATHON BNDES
            </span>
            {/* Folder slanted border cover visual hack */}
            <div className="absolute -right-[17px] bottom-0 w-4 h-9 bg-[#005782] origin-bottom-left skew-x-[22deg] border-r border-t border-white/10" />
          </div>

          {/* Background image styled with Pexels custom subtle opacity in a dark veil */}
          <div className="absolute inset-0 pointer-events-none rounded-[32px] overflow-hidden z-0">
            <img
              src="https://images.pexels.com/photos/7988747/pexels-photo-7988747.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Desenho, gráficos e diagramas nas mãos"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-[0.08] filter brightness-[0.7] contrast-125 saturate-50 mix-blend-overlay"
            />
            {/* Subtle Binary Grid Overlay */}
            <div className="absolute inset-0 z-0 opacity-[0.05] overflow-hidden select-none pointer-events-none font-mono text-[8px] sm:text-[9px] text-white leading-relaxed tracking-[0.25em] p-6 break-all">
              {`01000010 01001110 01000100 01000101 01010011 00100000 01001101 01001001 01000011 01010010 01001111 01000011 01010010 01000101 01000100 01001001 01010100 01001111
01100001 01100011 01100101 01101100 01100101 01110010 01100001 01100011 01100001 01101111 00100000 01101001 01101110 01101111 01110110 01100001 01100011 01110101 01110100 01110100
01010011 01100001 01101001 00100000 01100100 01101111 00100000 01010000 01100001 01110000 01100101 01101100 00100000 01100100 01100101 01110110 01100101 01101100 01101111 01110000
01110100 01100101 01100011 01101000 00100000 01101101 01101001 01100011 01110010 01101111 01100110 01101001 01101110 01100001 01101110 01100011 01100101 01110011 00100000 01100011
01110101 01110100 01110100 01101000 01100101 01100011 01101111 01100100 01100101 00100000 01100110 01101001 01101110 01110100 01100101 01100011 01101000 00100000 01100010 01101110
01000010 01001110 01000100 01000101 01010011 00100000 01001101 01001001 01000011 01010010 01001111 01000011 01010010 01000101 01000100 01001001 01010100 01001111
01100001 01100011 01100101 01101100 01100101 01110010 01100001 01100011 01100001 01101111 00100000 01101001 01101110 01101111 01110110 01100001 01100011 01100011 01101111 00100000
01010011 01100001 01101001 00100000 01100100 01101111 00100000 01010000 01100001 01110000 01100101 01101100 00100000 01100100 01101111 01110110 01100101 01101100 01101111 01110000`.repeat(6)}
            </div>
            {/* Folder layout gradient accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-green via-[#adffc5] to-accent-green opacity-40" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full blur-[130px] bg-accent-green/10" />
          </div>

          {/* Grid contents: Info on left, Terminal debugger on right */}
          <div className="relative z-10 grid lg:grid-cols-12 gap-10 p-4 sm:p-12 lg:p-16 items-center w-full overflow-hidden rounded-[32px]">
            
            {/* Left Side: Information */}
            <div className="lg:col-span-7 text-left flex flex-col justify-center w-full overflow-hidden">

              <h1 className="font-title font-light tracking-[-0.03em] leading-[1.0] text-white text-[2.85rem] xs:text-[3.65rem] sm:text-6.5xl md:text-7.5xl lg:text-[5.75rem] xl:text-8xl select-none">
                Hackathon <br />
                <span className="font-extrabold text-[#adffc5] italic">Microcrédito</span>
              </h1>

              <p className="mt-6 text-[#f0f8ff]/90 text-sm sm:text-base leading-relaxed font-sans font-normal max-w-xl">
                 A maratona oficial de inovação tecnológica que reuniu talentos multidisciplinares para projetar canais de apoio, plataformas digitais fluidas e modelos sustentáveis de crédito orientado no país.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <button
                  onClick={() => scrollToSection("winners")}
                  className="inline-flex h-11 px-6 bg-accent-green hover:bg-[#00a352] text-white text-xs font-mono font-bold uppercase tracking-wider rounded-xl items-center gap-2.5 transition-all duration-300 shadow-[0_4px_15px_rgba(0,142,71,0.2)] hover:shadow-[0_4px_25px_rgba(0,142,71,0.4)] cursor-pointer"
                >
                  Conhecer Vencedores
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => scrollToSection("themes")}
                  className="inline-flex h-11 px-6 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-mono font-bold uppercase tracking-wider rounded-xl items-center transition-colors duration-300 cursor-pointer"
                >
                  Ver Linhas de Desafio
                </button>
              </div>

            </div>

            {/* Right Side: Interactive Code Terminal (O efeito tech requisitado) */}
            <div className="lg:col-span-5 flex flex-col w-full overflow-hidden">
              <div className="w-full bg-[#181920]/95 border border-zinc-700/60 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[380px] text-left">
                
                {/* Terminal Mac-like header tab bar */}
                <div className="bg-[#121319] px-4 py-3 flex items-center justify-between border-b border-zinc-800">
                  <div className="flex items-center gap-1.5 select-none">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  </div>

                  {/* Interchanging Tabs */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveTab("terminal")}
                      className={`px-3 py-1 text-[10px] font-mono tracking-tight font-bold rounded-md transition-colors cursor-pointer ${
                        activeTab === "terminal" ? "bg-[#1f2029] text-white border border-zinc-700/40" : "text-zinc-500 hover:text-zinc-350"
                      }`}
                    >
                      console.sh
                    </button>
                    <button
                      onClick={() => setActiveTab("json")}
                      className={`px-3 py-1 text-[10px] font-mono tracking-tight font-bold rounded-md transition-colors cursor-pointer ${
                        activeTab === "json" ? "bg-[#1f2029] text-white border border-zinc-700/40" : "text-zinc-500 hover:text-zinc-350"
                      }`}
                    >
                      resultado.json
                    </button>
                  </div>

                  <div className="flex items-center font-mono text-[9px] text-[#008e47] font-bold">
                    {/* [ LIVE ] removed */}
                  </div>
                </div>

                {/* Content display */}
                <div className="p-4 sm:p-6 font-mono text-[10px] sm:text-xs leading-relaxed bg-[#14151b] overflow-y-auto h-[260px] w-full overflow-x-hidden">
                  
                  {activeTab === "terminal" ? (
                    <div className="space-y-2 w-full overflow-hidden">
                       {terminalLines.slice(0, typedLineCount).map((line, index) => (
                        <div key={index} className="flex items-start gap-2 min-w-0 w-full overflow-hidden">
                          <span className="text-zinc-650 select-none shrink-0">0{index + 1}</span>
                          <span className={`${line.color} break-all whitespace-pre-wrap min-w-0 flex-1`}>{line.text}</span>
                        </div>
                      ))}

                      {/* Prompt line with beautiful blinking coder cursor */}
                      <div className="flex items-start gap-2 pt-1">
                        <span className="text-zinc-650 select-none">0{Math.min(typedLineCount + 1, 9)}</span>
                        <div className="flex items-center gap-1">
                          <span className="text-zinc-400">&gt;_</span>
                          <motion.span
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ repeat: Infinity, duration: 1 }}
                            className="inline-block w-2 h-4 bg-accent-green"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-1 w-full overflow-hidden">
                      <pre className="text-emerald-400 overflow-x-auto whitespace-pre-wrap break-all text-[10px] sm:text-xs w-full">
                        {jsonCode}
                      </pre>
                    </div>
                  )}

                </div>

                {/* Terminal status bar */}
                <div className="bg-[#121319] px-4 py-2 border-t border-zinc-800 text-[10px] font-mono text-zinc-500 flex justify-between">
                  <span>UTF-8 // SHELL / SH</span>
                  <span className="hover:text-accent-green transition-colors cursor-pointer" onClick={() => setTypedLineCount(0)}>
                    ⟳ RESTART SIMULATION
                  </span>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* 2. INFORMATIVE GRID MATRIX (Sleek, informative layout cards below the fold matching custom editorial tech reference) */}
        
        {/* Desktop and Tablet (> md): Grid Layout */}
        <div className="hidden md:grid grid-cols-4 gap-6 mt-16">
          {heroCards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative ${card.bg} rounded-[28px] p-7 flex flex-col justify-between min-h-[330px] overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group pt-9`}
            >
              {/* Top Accent Stripe */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 ${card.accentLine}`} />

              <div className="flex justify-between items-start mb-4 relative z-10">
                <span className="font-mono text-[9px] uppercase tracking-widest font-black text-white/75 block">
                  {card.badge}
                </span>
                {card.icon}
              </div>

              {/* Content grouped snuggly inside a single flow to prevent unwanted spacing */}
              <div className="relative z-10 text-left flex-grow flex flex-col justify-end">
                <h3 className="font-title text-2xl lg:text-3xl font-extrabold tracking-tight text-white leading-tight mb-4">
                  {card.title}
                </h3>
                {card.body}
              </div>

              <div className="relative z-10 border-t border-white/15 pt-4 mt-6 flex justify-between items-center font-mono text-[9px] text-[#adffc5] tracking-wider font-bold">
                <span>{card.footerLeft}</span>
                {card.footerRight && <span>{card.footerRight}</span>}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile and Tablet (< md): Sliding Carousel with smooth Framer Motion transitions */}
        <div className="block md:hidden mt-10 relative px-2">
          <div className="overflow-hidden relative min-h-[340px] flex items-center justify-center">
            <motion.div
              key={activeHeroCard}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.25 }}
              className={`relative ${heroCards[activeHeroCard].bg} rounded-[28px] p-7 flex flex-col justify-between min-h-[330px] w-full max-w-[380px] overflow-hidden shadow-xl pt-9 mx-auto`}
            >
              {/* Top Accent Stripe */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 ${heroCards[activeHeroCard].accentLine}`} />

              <div className="flex justify-between items-start mb-4 relative z-10">
                <span className="font-mono text-[9px] uppercase tracking-widest font-black text-white/75 block">
                  {heroCards[activeHeroCard].badge}
                </span>
                {heroCards[activeHeroCard].icon}
              </div>

              {/* Content body */}
              <div className="relative z-10 text-left flex-grow flex flex-col justify-end">
                <h3 className="font-title text-2xl font-extrabold tracking-tight text-white leading-tight mb-2">
                  {heroCards[activeHeroCard].title}
                </h3>
                {heroCards[activeHeroCard].body}
              </div>

              <div className="relative z-10 border-t border-white/15 pt-4 mt-6 flex justify-between items-center font-mono text-[9px] text-[#adffc5] tracking-wider font-bold">
                <span>{heroCards[activeHeroCard].footerLeft}</span>
                {heroCards[activeHeroCard].footerRight && <span>{heroCards[activeHeroCard].footerRight}</span>}
              </div>
            </motion.div>
          </div>

          {/* Carousel navigation controls below the card */}
          <div className="flex items-center justify-between max-w-[280px] mx-auto mt-6">
            <button
              onClick={() => setActiveHeroCard((prev) => (prev > 0 ? prev - 1 : heroCards.length - 1))}
              className="w-10 h-10 rounded-full border border-zinc-200 bg-zinc-100 active:bg-zinc-200 text-zinc-600 flex items-center justify-center transition-all cursor-pointer shadow-sm select-none touch-manipulation"
              aria-label="Card anterior"
            >
              <ChevronLeft className="w-5 h-5 text-zinc-600" />
            </button>

            {/* Indicator Dots */}
            <div className="flex justify-center items-center gap-2">
              {heroCards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveHeroCard(index)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    index === activeHeroCard ? "bg-[#008e47]" : "bg-zinc-200 hover:bg-zinc-300"
                  }`}
                  style={{ width: index === activeHeroCard ? "24px" : "8px" }}
                  title={`Ver card ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setActiveHeroCard((prev) => (prev < heroCards.length - 1 ? prev + 1 : 0))}
              className="w-10 h-10 rounded-full border border-zinc-200 bg-zinc-100 active:bg-zinc-200 text-zinc-600 flex items-center justify-center transition-all cursor-pointer shadow-sm select-none touch-manipulation"
              aria-label="Próximo card"
            >
              <ChevronRight className="w-5 h-5 text-zinc-600" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
