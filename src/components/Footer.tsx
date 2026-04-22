import { motion } from 'motion/react';
import { Github, Twitter, Instagram, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-32 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-aura-accent" />
              <span className="font-display font-medium text-lg uppercase">AURA</span>
            </div>
            <p className="text-white/40 text-sm max-w-xs leading-relaxed">
              Redefining digital boundaries through motion, interactive design, and technical excellence.
            </p>
            <div className="flex gap-4">
              <Github size={18} className="text-white/40 hover:text-white cursor-pointer transition-colors" />
              <Twitter size={18} className="text-white/40 hover:text-white cursor-pointer transition-colors" />
              <Instagram size={18} className="text-white/40 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
             <h4 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-6">Navigation</h4>
             <ul className="space-y-3 text-sm font-medium">
               <li><a href="#" className="hover:text-aura-accent transition-colors">Showcase</a></li>
               <li><a href="#" className="hover:text-aura-accent transition-colors">Laboratory</a></li>
               <li><a href="#" className="hover:text-aura-accent transition-colors">Archive</a></li>
               <li><a href="#" className="hover:text-aura-accent transition-colors">Process</a></li>
             </ul>
          </div>

          <div>
             <h4 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-6">Connect</h4>
             <ul className="space-y-3 text-sm font-medium">
               <li><a href="#" className="hover:text-aura-accent transition-colors">Email Us</a></li>
               <li><a href="#" className="hover:text-aura-accent transition-colors">Twitter (X)</a></li>
               <li><a href="#" className="hover:text-aura-accent transition-colors">LinkedIn</a></li>
               <li><a href="#" className="hover:text-aura-accent transition-colors">Dribbble</a></li>
             </ul>
          </div>

          <div className="flex flex-col justify-between items-end">
            <button 
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"
            >
              <ArrowUp size={20} />
            </button>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">
              © 2026 AURA COLLABORATIVE
            </div>
          </div>
        </div>
        
        <div className="relative overflow-hidden pt-12">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[15vw] font-display font-bold leading-none tracking-tighter text-white/5 pointer-events-none select-none whitespace-nowrap"
            >
              AURA INTERACTIVE — AURA INTERACTIVE
            </motion.h2>
        </div>
      </div>
    </footer>
  );
}
