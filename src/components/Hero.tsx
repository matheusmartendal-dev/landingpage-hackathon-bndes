import { motion } from "motion/react";
import { ArrowRight, Trophy, Handshake, Users, CheckCircle2 } from "lucide-react";

// Paleta institucional usada na dobra inicial
const NAVY = "#17307a";
const GREEN = "#2f9e44";

export default function Hero() {
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

  const heroCards = [
    {
      icon: Trophy,
      title: "R$ 30 mil",
      text: "em premiação total",
    },
    {
      icon: Handshake,
      title: "BNDES & Sai do Papel",
      text: "realização conjunta",
    },
    {
      icon: Users,
      title: "Inclusão financeira",
      text: "mais oportunidades para todos",
    },
    {
      icon: CheckCircle2,
      title: "Evento concluído",
      text: "projetos avaliados e premiados",
    },
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-[#f3f5f8] via-[#f7f8fa] to-white pt-32 sm:pt-36 pb-16 text-zinc-900"
    >
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          {/* Coluna esquerda: título, texto e chamada */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-5 text-left"
          >
            <h1
              className="font-title font-semibold tracking-[-0.02em] leading-[1.08] text-[2.6rem] sm:text-6xl lg:text-[3.6rem] xl:text-[4.1rem]"
              style={{ color: NAVY }}
            >
              Hackathon
              <br />
              Microcrédito
              <br />
              do <span className="font-extrabold" style={{ color: GREEN }}>BNDES</span>
            </h1>

            <p
              className="mt-6 text-base sm:text-lg leading-relaxed font-sans max-w-md"
              style={{ color: NAVY }}
            >
              A maratona de inovação que reuniu talentos de todo o país para criar
              soluções de crédito mais acessíveis, digitais e sustentáveis.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <button
                onClick={() => scrollToSection("winners")}
                className="inline-flex h-12 px-7 text-white text-sm font-semibold rounded-full items-center gap-2.5 transition-all duration-300 shadow-[0_8px_20px_rgba(47,158,68,0.28)] hover:shadow-[0_10px_28px_rgba(47,158,68,0.4)] hover:brightness-110 cursor-pointer"
                style={{ backgroundColor: GREEN }}
              >
                Conheça os vencedores
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollToSection("themes")}
                className="inline-flex h-12 px-2 text-sm font-semibold items-center gap-2 underline-offset-4 hover:underline cursor-pointer"
                style={{ color: NAVY }}
              >
                Ver linhas de desafio
              </button>
            </div>
          </motion.div>

          {/* Coluna direita: composição de fotos em formas orgânicas verde e azul */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-7 relative w-full aspect-[1.28/1] max-h-[520px] max-w-[680px] mx-auto lg:mr-0 select-none"
            aria-hidden="true"
          >
            {/* Folha verde atrás da foto esquerda */}
            <div
              className="absolute left-0 bottom-0 w-[38%] h-[52%]"
              style={{ backgroundColor: GREEN, borderRadius: "100% 0 0 0" }}
            />
            {/* Faixa verde entre as fotos */}
            <div
              className="absolute left-[50%] top-0 w-[30%] h-[62%]"
              style={{ backgroundColor: GREEN, clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0 100%)" }}
            />
            {/* Bloco azul no canto superior direito */}
            <div
              className="absolute right-0 top-0 w-[26%] h-[40%]"
              style={{ backgroundColor: NAVY, borderRadius: "0 0 0 0" }}
            />
            {/* Folha azul na base, entre as fotos */}
            <div
              className="absolute left-[46%] bottom-0 w-[30%] h-[48%]"
              style={{ backgroundColor: NAVY, borderRadius: "0 0 0 100%" }}
            />

            {/* Foto esquerda em arco */}
            <div
              className="absolute left-[17%] top-0 w-[38%] h-full overflow-hidden bg-[#c9d6e8]"
              style={{ borderRadius: "100% 0 0 12% / 46% 0 0 6%" }}
            >
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=900"
                alt=""
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Foto direita arredondada */}
            <div
              className="absolute right-0 top-[5%] w-[43%] h-[90%] overflow-hidden bg-[#cfe3d2]"
              style={{ borderRadius: "50% 50% 46% 54% / 38% 38% 30% 30%" }}
            >
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=900"
                alt=""
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Faixa de destaques logo abaixo da dobra */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mt-10 lg:-mt-2 bg-white rounded-2xl border border-zinc-100 shadow-[0_18px_50px_rgba(23,48,122,0.10)] grid grid-cols-2 md:grid-cols-4"
        >
          {heroCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className={`flex flex-col items-center text-center px-4 py-7 sm:py-8 ${
                  idx % 2 === 1 ? "border-l border-zinc-200/80" : ""
                } ${idx === 2 ? "md:border-l md:border-zinc-200/80" : ""} ${
                  idx > 1 ? "border-t border-zinc-200/80 md:border-t-0" : ""
                }`}
              >
                <Icon className="w-9 h-9 mb-3" strokeWidth={1.5} style={{ color: GREEN }} />
                <h3 className="font-sans text-[15px] sm:text-base font-semibold leading-snug" style={{ color: NAVY }}>
                  {card.title}
                </h3>
                <p className="font-sans text-sm leading-snug mt-0.5" style={{ color: NAVY }}>
                  {card.text}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
