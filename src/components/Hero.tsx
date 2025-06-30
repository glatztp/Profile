import { motion } from 'framer-motion';
import { ArrowRight, GithubLogo, LinkedinLogo } from 'phosphor-react';
import SplitText from './animations/SplitText';


const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0908] text-[#eae0d5]"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 " />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b)',
          }}
        />
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              background: 'linear-gradient(45deg, #c6ac8f, #5e503f)',
              opacity: 0.2,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: 'easeInOut',
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

        </motion.div>

        <span className="block text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight split-text">
          <SplitText
            text="Gabriel Glatz"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </span>


        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="block text-3xl md:text-4xl lg:text-5xl text-[#eae0d5]/80 font-light mt-2 mb-10"
        >
          Software Developer
        </motion.span>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-[#eae0d5]/70 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          I craft digital experiences that blend innovative design with powerful functionality.
          Transforming ideas into scalable, user-centric applications with modern technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.a
            href="#portfolio"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-3 bg-gradient-to-r from-[#c6ac8f] to-[#5e503f] text-[#0a0908] px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-[0_0_15px_#c6ac8f] transition-all duration-300"
          >
            View My Work
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center gap-6"
        >
          {[{
            href: "https://github.com/glatztp",
            icon: <GithubLogo size={24} />,
          }, {
            href: "https://linkedin.com/in/gabriel-glatz",
            icon: <LinkedinLogo size={24} />,
          }].map(({ href, icon }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              className="p-3 rounded-full bg-[#22333b]/60 text-[#eae0d5]/70 hover:text-[#c6ac8f] hover:bg-[#5e503f]/70 transition-all duration-300 shadow-md"
            >
              {icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-[#eae0d5]/60">
          <span className="text-sm">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-[#c6ac8f]/40 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gradient-to-b from-[#c6ac8f] to-[#5e503f] rounded-full mt-2"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
