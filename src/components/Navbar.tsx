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
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300`}
      style={{
        backdropFilter: 'blur(20px)',
        backgroundColor: scrolled ? 'rgba(10, 9, 8, 0.1)' : 'rgba(10, 9, 8, 0.1)', // gunmetal
        borderBottom: scrolled ? '1px solid rgba(94, 80, 63, 0.2)' : 'none', // walnut_brown
        boxShadow: scrolled ? '0 4px 12px rgba(94, 80, 63, 0.1)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-bold text-2xl cursor-default select-none"
          style={{
            background:
              'linear-gradient(to right, #c6ac8f, #eae0d5)', 
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Gabriel.glatz
        </motion.div>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleNavClick(item.id)}
              className="relative group font-medium text-sm transition-all duration-300"
              style={{
                color: active === item.id ? '#eae0d5' : '#c6ac8f', // almond or khaki
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#eae0d5')}
              onMouseLeave={e =>
                (e.currentTarget.style.color = active === item.id ? '#eae0d5' : '#c6ac8f')
              }
            >
              {item.label}
              {active === item.id && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-full h-0.5 rounded-full"
                  style={{
                    background:
                      'linear-gradient(to right, #c6ac8f, #eae0d5)', // khaki -> almond
                  }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
              <div
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 group-hover:w-full h-0.5 rounded-full transition-all duration-300"
                style={{
                  background:
                    'linear-gradient(to right, #c6ac8f, #eae0d5)', // khaki -> almond
                }}
              />
            </motion.button>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            style={{ color: '#c6ac8f' }} // khaki
            onMouseEnter={e => (e.currentTarget.style.color = '#eae0d5')} // almond
            onMouseLeave={e => (e.currentTarget.style.color = '#c6ac8f')}
            className="focus:outline-none transition-colors duration-300"
          >
            {menuOpen ? <X size={28} weight="bold" /> : <List size={28} weight="bold" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && isMobile && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              backdropFilter: 'blur(20px)',
              backgroundColor: 'rgba(34, 51, 59, 0.95)', // gunmetal
              borderTop: '1px solid rgba(94, 80, 63, 0.2)', // walnut_brown
            }}
            className="md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleNavClick(item.id)}
                  className="relative font-medium text-base text-left transition-colors duration-300"
                  style={{
                    color: active === item.id ? '#eae0d5' : '#c6ac8f', // almond or khaki
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#eae0d5')}
                  onMouseLeave={e =>
                    (e.currentTarget.style.color = active === item.id ? '#eae0d5' : '#c6ac8f')
                  }
                >
                  {item.label}
                  {active === item.id && (
                    <motion.div
                      className="absolute -bottom-1 left-0 w-8 h-0.5 rounded-full"
                      style={{
                        background:
                          'linear-gradient(to right, #c6ac8f, #eae0d5)', // khaki -> almond
                      }}
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
