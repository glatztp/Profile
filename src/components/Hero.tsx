import { motion } from "framer-motion";
import { ArrowRight, GithubLogo, LinkedinLogo } from "phosphor-react";
import SplitText from "./animations/SplitText";
import TextHighlighter from "./animations/TextHighlighter";
import { useLanguage } from "../contexts/LanguageContext";
import {
  fadeInUp,
  fadeInDown,
  staggerContainer,
  scaleIn,
  floatingAnimation,
} from "../utils/animations";

export function Hero() {
  const { t } = useLanguage();
  return (
    <motion.section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden text-[#eae0d5] px-4 sm:px-6 lg:px-8"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      {/* Content */}
      <div className="relative z-10 text-center w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <motion.div variants={fadeInDown} className="mb-3 sm:mb-4 md:mb-6">
          <motion.div
            className="inline-block px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-full border border-[#c6ac8f]/30 bg-[#c6ac8f]/10 backdrop-blur-sm mb-4 sm:mb-6 md:mb-8"
            variants={scaleIn}
          >
            <span className="text-[#c6ac8f] text-xs sm:text-sm md:text-base font-body font-corporate-medium tracking-wide-corporate">
              {t("hero.greeting")}
            </span>
          </motion.div>
        </motion.div>

        <motion.span
          className="block text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-heading font-corporate-extrabold mb-3 sm:mb-4 md:mb-6 leading-[0.9] sm:leading-tight split-text tracking-tight-corporate"
          variants={fadeInUp}
        >
          <TextHighlighter
            highlightColor="#c6ac8f"
            highlightOpacity={0.9}
            animationDuration={1.2}
            animationDelay={0.15}
            strokeWidth={5}
            type="wavy"
            triggerOnView
          >
            <SplitText
              text={t("hero.name")}
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </TextHighlighter>
        </motion.span>

        <motion.span
          variants={fadeInUp}
          className="block text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#eae0d5]/80 font-body font-corporate-light mt-1 sm:mt-2 mb-6 sm:mb-8 md:mb-10 tracking-wide-corporate"
        >
          <span className="text-gradient bg-gradient-to-r from-[#c6ac8f] via-[#eae0d5] to-[#c6ac8f] bg-clip-text text-transparent">
            {t("hero.title")}
          </span>
        </motion.span>

        <motion.p
          variants={fadeInUp}
          className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-xl text-[#eae0d5]/70 max-w-xs xs:max-w-sm sm:max-w-md md:max-2xl lg:max-w-3xl xl:max-w-4xl mx-auto mb-6 sm:mb-8 md:mb-10 leading-relaxed font-body font-corporate-normal tracking-normal-corporate px-1 sm:px-2"
        >
          {t("hero.description")}
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center items-center mb-6 sm:mb-8 md:mb-12 px-2 sm:px-4"
        >
          <motion.a
            href="#portfolio"
            whileHover={{
              scale: 1.05,
              y: -2,
              boxShadow: "0 0 25px rgba(198, 172, 143, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-[#c6ac8f] to-[#5e503f] text-[#0a0908] px-4 py-2.5 xs:px-5 xs:py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full font-body font-corporate-semibold shadow-lg transition-all duration-300 tracking-wide-corporate relative overflow-hidden text-sm xs:text-base sm:text-base w-full xs:w-auto sm:w-auto justify-center max-w-xs xs:max-w-none"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#eae0d5] to-[#c6ac8f] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
            <span className="relative z-10">{t("hero.cta")}</span>
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform relative z-10 xs:w-4 xs:h-4 sm:w-5 sm:h-5"
            />
          </motion.a>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="flex justify-center gap-3 xs:gap-4 sm:gap-6"
        >
          {[
            {
              href: "https://github.com/glatztp",
              icon: (
                <GithubLogo size={18} className="xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
              ),
            },
            {
              href: "https://linkedin.com/in/gabriel-glatz",
              icon: (
                <LinkedinLogo
                  size={18}
                  className="xs:w-5 xs:h-5 sm:w-6 sm:h-6"
                />
              ),
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
                transition: { duration: 0.3 },
              }}
              className="p-1.5 xs:p-2 sm:p-3 rounded-full bg-[#22333b]/60 text-[#eae0d5]/70 hover:text-[#c6ac8f] hover:bg-[#5e503f]/70 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#c6ac8f]/20"
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
          ...floatingAnimation.animate,
        }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-3 xs:bottom-4 sm:bottom-8  -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-1 xs:gap-1.5 sm:gap-2 text-[#eae0d5]/60">
          <motion.span
            className="text-xs xs:text-xs sm:text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll to explore
          </motion.span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-4 h-6 xs:w-5 xs:h-8 sm:w-6 sm:h-10 border-2 border-[#c6ac8f]/40 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-0.5 h-1.5 xs:w-0.5 xs:h-2 sm:w-1 sm:h-3 bg-gradient-to-b from-[#c6ac8f] to-[#5e503f] rounded-full mt-1 xs:mt-1 sm:mt-2"
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
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 xs:w-1.5 xs:h-1.5 sm:w-2 sm:h-2 bg-[#c6ac8f] rounded-full"
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
