import { motion } from 'framer-motion';
import { Code, GearSix, PaintBrush } from 'phosphor-react';
import { useState } from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <PaintBrush size={32} weight="fill" />,
    skills: [
      { name: 'React', level: 95, color: 'from-cyan-400 to-blue-500' },
      { name: 'TypeScript', level: 90, color: 'from-blue-400 to-indigo-500' },
      { name: 'Next.js', level: 88, color: 'from-slate-400 to-slate-600' },
      { name: 'Tailwind CSS', level: 92, color: 'from-teal-400 to-cyan-500' },
      { name: 'Framer Motion', level: 85, color: 'from-purple-400 to-pink-500' },
    ],
  },
  {
    title: 'Backend',
    icon: <GearSix size={32} weight="fill" />,

    skills: [
      { name: 'Node.js', level: 87, color: 'from-green-400 to-emerald-500' },
      { name: 'Python', level: 82, color: 'from-yellow-400 to-orange-500' },
      { name: 'Go', level: 78, color: 'from-cyan-400 to-teal-500' },
      { name: 'SQL', level: 85, color: 'from-blue-400 to-indigo-500' },
      { name: 'MongoDB', level: 80, color: 'from-green-500 to-teal-500' },
    ],
  },
  {
    title: 'Tools & Others',
    icon: <Code size={32} weight="fill" />,
    skills: [
      { name: 'Git', level: 90, color: 'from-orange-400 to-red-500' },
      { name: 'Docker', level: 75, color: 'from-blue-500 to-cyan-500' },
      { name: 'AWS', level: 70, color: 'from-yellow-500 to-orange-500' },
      { name: 'Figma', level: 85, color: 'from-pink-400 to-purple-500' },
      { name: 'Scrum', level: 88, color: 'from-indigo-400 to-purple-500' },
    ],
  },
];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-medium mb-4">
            My expertise
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A comprehensive toolkit for creating exceptional digital experiences
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="flex bg-slate-800/50 backdrop-blur-sm rounded-full p-2 border border-slate-700/50">
            {skillCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === index
                    ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-white shadow-lg'
                    : 'text-slate-400 hover:text-cyan-400'
                  }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.title}
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
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-2xl blur-xl"></div>
            <div className="relative bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                {skillCategories[activeCategory].title} Skills
              </h3>

              <div className="grid gap-6">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-cyan-400 font-bold">{skill.level}%</span>
                    </div>

                    <div className="relative h-3 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                      >
                        <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                      </motion.div>
                    </div>
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
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              Additional Technologies
            </span>
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {['HTML5', 'CSS3', 'JavaScript', 'Vue.js', 'Sass', 'GraphQL', 'Redis', 'Nginx', 'Linux', 'Jest', 'Cypress', 'Webpack'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-slate-700/50 group-hover:border-cyan-500/50 transition-all duration-300">
                    <span className="text-slate-300 font-medium text-sm">{tech}</span>
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