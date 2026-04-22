import { motion } from 'motion/react';
import { Eye, Zap, Layers, Globe } from 'lucide-react';

const features = [
  {
    title: "Visual Fidelity",
    description: "Every pixel is placed with intent, ensuring a seamless aesthetic journey across all devices.",
    icon: Eye,
    className: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-aura-accent/20 to-transparent",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
  },
  {
    title: "High Performance",
    description: "Optimized for speed without compromising on visual complexity.",
    icon: Zap,
    className: "md:col-span-1 md:row-span-1 border-white/5",
  },
  {
    title: "Cloud Engine",
    description: "Scalable infrastructure that powers your brand's digital presence.",
    icon: Globe,
    className: "md:col-span-1 md:row-span-1 border-white/5",
  },
  {
    title: "Layered Depth",
    description: "Experience interfaces with cinematic parallax and motion layers.",
    icon: Layers,
    className: "md:col-span-2 md:row-span-1 border-white/5",
  }
];

export default function FeatureGrid() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="mb-20 space-y-4">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">ENGINEERED FOR <span className="italic opacity-50">ELEGANCE</span></h2>
        <p className="max-w-xl text-lg text-white/40">Our toolkit is built to handle the most demanding creative visions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`group relative overflow-hidden rounded-[2rem] border border-white/10 p-8 flex flex-col justify-between hover:border-aura-accent/50 transition-colors duration-500 ${feature.className}`}
          >
            {feature.image && (
              <img 
                src={feature.image} 
                alt={feature.title}
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 pointer-events-none"
              />
            )}
            
            <div className="relative z-10">
              <feature.icon className="mb-4 text-aura-accent" size={32} />
              <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed max-w-[240px]">
                {feature.description}
              </p>
            </div>

            <div className="relative z-10 flex justify-end">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-aura-accent group-hover:border-transparent transition-all duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>
            </div>
            
            {/* Glow effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
               <div className="absolute top-0 right-0 w-32 h-32 bg-aura-accent/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
