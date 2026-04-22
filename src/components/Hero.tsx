import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-end px-12 pb-24 border-b border-white/20">
      <div className="grain"></div>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-10">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-6xl md:text-8xl lg:text-[120px] uppercase leading-[0.9] tracking-tighter text-on-background"
          >
            WE BUILD THE <span className="text-aura-accent">FUTURE</span> OF INTELLIGENCE.
          </motion.h1>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-12 items-end">
        <div className="col-span-12 md:col-span-4 font-mono text-sm uppercase text-on-surface-variant">
          Architecting autonomy for the next web.<br/>Swiss engineering. Punk aesthetics.
        </div>
        <div className="col-span-12 md:col-span-8 flex justify-end">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="text-aura-accent text-6xl" />
          </motion.div>
        </div>
      </div>

      {/* Stats Section (Full Width) */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/20 mt-24">
        <div className="p-12 border-b md:border-b-0 md:divider-x group hover:bg-aura-accent transition-colors duration-500 cursor-pointer">
          <div className="font-mono text-sm uppercase mb-4 group-hover:text-white">Reliability</div>
          <div className="font-mono text-6xl group-hover:text-white">99% UPTIME</div>
        </div>
        <div className="p-12 border-b md:border-b-0 md:divider-x group hover:bg-aura-accent transition-colors duration-500 cursor-pointer">
          <div className="font-mono text-sm uppercase mb-4 group-hover:text-white">Proprietary</div>
          <div className="font-mono text-6xl group-hover:text-white">12+ MODELS</div>
        </div>
        <div className="p-12 group hover:bg-aura-accent transition-colors duration-500 cursor-pointer">
          <div className="font-mono text-sm uppercase mb-4 group-hover:text-white">Economic Output</div>
          <div className="font-mono text-6xl group-hover:text-white">$50M+ IMPACT</div>
        </div>
      </div>
    </section>
  );
}
