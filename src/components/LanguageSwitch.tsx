import { motion } from "framer-motion";
import { Globe } from "phosphor-react";
import { useLanguage, Language } from "../contexts/LanguageContext";

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative"
    >
      <div
        className="
          flex items-center gap-1 
          px-2 xs:px-3 py-1 xs:py-2 
          rounded-lg
          backdrop-blur-md
          border border-white/10
          hover:border-[#c6ac8f]/50
          transition-all duration-300
        "
        style={{
          backgroundColor: "rgba(34, 51, 59, 0.3)",
        }}
      >
        <Globe
          size={16}
          className="text-[#c6ac8f] xs:text-base text-sm"
          weight="duotone"
        />

        <div className="flex items-center gap-1">
          <motion.button
            onClick={() => handleLanguageChange("pt")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`
              px-1 xs:px-2 py-1 rounded text-xs xs:text-sm font-medium
              transition-all duration-300
              ${
                language === "pt"
                  ? "text-[#eae0d5] bg-[#c6ac8f]/20"
                  : "text-[#c6ac8f]/60 hover:text-[#c6ac8f]"
              }
            `}
          >
            PT
          </motion.button>

          <div className="w-px h-3 xs:h-4 bg-white/20" />

          <motion.button
            onClick={() => handleLanguageChange("en")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`
              px-1 xs:px-2 py-1 rounded text-xs xs:text-sm font-medium
              transition-all duration-300
              ${
                language === "en"
                  ? "text-[#eae0d5] bg-[#c6ac8f]/20"
                  : "text-[#c6ac8f]/60 hover:text-[#c6ac8f]"
              }
            `}
          >
            EN
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
