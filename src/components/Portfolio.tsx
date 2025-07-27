import { motion } from "framer-motion";
import { GithubLogo, Eye, Link } from "phosphor-react";
import CardSwap, { Card } from "./animations/CardSwap";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  github: string;
  live?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, shopping cart, and payment processing.",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=958&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["React", "Node.js", "TypeScript"],
    category: "Full-Stack",
    github: "https://github.com/glatztp/Furniture-React",
    live: "https://furniro-furniture-rust.vercel.app/",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image:
      "https://images.unsplash.com/photo-1692158962133-6c97ee651ab9?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["HTML", "css", "Javascript"],
    category: "Frontend",
    github: "https://github.com/glatztp/Controle-de-Gastos",
  },
  {
    id: 3,
    title: "AI Chat Application",
    description:
      "An intelligent chat application powered by OpenAI API with custom trained models for specific use cases and contexts.",
    image:
      "https://images.unsplash.com/photo-1737894543924-15e1ff7adbdb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["React", "Python", "FastAPI", "OpenAI API"],
    category: "AI/ML",
    github: "https://github.com/glatztp/Chat-bot",
    live: "https://chat-bot-sooty-ten.vercel.app/",
  },
];

export function Portfolio() {
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
          <span
            className="inline-block px-4 py-2 rounded-full border text-sm font-medium mb-4"
            style={{
              background: "linear-gradient(90deg, #eae0d5 20%, #c6ac8f 80%)",
              borderColor: "rgba(94,80,63,0.3)",
              color: "#5e503f",
            }}
          >
            My work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span
              className="bg-clip-text text-transparent inline-block"
              style={{
                backgroundImage: "linear-gradient(90deg, #c6ac8f, #5e503f)",
              }}
            >
              Featured Projects
            </span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: "#786c60" }}>
            A collection of projects showcasing my skills in modern web
            development
          </p>
        </motion.div>

        <div className="relative" style={{ height: "600px" }}>
          <CardSwap
            cardDistance={90}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={false}
          >
            {projects.map((project) => (
              <Card key={project.id}>
                <div className="bg-[#0a0908] rounded-xl p-5 flex flex-col h-full w-full max-w-full">
                  <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-[#eae0d5]">
                      {project.title}
                    </h3>
                    {/* Removido badge Featured pois propriedade não existe */}
                  </div>
                  <p className="text-sm text-[#786c60] flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded border"
                        style={{
                          borderColor: "rgba(120,108,96,0.5)",
                          color: "#eae0d5",
                          backgroundColor: "rgba(94,80,63,0.3)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-auto">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm font-semibold"
                        style={{ color: "#c6ac8f" }}
                      >
                        <Eye size={16} /> Live
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm font-semibold"
                      style={{ color: "#786c60" }}
                    >
                      <GithubLogo size={16} /> Code
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p style={{ color: "#786c60" }} className="mb-6">
            Interested in working together or want to see more of my work?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold shadow-lg transition-all duration-300"
            style={{
              background: "linear-gradient(90deg, #c6ac8f, #5e503f)",
              color: "#0a0908",
              boxShadow: "0 4px 14px rgba(198,172,143,0.5)",
            }}
          >
            Let's Work Together
            <Link size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
