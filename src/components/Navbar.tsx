import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-full px-6 py-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-aura-accent flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
          </div>
          <span className="font-display font-medium text-lg tracking-tight">AURA</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <a href="#" className="hover:text-white transition-colors">Showcase</a>
          <a href="#" className="hover:text-white transition-colors">Laboratory</a>
          <a href="#" className="hover:text-white transition-colors">Archive</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:block px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition-colors">
            Start Project
          </button>
          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-4 glass rounded-3xl p-6 flex flex-col gap-4"
        >
          <a href="#" className="text-xl font-medium">Showcase</a>
          <a href="#" className="text-xl font-medium">Laboratory</a>
          <a href="#" className="text-xl font-medium">Archive</a>
          <hr className="border-white/10" />
          <button className="w-full py-4 rounded-2xl bg-white text-black font-semibold">
            Start Project
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
}
