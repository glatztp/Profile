import { motion } from "framer-motion";
import { ArrowRight, GithubLogo, LinkedinLogo } from "phosphor-react";
import SplitText from "./animations/SplitText";
import { fadeInUp, fadeInDown, staggerContainer, scaleIn, floatingAnimation } from "../utils/animations";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

export function Hero() {
  return (
    <motion.section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden text-[#eae0d5]"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          variants={fadeInDown}
          className="mb-6"
        >
          <motion.div
            className="inline-block px-4 py-2 rounded-full border border-[#c6ac8f]/30 bg-[#c6ac8f]/10 backdrop-blur-sm mb-8"
            variants={scaleIn}
          >
            <span className="text-[#c6ac8f] text-sm font-body font-corporate-medium tracking-wide-corporate">
               Welcome to my digital world
            </span>
          </motion.div>
        </motion.div>

        <motion.span 
          className="block text-5xl md:text-7xl lg:text-8xl font-heading font-corporate-extrabold mb-6 leading-tight split-text tracking-tight-corporate"
          variants={fadeInUp}
        >
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
        </motion.span>

        <motion.span
          variants={fadeInUp}
          className="block text-3xl md:text-4xl lg:text-5xl text-[#eae0d5]/80 font-body font-corporate-light mt-2 mb-10 tracking-wide-corporate"
        >
          <span className="text-gradient bg-gradient-to-r from-[#c6ac8f] via-[#eae0d5] to-[#c6ac8f] bg-clip-text text-transparent">
            Software Developer
          </span>
        </motion.span>

        <motion.p
          variants={fadeInUp}
          className="text-lg md:text-xl text-[#eae0d5]/70 max-w-3xl mx-auto mb-10 leading-relaxed font-body font-corporate-normal tracking-normal-corporate"
        >
          I craft digital experiences that blend innovative design with powerful
          functionality. Transforming ideas into scalable, user-centric
          applications with modern technologies.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.a
            href="#portfolio"
            whileHover={{ 
              scale: 1.05, 
              y: -2,
              boxShadow: "0 0 25px rgba(198, 172, 143, 0.6)"
            }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-3 bg-gradient-to-r from-[#c6ac8f] to-[#5e503f] text-[#0a0908] px-8 py-4 rounded-full font-body font-corporate-semibold shadow-lg transition-all duration-300 tracking-wide-corporate relative overflow-hidden"
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-[#eae0d5] to-[#c6ac8f] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
            <span className="relative z-10">View My Work</span>
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform relative z-10"
            />
          </motion.a>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="flex justify-center gap-6"
        >
          {[
            {
              href: "https://github.com/glatztp",
              icon: <GithubLogo size={24} />,
            },
            {
              href: "https://linkedin.com/in/gabriel-glatz",
              icon: <LinkedinLogo size={24} />,
            },
          ].map(({ href, icon }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.3, 
                y: -5,
                rotate: [0, -10, 10, 0],
                transition: { duration: 0.3 }
              }}
              className="p-3 rounded-full bg-[#22333b]/60 text-[#eae0d5]/70 hover:text-[#c6ac8f] hover:bg-[#5e503f]/70 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#c6ac8f]/20"
            >
              {icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        variants={floatingAnimation}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          ...floatingAnimation.animate
        }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-[#eae0d5]/60">
          <motion.span 
            className="text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll to explore
          </motion.span>
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

      {/* Floating Elements Background */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#c6ac8f] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}
