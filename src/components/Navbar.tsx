import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, LogIn, Award } from "lucide-react";
import { NAV_LINKS } from "../data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    
    // Custom mapping of nav keys to actual element IDs
    let targetId = id;
    if (id === "what-is") targetId = "what-is";
    if (id === "schedule") targetId = "schedule";
    if (id === "rules-faq") targetId = "rules-faq";
    if (id === "themes") targetId = "themes";
    if (id === "lives") targetId = "lives";
    if (id === "winners") targetId = "winners";

    const element = document.getElementById(targetId);
    if (element) {
      const offset = 90; // offset for floating navbar
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
    <>
      <motion.nav
        id="navbar"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-[1240px] h-14 rounded-full flex items-center justify-between px-6 bg-white/80 backdrop-blur-xl border border-zinc-200/50 text-zinc-900 shadow-[0_12px_40px_rgba(0,87,130,0.06)]"
      >
        {/* Left Side: BNDES Brand logo */}
        <a 
          href="#home" 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Logo_do_BNDES.svg/1280px-Logo_do_BNDES.svg.png" 
            alt="BNDES Logo" 
            className="h-6 w-auto object-contain shrink-0 transition-all duration-350 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Center Side: Navigation Links */}
        <div className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
              className="text-xs font-semibold text-zinc-650 hover:text-primary transition-all duration-300 relative py-2 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Right Side: Action Triggers (Disabled Inscrições Encerradas) */}
        <div className="flex items-center gap-4">
          <button
            disabled
            className="hidden sm:flex h-9 px-4 text-xs font-semibold rounded-full items-center gap-1 bg-zinc-200 text-zinc-500 border border-zinc-300/40 cursor-not-allowed select-none"
          >
            Inscrições Encerradas
          </button>

          {/* Hamburger mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 px-3 rounded-full border border-zinc-200 bg-zinc-50/50 text-zinc-700 hover:text-primary lg:hidden transition-all duration-300"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Slide-Down Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-x-4 top-24 z-40 bg-white border border-zinc-200 rounded-3xl p-6 shadow-2xl lg:hidden text-zinc-900"
          >
            <div className="flex flex-col gap-4 text-left">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }}
                  className="text-zinc-650 hover:text-primary text-sm font-semibold py-2 border-b border-zinc-100 block"
                >
                  {link.label}
                </a>
              ))}
              
              <div className="pt-2">
                <button
                  disabled
                  className="w-full h-11 bg-zinc-100 border border-zinc-200 text-zinc-400 text-xs font-semibold rounded-2xl flex items-center justify-center gap-2 cursor-not-allowed select-none"
                >
                  Inscrições Encerradas
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Login Interactive Modal Mockup */}
      <AnimatePresence>
        {showLoginModal && (
          <div className="fixed inset-0 min-h-screen z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowLoginModal(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              className="bg-white rounded-[32px] border border-zinc-200 w-full max-w-[400px] p-8 text-left relative z-[101] shadow-2xl"
            >
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Logo_do_BNDES.svg/1280px-Logo_do_BNDES.svg.png" 
                    alt="BNDES Logo" 
                    className="h-5 w-auto object-contain"
                  />
                  <span className="text-[10px] font-mono font-bold tracking-wider text-zinc-400">PORTAL</span>
                </div>
                <button 
                  onClick={() => setShowLoginModal(false)}
                  className="w-8 h-8 rounded-full border border-zinc-250 flex items-center justify-center text-zinc-450 hover:text-zinc-800 hover:bg-zinc-50 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <h3 className="text-xl font-bold text-zinc-900 tracking-tight font-title mb-2">Acesse sua Conta</h3>
              <p className="text-xs text-zinc-500 leading-relaxed mb-6">Insira os dados cadastrados da sua equipe para acessar a área do competidor.</p>

              <div className="space-y-4">
                <div>
                  <label className="block text-[11px] font-bold text-zinc-500 uppercase tracking-wider mb-1">E-mail do líder</label>
                  <input 
                    type="email" 
                    defaultValue="lider@exemplo.com"
                    className="h-11 w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 text-xs text-zinc-900 focus:outline-none focus:border-primary/60 transition-colors" 
                  />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="block text-[11px] font-bold text-zinc-500 uppercase tracking-wider">Senha</label>
                    <a href="#reset" className="text-[10px] text-primary font-bold hover:underline">Esqueceu?</a>
                  </div>
                  <input 
                    type="password" 
                    defaultValue="senha123"
                    className="h-11 w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 text-xs text-zinc-900 focus:outline-none focus:border-primary/60 transition-colors" 
                  />
                </div>
              </div>

              <button 
                onClick={() => setShowLoginModal(false)}
                className="mt-6 w-full h-11 bg-primary hover:bg-[#008e47] text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                Entrar no sistema
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Registration Closed Interactive Modal Mockup */}
      <AnimatePresence>
        {showRegisterModal && (
          <div className="fixed inset-0 min-h-screen z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowRegisterModal(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              className="bg-white rounded-[32px] border border-zinc-200 w-full max-w-[420px] p-8 text-left relative z-[101] shadow-2xl"
            >
              <div className="flex justify-between items-center mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 text-neutral-600 border border-neutral-200 text-[10px] font-mono tracking-wider font-bold">
                  SITUAÇÃO DO ENCONTRO
                </span>
                <button 
                  onClick={() => setShowRegisterModal(false)}
                  className="w-8 h-8 rounded-full border border-zinc-250 flex items-center justify-center text-zinc-450 hover:text-zinc-800 hover:bg-zinc-50 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-zinc-100 border border-zinc-200 flex items-center justify-center mb-6 text-zinc-500">
                <Award className="w-6 h-6 stroke-[1.5]" />
              </div>

              <h3 className="text-2xl font-bold text-zinc-950 tracking-tight font-title mb-2">Inscrições encerradas</h3>
              <p className="text-xs text-[#333333] leading-relaxed mb-6">
                As inscrições oficiais para o **Hackathon Microcrédito BNDES** foram encerradas no dia 03 de outubro. Atualmente, os competidores já se encontram em fase final de avaliação e apresentação de resultados.
              </p>

              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 text-zinc-700 text-xs leading-relaxed mb-6">
                Fique atento à transmissão das lives e ao resultado oficial dos vencedores anunciados nas seções abaixo do portal.
              </div>

              <button 
                onClick={() => setShowRegisterModal(false)}
                className="w-full h-11 bg-zinc-900 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all hover:bg-zinc-800"
              >
                Entendido
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
