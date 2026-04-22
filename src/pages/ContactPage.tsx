import { motion } from 'motion/react';

export default function ContactPage() {
  return (
    <section className="pt-48 pb-24 px-12">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-mono text-sm uppercase tracking-widest text-aura-accent mb-6"
      >
        Contact
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="font-display text-5xl md:text-8xl leading-[0.95] uppercase max-w-4xl"
      >
        Let&apos;s Build
        <br />
        Something Rare
      </motion.h1>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5 space-y-6">
          <p className="text-on-surface-variant text-lg leading-relaxed">
            Share the brief, constraints, and your ambition. We usually reply in under 24 hours.
          </p>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-white/50">Email</p>
            <p className="text-xl">hello@manifesto.ai</p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-white/50">Headquarters</p>
            <p className="text-xl">Zurich, Switzerland</p>
          </div>
        </div>

        <form className="md:col-span-7 border border-white/15 bg-surface-container/40 p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label className="space-y-2 block">
              <span className="font-mono text-xs uppercase tracking-widest text-white/50">Name</span>
              <input
                type="text"
                className="w-full bg-black/30 border border-white/15 px-4 py-3 outline-none focus:border-aura-accent transition-colors"
                placeholder="Your name"
              />
            </label>
            <label className="space-y-2 block">
              <span className="font-mono text-xs uppercase tracking-widest text-white/50">Company</span>
              <input
                type="text"
                className="w-full bg-black/30 border border-white/15 px-4 py-3 outline-none focus:border-aura-accent transition-colors"
                placeholder="Company name"
              />
            </label>
          </div>
          <label className="space-y-2 block">
            <span className="font-mono text-xs uppercase tracking-widest text-white/50">Email</span>
            <input
              type="email"
              className="w-full bg-black/30 border border-white/15 px-4 py-3 outline-none focus:border-aura-accent transition-colors"
              placeholder="name@company.com"
            />
          </label>
          <label className="space-y-2 block">
            <span className="font-mono text-xs uppercase tracking-widest text-white/50">Project Brief</span>
            <textarea
              className="w-full min-h-40 bg-black/30 border border-white/15 px-4 py-3 outline-none focus:border-aura-accent transition-colors"
              placeholder="What are you building and what outcomes do you need?"
            />
          </label>
          <button
            type="button"
            className="bg-white text-black font-mono text-xs uppercase tracking-widest px-8 py-4 hover:bg-aura-accent transition-colors"
          >
            Send Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}
