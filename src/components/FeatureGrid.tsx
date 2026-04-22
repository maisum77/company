import { motion } from 'motion/react';

export default function FeatureGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[600px] border-b border-white/20">
      <div className="p-12 md:divider-x flex flex-col justify-between group cursor-crosshair">
        <div className="font-mono text-sm uppercase text-aura-accent">Service 01</div>
        <div>
          <h3 className="font-display text-5xl md:text-7xl uppercase mb-8">WEB<br/>ENGINEERING</h3>
          <p className="font-sans text-lg max-w-sm mb-12 text-on-surface-variant">
            We don't build sites. We build digital monoliths that convert through pure technical superiority.
          </p>
          <button className="border border-white/20 px-12 py-4 font-mono text-sm uppercase hover:bg-white hover:text-black transition-all">
            Explore Tech Stack
          </button>
        </div>
      </div>
      <div className="p-12 bg-aura-accent text-white flex flex-col justify-between group cursor-crosshair">
        <div className="font-mono text-sm uppercase text-surface">Service 02</div>
        <div>
          <h3 className="font-display text-5xl md:text-7xl uppercase mb-8">AI<br/>INTEGRATION</h3>
          <p className="font-sans text-lg max-w-sm mb-12 text-surface">
            Autonomous agents, LLM orchestration, and predictive systems that rewrite your operational DNA.
          </p>
          <button className="border border-surface text-surface px-12 py-4 font-mono text-sm uppercase hover:bg-surface hover:text-white transition-all">
            Deploy Models
          </button>
        </div>
      </div>
    </section>
  );
}
