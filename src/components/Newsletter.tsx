import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, Mail, Sparkles } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setEmail("");
      setName("");
    }, 1200);
  };

  return (
    <section 
      id="newsletter" 
      className="relative py-24 sm:py-28 bg-[#00111d] text-white overflow-hidden scroll-mt-20 border-b border-white/10"
    >
      {/* Background Image nicely overlayed & blended with optimized high-vibrancy Blue tones */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src="https://images.pexels.com/photos/6804071/pexels-photo-6804071.jpeg?_gl=1*ufog20*_ga*OTU1NjYzNDMwLjE3Nzc3NTkyNTI.*_ga_8JE65Q40S6*czE3ODE2MTgwMTYkbzckZzEkdDE3ODE2MTgxNzAkajYwJGwwJGgw"
          alt="Inclusão e impacto social do microcrédito"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-85 filter brightness-[0.7] contrast-105 saturate-[1.25]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#00111d] via-[#005782]/80 to-[#005782]/35 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[#005782]/20 mix-blend-color" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#00111d] via-transparent to-[#00111d]" />
      </div>

      <div className="w-full max-w-[1240px] mx-auto px-6 relative z-10">
        
        {/* Centered Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#adffc5]/20 bg-[#adffc5]/5 text-xs text-[#adffc5] mb-6 uppercase tracking-widest font-extrabold font-mono">
              <span>//</span> Comunidade Hackathon
            </span>
            
            <h2 className="text-3xl sm:text-5xl font-black tracking-[-0.03em] leading-tight text-white font-title uppercase">
              Cadastre-se e fique <span className="text-[#adffc5] italic">conectado conosco</span>
            </h2>

            <p className="mt-4 text-white/80 text-sm sm:text-base leading-relaxed font-sans font-medium">
              Fique por dentro de tudo o que acontece por aqui!
            </p>
          </motion.div>
        </div>

        {/* Premium Form with beautiful transitions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-xl mx-auto"
        >
          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-[32px] p-8 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#008e47]" />
            
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-5"
                >
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#adffc5] mb-2 text-left">
                      Seu Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Seu Nome"
                      className="w-full h-12 px-4 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/35 focus:outline-none focus:border-[#adffc5] focus:ring-1 focus:ring-[#adffc5]/30 transition-all font-sans text-sm font-medium"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#adffc5] mb-2 text-left">
                      Seu E-mail
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Ex: seuemail@provedor.com"
                        className="w-full h-12 pl-11 pr-4 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/35 focus:outline-none focus:border-[#adffc5] focus:ring-1 focus:ring-[#adffc5]/30 transition-all font-sans text-sm font-medium"
                        required
                      />
                      <Mail className="w-4 h-4 text-white/40 absolute left-4 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full h-12 rounded-xl bg-[#008e47] hover:bg-[#007038] text-white text-xs font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-[#008e47]/20"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Inscrever-se agora
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-[#adffc5]/15 border border-[#adffc5]/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-[#adffc5]" />
                  </div>
                  <h3 className="text-2xl font-black text-white font-title tracking-tight uppercase mb-2">
                    Inscrição Realizada!
                  </h3>
                  <p className="text-white/70 text-sm max-w-sm mx-auto leading-relaxed">
                    Parabéns! Você foi cadastrado com sucesso. Avisaremos sobre todas as novidades e eventos futuros!
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-xs font-mono font-bold text-[#adffc5] hover:underline"
                  >
                    Cadastrar outro e-mail
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
