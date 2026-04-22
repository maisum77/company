import { motion } from 'motion/react';
import { ArrowUpRight, Bot, BrainCircuit, Sparkles } from 'lucide-react';
import { RobotProjectCloud } from '../components/ui/robot-project-cloud';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

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

const aiProjects = [
  {
    name: 'AI-ASSISTANT',
    description: 'Assistant workflows and conversational automation for practical daily use.',
    url: 'https://github.com/maisum77/AI-ASSISTANT',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
  },
  {
    name: 'Chat_bot',
    description: 'Chat interface experimentation with NLP-first interaction loops.',
    url: 'https://github.com/maisum77/Chat_bot',
    image: 'https://images.unsplash.com/photo-1675557009875-436fcb4d2f5f?w=800&q=80',
  },
  {
    name: 'story-ai-agent',
    description: 'Agentic storytelling pipeline with automated prompt-to-output generation.',
    url: 'https://github.com/maisum77/story-ai-agent',
    image: 'https://images.unsplash.com/photo-1676299081847-824916de030a?w=800&q=80',
  },
  {
    name: 'anime_quotes_genai',
    description: 'Generative AI content project focused on quote synthesis and style transfer.',
    url: 'https://github.com/maisum77/anime_quotes_genai',
    image: 'https://images.unsplash.com/photo-1674027444485-cec3da58eef4?w=800&q=80',
  },
  {
    name: 'neural-network',
    description: 'Core ML experimentation and neural-network fundamentals in Python.',
    url: 'https://github.com/maisum77/neural-network',
    image: 'https://images.unsplash.com/photo-1677442135136-760c813a743d?w=800&q=80',
  },
  {
    name: 'autogen',
    description: 'Autonomous multi-agent experiments for orchestration and task execution.',
    url: 'https://github.com/maisum77/autogen',
    image: 'https://images.unsplash.com/photo-1677167891411-3dd1f8f4a2f2?w=800&q=80',
  },
];

const aiOutcomes = [
  {
    icon: BrainCircuit,
    label: 'Faster Decisions',
    value: 'Decision loops shrink from days to minutes.',
  },
  {
    icon: Bot,
    label: 'Lower Ops Cost',
    value: 'Automated handoffs reduce repetitive manual work.',
  },
  {
    icon: Sparkles,
    label: 'New Revenue',
    value: 'AI-native features create premium product surfaces.',
  },
];

const deliveryModel = [
  {
    step: '01',
    title: 'Discover Constraints',
    detail: 'Map goals, data boundaries, and risk before writing implementation code.',
  },
  {
    step: '02',
    title: 'Design The System',
    detail: 'Plan architecture, retrieval, guardrails, and observability around business outcomes.',
  },
  {
    step: '03',
    title: 'Deploy + Iterate',
    detail: 'Ship production workflows with eval loops and measurable ROI milestones.',
  },
];

export default function ServicesPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash !== '#ai-integration') return;

    let attempts = 0;
    const maxAttempts = 12;

    const scrollToTarget = () => {
      const aiSection = document.getElementById('ai-integration');

      if (!aiSection && attempts < maxAttempts) {
        attempts += 1;
        requestAnimationFrame(scrollToTarget);
        return;
      }

      if (!aiSection) return;

      const navOffset = 110;
      const targetTop = aiSection.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({ top: Math.max(targetTop, 0), behavior: 'smooth' });
    };

    requestAnimationFrame(scrollToTarget);
  }, [location.hash]);

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/20 px-6 pb-20 pt-44 md:px-12">
        <div className="absolute -left-28 top-28 h-72 w-72 rounded-full bg-aura-accent/15 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 font-mono text-xs uppercase tracking-[0.22em] text-aura-accent"
            >
              Services
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="font-display text-5xl uppercase leading-[0.9] md:text-7xl lg:text-[6.4rem]"
            >
              Systems That
              <br />
              Scale Intelligence
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="mt-8 max-w-2xl text-base leading-relaxed text-on-surface-variant md:text-lg"
            >
              We build performance-first digital products and AI operating layers that improve speed,
              quality, and margin. Every service is tied to measurable business outcomes.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 gap-3 lg:col-span-4"
          >
            <div className="border border-white/20 bg-surface-container/60 p-4">
              <p className="font-mono text-xs uppercase tracking-wider text-white/55">Projects Shipped</p>
              <p className="mt-2 font-display text-3xl uppercase">50+</p>
            </div>
            <div className="border border-white/20 bg-surface-container/60 p-4">
              <p className="font-mono text-xs uppercase tracking-wider text-white/55">AI Focus</p>
              <p className="mt-2 font-display text-3xl uppercase">End To End</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-white/20 px-6 py-20 md:px-12">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-aura-accent">Operating Model</p>
            <h2 className="mt-3 font-display text-4xl uppercase md:text-6xl">How We Deliver</h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border border-white/20 px-5 py-3 font-mono text-xs uppercase tracking-wider transition-colors hover:border-aura-accent hover:text-aura-accent"
          >
            Start A Project
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {deliveryModel.map((item, index) => (
            <motion.article
              key={item.step}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.08 }}
              className="group border border-white/15 bg-surface-container/40 p-6 transition-colors hover:border-aura-accent"
            >
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-aura-accent">Step {item.step}</p>
              <h3 className="mt-4 font-display text-3xl uppercase leading-tight">{item.title}</h3>
              <p className="mt-4 text-on-surface-variant">{item.detail}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="ai-integration" className="px-6 md:px-12 py-20 border-b border-white/20">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-aura-accent">AI Integration</p>
            <h2 className="mt-3 font-display text-4xl uppercase leading-[0.92] md:text-6xl">
              Interactive Intelligence Layer
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-on-surface-variant md:text-base">
            Control the animation yourself and explore how AI capability expands from single tasks to connected workflows.
          </p>
        </div>

        <div className="space-y-8">
          <RobotProjectCloud projects={aiProjects} />

          {/* <div className="border border-white/15 bg-surface-container/40 p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-white/60 mb-4">AI Projects From GitHub</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {aiProjects.map((project) => (
                <a
                  key={project.name}
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="block border border-white/15 p-4 hover:border-aura-accent transition-colors"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-mono text-xs uppercase tracking-wider text-aura-accent">{project.name}</p>
                    <ArrowUpRight className="h-4 w-4 text-aura-accent" />
                  </div>
                  <p className="mt-2 text-sm text-on-surface-variant">{project.description}</p>
                </a>
              ))}
            </div>
          </div> */}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {aiOutcomes.map((outcome) => (
              <div key={outcome.label} className="border border-white/15 bg-surface-container/40 p-4">
                <outcome.icon className="h-5 w-5 text-aura-accent" />
                <p className="mt-4 text-sm uppercase tracking-wider font-mono">{outcome.label}</p>
                <p className="mt-1 text-sm text-on-surface-variant">{outcome.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 md:py-24">
        <div className="mb-8">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-aura-accent">Core Capabilities</p>
          <h2 className="mt-3 font-display text-4xl uppercase md:text-6xl">Capability Stack</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceTracks.map((track) => (
            <div key={track.title} className="border border-white/15 p-8 bg-surface-container/40 hover:border-aura-accent transition-colors">
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
