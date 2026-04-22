import { motion } from 'motion/react';
import Hero from '../components/Hero';
import FeatureGrid from '../components/FeatureGrid';
import FoundersSection from '../components/FoundersSection';
import ProjectsSection from '../components/ProjectsSection';
import InteractiveSection from '../components/InteractiveSection';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureGrid />

      <div className="h-64 flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          transition={{ duration: 1.5, ease: 'circOut' }}
          className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />
      </div>

      <FoundersSection />
      <ProjectsSection />
      <InteractiveSection />

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
            Let&apos;s build the next generation of digital experiences together.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="inline-block px-12 py-6 rounded-full bg-black text-white font-bold text-xl hover:shadow-2xl transition-shadow"
            >
              Initiate Contact
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
