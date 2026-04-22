import { motion } from 'motion/react';

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Synthos OS",
      year: "2024",
      description: "A cognitive operating system for distributed edge devices.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Neural Stream",
      year: "2023",
      description: "Real-time data visualization via neural-linked interfaces.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Flux Commerce",
      year: "2023",
      description: "Next-gen retail engine with integrated AI inventory prediction.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2670&auto=format&fit=crop",
    },
  ];

  return (
    <section className="px-12 py-24">
      <div className="flex justify-between items-end mb-24">
        <h2 className="font-display text-4xl md:text-5xl uppercase">SELECTED WORKS</h2>
        <div className="font-mono text-sm uppercase text-aura-accent flex items-center gap-2">
          Archive (24) <span className="material-symbols-outlined">arrow_forward</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {projects.map((project) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group border border-white/20 p-8 hover:border-aura-accent transition-colors"
          >
            <div className="aspect-video bg-surface-container-highest mb-8 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-black flex items-center justify-center relative">
                <img 
                  className="w-full h-full object-cover mix-blend-overlay opacity-80" 
                  alt={project.title} 
                  src={project.image} 
                />
                <div className="absolute inset-0 flex items-center justify-center font-mono text-6xl text-white group-hover:scale-110 transition-transform">
                  0{project.id}
                </div>
              </div>
            </div>
            <div className="flex justify-between items-start mb-4">
              <h4 className="font-mono text-xl uppercase">{project.title}</h4>
              <span className="font-mono text-sm text-aura-accent">{project.year}</span>
            </div>
            <p className="font-sans text-on-surface-variant text-sm">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}