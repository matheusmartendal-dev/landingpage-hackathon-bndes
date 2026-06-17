import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Check, X } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const currentYear = 2023;

  const handleRegister = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      return;
    }
    setIsSubmitting(true);
    setStatus("");

    setTimeout(() => {
      setIsSubmitting(false);
      setStatus("success");
      setEmail("");
    }, 1200);
  };

  return (
    <footer className="bg-[#005782] text-white py-16 border-t border-white/10 relative z-20 overflow-hidden">
      
      {/* Subtle brand background elements */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute -bottom-12 -left-12 w-[350px] h-[350px] rounded-full bg-[#008e47] opacity-[0.12] blur-[80px]" />
        <div className="absolute -top-12 -right-12 w-[350px] h-[350px] rounded-full bg-[#adffc5] opacity-[0.06] blur-[80px]" />
      </div>

      <div className="w-full max-w-[1240px] mx-auto px-6 relative z-10">
        
        {/* UPPER GRID: SITEMAP COLUMNS WITH CANAIS, HACKATHON, SUPORTE, AND CADASTRE-SE OUTCOMES */}
        <div className="grid md:grid-cols-12 gap-10 text-left pb-12 border-b border-white/10 mb-10">
          
          {/* Col 1: Social links */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-[10px] font-black uppercase tracking-widest text-[#adffc5] mb-6">
              [ CANAIS ]
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm font-semibold font-sans text-white/80">
              <li>
                <a 
                  href="https://instagram.com/bndesgovbr" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-[#adffc5] transition-colors flex items-center justify-between group"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[#adffc5] transition-colors" />
                </a>
              </li>
              <li>
                <a 
                  href="https://youtube.com/user/bndes" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-[#adffc5] transition-colors flex items-center justify-between group"
                >
                  <span>YouTube Studio</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[#adffc5] transition-colors" />
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com/company/bndes" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-[#adffc5] transition-colors flex items-center justify-between group"
                >
                  <span>LinkedIn Oficial</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[#adffc5] transition-colors" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.bndes.gov.br" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-[#adffc5] transition-colors flex items-center justify-between group"
                >
                  <span>BNDES Website</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[#adffc5] transition-colors" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: Site links */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-[10px] font-black uppercase tracking-widest text-[#adffc5] mb-6">
              [ HACKATHON ]
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm font-semibold font-sans text-white/80">
              <li><a href="#home" className="hover:text-[#adffc5] transition-colors">Voltar ao topo</a></li>
              <li><a href="#what-is" className="hover:text-[#adffc5] transition-colors">O que é a Maratona</a></li>
              <li><a href="#themes" className="hover:text-[#adffc5] transition-colors">Temas e Desafios</a></li>
              <li><a href="#schedule" className="hover:text-[#adffc5] transition-colors">Cronograma e Etapas</a></li>
            </ul>
          </div>

          {/* Col 3: Legal/Regulations */}
          <div className="md:col-span-2">
            <h4 className="font-mono text-[10px] font-black uppercase tracking-widest text-[#adffc5] mb-6">
              [ SUPORTE ]
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm font-semibold font-sans text-white/80">
              <li><a href="#winners" className="hover:text-[#adffc5] transition-colors">Vencedores</a></li>
              <li><a href="#lives" className="hover:text-[#adffc5] transition-colors">Esquenta BNDES</a></li>
              <li><a href="#rules-faq" className="hover:text-[#adffc5] transition-colors">Dúvidas FAQ</a></li>
              <li><a href="#rules-faq" className="hover:text-[#adffc5] transition-colors">Regulamento</a></li>
            </ul>
          </div>

          {/* Col 4: Newsletter signup wrapper */}
          <div className="md:col-span-4 flex flex-col justify-between gap-4">
            <div>
              <h4 className="font-mono text-[10px] font-black uppercase tracking-widest text-[#adffc5] mb-4">
                [ CADASTRE-SE INOVAÇÃO ]
              </h4>
              <p className="text-xs text-white/75 leading-relaxed mb-6 font-sans">
                Assine para receber novos editais de inovação e resultados futuros da nossa rede de impacto.
              </p>
            </div>

            <form onSubmit={handleRegister} className="relative z-10 w-full">
              <div className="flex items-center bg-white/5 border border-white/10 focus-within:border-[#adffc5] rounded-full p-1 transition-all">
                <input
                  type="email"
                  placeholder="Seu endereço de e-mail"
                  value={email}
                  disabled={isSubmitting || status === "success"}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-10 px-4 text-xs font-sans text-white placeholder-white/40 focus:outline-none bg-transparent"
                />
                
                <button
                  type="submit"
                  disabled={isSubmitting || status === "success"}
                  className="w-10 h-10 rounded-full bg-[#008e47] hover:bg-[#adffc5] text-white hover:text-black shrink-0 flex items-center justify-center font-mono text-xs font-bold transition-all shadow cursor-pointer disabled:opacity-50"
                  title="Fazer cadastro"
                >
                  {isSubmitting ? "..." : "Go"}
                </button>
              </div>

              {/* Minimal notices underneath */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute left-0 right-0 mt-3 p-3 bg-[#008e47]/10 border border-[#008e47]/30 rounded-xl text-white text-[11px] font-semibold text-left flex items-start gap-1.5"
                  >
                    <Check className="w-3.5 h-3.5 mt-0.5 text-[#adffc5] shrink-0" />
                    <span>Inscrito com sucesso!</span>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute left-0 right-0 mt-3 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-200 text-[11px] font-semibold text-left flex items-start gap-1.5"
                  >
                    <X className="w-3.5 h-3.5 mt-0.5 text-red-400 shrink-0" />
                    <span>Insira um e-mail correto.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>

        </div>

        {/* LOWER BAR: BRAND LOGO + LEGAL CREDITS */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-4">
          
          {/* Brand group: White BNDES official logo */}
          <div className="flex items-center gap-3">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Logo_do_BNDES.svg/1280px-Logo_do_BNDES.svg.png" 
              alt="BNDES Logo" 
              className="h-6 w-auto object-contain shrink-0 brightness-0 invert"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Center: Copyright credits and brand associations */}
          <div className="text-center md:text-left">
            <p className="font-mono text-[10px] text-white/80 leading-relaxed font-bold uppercase tracking-wider">
              © {currentYear} BNDES & SAI DO PAPEL // TODOS OS DIREITOS RESERVADOS
            </p>
          </div>

          {/* Right: Legal documents & Developer Signature */}
          <div className="flex flex-col sm:flex-row items-center gap-6 font-mono text-[10px] text-white/50 font-bold uppercase tracking-wider">
            <div className="flex items-center gap-4">
              <a href="https://www.bndes.gov.br" target="_blank" rel="noreferrer" className="hover:text-[#adffc5] transition-colors">
                POLÍTICA DE PRIVACIDADE
              </a>
              <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
              <a href="https://www.bndes.gov.br" target="_blank" rel="noreferrer" className="hover:text-[#adffc5] transition-colors">
                REGULAMENTO
              </a>
            </div>
            
            <div className="h-4 w-px bg-white/10 hidden sm:block" />

            <div className="flex items-center gap-2 text-[10px] text-white/40 normal-case font-sans">
              <span className="font-mono text-[9px] uppercase font-bold tracking-wider">Desenvolvido por:</span>
              <a href="https://saidopapel.com.br" target="_blank" rel="noreferrer" className="hover:opacity-85 transition-opacity">
                <img 
                  src="https://saidopapel.com.br/wp-content/webp-express/webp-images/uploads/2021/03/cropped-Logo-SdP-fundos-escuros.png.webp" 
                  alt="Sai do Papel" 
                  className="h-6 w-auto object-contain filter brightness-100"
                  referrerPolicy="no-referrer"
                />
              </a>
            </div>
          </div>

        </div>

      </div>

    </footer>
  );
}
