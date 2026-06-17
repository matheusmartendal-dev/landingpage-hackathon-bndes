import { useState, ComponentType } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Sparkles, Laptop, Coins, Heart, Lightbulb } from "lucide-react";

// The 4 interest themes with technical, informative details and specific icons
const DEVELOPED_THEMES = [
  {
    id: "theme-1",
    num: "01",
    label: "DESAFIO DIGITAL",
    title: "Desenvolvimento de soluções digitais para microcrédito.",
    description: "Criação de aplicativos e interfaces web simplificadas com fluxos de cadastro ágeis e onboarding intuitivo, focados na facilidade de uso para microempreendedores informais locais.",
    speed1: 7,
    speed2: 11,
    speed3: 15,
    color: "#008e47",
    icon: Laptop
  },
  {
    id: "theme-2",
    num: "02",
    label: "INCLUSÃO FINANCEIRA",
    title: "Ferramentas e tecnologias focadas em inclusão financeira.",
    description: "Sistemas de inteligência de dados alternativos para análise de potencial de faturamento e fluxo de caixa informal, permitindo prover score adequado para pequenos negócios familiares.",
    speed1: 9,
    speed2: 13,
    speed3: 17,
    color: "#005782",
    icon: Coins
  },
  {
    id: "theme-3",
    num: "03",
    label: "EXPERIÊNCIA HUMANIZADA",
    title: "Aprimoramento da experiência das rotas de crédito.",
    description: "Redesenho dos fluxos transacionais e canais de comunicação com uso de inteligência pedagógica financeira para aproximar o tomador e mitigar riscos de inadimplência.",
    speed1: 11,
    speed2: 15,
    speed3: 19,
    color: "#a3e635",
    icon: Heart
  },
  {
    id: "theme-4",
    num: "04",
    label: "INOVAÇÃO APLICADA",
    title: "Novos modelos de negócio e inovação aplicada ao fomento.",
    description: "Metodologias de garantias solidárias digitais e coinvestimento integrado em redes comunitárias locais para alavancar a emancipação financeira dos micronegócios.",
    speed1: 13,
    speed2: 17,
    speed3: 21,
    color: "#008e47",
    icon: Lightbulb
  }
];

interface OrbitingConcentricRingsProps {
  speed1: number;
  speed2: number;
  speed3: number;
  themeColor: string;
  isActive: boolean;
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
}

// Circular orbiting animation representing distinct tech rings with central custom icon
function OrbitingConcentricRings({ speed1, speed2, speed3, themeColor, isActive, icon: IconComponent }: OrbitingConcentricRingsProps) {
  return (
    <div className="relative w-36 h-36 mx-auto flex items-center justify-center select-none pointer-events-none mb-6">
      
      {/* Injecting keyframes to guarantee perfect rotation regardless of external CSS state */}
      <style>{`
        @keyframes customSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      {/* Outer Rotating Trail */}
      <div 
        className="absolute w-32 h-32 border border-dashed border-zinc-200/50 rounded-full" 
        style={{ 
          animation: `customSpin ${isActive ? speed1 : speed1 * 1.8}s linear infinite`,
        }}
      />
      <svg 
        className="absolute w-32 h-32" 
        viewBox="0 0 100 100"
        style={{ 
          animation: `customSpin ${isActive ? speed1 : speed1 * 1.8}s linear infinite`,
        }}
      >
        <circle 
          cx="50" 
          cy="50" 
          r="45" 
          stroke={themeColor} 
          strokeWidth="2.5" 
          strokeDasharray="45 155" 
          strokeLinecap="round" 
          fill="none" 
          className="opacity-75"
        />
      </svg>

      {/* Middle Rotating Trail */}
      <div 
        className="absolute w-24 h-24 border border-dashed border-zinc-200/30 rounded-full" 
        style={{ 
          animation: `customSpin ${isActive ? speed2 : speed2 * 1.8}s linear infinite reverse`,
        }}
      />
      <svg 
        className="absolute w-24 h-24" 
        viewBox="0 0 100 100"
        style={{ 
          animation: `customSpin ${isActive ? speed2 : speed2 * 1.8}s linear infinite reverse`,
        }}
      >
        <circle 
          cx="50" 
          cy="50" 
          r="45" 
          stroke="#005782" 
          strokeWidth="2" 
          strokeDasharray="30 110" 
          strokeLinecap="round" 
          fill="none" 
          className="opacity-60"
        />
      </svg>

      {/* Inner Rotating Trail */}
      <div 
        className="absolute w-16 h-16 border border-dashed border-zinc-200/10 rounded-full" 
        style={{ 
          animation: `customSpin ${isActive ? speed3 : speed3 * 1.8}s linear infinite`,
        }}
      />
      <svg 
        className="absolute w-16 h-16" 
        viewBox="0 0 100 100"
        style={{ 
          animation: `customSpin ${isActive ? speed3 : speed3 * 1.8}s linear infinite`,
        }}
      >
        <circle 
          cx="50" 
          cy="50" 
          r="45" 
          stroke="#a3e635" 
          strokeWidth="1.5" 
          strokeDasharray="20 70" 
          strokeLinecap="round" 
          fill="none" 
          className="opacity-85"
        />
      </svg>

      {/* Elevated Core White Outer Circular Shield to hold the thematic Icon */}
      <div className={`
        absolute w-12 h-12 bg-white border border-zinc-200/70 rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-500 z-10
        ${isActive ? 'scale-115 border-[#008e47]/25 ring-4 ring-emerald-500/5' : 'scale-100'}
      `}>
        <IconComponent 
          className={`w-5 h-5 transition-colors duration-450 ${isActive ? 'text-[#008e47]' : 'text-zinc-400'}`} 
          strokeWidth={1.8}
        />
      </div>

      {/* Small notification pulsing beacon on top of the icon shield when active */}
      {isActive && (
        <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white animate-pulse z-20" />
      )}
    </div>
  );
}

export default function ThemesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : DEVELOPED_THEMES.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < DEVELOPED_THEMES.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="themes" className="relative py-28 bg-[#fafafa] overflow-hidden border-b border-zinc-150 scroll-mt-20">
      
      {/* Structural technical grid backdrop lines */}
      <div className="absolute inset-y-0 left-1/4 w-px bg-zinc-200/40 pointer-events-none" />
      <div className="absolute inset-y-0 right-1/4 w-px bg-zinc-200/40 pointer-events-none" />
      
      {/* Decorative localized glow representing identity */}
      <div 
        className="absolute bottom-0 right-[25%] w-[450px] h-[450px] rounded-full blur-[140px] opacity-[0.035] pointer-events-none"
        style={{ background: "radial-gradient(circle, #008e47 0%, transparent 70%)" }}
      />

      <div className="w-full max-w-[1240px] mx-auto px-6 relative z-10 text-left">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-2 sm:mb-16 gap-6">
          <div className="max-w-[650px]">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-550/20 bg-emerald-50 text-emerald-800 text-[10px] font-mono tracking-widest uppercase font-bold mb-4"
            >
              <span>//</span> 
              Pilares de Inovação Social
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl font-light tracking-[-0.03em] leading-[1.05] text-zinc-950 font-title"
            >
              Temas de <span className="text-[#005782] font-semibold italic">Interesse</span>
            </motion.h2>
            <p className="text-zinc-500 text-xs sm:text-sm mt-3 font-normal font-sans max-w-sm">
              As linhas de trabalho oficiais propostas para orientar o desenvolvimento tecnológico dos competidores na Maratona BNDES.
            </p>
          </div>

          {/* Simple slide navigation trigger indicators */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-700 flex items-center justify-center transition-all cursor-pointer shadow-sm hover:shadow active:scale-95"
              aria-label="Tema anterior"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <span className="font-mono text-xs text-zinc-400 select-none">
              <span className="text-zinc-900 font-bold">0{activeIndex + 1}</span> / 04
            </span>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-700 flex items-center justify-center transition-all cursor-pointer shadow-sm hover:shadow active:scale-95"
              aria-label="Próximo tema"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* COMPREHENSIVE SCALE-UP CAROUSEL SYSTEM */}
        <div className="relative w-full overflow-hidden py-4">
          <div className="relative flex justify-center items-center min-h-[520px] w-full">
            
            <div className="relative flex items-center justify-center w-full max-w-5xl">
              
              {/* Flanking Arrow Button (Left) */}
              <button
                onClick={handlePrev}
                className="absolute left-1 sm:left-4 z-40 w-10 h-10 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 active:scale-95 text-zinc-700 flex items-center justify-center transition-all cursor-pointer shadow-md hover:shadow-lg"
                aria-label="Tema anterior"
              >
                <ArrowLeft className="w-5 h-5 pointer-events-auto" />
              </button>

              {/* Responsive card track with dynamic Framer-Motion positioning */}
              <div className="flex gap-4 sm:gap-6 md:gap-8 items-center justify-center w-full px-12 sm:px-16">
                {DEVELOPED_THEMES.map((theme, index) => {
                  const isActive = index === activeIndex;
                  const isPrev = (index === activeIndex - 1) || (activeIndex === 0 && index === DEVELOPED_THEMES.length - 1);
                  const isNext = (index === activeIndex + 1) || (activeIndex === DEVELOPED_THEMES.length - 1 && index === 0);

                  // Keep only adjacent or active themes visible on mobile for ultimate responsive safety
                  const isVisible = isActive || isPrev || isNext;

                  if (!isVisible) return null;

                  return (
                    <motion.div
                      key={theme.id}
                      onClick={() => setActiveIndex(index)}
                      layout
                      initial={{ scale: 0.9, opacity: 0.5 }}
                      animate={{
                        scale: isActive ? 1.04 : 0.88,
                        opacity: isActive ? 1 : 0.55,
                        zIndex: isActive ? 30 : 10,
                        backgroundColor: isActive ? "#ffffff" : "#f5f6f9",
                        borderColor: isActive ? "rgba(0,142,71,0.18)" : "rgba(228,231,235,0.7)",
                        boxShadow: isActive 
                          ? "0 25px 50px -12px rgba(0, 142, 71, 0.08), 0 0 0 1px rgba(0, 142, 71, 0.03)" 
                          : "0 4px 6px -1px rgba(0, 0, 0, 0.01)"
                      }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 120, 
                        damping: 20 
                      }}
                      className={`
                        shrink-0 rounded-[32px] p-6 sm:p-9 cursor-pointer border-2 transition-all duration-300 relative select-none
                        ${isActive ? 'w-[310px] sm:w-[350px] md:w-[380px]' : 'w-[180px] sm:w-[220px] md:w-[240px] hidden sm:block'}
                      `}
                    >
                      {/* Top Header Section contains only Numbers in identity's green as explicitly requested */}
                      <div className="flex justify-between items-start mb-6">
                        <span className={`
                          font-mono font-black italic tracking-tighter text-[#008e47]
                          ${isActive ? 'text-4xl sm:text-5xl' : 'text-3xl text-zinc-400'}
                        `}>
                          {theme.num}
                        </span>

                        {isActive && (
                          <span className="text-[9px] font-mono tracking-wider font-extrabold text-[#005782] bg-blue-50 px-3 py-1 rounded-full uppercase">
                            {theme.label}
                          </span>
                        )}
                      </div>

                      {/* Concentric rotating graphics elements matching reference image with custom icon */}
                      <OrbitingConcentricRings 
                        isActive={isActive} 
                        themeColor={theme.color} 
                        speed1={theme.speed1} 
                        speed2={theme.speed2} 
                        speed3={theme.speed3}
                        icon={theme.icon}
                      />

                      {/* Content Area with progressive information reveals */}
                      <div className="mt-4 text-left">
                        {isActive ? (
                          <motion.div
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 }}
                          >
                            <h3 className="text-base sm:text-lg font-bold font-title text-zinc-950 leading-snug">
                              {theme.title}
                            </h3>
                            <p className="text-[11px] sm:text-xs text-zinc-500 font-sans leading-relaxed mt-3">
                              {theme.description}
                            </p>
                          </motion.div>
                        ) : (
                          <div>
                            <h3 className="text-xs sm:text-sm font-semibold text-zinc-700 leading-snug truncate">
                              {theme.title}
                            </h3>
                            <span className="text-[9px] font-mono text-zinc-400 uppercase mt-1 inline-block">[ SELECIONAR ]</span>
                          </div>
                        )}
                      </div>

                      {/* Accent green tag line at the card bottom for focused highlight */}
                      <div className={`
                        absolute bottom-0 left-8 right-8 h-[3px] rounded-t-full bg-accent-green transition-opacity duration-300
                        ${isActive ? 'opacity-100' : 'opacity-0'}
                      `} />
                    </motion.div>
                  );
                })}
              </div>

              {/* Flanking Arrow Button (Right) */}
              <button
                onClick={handleNext}
                className="absolute right-1 sm:right-4 z-40 w-10 h-10 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 active:scale-95 text-zinc-700 flex items-center justify-center transition-all cursor-pointer shadow-md hover:shadow-lg"
                aria-label="Próximo tema"
              >
                <ArrowRight className="w-5 h-5 pointer-events-auto" />
              </button>

            </div>

          </div>
        </div>

        {/* Carousel slide dots controller */}
        <div className="flex justify-center items-center gap-1.5 mt-8 select-none">
          {DEVELOPED_THEMES.map((theme, index) => (
            <button
              key={theme.id}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                index === activeIndex ? "w-8 bg-[#008e47]" : "w-2.5 bg-zinc-200 hover:bg-zinc-350"
              }`}
              title={`Ver tema ${theme.num}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
