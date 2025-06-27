import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { List, X } from 'phosphor-react';

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Portfolio', id: 'portfolio' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
];

export function Navbar() {
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    const handleScroll = () => setScrolled(window.scrollY > 50);

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (id: string) => {
    setActive(id);
    setMenuOpen(false);

    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
        ? 'backdrop-blur-xl bg-slate-900/80 border-b border-cyan-500/20 shadow-lg shadow-cyan-500/10'
        : 'backdrop-blur-sm'
      }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 font-bold text-2xl cursor-default select-none"
        >
          Gabriel.glatz
        </motion.div>

        <div className="hidden md:flex gap-8">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleNavClick(item.id)}
              className="relative group text-slate-300 font-medium text-sm hover:text-cyan-400 transition-all duration-300"
            >
              {item.label}
              {active === item.id && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-full h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 group-hover:w-full h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-300" />
            </motion.button>
          ))}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            className="text-cyan-400 focus:outline-none hover:text-emerald-400 transition-colors"
          >
            {menuOpen ? <X size={28} weight="bold" /> : <List size={28} weight="bold" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && isMobile && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden backdrop-blur-xl bg-slate-900/95 border-t border-cyan-500/20"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleNavClick(item.id)}
                  className="relative group text-slate-300 font-medium text-base hover:text-cyan-400 transition-colors text-left"
                >
                  {item.label}
                  {active === item.id && (
                    <motion.div
                      className="absolute -bottom-1 left-0 w-8 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}