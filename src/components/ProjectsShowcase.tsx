import { motion } from "motion/react";
import { Sparkles, Trophy, Play, Github, Award } from "lucide-react";
import { WINNERS } from "../data";

export default function ProjectsShowcase() {
  const getWinnerBadgeStyles = (position: string) => {
    switch (position) {
      case "1º LUGAR":
        return "bg-[#008e47]/10 border-[#008e47]/30 text-[#008e47] shadow-[0_2px_10px_rgba(0,142,71,0.06)]";
      case "2º LUGAR":
        return "bg-[#005782]/10 border-[#005782]/30 text-[#005782]";
      default:
        return "bg-zinc-100 border-zinc-200 text-zinc-650";
    }
  };

  const getWinnerCardBorder = (position: string) => {
    switch (position) {
      case "1º LUGAR":
        return "border-[#008e47]/40 shadow-[0_15px_40px_rgba(0,142,71,0.04)]";
      case "2º LUGAR":
        return "border-[#005782]/20";
      default:
        return "border-zinc-200/80";
    }
  };

  return (
    <section id="winners" className="relative py-28 bg-white overflow-hidden scroll-mt-20 border-b border-zinc-100">
      
      {/* Huge subtle background brand watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none w-full text-center overflow-hidden z-0">
        <h3 className="text-[14vw] font-black tracking-tighter text-primary/[0.009] uppercase leading-none whitespace-nowrap">
          VENCEDORES 2026
        </h3>
      </div>

      <div className="w-full max-w-[1240px] mx-auto px-6 relative z-10 text-left">
        
        {/* Section Header */}
        <div className="max-w-[700px] mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#008e47]/20 bg-[#008e47]/5 text-xs text-[#008e47] mb-5 uppercase tracking-widest font-bold"
          >
            <span>//</span> Resultados do Júri
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-light tracking-[-0.03em] leading-[1.05] text-zinc-950 font-title"
          >
            Propostas que brilharam na <span className="text-[#005782] font-semibold italic">Grande Final</span>
          </motion.h2>
        </div>

        {/* Winners Layout - Beautiful 3D Podium Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 md:pt-14 md:pb-16 items-stretch">
          {WINNERS.map((winner) => {
            const isFirst = winner.position === "1º LUGAR";
            const isSecond = winner.position === "2º LUGAR";
            const isThird = winner.position === "3º LUGAR";

            // Determine custom classes based on rank
            let wrapperClasses = "";
            let accentBar = null;
            let themeColor = "";
            let btnClass = "";
            let trophyIcon = null;

            if (isFirst) {
              wrapperClasses = "order-1 md:order-2 md:-translate-y-10 md:scale-[1.04] z-20 border-2 border-[#008e47] shadow-[0_30px_70px_rgba(0,142,71,0.15)] bg-white";
              accentBar = <div className="absolute top-0 left-0 right-0 h-2 bg-[#008e47]" />;
              themeColor = "#008e47";
              btnClass = "bg-[#008e47] hover:bg-[#007038] text-white shadow-md hover:shadow-lg";
              trophyIcon = <Trophy className="w-5 h-5 text-[#008e47] animate-bounce" />;
            } else if (isSecond) {
              wrapperClasses = "order-2 md:order-1 md:translate-y-2 z-10 border border-[#005782]/30 shadow-[0_15px_40px_rgba(0,87,130,0.06)] bg-white/95";
              accentBar = <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#005782]" />;
              themeColor = "#005782";
              btnClass = "bg-[#005782] hover:bg-[#004364] text-white";
              trophyIcon = <Award className="w-5 h-5 text-[#005782]" />;
            } else {
              wrapperClasses = "order-3 md:order-3 md:translate-y-8 z-10 border border-zinc-200 shadow-[0_10px_30px_rgba(0,0,0,0.04)] bg-white/90";
              accentBar = <div className="absolute top-0 left-0 right-0 h-1 bg-zinc-300" />;
              themeColor = "#52525b";
              btnClass = "bg-zinc-800 hover:bg-zinc-700 text-white";
              trophyIcon = <Award className="w-5 h-5 text-zinc-400" />;
            }

            return (
              <motion.div
                key={winner.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ 
                  y: isFirst ? -48 : isSecond ? -6 : 24,
                  scale: isFirst ? 1.06 : 1.02,
                  boxShadow: isFirst 
                    ? "0 35px 80px -10px rgba(0, 142, 71, 0.22)" 
                    : isSecond 
                      ? "0 20px 45px -10px rgba(0, 87, 130, 0.12)" 
                      : "0 15px 35px -10px rgba(0, 0, 0, 0.08)"
                }}
                className={`rounded-[32px] p-8 flex flex-col justify-between items-start transition-all duration-300 overflow-hidden relative ${wrapperClasses}`}
              >
                {accentBar}
                
                {/* Visual Glow behind 1st Place */}
                {isFirst && (
                  <div className="absolute -top-12 -left-12 w-32 h-32 bg-[#adffc5]/20 rounded-full blur-2xl pointer-events-none" />
                )}

                <div className="w-full">
                  <div className="flex justify-between items-center w-full mb-6 relative z-10">
                    {/* Position Tag */}
                    <span className={`px-3.5 py-1.5 rounded-full text-[10px] font-mono tracking-wider font-extrabold border ${getWinnerBadgeStyles(winner.position)}`}>
                      {winner.position}
                    </span>
                    
                    {trophyIcon}
                  </div>

                  {/* Team photo */}
                  {winner.photoUrl && (
                    <div className="w-full h-44 rounded-2xl overflow-hidden mb-6 relative group/img shadow-sm border border-zinc-100">
                      <img
                        src={winner.photoUrl}
                        alt={`Equipe ${winner.team}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
                      />
                      {/* Premium Overlay Label for teams */}
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-3 flex justify-between items-end">
                        <span className="text-[9px] font-mono font-bold tracking-widest text-[#adffc5] uppercase drop-shadow-sm">
                          {isFirst ? "PROPOSTA CAMPEÃ" : "FINALISTA PREMIADO"}
                        </span>
                        <Sparkles className={`w-3.5 h-3.5 ${isFirst ? "text-[#adffc5] animate-pulse" : "text-white/60"}`} />
                      </div>
                    </div>
                  )}

                  <h3 className="text-xl sm:text-2xl font-black text-zinc-900 tracking-tight font-title leading-tight mt-2">
                    {winner.team}
                  </h3>

                  {/* Big Prize Tag */}
                  <div className="mt-3.5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#008e47]/5 text-[#008e47] border border-[#008e47]/10 text-xs font-mono font-bold">
                    <Award className="w-4 h-4 text-[#008e47]" />
                    {winner.prize}
                  </div>

                  {/* Description */}
                  <p className="text-zinc-550 text-xs mt-4 leading-relaxed font-sans font-medium">
                    {winner.description}
                  </p>
                </div>

                {/* Action Buttons: Pitch and GitHub */}
                <div className="w-full pt-6 mt-6 border-t border-zinc-100 flex gap-3 relative z-10">
                  <a
                    href={winner.pitchUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex-1 h-10 rounded-full text-[11px] font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 ${btnClass}`}
                  >
                    <Play className="w-3.5 h-3.5 fill-white text-white" />
                    Ver Pitch
                  </a>
                  <a
                    href={winner.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="h-10 px-4 rounded-full border border-zinc-200 hover:border-zinc-800 text-zinc-500 hover:text-zinc-950 flex items-center justify-center gap-1.5 transition-colors"
                    title="Repositório no GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
