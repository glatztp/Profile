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
} from "phosphor-react";
import CountUp from "./animations/CountUp";
import ProfileCard from "./animations/ProfileCard";
import profileBg from "../assets/profile-bg.png";

const stats = [
  { number: 5, suffix: "+", label: "Projects Completed", icon: Code },
  { number: 2, suffix: "+", label: "Years Experience", icon: Rocket },
  { number: 100, suffix: "%", label: "Client Satisfaction", icon: Heart },
  { number: 1000, suffix: "+", label: "Cups of Coffee", icon: Coffee },
];

const values = [
  {
    title: "Innovation First",
    description:
      "Always exploring cutting-edge technologies and creative solutions to deliver exceptional results.",
    icon: <Rocket size={32} weight="fill" />,
  },
  {
    title: "User-Centric Design",
    description:
      "Every interface I create is designed with the user experience as the top priority.",
    icon: <PaintBrush size={32} weight="fill" />,
  },
  {
    title: "Clean Code",
    description:
      "Writing maintainable, scalable, and well-documented code that stands the test of time.",
    icon: <Laptop size={32} weight="fill" />,
  },
  {
    title: "Continuous Learning",
    description:
      "Staying ahead of the curve by constantly learning new technologies and best practices.",
    icon: <BookOpen size={32} weight="fill" />,
  },
];

export function About() {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const [showNotification, setShowNotification] = useState(false);

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
    <section id="about" className="relative py-20 lg:py-32 text-[#eae0d5]">
      {/* Notificação de feedback */}
      {showNotification && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.9 }}
          className="fixed top-6 right-6 z-50 bg-gradient-to-r from-[#c6ac8f] to-[#5e503f] text-[#0a0908] px-6 py-3 rounded-lg shadow-lg backdrop-blur-sm border border-[#c6ac8f]/20"
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#0a0908] rounded-full animate-pulse"></div>
            <span className="font-body font-corporate-medium tracking-wide-corporate">
              Redirecting to contact section...
            </span>
          </div>
        </motion.div>
      )}

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#22333b]/40 border border-[#5e503f]/50 text-[#c6ac8f] text-sm font-medium mb-4">
            Get to know me
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-corporate-semibold mb-6 tracking-tight-corporate">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5e503f] to-[#eae0d5]">
              About Me
            </span>
          </h2>
          <p className="text-xl text-[#eae0d5]/70 max-w-3xl mx-auto font-body font-corporate-normal tracking-normal-corporate leading-relaxed">
            Passionate developer with a love for creating digital experiences
            that make a difference
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true}}
          className="grid lg:grid-cols-3 gap-10 mb-20"
        >
          <div>
            <ProfileCard
              name="Gabriel Glatz"
              title="Software Developer"
              handle="glatztp"
              status="Available for work"
              contactText="Say Hello"
              avatarUrl={profileBg}
              showUserInfo={true}
              enableTilt={true}
              icon={<Code />}
              onContactClick={handleContactClick}
            />
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="relative bg-[#22333b]/60 backdrop-blur-sm rounded-2xl p-8 border border-[#5e503f]/50">
              <h3 className="text-2xl font-heading font-corporate-semibold text-[#eae0d5] mb-4 tracking-tight-corporate">
                Hello! I'm Gabriel Glatz
              </h3>
              <div className="space-y-4 text-[#eae0d5]/80 leading-relaxed font-body font-corporate-normal tracking-normal-corporate">
                <p>
                  I'm a passionate{" "}
                  <strong className="text-[#c6ac8f]">Software Developer</strong>{" "}
                  with over 2 year of experience creating digital solutions that
                  combine functionality with stunning design.
                </p>
                <p>
                  My journey began with curiosity about how websites work, and
                  it has evolved into a deep passion for crafting user
                  experiences that are both beautiful and functional.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  knowledge with the developer community.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
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
                    <div className="absolute inset-0 bg-[#c6ac8f]/10 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative bg-[#22333b]/60 backdrop-blur-sm rounded-xl p-6 border border-[#5e503f]/50 group-hover:border-[#c6ac8f]/50 transition-all duration-300">
                      <IconComponent
                        size={32}
                        className={`mb-4 transition-colors duration-300 ${
                          hoveredStat === index
                            ? "text-[#c6ac8f]"
                            : "text-[#eae0d5]/70"
                        }`}
                      />
                      <div className="text-3xl font-heading font-corporate-bold text-[#eae0d5] mb-2 tracking-tight-corporate">
                        <CountUp
                          from={0}
                          to={stat.number}
                          duration={1.5}
                          separator=","
                          className="inline"
                        />
                        {stat.suffix}
                      </div>
                      <div className="text-[#eae0d5]/70 text-sm font-body font-corporate-medium tracking-wide-corporate">
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
          className="mb-16"
        >
          <h3 className="text-3xl font-heading font-corporate-semibold text-center mb-12 tracking-tight-corporate">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5e503f] to-[#eae0d5]">
              My Values
            </span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  <div className="absolute inset-0 bg-[#c6ac8f]/10 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative bg-[#22333b]/60 backdrop-blur-sm rounded-xl p-6 border border-[#5e503f]/50 group-hover:border-[#c6ac8f]/50 transition-all duration-300 h-full">
                    <div className="text-4xl mb-4 text-[#c6ac8f]">
                      {value.icon}
                    </div>
                    <h4 className="text-xl font-heading font-corporate-semibold text-[#eae0d5] mb-3 tracking-tight-corporate">
                      {value.title}
                    </h4>
                    <p className="text-[#eae0d5]/70 text-sm leading-relaxed font-body font-corporate-normal tracking-normal-corporate">
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
