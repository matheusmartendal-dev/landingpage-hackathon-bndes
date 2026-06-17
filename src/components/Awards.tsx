import { motion } from "motion/react";

export default function Awards() {
  return (
    <section className="py-24 bg-white border-b border-zinc-100 relative overflow-hidden">
      
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 text-center">
        
        {/* Sleek Label */}
        <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest mb-14 font-black">
          REALIZADORES & PARCEIROS ESTRATÉGICOS
        </p>

        {/* Realizadores 2-Column Grid */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          
          {/* BNDES Block */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="bg-zinc-50 border border-zinc-200/90 rounded-[28px] p-8 sm:p-10 text-left transition-all duration-300 flex flex-col justify-between min-h-[240px]"
          >
            <div>
              <div className="mb-6">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Logo_do_BNDES.svg/1280px-Logo_do_BNDES.svg.png" 
                  alt="BNDES logo" 
                  className="h-7 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-xs text-zinc-550 leading-relaxed font-sans font-normal">
                O Banco Nacional de Desenvolvimento Econômico e Social é o principal instrumento de fomento para investimentos de longo prazo na economia brasileira, liderando caminhos para o empreendedorismo e inclusão produtiva.
              </p>
            </div>
          </motion.div>

          {/* Sai do Papel Block */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ y: -4 }}
            className="bg-zinc-50 border border-zinc-200/90 rounded-[28px] p-8 sm:p-10 text-left transition-all duration-300 flex flex-col justify-between min-h-[240px]"
          >
            <div>
              <div className="mb-6">
                <img 
                  src="https://i.imgur.com/iFxDJar.png" 
                  alt="Sai do Papel logo" 
                  className="h-8 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-xs text-zinc-550 leading-relaxed font-sans font-normal">
                Promotores de inovação e aceleração de alto calibre no Brasil, conectando corporações consolidadas, investidores e startups para construir soluções tecnológicas sustentáveis e de alto alcance operacional.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
