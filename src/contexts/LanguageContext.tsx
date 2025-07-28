import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations = {
  pt: {
    // Navbar
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.skills": "Habilidades",
    "nav.portfolio": "Portfólio",
    "nav.experience": "Experiência",
    "nav.contact": "Contato",

    // Hero
    "hero.greeting": "Olá, eu sou",
    "hero.name": "Gabriel Glatz",
    "hero.title": "Desenvolvedor de Software / Designer UI/UX",
    "hero.description":
      "Criando experiências digitais excepcionais com código limpo e design centrado no usuário.",
    "hero.cta": "Vamos Conversar",
    "hero.scroll": "Role para descobrir",

    // About
    "about.title": "Sobre Mim",
    "about.subtitle": "Desenvolvedor apaixonado por tecnologia",
    "about.description":
      "Sou um desenvolvedor de software especializado em criar aplicações web modernas e responsivas. Com experiência em React, TypeScript, Node.js e design UI/UX, foco em entregar soluções que combinam funcionalidade excepcional com experiências de usuário intuitivas.",
    "about.description2":
      "Quando não estou codificando, você me encontrará explorando novas tecnologias, contribuindo para projetos open-source ou compartilhando conhecimento com a comunidade de desenvolvedores.",
    "about.stats.projects": "Projetos Concluídos",
    "about.stats.experience": "Anos de Experiência",
    "about.stats.satisfaction": "Satisfação do Cliente",
    "about.stats.coffee": "Xícaras de Café",
    "about.values.innovation": "Inovação em Primeiro",
    "about.values.innovation.desc":
      "Sempre explorando tecnologias de ponta e soluções criativas para entregar resultados excepcionais.Constante busca por inovação.",
    "about.values.design": "Design Centrado",
    "about.values.design.desc":
      "Cada interface que crio é projetada com a experiência do usuário como prioridade máxima.Aprendizado contínuo e adaptação às necessidades do usuário.",
    "about.values.code": "Código Limpo              ",
    "about.values.code.desc":
      "Escrevo código sustentável, escalável e bem documentado que resiste ao teste do tempo.Prezando pela clareza e manutenção.",
    "about.values.learning": "Aprendizado Contínuo",
    "about.values.learning.desc":
      "Mantendo-me à frente da curva, aprendendo constantemente novas tecnologias e melhores práticas.",
    "about.hello.button": "Diga Olá ",
    "about.hello.feedback": "Vamos conversar?",
    "about.values.title": "Meus Valores",
    "about.notification.redirecting":
      "Redirecionando para a seção de contato...",

    // Skills
    "skills.title": "Habilidades & Tecnologias",
    "skills.subtitle": "Minha experiência",
    "skills.description":
      "Um conjunto abrangente de ferramentas para criar experiências digitais excepcionais",
    "skills.categories.frontend": "Frontend",
    "skills.categories.backend": "Backend",
    "skills.categories.design_tools": "Design & Ferramentas",
    "skills.categories.tools_others": "Ferramentas & Outros",

    // Portfolio
    "portfolio.subtitle": "Meu trabalho",
    "portfolio.title": "Projetos em Destaque",
    "portfolio.description":
      "Uma coleção de projetos que demonstram minhas habilidades em desenvolvimento web moderno",
    "portfolio.buttons.live": "Ver Online",
    "portfolio.buttons.code": "Código",
    "portfolio.cta.text":
      "Interessado em trabalhar juntos ou quer ver mais do meu trabalho?",
    "portfolio.cta.button": "Vamos Trabalhar Juntos",

    // Experience
    "experience.title": "Experiência & Educação",
    "experience.subtitle": "Minha jornada profissional",
    "experience.description":
      "Construindo experiência através de trabalho prático e aprendizado contínuo em tecnologia",
    "experience.sections.work": "Experiência Profissional",
    "experience.sections.education": "Educação",
    "experience.current": "Atual",
    "experience.highlights": "Destaques",
    "experience.continuousLearning": "Aprendizado Contínuo",
    "experience.continuousLearningDescription":
      "Sempre expandindo meu conhecimento através de cursos online, certificações e projetos práticos. Atualmente focando em padrões avançados do React, tecnologias em nuvem e práticas modernas de desenvolvimento.",

    // Experience Jobs
    "experience.jobs.malwee.title": "Desenvolvedor de Software",
    "experience.jobs.malwee.company": "Grupo Malwee",
    "experience.jobs.malwee.location": "Jaraguá do Sul, SC",
    "experience.jobs.malwee.period": "2024 - Presente",
    "experience.jobs.malwee.type": "Meio Periodo",
    "experience.jobs.malwee.description":
      "Desenvolvimento de aplicações web modernas e sistemas internos utilizando tecnologias atuais como React, TypeScript e Node.js.",
    "experience.jobs.malwee.achievements.0":
      "Implementação de interfaces responsivas com React e Tailwind CSS",
    "experience.jobs.malwee.achievements.1":
      "Desenvolvimento de APIs RESTful com Node.js e integração com bancos SQL",
    "experience.jobs.malwee.achievements.2":
      "Melhoria da experiência do usuário através de otimizações de performance",

    "experience.jobs.freelance.title": "Desenvolvedor Web Freelancer",
    "experience.jobs.freelance.company": "Freelancer",
    "experience.jobs.freelance.location": "Remoto",
    "experience.jobs.freelance.period": "2023 - Presente",
    "experience.jobs.freelance.type": "Freelancer",
    "experience.jobs.freelance.description":
      "Desenvolvimento de sites e aplicações web personalizadas para diversos clientes, focando em soluções eficientes e design responsivo.",
    "experience.jobs.freelance.achievements.0":
      "Criação de mais de 5 sites responsivos com React",
    "experience.jobs.freelance.achievements.1":
      "Implementação de soluções customizadas com JavaScript",
    "experience.jobs.freelance.achievements.2":
      "Manutenção e otimização de sites existentes para melhor performance",

    // Experience Education
    "experience.education.senai.title":
      "Técnico em Desenvolvimento de Sistemas",
    "experience.education.senai.institution": "SENAI - Jaraguá do Sul",
    "experience.education.senai.location": "Jaraguá do Sul, SC",
    "experience.education.senai.period": "2024 - Presente",
    "experience.education.senai.type": "Técnico",
    "experience.education.senai.description":
      "Formação técnica completa em desenvolvimento de sistemas, cobrindo desde fundamentos de programação até desenvolvimento de aplicações web e mobile.",
    "experience.education.senai.achievements.0":
      "Aprendizado de linguagens como Java, JavaScript, Python e C#",
    "experience.education.senai.achievements.1":
      "Desenvolvimento de projetos práticos incluindo sistemas web e mobile",
    "experience.education.senai.achievements.2":
      "Metodologias ágeis e boas práticas de desenvolvimento de software",

    // Contact
    "contact.subtitle": "Entre em contato",
    "contact.title": "Vamos Trabalhar Juntos",
    "contact.description":
      "Tem um projeto em mente? Adoraria saber sobre ele. Vamos criar algo incrível juntos.",
    "contact.form.title": "Envie-me uma mensagem",
    "contact.info.title": "Informações de Contato",
    "contact.info.description":
      "Pronto para começar seu próximo projeto? Sinta-se à vontade para entrar em contato através de qualquer um desses canais. Normalmente respondo em até 24 horas.",
    "contact.info.email": "Email",
    "contact.info.phone": "Telefone",
    "contact.info.location": "Localização",
    "contact.availability.title": "Disponível para novos projetos",
    "contact.availability.description":
      "Atualmente estou disponível para trabalhos freelance e oportunidades interessantes de tempo integral. Vamos discutir como podemos trabalhar juntos!",
    "contact.form.placeholders.name": "Seu nome",
    "contact.form.placeholders.email": "seu@email.com",
    "contact.form.placeholders.subject": "Discussão do projeto",
    "contact.form.placeholders.message": "Conte-me sobre seu projeto...",
    "contact.form.labels.name": "Nome *",
    "contact.form.labels.email": "Email *",
    "contact.form.labels.subject": "Assunto *",
    "contact.form.labels.message": "Mensagem *",
    "contact.form.button.send": "Enviar Mensagem",
    "contact.form.button.sending": "Enviando...",
    "contact.form.success":
      "Mensagem enviada com sucesso! Retornarei em breve.",

    // Footer
    "footer.description":
      "Software Developer apaixonado por criar experiências digitais excepcionais. Transformando ideias em apps escaláveis e centrados no usuário.",
    "footer.followMe": "Me siga",
    "footer.navigation": "Navegação",
    "footer.services": "Serviços",
    "footer.services.web": "Desenvolvimento Web",
    "footer.services.ui": "UI/UX Design",
    "footer.services.mobile": "Apps Mobile",
    "footer.services.consulting": "Consultoria",
    "footer.getInTouch": "Entre em contato",
    "footer.rights": "Todos os direitos reservados.",
    "footer.madeWith": "Feito com",
    "footer.and": "e",
  },
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.portfolio": "Portfolio",
    "nav.experience": "Experience",
    "nav.contact": "Contact",

    // Hero
    "hero.greeting": "Hello, I am",
    "hero.name": "Gabriel Glatz",
    "hero.title": "Software Developer / UI/UX Designer",
    "hero.description":
      "Creating exceptional digital experiences with clean code and user-centered design.",
    "hero.cta": "Let's Talk",
    "hero.scroll": "Scroll to discover",

    // About
    "about.title": "About Me",
    "about.subtitle": "Technology-passionate developer",
    "about.description":
      "I'm a software developer specialized in creating modern and responsive web applications. With experience in React, TypeScript, Node.js, and UI/UX design, I focus on delivering solutions that combine exceptional functionality with intuitive user experiences.",
    "about.description2":
      "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.",
    "about.stats.projects": "Projects Completed",
    "about.stats.experience": "Years Experience",
    "about.stats.satisfaction": "Client Satisfaction",
    "about.stats.coffee": "Cups of Coffee",
    "about.values.innovation": "Innovation First",
    "about.values.innovation.desc":
      "Always exploring cutting-edge technologies and creative solutions to deliver exceptional results.",
    "about.values.design": "User-Centric Design",
    "about.values.design.desc":
      "Every interface I create is designed with the user experience as the top priority.",
    "about.values.code": "Clean Code",
    "about.values.code.desc":
      "Writing maintainable, scalable, and well-documented code that stands the test of time.",
    "about.values.learning": "Continuous Learning",
    "about.values.learning.desc":
      "Staying ahead of the curve by constantly learning new technologies and best practices.",
    "about.hello.button": "Say Hello ",
    "about.hello.feedback": "Let's chat? ",
    "about.values.title": "My Values",
    "about.notification.redirecting": "Redirecting to contact section...",

    // Skills
    "skills.title": "Skills & Technologies",
    "skills.subtitle": "My expertise",
    "skills.description":
      "A comprehensive toolkit for creating exceptional digital experiences",
    "skills.categories.frontend": "Frontend",
    "skills.categories.backend": "Backend",
    "skills.categories.design_tools": "Design & Tools",
    "skills.categories.tools_others": "Tools & Others",

    // Portfolio
    "portfolio.subtitle": "My work",
    "portfolio.title": "Featured Projects",
    "portfolio.description":
      "A collection of projects showcasing my skills in modern web development",
    "portfolio.buttons.live": "Live",
    "portfolio.buttons.code": "Code",
    "portfolio.cta.text":
      "Interested in working together or want to see more of my work?",
    "portfolio.cta.button": "Let's Work Together",

    // Experience
    "experience.title": "Experience & Education",
    "experience.subtitle": "My Professional Journey",
    "experience.description":
      "Building expertise through hands-on experience and continuous learning in technology",
    "experience.sections.work": "Professional Experience",
    "experience.sections.education": "Education",
    "experience.current": "Current",
    "experience.highlights": "Highlights",
    "experience.continuousLearning": "Continuous Learning",
    "experience.continuousLearningDescription":
      "Always expanding my knowledge through online courses, certifications, and hands-on projects. Currently focusing on advanced React patterns, cloud technologies, and modern development practices.",

    // Experience Jobs
    "experience.jobs.malwee.title": "Software Developer",
    "experience.jobs.malwee.company": "Grupo Malwee",
    "experience.jobs.malwee.location": "Jaraguá do Sul, SC",
    "experience.jobs.malwee.period": "2024 - Present",
    "experience.jobs.malwee.type": "Half time",
    "experience.jobs.malwee.description":
      "Development of modern web applications and internal systems using current technologies like React, TypeScript and Node.js.",
    "experience.jobs.malwee.achievements.0":
      "Implementation of responsive interfaces with React and Tailwind CSS",
    "experience.jobs.malwee.achievements.1":
      "Development of RESTful APIs with Node.js and SQL database integration",
    "experience.jobs.malwee.achievements.2":
      "User experience improvement through performance optimizations",

    "experience.jobs.freelance.title": "Freelance Web Developer",
    "experience.jobs.freelance.company": "Freelancer",
    "experience.jobs.freelance.location": "Remote",
    "experience.jobs.freelance.period": "2023 - Present",
    "experience.jobs.freelance.type": "Freelancer",
    "experience.jobs.freelance.description":
      "Development of custom websites and web applications for various clients, focusing on efficient solutions and responsive design.",
    "experience.jobs.freelance.achievements.0":
      "Created over 5 responsive websites with React",
    "experience.jobs.freelance.achievements.1":
      "Implementation of custom solutions with JavaScript",
    "experience.jobs.freelance.achievements.2":
      "Maintenance and optimization of existing sites for better performance",

    // Experience Education
    "experience.education.senai.title": "Systems Development Technician",
    "experience.education.senai.institution": "SENAI - Jaraguá do Sul",
    "experience.education.senai.location": "Jaraguá do Sul, SC",
    "experience.education.senai.period": "2024 - Present",
    "experience.education.senai.type": "Technical",
    "experience.education.senai.description":
      "Complete technical training in systems development, covering from programming fundamentals to web and mobile application development.",
    "experience.education.senai.achievements.0":
      "Learning languages like Java, JavaScript, Python and C#",
    "experience.education.senai.achievements.1":
      "Development of practical projects including web and mobile systems",
    "experience.education.senai.achievements.2":
      "Agile methodologies and software development best practices",

    // Contact
    "contact.subtitle": "Get in touch",
    "contact.title": "Let's Work Together",
    "contact.description":
      "Have a project in mind? I'd love to hear about it. Let's create something amazing together.",
    "contact.form.title": "Send me a message",
    "contact.info.title": "Contact Information",
    "contact.info.description":
      "Ready to start your next project? Feel free to reach out through any of these channels. I typically respond within 24 hours.",
    "contact.info.email": "Email",
    "contact.info.phone": "Phone",
    "contact.info.location": "Location",
    "contact.availability.title": "Available for new projects",
    "contact.availability.description":
      "I'm currently available for freelance work and interesting full-time opportunities. Let's discuss how we can work together!",
    "contact.form.placeholders.name": "Your name",
    "contact.form.placeholders.email": "your@email.com",
    "contact.form.placeholders.subject": "Project discussion",
    "contact.form.placeholders.message": "Tell me about your project...",
    "contact.form.labels.name": "Name *",
    "contact.form.labels.email": "Email *",
    "contact.form.labels.subject": "Subject *",
    "contact.form.labels.message": "Message *",
    "contact.form.button.send": "Send Message",
    "contact.form.button.sending": "Sending...",
    "contact.form.success":
      "Message sent successfully! I'll get back to you soon.",

    // Footer
    "footer.description":
      "Software Developer passionate about creating exceptional digital experiences. Transforming ideas into scalable and user-centered apps.",
    "footer.followMe": "Follow me",
    "footer.navigation": "Navigation",
    "footer.services": "Services",
    "footer.services.web": "Web Development",
    "footer.services.ui": "UI/UX Design",
    "footer.services.mobile": "Mobile Apps",
    "footer.services.consulting": "Consulting",
    "footer.getInTouch": "Get in touch",
    "footer.rights": "All rights reserved.",
    "footer.madeWith": "Made with",
    "footer.and": "and",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "pt" || savedLanguage === "en")) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
