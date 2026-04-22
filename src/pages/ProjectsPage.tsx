import { motion } from 'motion/react';
import ProjectsSection from '../components/ProjectsSection';
import { Link } from 'react-router-dom';

export default function ProjectsPage() {
  return (
    <>
      <section className="pt-48 pb-20 px-12 border-b border-white/20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-mono text-sm uppercase tracking-widest text-aura-accent mb-6"
        >
          Projects
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="font-display text-5xl md:text-8xl leading-[0.95] uppercase"
        >
          Built For
          <br />
          High Velocity
        </motion.h1>
        <p className="mt-8 max-w-2xl text-lg text-on-surface-variant">
          Production systems, intelligent platforms, and growth engines shipped with precision.
        </p>
      </section>

      <ProjectsSection />

      <section className="px-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard label="Shipped Projects" value="42" />
          <StatCard label="Average Lift" value="+187%" />
          <StatCard label="Active Clients" value="18" />
        </div>
        <div className="mt-12">
          <Link
            to="/case-studies"
            className="inline-block border border-white/20 px-8 py-3 font-mono text-sm uppercase tracking-wider hover:border-aura-accent hover:text-aura-accent transition-colors"
          >
            Read Case Studies
          </Link>
        </div>
      </section>
    </>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-white/15 p-8 bg-surface-container/40">
      <p className="font-mono text-xs uppercase tracking-widest text-white/50">{label}</p>
      <p className="font-display text-5xl mt-4">{value}</p>
    </div>
  );
}
