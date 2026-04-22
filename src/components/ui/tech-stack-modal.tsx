import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { ZoomParallax } from './zoom-parallax';

interface TechStackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TechStackModal({ isOpen, onClose }: TechStackModalProps) {
  const techStack = [
    {
      name: 'TypeScript',
      icon: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=300&h=300&fit=crop&crop=entropy&auto=format&q=80',
      projects: ['company', 'Coffee-crafter', 'Portfolio_', 'Scure-coffee']
    },
    {
      name: 'Python',
      icon: 'https://images.unsplash.com/photo-1526374965328-7f5ae4e8a0c5?w=300&h=300&fit=crop&crop=entropy&auto=format&q=80',
      projects: ['AI-ASSISTANT', 'Chat_bot', 'story-ai-agent', 'neural-network', 'autogen']
    },
    {
      name: 'C++',
      icon: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&h=300&fit=crop&crop=entropy&auto=format&q=80',
      projects: ['DSA', 'DATABASE-IN-CPP', 'maisum', 'OOP-SEM-PROJECT', 'pf-project']
    },
    {
      name: 'React',
      icon: 'https://images.unsplash.com/photo-1633356713697-e4c474e1b798?w=300&h=300&fit=crop&crop=entropy&auto=format&q=80',
      projects: ['company', 'Portfolio_', 'Coffee-crafter']
    },
    {
      name: 'CSS',
      icon: 'https://images.unsplash.com/photo-1633356713697-e4c474e1b798?w=300&h=300&fit=crop&crop=entropy&auto=format&q=80',
      projects: ['netflix', 'spotify', 'netflix-clone', 'firstwebsite']
    },
    {
      name: 'HTML',
      icon: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=300&h=300&fit=crop&crop=entropy&auto=format&q=80',
      projects: ['HTML', 'intro']
    },
    {
      name: 'Jupyter Notebook',
      icon: 'https://images.unsplash.com/photo-1526374965328-7f5ae4e8a0c5?w=300&h=300&fit=crop&crop=entropy&auto=format&q=80',
      projects: ['python']
    },
  ];

  const images = techStack.map(tech => ({
    src: tech.icon,
    alt: tech.name
  }));

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-surface-container-highest border border-white/20 rounded-lg w-full h-full md:h-[90vh] md:max-w-6xl flex flex-col overflow-hidden">
              {/* Header */}
              <div className="flex justify-between items-center p-6 md:p-8 border-b border-white/20">
                <h2 className="font-display text-3xl md:text-4xl uppercase">Tech Stack</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto">
                <div className="p-6 md:p-8">
                  <ZoomParallax images={images} />
                  
                  {/* Tech Stack Details */}
                  <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {techStack.map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-6 border border-white/20 rounded hover:border-aura-accent transition-colors group"
                      >
                        <h3 className="font-mono text-xl uppercase mb-4 text-aura-accent group-hover:text-white transition-colors">
                          {tech.name}
                        </h3>
                        <div className="space-y-2">
                          <p className="font-mono text-xs uppercase text-on-surface-variant mb-3">
                            Projects ({tech.projects.length})
                          </p>
                          <ul className="space-y-1">
                            {tech.projects.map((project) => (
                              <li key={project} className="font-mono text-sm text-on-surface hover:text-aura-accent transition-colors">
                                • {project}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
