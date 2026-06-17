import { motion } from "motion/react";
import { Send, Play, Tv } from "lucide-react";
import { LIVES } from "../data";

export default function ContactCTA() {
  return (
    <section id="lives" className="py-24 bg-[#fafafa] relative overflow-hidden scroll-mt-20 border-b border-zinc-200">
      <div className="w-full max-w-[1240px] mx-auto px-6">
        
        {/* Massive Card Container */}
        <div className="bg-[#008e47] rounded-[36px] overflow-hidden border border-[#00a151] shadow-[0_20px_50px_rgba(0,142,71,0.18)] relative p-8 sm:p-12 lg:p-16">
          {/* Subtle gradient highlights */}
          <div className="absolute top-1/2 left-1/3 w-[350px] h-[350px] rounded-full bg-white/10 blur-[100px] pointer-events-none" />

          {/* Heading */}
          <div className="text-left mb-12 max-w-2xl relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/20 bg-white/10 text-xs text-[#adffc5] mb-6 uppercase tracking-widest font-extrabold font-mono">
              <span className="text-[#adffc5]/90">//</span> Hub de Transmissões
            </span>
            
            <h2 className="text-3xl sm:text-5xl font-light tracking-[-0.04em] leading-[1.05] text-white font-title">
              Esquenta <span className="text-[#adffc5] font-black">BNDES</span>
            </h2>

            <p className="mt-4 text-white/90 text-sm leading-relaxed max-w-[500px] font-sans font-normal">
              Confira os temas e convidados de nossas lives preparatórias virtuais, criadas para decolar a performance das equipes.
            </p>
          </div>

          {/* Lives list container */}
          <div className="space-y-4 relative z-10">
            {LIVES.map((live, idx) => (
              <motion.div
                key={live.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ scale: 1.005 }}
                className="bg-white/95 backdrop-blur-sm border border-[#009e51]/20 rounded-2xl p-5 sm:p-6 text-left flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 transition-all duration-300 hover:bg-white hover:border-[#adffc5] hover:shadow-[0_8px_30px_rgba(173,255,197,0.25)] cursor-pointer"
              >
                {/* Left side info */}
                <div className="flex gap-4 sm:gap-6 items-start sm:items-center">
                  <div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-150 flex flex-col justify-center items-center shrink-0">
                    <span className="text-[10px] font-mono font-black text-[#005782] leading-none uppercase">LIVE</span>
                    <span className="text-sm font-black text-[#008e47] leading-none mt-1">{idx + 1}</span>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <span className="text-[10px] font-mono font-bold tracking-wider text-zinc-400">DATA: {live.date}</span>
                      <span className="w-1 h-1 bg-zinc-300 rounded-full" />
                      <span className="text-[10px] font-mono tracking-wider font-bold text-emerald-600 bg-[#adffc5]/25 border border-emerald-200/50 px-1.5 py-0.5 rounded-md uppercase">Ao vivo gravado</span>
                    </div>
                    <h3 className="text-base font-bold text-zinc-900 tracking-tight font-title leading-snug">
                      {live.theme}
                    </h3>
                  </div>
                </div>

                {/* Return trigger action button */}
                <a
                  href={live.ctaUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="h-9 px-5 rounded-full bg-[#00111d] hover:bg-[#008e47] text-white text-[11px] font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group shrink-0 w-full sm:w-auto"
                >
                  <Play className="w-3.5 h-3.5 fill-white text-white group-hover:scale-110 transition-transform" />
                  Assistir Live
                </a>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
