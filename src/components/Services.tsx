import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function Services() {
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

  return (
    <section 
      id="what-is" 
      className="relative py-24 sm:py-28 bg-[#00111d] text-white overflow-hidden scroll-mt-20 border-b border-white/10"
    >
      
      {/* Background Image nicely overlayed & blended with optimized high-vibrancy Blue tones */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src="https://images.pexels.com/photos/6804071/pexels-photo-6804071.jpeg?_gl=1*ufog20*_ga*OTU1NjYzNDMwLjE3Nzc3NTkyNTI.*_ga_8JE65Q40S6*czE3ODE2MTgwMTYkbzckZzEkdDE3ODE2MTgxNzAkajYwJGwwJGgw"
          alt="Inclusão e impacto social do microcrédito"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-85 filter brightness-[0.7] contrast-105 saturate-[1.25] transform scale-100 transition-transform duration-700 hover:scale-[1.02]"
        />
        {/* Vibrant blue brand tinting overlay using mix-blend-mode to preserve details but immerse them in deep blue */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00111d] via-[#005782]/80 to-[#005782]/35 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[#005782]/20 mix-blend-color" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#00111d] via-transparent to-[#00111d]" />
      </div>

      <div className="w-full max-w-[1240px] mx-auto px-6 relative z-10">
        
        {/* HEADER SECTION: MODERN BRAND STATEMENT */}
        <div className="text-center md:text-left mb-16 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 text-[#adffc5] rounded-full font-mono text-[9px] tracking-wider uppercase font-black mb-4 border border-white/10">
              // EDUCAÇÃO & COESÃO FINANCEIRA
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-title uppercase tracking-tight text-white leading-tight">
              ENTENDA O <br/>
              <span className="text-[#adffc5] italic">HACKATHON</span>
            </h2>
          </motion.div>
        </div>

        {/* CONTENT GRID: INFORMATIVE SPLIT CARDS (HACKATHON VS MICROCREDIT) */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left card: O QUE FOI O EVENTO (Informational) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative bg-white/5 border border-white/10 backdrop-blur-md rounded-[32px] p-8 sm:p-10 flex flex-col justify-between min-h-[360px] shadow-xl group overflow-hidden"
          >
            {/* Top Accent Stripe in BNDES Green */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#008e47]" />
            
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#008e47] uppercase font-bold block mb-4">
                01 // MARATONA DE DESENVOLVIMENTO
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-title text-white uppercase tracking-tight mb-4 group-hover:text-[#adffc5] transition-colors">
                O QUE FOI O HACKATHON?
              </h3>
              
              <div className="space-y-4 text-sm text-white/80 font-sans font-normal leading-relaxed">
                <p>
                  O <strong className="text-white">Hackathon Microcrédito BNDES</strong> foi uma maratona nacional intensiva de cooperação, tecnologia e modelagem de negócios promovida pelo BNDES em parceria com a Sai do Papel.
                </p>
                <p>
                  O evento uniu programadores, designers, pesquisadores e pensadores de impacto em um ecossistema focado em co-criar protótipos funcionais, visando descentralizar e baratear o acesso a soluções reais de fomento.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex justify-between items-center text-[10px] font-mono text-[#adffc5] font-bold">
              <span>REALIZAÇÃO BNDES & SDP</span>
              <span className="px-2.5 py-1 bg-white/10 rounded-full text-white text-[9px] uppercase tracking-wider">CONCLUÍDO</span>
            </div>
          </motion.div>

          {/* Right card: O QUE É O MICROCRÉDITO (Highlighted with strong visual emphasis) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-6 relative bg-[#008e47] border border-emerald-400/30 backdrop-blur-md rounded-[32px] p-8 sm:p-10 flex flex-col justify-between min-h-[360px] shadow-2xl group overflow-hidden"
          >
            {/* Top Accent Stripe in vibrant mint */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#adffc5]" />
            
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#adffc5] uppercase font-black block mb-4">
                02 // ENFÂSE CONCEITUAL
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-title text-white uppercase tracking-tight mb-4 group-hover:text-[#adffc5] transition-colors">
                O QUE É O MICROCRÉDITO?
              </h3>
              
              <div className="space-y-4 text-sm text-white font-sans font-normal leading-relaxed">
                <p>
                  O <strong className="text-[#adffc5]">microcrédito</strong> é a concessão de recursos financeiros de pequeno valor focados em apoiar pequenos produtores, microempreendedores de baixa renda e trabalhadores autônomos informais.
                </p>
                <p>
                  Ele se diferencia das linhas bancárias comuns por ser <strong className="text-[#adffc5]">produtivo e orientado</strong>: o capital é integrado a ações de assistência técnica e capacitação para assegurar que cada centavo gere renda, estimule empregos e crie autonomia econômica.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/15 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-mono">
              <span className="text-[#adffc5] font-black tracking-wider">INCLUSÃO SOCIAL REAL</span>
              <button 
                onClick={() => scrollToSection("themes")}
                className="px-4 py-2 bg-white text-black hover:bg-[#adffc5] hover:text-black rounded-xl font-mono text-[9px] font-black tracking-widest transition-all cursor-pointer uppercase flex items-center gap-1 shrink-0 shadow-sm"
              >
                VER DIFERENCIAIS
                <ArrowUpRight className="w-3.5 h-3.5 text-black" />
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
