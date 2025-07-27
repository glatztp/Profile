import { motion } from "framer-motion";
import {
  CalendarCheck,
  MapPin,
  Briefcase,
  GraduationCap,
  Star,
  TrendUp,
  Code,
  Globe,
} from "phosphor-react";

const experiences = [
  {
    id: 1,
    title: "Systems Developer",
    company: "Grupo Malwee",
    location: "Jaraguá do Sul, BR",
    period: "2024 - current",
    type: "Apprenticeship",
    description:
      "Working as a systems developer within the technology department, contributing to the development and maintenance of internal software solutions. Collaborating with multidisciplinary teams on both front-end and back-end projects with a focus on clean code, accessibility, and performance.",
    achievements: [
      "Delivered real-world features in a corporate production environment",
      "Worked with agile methodologies and version control practices",
      "Actively contributed to internal system modernization projects",
    ],
    technologies: ["React", "Tailwind CSS", "TypeScript", "Node.js", "SQL"],
    current: true,
    icon: Code,
  },
  {
    id: 4,
    title: "Freelance Web Developer",
    company: "Self-Employed",
    location: "Remote",
    period: "2025 - current",
    type: "Freelance",
    description:
      "Provided web development services to small businesses, creating custom websites and e-commerce solutions.",
    achievements: [
      "Completed 4+ freelance projects successfully",
      "Built strong client relationships with 95% retention rate",
      "Developed expertise in various web technologies",
    ],
    technologies: ["WordPress", "HTML", "CSS", "JavaScript"],
    current: false,
    icon: Globe,
  },
];

const education = [
  {
    id: 1,
    title: "Industrial Information Systems Program (PSII V1)",
    institution: "SENAI",
    location: "Jaraguá do Sul, BR",
    period: "2024 - current",
    type: "Technical Degree",
    description:
      "Technical course focused on software development and industrial automation, with emphasis on modern languages, system integration, and software engineering practices.",
    achievements: [
      "Developed real-world integrative projects for industrial applications",
      "Completed over 1200 hours of hands-on technical training",
      "Recognized for strong performance in programming and web development",
    ],
    icon: GraduationCap,
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-br from-[#0a0908] via-[#151515] to-[#0a0908] overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[#c6ac8f]/10 to-transparent"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #c6ac8f15 0%, transparent 50%),
                            radial-gradient(circle at 75% 75%, #5e503f15 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#c6ac8f]/20 to-[#5e503f]/20 border border-[#c6ac8f]/30 text-[#c6ac8f] text-sm font-medium mb-6 backdrop-blur-sm"
          >
            <TrendUp size={16} />
            My Professional Journey
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-[#c6ac8f] via-[#eae0d5] to-[#5e503f] bg-clip-text text-transparent">
              Experience &
            </span>
            <br />
            <span className="text-[#eae0d5]">Education</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg sm:text-xl text-[#eae0d5]/80 max-w-3xl mx-auto leading-relaxed"
          >
            Building expertise through hands-on experience and continuous
            learning in technology
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12">
          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-lg bg-gradient-to-br from-[#c6ac8f]/20 to-[#5e503f]/20 border border-[#c6ac8f]/30">
                <Briefcase size={24} className="text-[#c6ac8f]" />
              </div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-[#eae0d5]">
                Professional Experience
              </h3>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#c6ac8f] via-[#5e503f] to-[#c6ac8f] opacity-30"></div>

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    viewport={{ once: true, margin: "-20px" }}
                    className="relative pl-16 md:pl-20"
                  >
                    {/* Timeline Node */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
                      className="absolute left-4 md:left-6 top-8 w-4 h-4 rounded-full border-2 border-[#0a0908] z-10 flex items-center justify-center text-xs"
                      style={{
                        backgroundColor: exp.current ? "#c6ac8f" : "#5e503f",
                        boxShadow: exp.current
                          ? "0 0 20px rgba(198, 172, 143, 0.5)"
                          : "none",
                      }}
                    >
                      {exp.current && (
                        <motion.div
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-2 h-2 bg-[#0a0908] rounded-full"
                        />
                      )}
                    </motion.div>

                    {/* Experience Card */}
                    <motion.div
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                      className="group relative"
                    >
                      {/* Hover Glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#c6ac8f]/10 to-[#5e503f]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>

                      <div className="relative bg-gradient-to-br from-[#22333b]/80 to-[#1a1a1a]/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[#5e503f]/30 group-hover:border-[#c6ac8f]/40 transition-all duration-300">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                          <div className="flex items-start gap-4">
                            <div className="p-2 rounded-lg bg-gradient-to-br from-[#c6ac8f]/20 to-[#5e503f]/20 border border-[#c6ac8f]/30">
                              <exp.icon size={24} className="text-[#c6ac8f]" />
                            </div>
                            <div>
                              <h4 className="text-xl md:text-2xl font-heading font-bold text-[#eae0d5] mb-1">
                                {exp.title}
                              </h4>
                              <p className="text-lg font-medium text-[#c6ac8f]">
                                {exp.company}
                              </p>
                            </div>
                          </div>

                          {exp.current && (
                            <motion.span
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              transition={{ delay: 0.5, type: "spring" }}
                              className="px-3 py-1.5 bg-gradient-to-r from-[#10b981] to-[#c6ac8f] text-[#0a0908] text-xs font-bold rounded-full flex items-center gap-1 shrink-0"
                            >
                              <Star size={12} weight="fill" />
                              Current
                            </motion.span>
                          )}
                        </div>

                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-[#eae0d5]/70">
                          <div className="flex items-center gap-2">
                            <CalendarCheck
                              size={16}
                              className="text-[#c6ac8f]"
                            />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={16} className="text-[#c6ac8f]" />
                            <span>{exp.location}</span>
                          </div>
                          <span className="px-3 py-1 bg-[#5e503f]/30 text-[#c6ac8f] rounded-full text-xs font-medium">
                            {exp.type}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-[#eae0d5]/80 leading-relaxed mb-6">
                          {exp.description}
                        </p>

                        {/* Achievements */}
                        <div className="mb-6">
                          <h5 className="text-[#eae0d5] font-semibold mb-3 flex items-center gap-2">
                            <Star size={16} className="text-[#c6ac8f]" />
                            Key Achievements
                          </h5>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="text-[#eae0d5]/70 flex items-start gap-3 text-sm"
                              >
                                <span className="w-1.5 h-1.5 bg-[#c6ac8f] rounded-full mt-2 shrink-0"></span>
                                {achievement}
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: idx * 0.05 }}
                              className="px-3 py-1.5 bg-[#5e503f]/20 border border-[#5e503f]/40 text-[#eae0d5] text-sm rounded-lg hover:bg-[#c6ac8f]/20 hover:border-[#c6ac8f]/40 transition-colors duration-200"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-lg bg-gradient-to-br from-[#c6ac8f]/20 to-[#5e503f]/20 border border-[#c6ac8f]/30">
                <GraduationCap size={24} className="text-[#c6ac8f]" />
              </div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-[#eae0d5]">
                Education
              </h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  viewport={{ once: true, margin: "-20px" }}
                  className="group"
                >
                  <motion.div
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="relative"
                  >
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#c6ac8f]/10 to-[#5e503f]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>

                    <div className="relative bg-gradient-to-br from-[#22333b]/80 to-[#1a1a1a]/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[#5e503f]/30 group-hover:border-[#c6ac8f]/40 transition-all duration-300">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                        <div className="flex items-start gap-4">
                          <div className="p-2 rounded-lg bg-gradient-to-br from-[#c6ac8f]/20 to-[#5e503f]/20 border border-[#c6ac8f]/30">
                            <edu.icon size={24} className="text-[#c6ac8f]" />
                          </div>
                          <div>
                            <h4 className="text-xl md:text-2xl font-heading font-bold text-[#eae0d5] mb-1">
                              {edu.title}
                            </h4>
                            <p className="text-lg font-medium text-[#c6ac8f]">
                              {edu.institution}
                            </p>
                          </div>
                        </div>

                        <span className="px-3 py-1.5 bg-[#5e503f]/30 text-[#eae0d5] text-xs font-medium rounded-full shrink-0">
                          {edu.type}
                        </span>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-[#eae0d5]/70">
                        <div className="flex items-center gap-2">
                          <CalendarCheck size={16} className="text-[#c6ac8f]" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-[#c6ac8f]" />
                          <span>{edu.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-[#eae0d5]/80 leading-relaxed mb-6">
                        {edu.description}
                      </p>

                      {/* Achievements */}
                      <div>
                        <h5 className="text-[#eae0d5] font-semibold mb-3 flex items-center gap-2">
                          <Star size={16} className="text-[#c6ac8f]" />
                          Highlights
                        </h5>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="text-[#eae0d5]/70 flex items-start gap-3 text-sm"
                            >
                              <span className="w-1.5 h-1.5 bg-[#c6ac8f] rounded-full mt-2 shrink-0"></span>
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Skills Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-12 p-6 bg-gradient-to-r from-[#c6ac8f]/10 to-[#5e503f]/10 rounded-2xl border border-[#c6ac8f]/20"
            >
              <h4 className="text-lg font-heading font-bold text-[#eae0d5] mb-4 flex items-center gap-2">
                <TrendUp size={18} className="text-[#c6ac8f]" />
                Continuous Learning
              </h4>
              <p className="text-[#eae0d5]/70 text-sm leading-relaxed">
                Always expanding my knowledge through online courses,
                certifications, and hands-on projects. Currently focusing on
                advanced React patterns, cloud technologies, and modern
                development practices.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16 lg:mt-20"
        ></motion.div>
      </div>
    </section>
  );
}
