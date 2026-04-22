/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import InteractiveSection from './components/InteractiveSection';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative selection:bg-aura-accent selection:text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-aura-accent z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Custom Cursor Backdrop Glow */}
      <motion.div
        className="fixed top-0 left-0 w-96 h-96 bg-aura-accent/10 rounded-full blur-[100px] pointer-events-none z-[-1]"
        animate={{
          x: mousePos.x - 192,
          y: mousePos.y - 192,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 150, mass: 0.5 }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <FeatureGrid />
        
        {/* Decorative Space */}
        <div className="h-64 flex items-center justify-center overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "circOut" }}
            className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />
        </div>

        <InteractiveSection />
        
        {/* Final CTA Section */}
        <section className="py-32 px-6 bg-white text-black text-center">
          <div className="max-w-4xl mx-auto space-y-12">
             <motion.h2 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               className="text-5xl md:text-8xl font-display font-bold tracking-tighter"
             >
               READY TO ASCEND?
             </motion.h2>
             <p className="text-xl md:text-2xl font-medium text-black/60 max-w-2xl mx-auto leading-relaxed">
               Let's build the next generation of digital experiences together.
             </p>
             <motion.button 
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="px-12 py-6 rounded-full bg-black text-white font-bold text-xl hover:shadow-2xl transition-shadow"
             >
               Initiate Contact
             </motion.button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
