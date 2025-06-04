import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

export function Hero() {
  const controls = useAnimation();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function onScroll() {
      setScrollY(window.scrollY);
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      controls.start({ x: [0, -5, 5, -5, 0], opacity: [1, 0.8, 0.6, 0.8, 1] });
    }, 3000);
    return () => clearInterval(glitchInterval);
  }, [controls]);

  return (
   <section
  id="home"
  className="relative h-screen overflow-hidden flex flex-col justify-center items-center text-center px-6 text-white"
>

      <div
        className="fixed top-0 left-0 w-full h-full bg-[url('/background-tech.jpg')] bg-cover bg-center opacity-20 pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      />

      <div className="pointer-events-none absolute inset-0 z-10">
        {[...Array(30)].map((_, i) => (
          <span
            key={i}
            className="block absolute bg-white rounded-full opacity-20 animate-pulse"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <motion.h1
        animate={controls}
        initial={{ x: 0, opacity: 1 }}
        className="relative text-7xl md:text-9xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent select-none drop-shadow-lg"
        style={{ textShadow: '0 0 10px rgba(255,255,255,0.15)' }}
      >
        Gabriel Glatz
        <span
          aria-hidden="true"
          className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-700 to-indigo-500 filter blur-sm mix-blend-screen animate-glitch1"
        >
          Gabriel Glatz
        </span>
        <span
          aria-hidden="true"
          className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-pink-600 to-purple-700 filter blur-[2px] mix-blend-screen animate-glitch2"
        >
          Gabriel Glatz
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg md:text-2xl max-w-3xl mb-10 text-gray-300 tracking-wider"
      >
        Front-End Developer, UI/UX, transformando café em código e bugs em features.
      </motion.p>

      <motion.a
        href="#contato"
        whileHover={{ scale: 1.15, boxShadow: '0 0 20px rgba(139, 92, 246, 0.8)' }}
        whileTap={{ scale: 0.95, boxShadow: '0 0 10px rgba(139, 92, 246, 0.6)' }}
        className="relative z-20 bg-purple-700 hover:bg-purple-800 transition-colors text-white px-10 py-4 rounded-full font-semibold shadow-lg"
      >
        Fala comigo
      </motion.a>

      <style>{`
        @keyframes glitch1 {
          0% {
            clip-path: inset(0 0 0 0);
            transform: translate(0);
          }
          20% {
            clip-path: inset(10% 0 85% 0);
            transform: translate(-3px, -1px);
          }
          40% {
            clip-path: inset(20% 0 65% 0);
            transform: translate(3px, 1px);
          }
          60% {
            clip-path: inset(15% 0 70% 0);
            transform: translate(-2px, 1px);
          }
          80% {
            clip-path: inset(10% 0 85% 0);
            transform: translate(2px, -1px);
          }
          100% {
            clip-path: inset(0 0 0 0);
            transform: translate(0);
          }
        }
        @keyframes glitch2 {
          0% {
            clip-path: inset(0 0 0 0);
            transform: translate(0);
          }
          20% {
            clip-path: inset(80% 0 10% 0);
            transform: translate(3px, 1px);
          }
          40% {
            clip-path: inset(65% 0 20% 0);
            transform: translate(-3px, -1px);
          }
          60% {
            clip-path: inset(70% 0 15% 0);
            transform: translate(2px, -1px);
          }
          80% {
            clip-path: inset(85% 0 10% 0);
            transform: translate(-2px, 1px);
          }
          100% {
            clip-path: inset(0 0 0 0);
            transform: translate(0);
          }
        }
        .animate-glitch1 {
          animation: glitch1 3s infinite;
        }
        .animate-glitch2 {
          animation: glitch2 3s infinite;
        }
      `}</style>
    </section>
  );
}