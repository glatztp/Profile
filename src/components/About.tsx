import { motion } from 'framer-motion';
import { useState } from 'react';
import { Code, Rocket, Heart, Coffee } from 'phosphor-react';

const stats = [
  { number: '50+', label: 'Projects Completed', icon: Code },
  { number: '3+', label: 'Years Experience', icon: Rocket },
  { number: '100%', label: 'Client Satisfaction', icon: Heart },
  { number: '1000+', label: 'Cups of Coffee', icon: Coffee },
];

const values = [
  {
    title: 'Innovation First',
    description: 'Always exploring cutting-edge technologies and creative solutions to deliver exceptional results.',
    icon: '🚀',
  },
  {
    title: 'User-Centric Design',
    description: 'Every interface I create is designed with the user experience as the top priority.',
    icon: '🎨',
  },
  {
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and well-documented code that stands the test of time.',
    icon: '💻',
  },
  {
    title: 'Continuous Learning',
    description: 'Staying ahead of the curve by constantly learning new technologies and best practices.',
    icon: '📚',
  },
];

export function About() {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-medium mb-4">
            Get to know me
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              About Me
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Passionate developer with a love for creating digital experiences that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Hello! I'm Gabriel Glatz
                </h3>
                <div className="space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    I'm a passionate <strong className="text-cyan-400">Full-Stack Developer</strong> with over 3 years of experience 
                    creating digital solutions that combine functionality with stunning design.
                  </p>
                  <p>
                    My journey began with curiosity about how websites work, and it has evolved into a 
                    deep passion for crafting user experiences that are both beautiful and functional.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new technologies, contributing to 
                    open-source projects, or sharing knowledge with the developer community.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  onHoverStart={() => setHoveredStat(index)}
                  onHoverEnd={() => setHoveredStat(null)}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 group-hover:border-cyan-500/50 transition-all duration-300">
                    <IconComponent 
                      size={32} 
                      className={`mb-4 transition-colors duration-300 ${
                        hoveredStat === index ? 'text-cyan-400' : 'text-slate-400'
                      }`}
                    />
                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              My Values
            </span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 group-hover:border-cyan-500/50 transition-all duration-300 h-full">
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{value.description}</p>
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