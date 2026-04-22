import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useRef, MouseEvent } from 'react';

export default function InteractiveSection() {
  return (
    <section className="py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
        <div className="flex-1 space-y-8">
          <div className="inline-block px-4 py-1 rounded-full border border-aura-accent/30 bg-aura-accent/10 text-aura-accent text-xs font-bold tracking-widest uppercase">
            Interactive R&D
          </div>
          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            TACTILE<br />
            RECEPTIVITY
          </h2>
          <p className="text-xl text-white/40 max-w-md leading-relaxed">
            Interfaces that respond to human presence. Our research focuses on physicalizing digital space through physics-based interactions and spatial audio.
          </p>
          <div className="pt-8 flex items-center gap-4 group cursor-pointer">
            <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
               <div className="w-2 h-2 rounded-full bg-aura-accent" />
            </div>
            <span className="font-semibold text-lg">View Laboratory</span>
          </div>
        </div>

        <div className="flex-1 relative flex items-center justify-center">
          <TiltCard />
          {/* Decorative floating rings */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -z-10 w-[120%] aspect-square rounded-full border border-white/5"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute -z-10 w-[80%] aspect-square rounded-full border border-aura-accent/10"
          />
        </div>
      </div>
    </section>
  );
}

function TiltCard() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative h-96 w-72 rounded-3xl bg-neutral-900 border border-white/10"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-2xl bg-white shadow-lg"
      >
        <div 
          style={{ transform: "translateZ(50px)" }}
          className="text-center"
        >
          <div className="w-12 h-12 bg-black rounded-full mx-auto mb-4 flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-full animate-ping" />
          </div>
          <span className="block text-black font-bold text-xl uppercase tracking-tighter">
            PHYSICS<br />HUB
          </span>
          <span className="text-[10px] text-black/40 font-bold uppercase tracking-widest mt-2 block">
            ID: AURA-X1
          </span>
        </div>
      </div>
      
      {/* Glare effect */}
      <motion.div 
        style={{
          background: "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 80%)",
          opacity: useTransform(mouseXSpring, [-0.5, 0.5], [0, 1])
        }}
        className="absolute inset-0 rounded-3xl pointer-events-none"
      />
    </motion.div>
  );
}
