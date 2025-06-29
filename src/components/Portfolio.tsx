import { motion } from 'framer-motion';
import { useState } from 'react';
import { GithubLogo, Eye, Link } from 'phosphor-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, shopping cart, and payment processing.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=958&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'TypeScript'],
    category: 'Full-Stack',
    github: 'https://github.com/glatztp/Furniture-React',
    live: 'https://furniro-furniture-rust.vercel.app/',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1692158962133-6c97ee651ab9?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: ['Next.js', 'Prisma', 'Socket.io', 'Tailwind CSS'],
    category: 'Frontend',
    github: 'https://github.com/glatztp/Controle-de-Gastos',
    featured: true,
  },
  {
    id: 3,
    title: 'AI Chat Application',
    description: 'An intelligent chat application powered by OpenAI API with custom trained models for specific use cases and contexts.',
    image: 'https://images.unsplash.com/photo-1737894543924-15e1ff7adbdb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: ['React', 'Python', 'FastAPI', 'OpenAI API'],
    category: 'AI/ML',
    github: 'https://github.com/glatztp/Chat-bot',
    live: 'https://chat-bot-sooty-ten.vercel.app/',
    featured: false,
  },

];

const categories = ['All', 'Featured', 'Frontend',  'AI/ML'];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter(project => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Featured') return project.featured;
    return project.category === activeCategory;
  });

  return (
    <section id="portfolio" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-medium mb-4">
            My work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A collection of projects showcasing my skills in modern web development
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-white shadow-lg'
                  : 'bg-slate-800/50 text-slate-400 border border-slate-700/50 hover:text-cyan-400 hover:border-cyan-500/50'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
           
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 group-hover:border-cyan-500/50 transition-all duration-500">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-cyan-500 text-white rounded-full hover:bg-cyan-600 transition-colors"
                    >
                      <Eye size={20} />
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-slate-700 text-white rounded-full hover:bg-slate-600 transition-colors"
                    >
                      <GithubLogo size={20} />
                    </motion.a>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold rounded-full">
                        ⭐ Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="px-2 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-slate-700/30 text-slate-300 text-xs rounded border border-slate-600/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                    >
                      <Link size={16} />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-400 hover:text-slate-300 transition-colors text-sm font-medium"
                    >
                      <GithubLogo size={16} />
                      Code
                    </a>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-slate-400 mb-6">
            Interested in working together or want to see more of my work?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
          >
            Let's Work Together
            <Link size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}