import { motion } from 'motion/react';

export default function FoundersSection() {
  return (
    <section className="px-12 py-24 border-b border-white/20">
      <div className="mb-24">
        <h2 className="font-display text-4xl md:text-5xl uppercase text-aura-accent">THE THREE</h2>
        <div className="w-24 h-1 bg-white mt-4"></div>
      </div>
      <div className="grid grid-cols-12 gap-12">
        {/* Asymmetric Grid Logic */}
        <div className="col-span-12 md:col-span-5 aspect-[4/5] bg-surface-container relative overflow-hidden group">
          <img 
            className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" 
            alt="close-up portrait of a tech founder with sharp features and futuristic glasses in high contrast black and white lighting" 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop" 
          />
          <div className="absolute bottom-0 left-0 p-8 bg-surface-container/90 w-full transform translate-y-full group-hover:translate-y-0 transition-transform">
            <p className="font-mono text-xl text-aura-accent">ELIAS VANCE</p>
            <p className="font-mono text-sm uppercase mt-2">Chief Intelligence Architect</p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-7 flex flex-col justify-center">
          <div className="max-w-xl">
            <p className="font-display text-3xl md:text-4xl mb-8 leading-tight">CRAFTING BOLD NARRATIVES THROUGH REINFORCEMENT LEARNING.</p>
            <p className="font-sans text-lg text-on-surface-variant">
              Manifesto was born from a singular vision: that intelligence shouldn't just be functional—it should be intentional. We reject the generic.
            </p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 mt-12">
          <div className="aspect-square bg-surface-container mb-6 overflow-hidden">
            <img 
              className="w-full h-full object-cover grayscale" 
              alt="dramatic profile shot of a woman with minimalist aesthetic in harsh lighting with deep shadows and industrial background" 
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=2574&auto=format&fit=crop" 
            />
          </div>
          <p className="font-mono text-xl">SARA KROSS</p>
          <p className="font-mono text-sm uppercase text-aura-accent">Product Strategy</p>
        </div>
        <div className="col-span-12 md:col-span-4 mt-0 md:mt-24">
          <div className="aspect-square bg-surface-container mb-6 overflow-hidden">
            <img 
              className="w-full h-full object-cover grayscale" 
              alt="monochrome portrait of a designer looking directly into camera with intense expression and grain texture effect" 
              src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?q=80&w=2574&auto=format&fit=crop" 
            />
          </div>
          <p className="font-mono text-xl">MARCUS REED</p>
          <p className="font-mono text-sm uppercase text-aura-accent">Design Direction</p>
        </div>
      </div>
    </section>
  );
}