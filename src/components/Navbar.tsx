import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Projects', to: '/projects' },
    { label: 'Case Studies', to: '/case-studies' },
    { label: 'Services', to: '/services' },
    { label: 'Contact', to: '/contact' },
  ];

  const desktopLinkClass = ({ isActive }: { isActive: boolean }) =>
    `font-mono text-sm uppercase tracking-widest transition-all duration-300 ${
      isActive
        ? 'text-white border-b-2 border-aura-accent pb-1'
        : 'text-white/60 hover:text-aura-accent'
    }`;

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-xl font-medium transition-colors ${isActive ? 'text-aura-accent' : 'text-white'}`;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-surface border-b border-white/10"
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between px-12 py-6">
        <Link to="/" className="text-2xl font-black tracking-tighter text-white">
          MANIFESTO.AI
        </Link>

        <div className="hidden md:flex gap-12">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={desktopLinkClass}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden md:block bg-white text-black font-mono text-xs uppercase px-6 py-2 hover:bg-aura-accent transition-colors"
          >
            Get Started
          </Link>
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-4 bg-surface border border-white/20 p-6 flex flex-col gap-4"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={mobileLinkClass}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <hr className="border-white/10" />
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="w-full py-4 bg-white text-black font-semibold text-center"
          >
            Get Started
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
