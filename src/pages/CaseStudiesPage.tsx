import { motion } from 'motion/react';

const studies = [
  {
    name: 'Atlas Logistics',
    challenge: 'Legacy dispatch flow slowed operations and blocked visibility.',
    outcome: 'Launched a real-time command layer, reducing manual interventions by 63%.',
  },
  {
    name: 'Nexa Retail',
    challenge: 'Fragmented catalog data hurt conversion and forecasting.',
    outcome: 'Unified decision engine increased conversion by 34% in 8 weeks.',
  },
  {
    name: 'Pulse Health',
    challenge: 'Clinical dashboards were delayed and inaccessible to care teams.',
    outcome: 'Shipped a low-latency analytics surface with 4.2x faster triage decisions.',
  },
];

export default function CaseStudiesPage() {
  return (
    <section className="pt-48 pb-24 px-12">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-mono text-sm uppercase tracking-widest text-aura-accent mb-6"
      >
        Case Studies
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="font-display text-5xl md:text-8xl leading-[0.95] uppercase max-w-4xl"
      >
        Evidence,
        <br />
        Not Promises
      </motion.h1>

      <div className="mt-16 space-y-6">
        {studies.map((study, index) => (
          <article
            key={study.name}
            className="border border-white/15 p-8 md:p-10 bg-surface-container/40 grid grid-cols-1 md:grid-cols-12 gap-8"
          >
            <div className="md:col-span-3">
              <p className="font-mono text-xs uppercase tracking-widest text-aura-accent mb-3">
                Study {index + 1}
              </p>
              <h2 className="font-display text-3xl uppercase">{study.name}</h2>
            </div>
            <div className="md:col-span-4">
              <p className="font-mono text-xs uppercase tracking-widest text-white/50 mb-3">Challenge</p>
              <p className="text-on-surface-variant">{study.challenge}</p>
            </div>
            <div className="md:col-span-5">
              <p className="font-mono text-xs uppercase tracking-widest text-white/50 mb-3">Outcome</p>
              <p>{study.outcome}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
