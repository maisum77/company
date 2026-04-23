import { CircularTestimonials } from './ui/circular-testimonials';

const founders = [
  {
    quote:
      "Manifesto was born from a singular vision: that intelligence shouldn't just be functional—it should be intentional. We reject the generic. Every system we build carries a point of view, a conviction that AI can be bold, not just useful.",
    name: "Elias Vance",
    designation: "Chief Intelligence Architect",
    src:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop",
  },
  {
    quote:
      "Strategy without conviction is just decoration. At Manifesto, we design products that challenge assumptions—every interaction is deliberate, every decision rooted in a deeper narrative about what technology should feel like.",
    name: "Sara Kross",
    designation: "Product Strategy",
    src:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=2574&auto=format&fit=crop",
  },
  {
    quote:
      "Design is not polish—it's architecture. We build from first principles, ensuring that every pixel, every motion, every spatial relationship communicates intent. The future belongs to those who design with conviction.",
    name: "Marcus Reed",
    designation: "Design Direction",
    src:
      "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?q=80&w=2574&auto=format&fit=crop",
  },
];

export default function FoundersSection() {
  return (
    <section className="px-6 md:px-12 py-24 border-b border-white/20">
      <div className="mb-16">
        <h2 className="font-display text-4xl md:text-5xl uppercase text-aura-accent">THE THREE</h2>
        <div className="w-24 h-1 bg-white mt-4"></div>
      </div>
      <div className="flex items-center justify-center">
        <div className="relative flex items-center justify-center" style={{ maxWidth: "1456px" }}>
          <CircularTestimonials
            testimonials={founders}
            autoplay={true}
            colors={{
              name: "#f7f7ff",
              designation: "#ff3d00",
              testimony: "#e5e2e1",
              arrowBackground: "#201f1f",
              arrowForeground: "#f1f1f7",
              arrowHoverBackground: "#ff3d00",
            }}
            fontSizes={{
              name: "28px",
              designation: "18px",
              quote: "18px",
            }}
          />
        </div>
      </div>
    </section>
  );
}
