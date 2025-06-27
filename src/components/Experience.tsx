import { motion } from 'framer-motion';
import { CalendarCheck, MapPin, Briefcase } from 'phosphor-react';

const experiences = [
  {
    id: 1,
    title: 'Senior Full-Stack Developer',
    company: 'TechCorp Solutions',
    location: 'São Paulo, BR',
    period: '2023 - Present',
    type: 'Full-time',
    description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting solutions for enterprise clients.',
    achievements: [
      'Increased application performance by 40% through optimization',
      'Led a team of 5 developers on multiple high-impact projects',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker'],
    current: true,
  },
  {
    id: 2,
    title: 'Frontend Developer',
    company: 'Digital Innovations',
    location: 'Remote',
    period: '2022 - 2023',
    type: 'Full-time',
    description: 'Developed responsive web applications and collaborated with UX/UI designers to create exceptional user experiences for various clients.',
    achievements: [
      'Built 15+ responsive websites with 99% client satisfaction',
      'Reduced page load times by 50% through code optimization',
      'Collaborated with cross-functional teams across 3 time zones',
    ],
    technologies: ['React', 'Vue.js', 'Tailwind CSS', 'JavaScript', 'Figma'],
    current: false,
  },
  {
    id: 3,
    title: 'Junior Web Developer',
    company: 'StartupHub',
    location: 'São Paulo, BR',
    period: '2021 - 2022',
    type: 'Full-time',
    description: 'Started my professional journey building web applications and learning modern development practices in a fast-paced startup environment.',
    achievements: [
      'Contributed to 10+ successful project launches',
      'Learned and implemented modern web technologies',
      'Participated in agile development methodologies',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Git'],
    current: false,
  },
  {
    id: 4,
    title: 'Freelance Web Developer',
    company: 'Self-Employed',
    location: 'Remote',
    period: '2020 - 2021',
    type: 'Freelance',
    description: 'Provided web development services to small businesses, creating custom websites and e-commerce solutions.',
    achievements: [
      'Completed 25+ freelance projects successfully',
      'Built strong client relationships with 95% retention rate',
      'Developed expertise in various web technologies',
    ],
    technologies: ['WordPress', 'HTML', 'CSS', 'JavaScript', 'PHP'],
    current: false,
  },
];

const education = [
  {
    id: 1,
    title: 'Computer Science',
    institution: 'University of São Paulo',
    location: 'São Paulo, BR',
    period: '2019 - 2023',
    type: 'Bachelor\'s Degree',
    description: 'Focused on software engineering, algorithms, and modern web technologies. Graduated with honors.',
    achievements: [
      'Graduated Magna Cum Laude (GPA: 3.8/4.0)',
      'Led university\'s coding club for 2 years',
      'Published research on web performance optimization',
    ],
  },
  {
    id: 2,
    title: 'Modern Web Development',
    institution: 'Rocketseat',
    location: 'Online',
    period: '2020',
    type: 'Bootcamp',
    description: 'Intensive bootcamp covering React, Node.js, and modern development practices.',
    achievements: [
      'Completed 500+ hours of hands-on coding',
      'Built 10+ full-stack applications',
      'Achieved top 5% performance in final projects',
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-medium mb-4">
            My journey
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              Experience & Education
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            My professional journey and educational background in technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Briefcase size={28} className="text-cyan-400" />
              Professional Experience
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-emerald-500 to-cyan-500 rounded-full" />
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-16"
                  >
                    {/* Timeline Dot */}
                    <div className={`absolute left-4 top-6 w-4 h-4 rounded-full border-4 border-slate-900 z-10 ${
                      exp.current ? 'bg-cyan-400 animate-pulse-glow' : 'bg-emerald-400'
                    }`} />
                    
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 group-hover:border-cyan-500/50 transition-all duration-300">
                        <div className="flex flex-wrap items-start justify-between mb-4">
                          <div>
                            <h4 className="text-xl font-bold text-white mb-1">{exp.title}</h4>
                            <p className="text-cyan-400 font-medium">{exp.company}</p>
                          </div>
                          {exp.current && (
                            <span className="px-3 py-1 bg-gradient-to-r from-green-400 to-emerald-500 text-black text-xs font-bold rounded-full">
                              Current
                            </span>
                          )}
                        </div>
                        
                        <div className="flex items-center gap-4 mb-4 text-slate-400 text-sm">
                          <div className="flex items-center gap-1">
                            <CalendarCheck size={16} />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            {exp.location}
                          </div>
                          <span className="px-2 py-1 bg-slate-700/50 rounded text-xs">
                            {exp.type}
                          </span>
                        </div>
                        
                        <p className="text-slate-300 mb-4 leading-relaxed">
                          {exp.description}
                        </p>
                        
                        <div className="mb-4">
                          <h5 className="text-white font-semibold mb-2">Key Achievements:</h5>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx} className="text-slate-400 text-sm flex items-start gap-2">
                                <span className="text-cyan-400 mt-1">•</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-slate-700/30 text-slate-300 text-xs rounded border border-slate-600/50"
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
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <CalendarCheck size={28} className="text-emerald-400" />
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
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 group-hover:border-emerald-500/50 transition-all duration-300">
                      <div className="flex flex-wrap items-start justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-white mb-1">{edu.title}</h4>
                          <p className="text-emerald-400 font-medium">{edu.institution}</p>
                        </div>
                        <span className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded">
                          {edu.type}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-4 mb-4 text-slate-400 text-sm">
                        <div className="flex items-center gap-1">
                          <CalendarCheck size={16} />
                          {edu.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          {edu.location}
                        </div>
                      </div>
                      
                      <p className="text-slate-300 mb-4 leading-relaxed">
                        {edu.description}
                      </p>
                      
                      <div>
                        <h5 className="text-white font-semibold mb-2">Highlights:</h5>
                        <ul className="space-y-1">
                          {edu.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-slate-400 text-sm flex items-start gap-2">
                              <span className="text-emerald-400 mt-1">•</span>
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