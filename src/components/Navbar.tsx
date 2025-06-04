import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { List, X } from 'phosphor-react';

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Contato', id: 'contato' },
];

export function Navbar() {
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="text-pink-400 font-extrabold text-xl cursor-default select-none">
          Profile
        </div>

        <div className="hidden md:flex gap-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="relative group text-neutral-300 font-medium text-base hover:text-pink-400 transition-colors"
            >
              {item.label}
              {active === item.id && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-[3px] rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-md"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            className="text-pink-400 focus:outline-none"
          >
            {menuOpen ? <X size={32} weight="bold" /> : <List size={32} weight="bold" />}
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
            className="md:hidden  shadow-inner border-t border-neutral-700 overflow-auto max-h-[calc(100vh-56px)]"
            style={{ zIndex: 999 }} 
          >
            <div className="flex flex-col gap-4 px-6 py-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="relative group text-neutral-300 font-medium text-base hover:text-pink-400 transition-colors"
                >
                  {item.label}
                  {active === item.id && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-[3px] rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-md"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
