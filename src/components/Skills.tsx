import { motion } from "framer-motion";
import { Code, GearSix, PaintBrush } from "phosphor-react";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiGo,
  SiDocker,
  SiGit,
  SiFigma,
  SiFramer,
  SiPostgresql,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiC,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    icon: <PaintBrush size={32} weight="fill" />,
    skills: [
      {
        name: "React",
        level: 55,
        colors: ["#c6ac8f", "#5e503f"],
        icon: <SiReact />,
        iconColor: "#61DAFB",
      },
      {
        name: "TypeScript",
        level: 40,
        colors: ["#eae0d5", "#c6ac8f"],
        icon: <SiTypescript />,
        iconColor: "#3178C6",
      },
      {
        name: "Next.js",
        level: 30,
        colors: ["#5e503f", "#22333b"],
        icon: <SiNextdotjs />,
        iconColor: "#000000",
      },
      {
        name: "Tailwind CSS",
        level: 55,
        colors: ["#c6ac8f", "#5e503f"],
        icon: <SiTailwindcss />,
        iconColor: "#06B6D4",
      },
      {
        name: "Framer Motion",
        level: 20,
        colors: ["#eae0d5", "#c6ac8f"],
        icon: <SiFramer />,
        iconColor: "#0055FF",
      },
    ],
  },
  {
    title: "Backend",
    icon: <GearSix size={32} weight="fill" />,
    skills: [
      {
        name: "Node.js",
        level: 44,
        colors: ["#5e503f", "#22333b"],
        icon: <SiNodedotjs />,
        iconColor: "#339933",
      },
      {
        name: "Python",
        level: 70,
        colors: ["#c6ac8f", "#eae0d5"],
        icon: <SiPython />,
        iconColor: "#3776AB",
      },
      {
        name: "Go",
        level: 30,
        colors: ["#5e503f", "#c6ac8f"],
        icon: <SiGo />,
        iconColor: "#00ADD8",
      },
      {
        name: "PostgreSQL",
        level: 60,
        colors: ["#eae0d5", "#c6ac8f"],
        icon: <SiPostgresql />,
        iconColor: "#336791",
      },
      {
        name: "MongoDB",
        level: 45,
        colors: ["#c6ac8f", "#5e503f"],
        icon: <SiMongodb />,
        iconColor: "#47A248",
      },
    ],
  },
  {
    title: "Tools & Others",
    icon: <Code size={32} weight="fill" />,
    skills: [
      {
        name: "Git",
        level: 60,
        colors: ["#c6ac8f", "#5e503f"],
        icon: <SiGit />,
        iconColor: "#F05032",
      },
      {
        name: "Docker",
        level: 25,
        colors: ["#22333b", "#5e503f"],
        icon: <SiDocker />,
        iconColor: "#2496ED",
      },
      {
        name: "Figma",
        level: 45,
        colors: ["#eae0d5", "#c6ac8f"],
        icon: <SiFigma />,
        iconColor: "#F24E1E",
      },
      {
        name: "Adobe XD",
        level: 35,
        colors: ["#eae0d5", "#c6ac8f"],
        icon: <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="6" fill="#470137"/><text x="50%" y="55%" textAnchor="middle" fill="#FF61F6" fontSize="14" fontFamily="Arial" fontWeight="bold" dy=".3em">XD</text></svg>,
        iconColor: "#FF61F6",
      },
      {
        name: "JavaScript",
        level: 65,
        colors: ["#5e503f", "#22333b"],
        icon: <SiJavascript />,
        iconColor: "#F7DF1E",
      },
    ],
  },
];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);
  const { t } = useLanguage();

  return (
    <section
      id="skills"
      style={{ backgroundColor: "#0a0908" }}
      className="py-12 xs:py-16 sm:py-20 lg:py-32 text-white px-4 xs:px-6"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 xs:mb-12 sm:mb-16"
        >
          <span
            className="inline-block px-3 py-1.5 xs:px-4 xs:py-2 rounded-full mb-3 xs:mb-4 font-medium text-xs xs:text-sm"
            style={{
              background: "linear-gradient(90deg, #c6ac8f33, #5e503f33)",
              border: "1px solid #c6ac8f80",
              color: "#eae0d5",
            }}
          >
            {t("skills.subtitle")}
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-corporate-semibold mb-4 xs:mb-6 tracking-tight-corporate leading-tight">
            <span
              className="bg-clip-text text-transparent inline-block"
              style={{
                backgroundImage: "linear-gradient(90deg, #c6ac8f, #5e503f)",
              }}
            >
              {t("skills.title")}
            </span>
          </h2>
          <p
            className="text-sm xs:text-base sm:text-lg md:text-xl max-w-xs xs:max-w-lg sm:max-w-2xl md:max-w-3xl mx-auto font-body font-corporate-normal tracking-normal-corporate px-2 xs:px-0"
            style={{ color: "#eae0d5cc" }}
          >
            {t("skills.description")}
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8 xs:mb-12 overflow-x-auto px-2"
        >
          <div
            style={{
              backgroundColor: "rgba(34, 51, 59, 0.3)", // gunmetal / 30%
              backdropFilter: "blur(10px)",
              borderRadius: "9999px",
              border: "1px solid rgba(34, 51, 59, 0.5)",
            }}
            className="flex p-1 xs:p-2 gap-1 xs:gap-2 min-w-max"
          >
            {skillCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                style={{
                  background:
                    activeCategory === index
                      ? "linear-gradient(90deg, #c6ac8f, #5e503f)"
                      : "transparent",
                  color: activeCategory === index ? "#0a0908" : "#eae0d5cc",
                  boxShadow:
                    activeCategory === index
                      ? "0 4px 12px rgba(198, 172, 143, 0.6)"
                      : "none",
                }}
                className="px-3 py-2 xs:px-4 xs:py-2.5 sm:px-6 sm:py-3 rounded-full font-body font-corporate-medium transition-all duration-300 flex items-center gap-1 xs:gap-2 tracking-wide-corporate text-xs xs:text-sm whitespace-nowrap"
              >
                <span className="text-sm xs:text-base">{category.icon}</span>
                <span className="hidden xs:inline">
                  {t(
                    `skills.categories.${category.title
                      .toLowerCase()
                      .replace(" & ", "_")}`
                  )}
                </span>
                <span className="xs:hidden">
                  {
                    t(
                      `skills.categories.${category.title
                        .toLowerCase()
                        .replace(" & ", "_")}`
                    ).split(" ")[0]
                  }
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skills Display */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "0.75rem",
                filter: "blur(40px)",
                background: "linear-gradient(90deg, #c6ac8f33, #5e503f33)",
              }}
            ></div>

            <div
              style={{
                position: "relative",
                backgroundColor: "rgba(34, 51, 59, 0.3)",
                backdropFilter: "blur(8px)",
                borderRadius: "1rem",
                padding: "2rem",
                border: "1px solid rgba(34, 51, 59, 0.5)",
              }}
            >
              <h3
                className="text-2xl font-heading font-corporate-semibold mb-8 text-center tracking-tight-corporate"
                style={{ color: "#eae0d5" }}
              >
                {skillCategories[activeCategory].title} Skills
              </h3>

              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="flex flex-col items-center justify-center bg-[rgba(34,51,59,0.18)] rounded-xl p-6 border border-[rgba(34,51,59,0.3)] shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="mb-3">
                      <span className="text-3xl" style={{ color: skill.iconColor }}>
                        {skill.icon}
                      </span>
                    </div>
                    <span
                      style={{ color: "#eae0d5", fontWeight: 500, fontSize: "1.1rem" }}
                      className="font-body font-corporate-medium tracking-wide-corporate text-center"
                    >
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3
            className="text-2xl font-heading font-corporate-semibold text-center mb-8 tracking-tight-corporate"
            style={{ color: "#eae0d5" }}
          >
            <span
              className="bg-clip-text text-transparent inline-block"
              style={{
                backgroundImage: "linear-gradient(90deg, #c6ac8f, #5e503f)",
              }}
            >
              Additional Technologies
            </span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
              { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
              { name: "C", icon: <SiC />, color: "#A8B9CC" },
              { name: "Arduino", icon: <Code />, color: "#00979D" },
              { name: "MicroPython", icon: <SiPython />, color: "#3776AB" },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group"
              >
                <div style={{ position: "relative" }}>
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "0.5rem",
                      filter: "blur(8px)",
                      opacity: 0,
                      background:
                        "linear-gradient(90deg, #c6ac8f33, #5e503f33)",
                      transition: "opacity 0.3s ease",
                    }}
                    className="group-hover:opacity-100"
                  ></div>
                  <div
                    style={{
                      position: "relative",
                      backgroundColor: "rgba(34, 51, 59, 0.5)",
                      backdropFilter: "blur(10px)",
                      borderRadius: "0.5rem",
                      padding: "0.75rem 1rem",
                      border: "1px solid rgba(34, 51, 59, 0.5)",
                      transition: "border-color 0.3s ease",
                    }}
                    className="group-hover:border-[#c6ac8f80]"
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className="text-lg transition-all duration-300 group-hover:scale-110"
                        style={{ color: tech.color }}
                      >
                        {tech.icon}
                      </div>
                      <span
                        style={{
                          color: "#eae0d5",
                          fontWeight: 500,
                          fontSize: "0.875rem",
                        }}
                        className="font-body font-corporate-medium tracking-wide-corporate"
                      >
                        {tech.name}
                      </span>
                    </div>
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
