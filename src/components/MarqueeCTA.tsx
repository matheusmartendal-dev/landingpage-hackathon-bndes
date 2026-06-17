import { motion } from "motion/react";

export default function MarqueeCTA() {
  const marqueeItems = Array(8).fill("Hackathon Microcrédito");

  return (
    <section className="relative w-full py-6 bg-accent-green overflow-hidden select-none z-10 border-t border-b border-[#005782]/10 flex items-center">
      <div className="flex whitespace-nowrap min-w-full">
        {/* Track 1 */}
        <div className="flex animate-[slide-left_30s_linear_infinite] items-center gap-12 text-white font-title font-black uppercase text-2xl sm:text-3xl tracking-tight shrink-0">
          {marqueeItems.map((text, i) => (
            <div key={`track1-${i}`} className="flex items-center gap-12 shrink-0">
              <span className="select-none leading-none">
                {text}
              </span>
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Logo_do_BNDES.svg/1280px-Logo_do_BNDES.svg.png" 
                alt="BNDES" 
                className="h-6 w-auto object-contain brightness-0 invert flex-shrink-0 opacity-95"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>

        {/* Track 2 (for continuous seamless looping) */}
        <div className="flex animate-[slide-left_30s_linear_infinite] items-center gap-12 text-white font-title font-black uppercase text-2xl sm:text-3xl tracking-tight shrink-0">
          {marqueeItems.map((text, i) => (
            <div key={`track2-${i}`} className="flex items-center gap-12 shrink-0">
              <span className="select-none leading-none">
                {text}
              </span>
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Logo_do_BNDES.svg/1280px-Logo_do_BNDES.svg.png" 
                alt="BNDES" 
                className="h-6 w-auto object-contain brightness-0 invert flex-shrink-0 opacity-95"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slide-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </section>
  );
}
