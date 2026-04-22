import { motion } from 'motion/react';
import FeatureGrid from '../components/FeatureGrid';
import { Link } from 'react-router-dom';

const serviceTracks = [
  {
    title: 'Product Engineering',
    detail: 'From architecture to launch with full-stack execution and observability.',
  },
  {
    title: 'AI Systems',
    detail: 'LLM workflows, retrieval, evals, and production-grade orchestration.',
  },
  {
    title: 'Growth Infrastructure',
    detail: 'Instrumentation, experimentation, and high-converting funnels.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="pt-48 pb-20 px-12 border-b border-white/20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-mono text-sm uppercase tracking-widest text-aura-accent mb-6"
        >
          Services
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="font-display text-5xl md:text-8xl leading-[0.95] uppercase"
        >
          Capability
          <br />
          Stack
        </motion.h1>
      </section>

      <FeatureGrid />

      <section className="px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceTracks.map((track) => (
            <div key={track.title} className="border border-white/15 p-8 bg-surface-container/40">
              <h3 className="font-display text-3xl uppercase">{track.title}</h3>
              <p className="mt-4 text-on-surface-variant">{track.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            to="/contact"
            className="inline-block border border-white/20 px-8 py-3 font-mono text-sm uppercase tracking-wider hover:border-aura-accent hover:text-aura-accent transition-colors"
          >
            Talk to Us
          </Link>
        </div>
      </section>
    </>
  );
}
