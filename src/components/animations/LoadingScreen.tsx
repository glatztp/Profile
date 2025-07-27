import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface LoadingScreenProps {
  isVisible: boolean;
  onComplete: () => void;
}

export default function LoadingScreen({
  isVisible,
  onComplete,
}: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  const letters = ["G", "l", "t", "z"];

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + Math.random() * 25 + 8; // Progresso mais rápido
      });
    }, 80); // Intervalo ainda menor

    // Animação das letras
    const letterInterval = setInterval(() => {
      setCurrentLetterIndex((prev) => (prev + 1) % letters.length);
    }, 600);

    return () => {
      clearInterval(interval);
      clearInterval(letterInterval);
    };
  }, [isVisible, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-[#0a0908] flex flex-col items-center justify-center"
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Logo Animation - Gltz */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotateY: -180 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.8, ease: "backOut" }}
            className="mb-12 relative"
          >
            <div className="flex items-center justify-center space-x-2">
              {letters.map((letter, index) => (
                <motion.div
                  key={letter}
                  className="text-7xl font-heading font-corporate-extrabold tracking-tight-corporate relative"
                  style={{
                    background:
                      currentLetterIndex === index
                        ? "linear-gradient(45deg, #c6ac8f, #eae0d5, #c6ac8f)"
                        : "linear-gradient(45deg, #5e503f, #c6ac8f, #5e503f)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundSize: "200% 200%",
                  }}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    scale: currentLetterIndex === index ? [1, 1.2, 1] : 1,
                    rotateY: currentLetterIndex === index ? [0, 360, 0] : 0,
                  }}
                  transition={{
                    backgroundPosition: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                    scale: {
                      duration: 0.6,
                      ease: "easeOut",
                    },
                    rotateY: {
                      duration: 0.6,
                      ease: "easeOut",
                    },
                  }}
                >
                  {letter}

                  {/* Glow effect para letra ativa */}
                  {currentLetterIndex === index && (
                    <motion.div
                      className="absolute inset-0 text-7xl font-heading font-corporate-extrabold"
                      style={{
                        background:
                          "linear-gradient(45deg, #c6ac8f, #eae0d5, #c6ac8f)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        filter: "blur(8px)",
                        opacity: 0.7,
                      }}
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 0.6,
                        ease: "easeInOut",
                      }}
                    >
                      {letter}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-4 -left-4 w-2 h-2 bg-[#c6ac8f] rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-4 -right-4 w-2 h-2 bg-[#eae0d5] rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </motion.div>

          {/* Progress Bar - Melhorado */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 320, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative mb-6"
          >
            <div className="w-80 h-2 bg-[#5e503f]/30 rounded-full overflow-hidden backdrop-blur-sm border border-[#c6ac8f]/20">
              <motion.div
                className="h-full rounded-full relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(90deg, #c6ac8f, #eae0d5, #c6ac8f)",
                  backgroundSize: "200% 100%",
                }}
                initial={{ width: "0%" }}
                animate={{
                  width: `${progress}%`,
                  backgroundPosition: ["0% 50%", "200% 50%", "0% 50%"],
                }}
                transition={{
                  width: { duration: 0.3, ease: "easeOut" },
                  backgroundPosition: {
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    translateX: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </div>

            {/* Progress percentage */}
            <motion.div
              className="absolute -top-8 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <span className="text-[#c6ac8f] text-sm font-mono font-bold tracking-wider">
                {Math.round(progress)}%
              </span>
            </motion.div>
          </motion.div>

          {/* Loading Text - Animado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-center"
          >
            <motion.div
              className="text-[#c6ac8f] text-base font-body font-corporate-medium tracking-wide-corporate"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Initializing digital experience
            </motion.div>

            {/* Animated dots */}
            <div className="flex justify-center space-x-1 mt-2">
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  className="w-1 h-1 bg-[#c6ac8f] rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Floating Particles - Reduzido e otimizado */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[#c6ac8f]/60 rounded-full"
                style={{
                  left: `${15 + i * 10}%`,
                  top: `${20 + (i % 3) * 20}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  x: [0, Math.sin(i) * 10, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3 + (i % 2),
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Background gradient overlay */}
          <motion.div
            className="absolute inset-0 opacity-20"
            style={{
              background:
                "radial-gradient(circle at center, #c6ac8f 0%, transparent 70%)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
