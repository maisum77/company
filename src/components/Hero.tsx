import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <section ref={containerRef} className="relative h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 aura-gradient pointer-events-none" />
      
      <motion.div 
        style={{ y, opacity, scale }}
        className="z-10 text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-white/50 mb-8"
        >
          <span className="w-1 h-1 rounded-full bg-aura-accent animate-pulse" />
          The Future of Interactive Design
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-[8rem] lg:text-[10rem] font-display font-bold leading-[0.85] tracking-tighter mb-12"
        >
          CRAFTING<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/20">DIGITAL</span><br />
          <span className="italic font-light opacity-80">AURA</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <p className="max-w-xs text-sm text-white/40 leading-relaxed text-center sm:text-left">
            We build immersive digital identities that blend artistic precision with high-performance engineering.
          </p>
          <div className="flex gap-4">
            <button className="group relative px-8 py-4 rounded-full bg-aura-accent font-semibold overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Explore Work <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
              <motion.div 
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.4 }}
              />
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Elements (Background) */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-aura-accent/10 blur-[120px] pointer-events-none"
      />
      <motion.div 
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-blue-500/10 blur-[120px] pointer-events-none"
      />
    </section>
  );
}
