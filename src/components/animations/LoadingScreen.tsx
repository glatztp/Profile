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

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 200);
          return 100;
        }
        return prev + Math.random() * 12 + 3;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isVisible, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-gradient-to-br from-[#0a0908] via-[#151515] to-[#0a0908] flex flex-col items-center justify-center"
          exit={{
            opacity: 0,
            scale: 1.02,
          }}
          transition={{
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {/* Logo Animation - Simplificado */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="mb-16"
          >
            <motion.div
              className="text-6xl md:text-7xl font-heading font-corporate-extrabold tracking-tight-corporate"
              style={{
                background:
                  "linear-gradient(135deg, #c6ac8f, #eae0d5, #c6ac8f)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundSize: "200% 200%",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Gltz
            </motion.div>
          </motion.div>

          {/* Progress Bar - Simplificado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="w-64 h-1 bg-[#5e503f]/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#c6ac8f] to-[#eae0d5] rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                }}
              />
            </div>

            {/* Loading Text - Simplificado */}
            <motion.div
              className="text-[#c6ac8f]/80 text-sm font-body tracking-wide text-center"
              animate={{
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Loading... {Math.round(progress)}%
            </motion.div>
          </motion.div>

          {/* Background gradient - Sutil */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#c6ac8f]/10 to-transparent"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
