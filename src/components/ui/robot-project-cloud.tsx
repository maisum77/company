'use client';

import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { InteractiveRobotSpline } from './interactive-3d-robot';

interface ProjectItem {
  name: string;
  description: string;
  url: string;
  image: string;
}

interface RobotProjectCloudProps {
  projects: ProjectItem[];
}

const ROBOT_SCENE_URL = 'https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode';

const cardPositions = [
  'top-[8%] left-[4%] md:left-[8%]',
  'top-[18%] right-[4%] md:right-[10%]',
  'top-[41%] left-[2%] md:left-[7%]',
  'top-[53%] right-[3%] md:right-[9%]',
  'bottom-[10%] left-[18%] md:left-[23%]',
  'bottom-[8%] right-[7%] md:right-[23%]',
];

export function RobotProjectCloud({ projects }: RobotProjectCloudProps) {
  return (
    <section className="relative min-h-[760px] overflow-hidden border border-white/20 bg-surface-container/50">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,61,0,0.25),transparent_62%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,10,10,0)_0%,rgba(10,10,10,0.55)_85%)]" />

      <InteractiveRobotSpline scene={ROBOT_SCENE_URL} className="absolute inset-0 z-0" />

      <div className="pointer-events-none absolute inset-x-0 top-10 z-20 px-6 text-center md:px-12">
        <h3 className="font-display text-3xl uppercase leading-tight text-on-background md:text-5xl">
          Interactive Robot Intelligence Node
        </h3>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-on-surface-variant md:text-base">
          Explore the active project cloud around Whobee. Every floating card maps to an AI project and opens the repo directly.
        </p>
      </div>

      {projects.slice(0, 6).map((project, index) => (
        <motion.a
          key={project.name}
          href={project.url}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ y: -8, scale: 1.03 }}
          transition={{ delay: index * 0.1, duration: 0.45 }}
          className={`absolute z-20 hidden w-[230px] overflow-hidden border border-white/25 bg-[#111]/90 backdrop-blur-sm md:block ${cardPositions[index % cardPositions.length]}`}
        >
          <img src={project.image} alt={project.name} className="h-24 w-full object-cover" />
          <div className="p-3">
            <div className="flex items-center justify-between gap-3">
              <p className="font-mono text-[11px] uppercase tracking-wider text-aura-accent">{project.name}</p>
              <ArrowUpRight className="h-4 w-4 text-aura-accent" />
            </div>
            <p className="mt-2 line-clamp-3 text-xs text-on-surface-variant">{project.description}</p>
          </div>
        </motion.a>
      ))}
    </section>
  );
}
