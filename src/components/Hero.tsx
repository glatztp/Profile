import { motion } from 'framer-motion';
import { ArrowRight, GithubLogo, LinkedinLogo } from 'phosphor-react';

export function Hero() {


  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 10,
  }));

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-slate-900/40 to-emerald-900/20"
          
        />
        
        {/* Hero Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b)',
          }}
        />

        {/* Floating Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full opacity-30"
            
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-medium mb-4">
            Welcome to my digital world ✨
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-6"
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 animate-gradient">
            Gabriel Glatz
          </span>
          <span className="block text-3xl md:text-4xl lg:text-5xl text-slate-300 font-light mt-2">
            Software Developer
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          I craft digital experiences that blend innovative design with powerful functionality. 
          Transforming ideas into scalable, user-centric applications with modern technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.a
            href="#portfolio"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
          >
            View My Work
            <ArrowRight 
              size={20} 
              className="group-hover:translate-x-1 transition-transform" 
            />
          </motion.a>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center gap-6"
        >
          <motion.a
            href="https://github.com/glatztp"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -3 }}
            className="p-3 rounded-full bg-slate-800/50 text-slate-400 hover:text-cyan-400 hover:bg-slate-700/50 transition-all duration-300"
          >
            <GithubLogo size={24} />
          </motion.a>
          
          <motion.a
            href="https://linkedin.com/in/gabriel-glatz"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -3 }}
            className="p-3 rounded-full bg-slate-800/50 text-slate-400 hover:text-cyan-400 hover:bg-slate-700/50 transition-all duration-300"
          >
            <LinkedinLogo size={24} />
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-slate-400">
          <span className="text-sm">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-cyan-500/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-emerald-400 rounded-full mt-2"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}