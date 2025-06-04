import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

export function About() {
  const techStack = [
    { name: 'Git', desc: 'Versionamento sem caos' },
    { name: 'SQL', desc: 'Query braba e banco na mão' },
    { name: 'Tailwind', desc: 'Design sem dor de cabeça' },
    { name: 'React', desc: 'SPA na bala, hooks e contexto' },
    { name: 'Next', desc: 'Fullstack, SSR, SSG e API top' },
    { name: 'Go', desc: 'Backend liso, rápido e tipado' },
    { name: 'Python', desc: 'Automatiza até sua vida' },
    { name: 'TypeScript', desc: 'Tipagem na tora, zero erro' },
    { name: 'Scrum e Kanban', desc: 'Organização e Desempenho' },
    { name: 'HTML5', desc: 'Marca a estrutura, SEO na ponta' },
    { name: 'CSS3', desc: 'Estilo na veia, responsividade pura' },
    { name: 'JavaScript', desc: 'Front moderno, dinamismo total' },
    { name: 'C', desc: 'Código na base, controle absoluto' },
    { name: 'Arduino', desc: 'Protótipos rápidos, hardware na mão' },
    { name: 'Oracle SQL', desc: 'Banco de peso, query corporativa' },
    { name: 'Node.js', desc: 'JS no backend, runtime ninja' },
  ];

  const controls = useAnimation();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function onScroll() {
      setScrollY(window.scrollY);
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      controls.start({ x: [0, -5, 5, -5, 0], opacity: [1, 0.8, 0.6, 0.8, 1] });
    }, 3000);
    return () => clearInterval(glitchInterval);
  }, [controls]);

  return (
    <section
      id="sobre"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 py-24 text-white overflow-hidden"
    >
      <div style={{ transform: `translateY(${scrollY * 0.3}px)` }} />

      <div className="pointer-events-none absolute inset-0 z-10">
        {[...Array(30)].map((_, i) => (
          <span
            key={i}
            className="block absolute bg-white rounded-full opacity-20 animate-pulse"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-10 text-center"
      >
        Sobre mim
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl text-center text-base sm:text-lg md:text-xl text-neutral-300 mb-16"
      >
       Sou Gabriel Glatz, apaixonado por tecnologia e programação. Atualmente, sou Jovem Aprendiz e busco sempre aprimorar minhas habilidades. Estou confiante de que posso agregar valor em diversas equipes de trabalho e estou empolgado para evoluir como desenvolvedor.
      </motion.p>

      <div className="relative w-full max-w-7xl">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-indigo-500 via-purple-600 to-pink-600 rounded-full z-0" />

        <div className="flex flex-col gap-14 sm:gap-20">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className={`relative flex w-full ${
                index % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'
              } justify-center group`}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2">
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-pink-500 rounded-full border-4 border-neutral-950 z-10" />
              </div>

             <motion.div
  whileHover={{
    scale: 1.05,
    rotate:
      index % 2 === 0
        ? window.innerWidth >= 640
          ? -1
          : 0
        : window.innerWidth >= 640
        ? 1
        : 0,
  }}
  transition={{ type: 'spring', stiffness: 300 }}
  className={`bg-neutral-900 border border-neutral-700 rounded-2xl p-4 sm:p-6 shadow-xl 
    max-w-[95%] sm:max-w-[75%] md:max-w-[60%] lg:max-w-[45%] xl:max-w-[40%] 
    cursor-pointer hover:shadow-[0_0_30px_rgba(236,72,153,0.4)] transition-all ${
      index % 2 === 0
        ? 'sm:ml-[calc(50%+12px)] sm:origin-left'
        : 'sm:mr-[calc(50%+12px)] sm:origin-right'
    }`}
>
  <h3 className="text-lg sm:text-2xl font-bold text-white group-hover:text-pink-400 transition-colors">
    {tech.name}
  </h3>
  <p className="text-sm sm:text-base text-neutral-400 mt-2">
    {tech.desc}
  </p>
</motion.div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
