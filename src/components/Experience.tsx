import { motion } from 'framer-motion';
import { CalendarCheck, MapPin, Briefcase } from 'phosphor-react';

const colors = {
  black: '#0a0908',
  gunmetal: '#22333b',
  almond: '#eae0d5',
  khaki: '#c6ac8f',
  walnut_brown: '#5e503f',
};

const experiences = [
  {
    id: 1,
    title: 'Systems Developer',
    company: 'Grupo Malwee',
    location: 'Jaraguá do Sul, BR',
    period: '2024 - current',
    type: 'Apprenticeship',
    description:
      'Working as a systems developer within the technology department, contributing to the development and maintenance of internal software solutions. Collaborating with multidisciplinary teams on both front-end and back-end projects with a focus on clean code, accessibility, and performance.',
    achievements: [
      'Delivered real-world features in a corporate production environment',
      'Worked with agile methodologies and version control practices',
      'Actively contributed to internal system modernization projects',
    ],
    technologies: ['React', 'Tailwind CSS', 'TypeScript', 'Node.js', 'SQL'],
    current: true,
  },

  {
    id: 4,
    title: 'Freelance Web Developer',
    company: 'Self-Employed',
    location: 'Remote',
    period: '2025 - current',
    type: 'Freelance',
    description:
      'Provided web development services to small businesses, creating custom websites and e-commerce solutions.',
    achievements: [
      'Completed 4+ freelance projects successfully',
      'Built strong client relationships with 95% retention rate',
      'Developed expertise in various web technologies',
    ],
    technologies: ['WordPress', 'HTML', 'CSS', 'JavaScript'],
    current: false,
  },
];

const education = [
  {
    id: 1,
    title: 'Industrial Information Systems Program (PSII V1)',
    institution: 'SENAI',
    location: 'Jaraguá do Sul, BR',
    period: '2024 - current',
    type: 'Technical Degree',
    description:
      'Technical course focused on software development and industrial automation, with emphasis on modern languages, system integration, and software engineering practices.',
    achievements: [
      'Developed real-world integrative projects for industrial applications',
      'Completed over 400 hours of hands-on technical training',
      'Recognized for strong performance in programming and web development',
    ],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="py-12 sm:py-16 md:py-20 lg:py-32"
      style={{ backgroundColor: colors.black }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span
            className="inline-block px-4 py-2 rounded-full border text-sm font-medium mb-4"
            style={{
              background:
                'linear-gradient(90deg, rgba(198,172,143,0.2), rgba(94,80,63,0.2))',
              borderColor: colors.khaki + '66',
              color: colors.khaki,
            }}
          >
            My journey
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ color: colors.almond }}
          >
            <span
              className="bg-clip-text text-transparent inline-block"
              style={{
                backgroundImage: 'linear-gradient(90deg, #c6ac8f, #5e503f)',
              }}
            >
              Experience & Education
            </span>
          </h2>
          <p
            className="text-lg sm:text-xl max-w-3xl mx-auto"
            style={{ color: colors.almond + 'cc' }}
          >
            My professional journey and educational background in technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3
              className="text-xl sm:text-2xl font-bold mb-8 flex items-center gap-3"
              style={{ color: colors.almond }}
            >
              <Briefcase size={28} style={{ color: colors.khaki }} />
              Professional Experience
            </h3>

            <div className="relative">
              {/* Timeline Line */}
              <div
                className="absolute left-5 sm:left-6 top-0 bottom-0 w-0.5 rounded-full"
                style={{
                  background: `linear-gradient(to bottom, ${colors.khaki}, ${colors.walnut_brown}, ${colors.khaki})`,
                }}
              />

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-12 sm:pl-16"
                  >
                    {/* Timeline Dot */}
                    <div
                      className="absolute left-3 sm:left-4 top-6 w-3 sm:w-4 h-3 sm:h-4 rounded-full border-4 z-10"
                      style={{
                        borderColor: colors.black,
                        backgroundColor: exp.current
                          ? colors.khaki
                          : colors.walnut_brown,
                        animation: exp.current ? 'pulseGlow 2s infinite' : 'none',
                      }}
                    />

                    <div className="relative group">
                      <div
                        className="absolute inset-0 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{
                          background: `linear-gradient(to right, ${colors.khaki}22, ${colors.walnut_brown}22)`,
                        }}
                      />
                      <div
                        className="relative rounded-xl p-6 border transition-all duration-300"
                        style={{
                          backgroundColor: colors.gunmetal + 'dd',
                          borderColor: colors.walnut_brown + '80',
                        }}
                      >
                        <div className="flex flex-wrap items-start justify-between mb-4">
                          <div>
                            <h4
                              className="text-lg sm:text-xl font-bold mb-1"
                              style={{ color: colors.almond }}
                            >
                              {exp.title}
                            </h4>
                            <p
                              className="font-medium"
                              style={{ color: colors.khaki }}
                            >
                              {exp.company}
                            </p>
                          </div>
                          {exp.current && (
                            <span
                              className="px-3 py-1 text-xs font-bold rounded-full"
                              style={{
                                background: `linear-gradient(90deg, #88b04b, ${colors.khaki})`,
                                color: colors.black,
                              }}
                            >
                              Current
                            </span>
                          )}
                        </div>

                        <div
                          className="flex items-center gap-3 sm:gap-4 mb-4 text-xs sm:text-sm"
                          style={{ color: colors.almond + 'cc' }}
                        >
                          <div className="flex items-center gap-1">
                            <CalendarCheck size={14} />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            {exp.location}
                          </div>
                          <span
                            className="px-2 py-1 rounded text-xs"
                            style={{
                              backgroundColor: colors.walnut_brown + '80',
                              color: colors.khaki,
                            }}
                          >
                            {exp.type}
                          </span>
                        </div>

                        <p
                          className="mb-4 leading-relaxed text-sm sm:text-base"
                          style={{ color: colors.almond + 'cc' }}
                        >
                          {exp.description}
                        </p>

                        <div className="mb-4">
                          <h5
                            className="font-semibold mb-2"
                            style={{ color: colors.almond }}
                          >
                            Key Achievements:
                          </h5>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, idx) => (
                              <li
                                key={idx}
                                className="text-xs sm:text-sm flex items-start gap-2"
                                style={{ color: colors.almond + 'aa' }}
                              >
                                <span
                                  className="mt-1"
                                  style={{ color: colors.khaki }}
                                >
                                  •
                                </span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 rounded border"
                              style={{
                                backgroundColor: colors.walnut_brown + '40',
                                color: colors.almond,
                                borderColor: colors.walnut_brown + '80',
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3
              className="text-xl sm:text-2xl font-bold mb-8 flex items-center gap-3"
              style={{ color: colors.almond }}
            >
              <CalendarCheck size={28} style={{ color: colors.khaki }} />
              Education
            </h3>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative">
                    <div
                      className="absolute inset-0 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{
                        background: `linear-gradient(to right, ${colors.khaki}22, ${colors.walnut_brown}22)`,
                      }}
                    />
                    <div
                      className="relative rounded-xl p-6 border transition-all duration-300"
                      style={{
                        backgroundColor: colors.gunmetal + 'dd',
                        borderColor: colors.walnut_brown + '80',
                      }}
                    >
                      <div className="flex flex-wrap items-start justify-between mb-4">
                        <div>
                          <h4
                            className="text-lg sm:text-xl font-bold mb-1"
                            style={{ color: colors.almond }}
                          >
                            {edu.title}
                          </h4>
                          <p
                            className="font-medium"
                            style={{ color: colors.khaki }}
                          >
                            {edu.institution}
                          </p>
                        </div>
                        <span
                          className="px-2 py-1 text-xs rounded"
                          style={{
                            backgroundColor: colors.walnut_brown + '80',
                            color: colors.almond + 'cc',
                          }}
                        >
                          {edu.type}
                        </span>
                      </div>

                      <div
                        className="flex items-center gap-3 sm:gap-4 mb-4 text-xs sm:text-sm"
                        style={{ color: colors.almond + 'cc' }}
                      >
                        <div className="flex items-center gap-1">
                          <CalendarCheck size={14} />
                          {edu.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          {edu.location}
                        </div>
                      </div>

                      <p
                        className="mb-4 leading-relaxed text-sm sm:text-base"
                        style={{ color: colors.almond + 'cc' }}
                      >
                        {edu.description}
                      </p>

                      <div>
                        <h5
                          className="font-semibold mb-2"
                          style={{ color: colors.almond }}
                        >
                          Highlights:
                        </h5>
                        <ul className="space-y-1">
                          {edu.achievements.map((achievement, idx) => (
                            <li
                              key={idx}
                              className="text-xs sm:text-sm flex items-start gap-2"
                              style={{ color: colors.almond + 'aa' }}
                            >
                              <span
                                className="mt-1"
                                style={{ color: colors.khaki }}
                              >
                                •
                              </span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
