import { motion } from "motion/react";
import { Sparkles, Calendar, Check } from "lucide-react";
import { TIMELINE } from "../data";

export default function WhyCutTheCode() {
  return (
    <section id="schedule" className="py-24 bg-[#005782] relative overflow-hidden border-b border-white/10 scroll-mt-20">
      
      {/* Decorative gradient light bubbles */}
      <div 
        className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full blur-[150px] opacity-[0.08] pointer-events-none"
        style={{ background: "radial-gradient(circle, #adffc5 0%, transparent 70%)" }}
      />
      <div 
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-[120px] opacity-[0.08] pointer-events-none"
        style={{ background: "radial-gradient(circle, #008e47 0%, transparent 70%)" }}
      />

      <div className="w-full max-w-[1240px] mx-auto px-6 relative z-10 text-left">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Fixed/Sticky Section header */}
          <div className="lg:col-span-4 sticky lg:top-24 flex flex-col items-start text-left">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 text-xs uppercase tracking-widest text-[#adffc5] font-bold mb-6">
              <span>//</span> Calendário do Evento
            </span>
            
            <h2 className="text-4xl sm:text-5xl font-light tracking-[-0.04em] leading-[1.05] text-white font-title">
              Cronograma <br />
              <span className="text-[#adffc5] font-semibold block mt-1">Completo</span>
            </h2>

            <p className="mt-6 text-white/80 text-sm leading-relaxed max-w-[320px] font-sans font-normal">
              Acompanhe a trajetória completa de nossa maratona, desde a etapa preparatória de inscrições até o grande resultado final anunciado pelo BNDES.
            </p>

            {/* Micro badge indicator */}
            <div className="mt-10 p-5 rounded-2xl bg-white border border-[#adffc5]/30 shadow-[0_8px_30px_rgba(0,0,0,0.12)] flex gap-4 items-center w-full max-w-[320px] transition-all duration-300 hover:shadow-[0_12px_35px_rgba(173,255,197,0.15)]">
              <div className="w-9 h-9 rounded-xl bg-[#adffc5]/35 border border-[#008e47]/20 flex items-center justify-center text-[#008e47] shrink-0">
                <Check className="w-5 h-5 text-accent-green stroke-[3]" />
              </div>
              <div>
                <p className="text-[#00111d] font-extrabold text-xs">Etapas Concluídas</p>
                <p className="text-zinc-600 text-[10px] mt-0.5 leading-relaxed font-sans font-medium">Todas as fases foram realizadas e os vencedores premiados.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Beautiful vertical timeline map */}
          <div className="lg:col-span-8 relative pl-6 sm:pl-10 before:absolute before:inset-y-0 before:left-[11px] sm:before:left-[19px] before:w-[2px] before:bg-gradient-to-b before:from-[#adffc5] before:via-[#008e47] before:to-white/10">
            <div className="space-y-10">
              {TIMELINE.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  className="relative flex gap-5 sm:gap-8 text-left group"
                >
                  {/* Circle milestone indicator with check mark */}
                  <div className="absolute -left-[30px] sm:-left-[42px] top-1.5 w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-[#005782] border-2 border-[#adffc5] flex items-center justify-center z-10 shadow-sm transition-all duration-300 group-hover:scale-110">
                    <Check className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#adffc5] stroke-[3]" />
                  </div>

                  {/* Context Block */}
                  <div className="w-full bg-white border border-white/20 rounded-[24px] p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:bg-[#f3faf5] hover:border-[#adffc5] hover:shadow-[0_12px_35px_rgba(173,255,197,0.15)] cursor-pointer">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1.5 mb-2">
                      <h3 className="text-lg font-extrabold text-[#00111d] tracking-tight font-title">
                        {item.title}
                      </h3>
                      {item.date && (
                        <span className="text-[10px] font-black text-[#008e47] bg-[#adffc5]/35 border border-[#008e47]/20 px-2.5 py-1 rounded-md">
                          {item.date}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-zinc-600 font-sans font-medium leading-relaxed">
                      Etapa finalizada com sucesso. Envolvimento direto de mentores oficiais do ecossistema de microcrédito e analistas seniores.
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
