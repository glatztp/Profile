import { motion } from "framer-motion";
import { useState } from "react";
import {
  Code,
  Rocket,
  Heart,
  Coffee,
  PaintBrush,
  Laptop,
  BookOpen,
  Medal,
} from "phosphor-react";
import CountUp from "./animations/CountUp";
import ProfileCard from "./animations/ProfileCard";
import profileBg from "../assets/profile-bg.png";
import { useLanguage } from "../contexts/LanguageContext";

export function About() {
  const { t } = useLanguage();
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const [showNotification, setShowNotification] = useState(false);

  const stats = [
    { number: 5, suffix: "+", label: t("about.stats.projects"), icon: Code },
    {
      number: 2,
      suffix: "+",
      label: t("about.stats.experience"),
      icon: Rocket,
    },
    {
      number: 100,
      suffix: "%",
      label: "Comprometimento com resultados",
      icon: Medal,
    },
    { number: 1000, suffix: "+", label: t("about.stats.coffee"), icon: Coffee },
  ];

  const values = [
    {
      title: t("about.values.innovation"),
      description: t("about.values.innovation.desc"),
      icon: <Rocket size={32} weight="fill" />,
    },
    {
      title: t("about.values.design"),
      description: t("about.values.design.desc"),
      icon: <PaintBrush size={32} weight="fill" />,
    },
    {
      title: t("about.values.code"),
      description: t("about.values.code.desc"),
      icon: <Laptop size={32} weight="fill" />,
    },
    {
      title: t("about.values.learning"),
      description: t("about.values.learning.desc"),
      icon: <BookOpen size={32} weight="fill" />,
    },
  ];

  // Função para lidar com o clique no botão "Say Hello"
  const handleContactClick = () => {
    // Adiciona efeito visual de feedback no botão
    const button = document.querySelector(".pc-contact-btn");
    if (button) {
      button.classList.add("success");
      setTimeout(() => {
        button.classList.remove("success");
      }, 1000);
    }

    // Mostra notificação temporária
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);

    // Scroll suave para a seção de contato após um pequeno delay
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 500);
  };

  return (
    <section
      id="about"
      className="relative py-12 xs:py-16 sm:py-20 lg:py-32 text-[#eae0d5] px-4 xs:px-6 sm:px-8"
    >
      {/* Notificação de feedback */}
      {showNotification && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.9 }}
          className="fixed top-4 xs:top-6 right-4 xs:right-6 z-50 bg-gradient-to-r from-[#c6ac8f] to-[#5e503f] text-[#0a0908] px-4 py-2 xs:px-6 xs:py-3 rounded-lg shadow-lg backdrop-blur-sm border border-[#c6ac8f]/20 max-w-xs xs:max-w-none"
        >
          <div className="flex items-center gap-2 xs:gap-3">
            <div className="w-2 h-2 bg-[#0a0908] rounded-full animate-pulse"></div>
            <span className="font-body font-corporate-medium tracking-wide-corporate text-xs xs:text-sm">
              {t("about.notification.redirecting")}
            </span>
          </div>
        </motion.div>
      )}

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-8 xs:mb-12 sm:mb-16"
        >
          <span className="inline-block px-3 py-1.5 xs:px-4 xs:py-2 rounded-full bg-[#22333b]/40 border border-[#5e503f]/50 text-[#c6ac8f] text-xs xs:text-sm font-medium mb-3 xs:mb-4">
            {t("about.subtitle")}
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-corporate-semibold mb-4 xs:mb-6 tracking-tight-corporate leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5e503f] to-[#eae0d5]">
              {t("about.title")}
            </span>
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-[#eae0d5]/70 max-w-xs xs:max-w-lg sm:max-w-2xl md:max-w-3xl mx-auto font-body font-corporate-normal tracking-normal-corporate leading-relaxed px-2 xs:px-0">
            {t("about.description")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 xs:gap-8 sm:gap-10 mb-12 xs:mb-16 sm:mb-20"
        >
          {/* Profile Card - Full width on mobile, 1 column on desktop */}
          <div className="w-full max-w-md mx-auto lg:max-w-none lg:mx-0">
            <ProfileCard
              name="Gabriel Glatz"
              title={t("hero.title")}
              handle="glatztp"
              status={t("about.hello.feedback")}
              contactText={t("about.hello.button")}
              avatarUrl={profileBg}
              showUserInfo={true}
              enableTilt={true}
              icon={<Code />}
              onContactClick={handleContactClick}
            />
          </div>

          {/* Content Area - 2 columns on desktop */}
          <div className="lg:col-span-2 space-y-4 xs:space-y-6">
            {/* Main Description */}
            <div className="relative bg-[#22333b]/60 backdrop-blur-sm rounded-xl xs:rounded-2xl p-4 xs:p-6 sm:p-8 border border-[#5e503f]/50">
              <h3 className="text-lg xs:text-xl sm:text-2xl font-heading font-corporate-semibold text-[#eae0d5] mb-3 xs:mb-4 tracking-tight-corporate">
                {t("hero.greeting")} Gabriel Glatz
              </h3>
              <div className="space-y-3 xs:space-y-4 text-[#eae0d5]/80 leading-relaxed font-body font-corporate-normal tracking-normal-corporate">
                <p className="text-sm xs:text-base">{t("about.description")}</p>
                <p className="text-sm xs:text-base">
                  {t("about.description2")}
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 xs:gap-4 sm:gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, y: -2 }}
                    transition={{ duration: 0.2 }}
                    onHoverStart={() => setHoveredStat(index)}
                    onHoverEnd={() => setHoveredStat(null)}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-[#c6ac8f]/10 rounded-lg xs:rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative bg-[#22333b]/60 backdrop-blur-sm rounded-lg xs:rounded-xl p-3 xs:p-4 sm:p-6 border border-[#5e503f]/50 group-hover:border-[#c6ac8f]/50 transition-all duration-300">
                      <IconComponent
                        size={24}
                        className={`xs:w-6 xs:h-6 sm:w-8 sm:h-8 mb-2 xs:mb-3 sm:mb-4 transition-colors duration-300 ${
                          hoveredStat === index
                            ? "text-[#c6ac8f]"
                            : "text-[#eae0d5]/70"
                        }`}
                      />
                      <div className="text-xl xs:text-2xl sm:text-3xl font-heading font-corporate-bold text-[#eae0d5] mb-1 xs:mb-2 tracking-tight-corporate">
                        <CountUp
                          from={0}
                          to={stat.number}
                          duration={1.5}
                          separator=","
                          className="inline"
                        />
                        {stat.suffix}
                      </div>
                      <div className="text-[#eae0d5]/70 text-xs xs:text-sm font-body font-corporate-medium tracking-wide-corporate">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 xs:mb-12 sm:mb-16"
        >
          <h3 className="text-xl xs:text-2xl sm:text-3xl font-heading font-corporate-semibold text-center mb-6 xs:mb-8 sm:mb-12 tracking-tight-corporate">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5e503f] to-[#eae0d5]">
              {t("about.values.title")}
            </span>
          </h3>

          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="group"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-[#c6ac8f]/10 rounded-lg xs:rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative bg-[#22333b]/60 backdrop-blur-sm rounded-lg xs:rounded-xl p-4 xs:p-6 border border-[#5e503f]/50 group-hover:border-[#c6ac8f]/50 transition-all duration-300 h-full">
                    <div className="text-2xl xs:text-3xl sm:text-4xl mb-3 xs:mb-4 text-[#c6ac8f]">
                      {value.icon}
                    </div>
                    <h4 className="text-base xs:text-lg sm:text-xl font-heading font-corporate-semibold text-[#eae0d5] mb-2 xs:mb-3 tracking-tight-corporate">
                      {value.title}
                    </h4>
                    <p className="text-[#eae0d5]/70 text-xs xs:text-sm leading-relaxed font-body font-corporate-normal tracking-normal-corporate">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
