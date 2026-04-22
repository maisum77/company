import { motion } from 'motion/react';
import { ZoomParallax } from '../components/ui/zoom-parallax';

const techStack = [
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    projects: ['company', 'Coffee-crafter', 'Portfolio_', 'Scure-coffee']
  },
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    projects: ['AI-ASSISTANT', 'Chat_bot', 'story-ai-agent', 'neural-network', 'autogen']
  },
  {
    name: 'C++',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    projects: ['DSA', 'DATABASE-IN-CPP', 'maisum', 'OOP-SEM-PROJECT', 'pf-project']
  },
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    projects: ['company', 'Portfolio_', 'Coffee-crafter']
  },
  {
    name: 'CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    projects: ['netflix', 'spotify', 'netflix-clone', 'firstwebsite']
  },
  {
    name: 'HTML',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    projects: ['HTML', 'intro']
  },
  {
    name: 'Jupyter Notebook',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg',
    projects: ['python']
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    projects: ['company', 'Portfolio_', 'firstwebsite']
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    projects: ['company', 'AI-ASSISTANT']
  },
  {
    name: 'Tailwind CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    projects: ['company', 'Scure-coffee', 'Coffee-crafter']
  },
  {
    name: 'Vite',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
    projects: ['company', 'Portfolio_']
  },
  {
    name: 'Express',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    projects: ['company']
  },
  {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    projects: ['company', 'DSA', 'story-ai-agent']
  },
  {
    name: 'Docker',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    projects: ['AI-ASSISTANT', 'story-ai-agent']
  },
  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    projects: ['Chat_bot', 'AI-ASSISTANT']
  },
  {
    name: 'Firebase',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    projects: ['spotify', 'netflix-clone']
  },
];

const ecosystemIcons = [
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  { name: 'NPM', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg' },
  { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'JSON', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg' },
  { name: 'Markdown', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg' },
  { name: 'Bash', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg' },
  { name: 'Google Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
  { name: 'Netlify', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg' },
  { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
];

export default function TechStackPage() {
  const images = techStack.slice(0, 12).map((tech) => ({
    src: tech.icon,
    alt: tech.name,
  }));

  return (
    <>
      <section className="pt-48 pb-20 px-12 border-b border-white/20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-mono text-sm uppercase tracking-widest text-aura-accent mb-6"
        >
          Technology
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="font-display text-5xl md:text-8xl leading-[0.95] uppercase"
        >
          Explore
          <br />
          Tech Stack
        </motion.h1>
        <p className="mt-8 max-w-2xl text-lg text-on-surface-variant">
          Languages and tools used across public projects on GitHub.
        </p>
      </section>

      <ZoomParallax images={images} />

      <section className="px-12 py-20 border-y border-white/20">
        <p className="font-mono text-xs uppercase tracking-widest text-aura-accent mb-8">
          Tooling Ecosystem
        </p>
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-aura-bg to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-aura-bg to-transparent" />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="flex w-max gap-4"
          >
            {[...ecosystemIcons, ...ecosystemIcons].map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="border border-white/15 bg-surface-container/40 h-16 w-24 flex items-center justify-center hover:border-aura-accent transition-colors"
                title={item.name}
              >
                <img src={item.icon} alt={item.name} className="h-7 w-7 object-contain" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="p-6 border border-white/20 rounded hover:border-aura-accent transition-colors group"
            >
              <h3 className="font-mono text-xl uppercase mb-4 text-aura-accent group-hover:text-white transition-colors">
                {tech.name}
              </h3>
              <p className="font-mono text-xs uppercase text-on-surface-variant mb-3">
                Projects ({tech.projects.length})
              </p>
              <ul className="space-y-1">
                {tech.projects.map((project) => (
                  <li key={project} className="font-mono text-sm text-on-surface hover:text-aura-accent transition-colors">
                    {project}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
