import { motion } from 'framer-motion';
import { Code, GearSix, PaintBrush } from 'phosphor-react';
import { useState } from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <PaintBrush size={32} weight="fill" />,
    skills: [
      { name: 'React', level: 55, colors: ['#c6ac8f', '#5e503f'] },
      { name: 'TypeScript', level: 40, colors: ['#eae0d5', '#c6ac8f'] },
      { name: 'Next.js', level: 30, colors: ['#5e503f', '#22333b'] },
      { name: 'Tailwind CSS', level: 55, colors: ['#c6ac8f', '#5e503f'] },
      { name: 'Framer Motion', level: 20, colors: ['#eae0d5', '#c6ac8f'] },
    ],
  },
  {
    title: 'Backend',
    icon: <GearSix size={32} weight="fill" />,
    skills: [
      { name: 'Node.js', level: 44, colors: ['#5e503f', '#22333b'] },
      { name: 'Python', level: 70, colors: ['#c6ac8f', '#eae0d5'] },
      { name: 'Go', level: 30, colors: ['#5e503f', '#c6ac8f'] },
      { name: 'SQL', level: 60, colors: ['#eae0d5', '#c6ac8f'] },
    ],
  },
  {
    title: 'Tools & Others',
    icon: <Code size={32} weight="fill" />,
    skills: [
      { name: 'Git', level: 60, colors: ['#c6ac8f', '#5e503f'] },
      { name: 'Docker', level: 25, colors: ['#22333b', '#5e503f'] },
      { name: 'Figma', level: 45, colors: ['#eae0d5', '#c6ac8f'] },
      { name: 'Scrum', level: 60, colors: ['#5e503f', '#22333b'] },
    ],
  },
];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section
      id="skills"
      style={{ backgroundColor: '#0a0908' }}
      className="py-20 lg:py-32 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span
            className="inline-block px-4 py-2 rounded-full mb-4 font-medium text-sm"
            style={{
              background: 'linear-gradient(90deg, #c6ac8f33, #5e503f33)',
              border: '1px solid #c6ac8f80',
              color: '#eae0d5',
            }}
          >
            My expertise
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span
                  className="bg-clip-text text-transparent inline-block"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #c6ac8f, #5e503f)',
                  }}
                >
                  Skills & Technologies
                </span>
              </h2>

            </h2>

          </h2>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: '#eae0d5cc' }}
          >
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
          <div
            style={{
              backgroundColor: 'rgba(34, 51, 59, 0.3)', // gunmetal / 30%
              backdropFilter: 'blur(10px)',
              borderRadius: '9999px',
              border: '1px solid rgba(34, 51, 59, 0.5)',
            }}
            className="flex p-2"
          >
            {skillCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                style={{
                  background:
                    activeCategory === index
                      ? 'linear-gradient(90deg, #c6ac8f, #5e503f)'
                      : 'transparent',
                  color: activeCategory === index ? '#0a0908' : '#eae0d5cc',
                  boxShadow:
                    activeCategory === index
                      ? '0 4px 12px rgba(198, 172, 143, 0.6)'
                      : 'none',
                }}
                className="px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2"
              >
                <span>{category.icon}</span>
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
          <div style={{ position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '1rem',
                filter: 'blur(40px)',
                background:
                  'linear-gradient(90deg, #c6ac8f33, #5e503f33)',
              }}
            ></div>

            <div
              style={{
                position: 'relative',
                backgroundColor: 'rgba(34, 51, 59, 0.3)',
                backdropFilter: 'blur(8px)',
                borderRadius: '1rem',
                padding: '2rem',
                border: '1px solid rgba(34, 51, 59, 0.5)',
              }}
            >
              <h3
                className="text-2xl font-bold mb-8 text-center"
                style={{ color: '#eae0d5' }}
              >
                {skillCategories[activeCategory].title} Skills
              </h3>

              <div className="grid gap-6">
                {skillCategories[activeCategory].skills.map((skill, index) => {
                  const [fromColor, toColor] = skill.colors;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span
                          style={{ color: '#eae0d5' }}
                          className="font-medium"
                        >
                          {skill.name}
                        </span>
                        <span
                          style={{ color: '#c6ac8f' }}
                          className="font-bold"
                        >
                          {skill.level}%
                        </span>
                      </div>

                      <div
                        className="relative h-3 rounded-full overflow-hidden"
                        style={{ backgroundColor: '#22333b' }}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 1.5,
                            delay: index * 0.1,
                            ease: 'easeOut',
                          }}
                          className="rounded-full relative h-full"
                          style={{
                            background: `linear-gradient(90deg, ${fromColor}, ${toColor})`,
                          }}
                        >
                          <div
                            className="absolute inset-0 rounded-full animate-pulse"
                            style={{ backgroundColor: 'rgba(234, 224, 213, 0.125)' }}
                          ></div>
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
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
            className="text-2xl font-bold text-center mb-8"
            style={{ color: '#eae0d5' }}
          >
            <span
              className="bg-clip-text text-transparent inline-block"
              style={{
                backgroundImage: 'linear-gradient(90deg, #c6ac8f, #5e503f)',
              }}
            >
              Additional Technologies
            </span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['HTML5', 'CSS3', 'JavaScript', 'C', 'Arduino', 'Mycropython'].map(
              (tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="group"
                >
                  <div style={{ position: 'relative' }}>
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: '0.5rem',
                        filter: 'blur(8px)',
                        opacity: 0,
                        background:
                          'linear-gradient(90deg, #c6ac8f33, #5e503f33)',
                        transition: 'opacity 0.3s ease',
                      }}
                      className="group-hover:opacity-100"
                    ></div>
                    <div
                      style={{
                        position: 'relative',
                        backgroundColor: 'rgba(34, 51, 59, 0.5)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '0.5rem',
                        padding: '0.5rem 1rem',
                        border: '1px solid rgba(34, 51, 59, 0.5)',
                        transition: 'border-color 0.3s ease',
                      }}
                      className="group-hover:border-[#c6ac8f80]"
                    >
                      <span style={{ color: '#eae0d5', fontWeight: 500, fontSize: '0.875rem' }}>
                        {tech}
                      </span>
                    </div>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
