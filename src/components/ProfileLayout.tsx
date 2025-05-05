import React, { useState, useEffect } from "react";
import { MapPin, Envelope, RocketLaunch, Users } from "phosphor-react";
import { LinkedinLogo, GithubLogo } from "phosphor-react";
import { ThumbsUp } from "phosphor-react";

const useVisitCount = () => {
  const [visitCount, setVisitCount] = useState<number>(0);
  const [liked, setLiked] = useState<boolean>(false);

  useEffect(() => {
    const count = localStorage.getItem("visitCount");
    if (count) {
      setVisitCount(Number(count));
    } else {
      setVisitCount(1);
      localStorage.setItem("visitCount", "1");
    }

    const userLiked = localStorage.getItem("userLiked");
    if (userLiked) {
      setLiked(true);
    }
  }, []);

  const handleLike = () => {
    if (!liked) {
      setLiked(true);
      localStorage.setItem("userLiked", "true");
      const likeCount = localStorage.getItem("likeCount");
      const newLikeCount = likeCount ? Number(likeCount) + 1 : 1;
      localStorage.setItem("likeCount", String(newLikeCount));
    }
  };

  return { visitCount, handleLike, liked };
};

const ProfileLayout = () => {
  const [activeTab, setActiveTab] = useState<string>("about");
  const { visitCount, handleLike, liked } = useVisitCount();

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const likeCount = localStorage.getItem("likeCount") || "0";

  const infoRows = [
    { icon: <MapPin size={16} />, text: "Jaraguá do Sul, SC" },
    { icon: <Envelope size={16} />, text: "gabrielfellipeglatz@gmail.com" },
    { icon: <RocketLaunch size={16} />, text: "Em constante evolução" },
    { icon: <Users size={16} />, text: `Visitante número: ${visitCount}` },
    { icon: <ThumbsUp size={16} />, text: `Likes: ${likeCount}` },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-zinc-900 text-white font-sans">
      <aside className="w-full md:w-[300px] bg-zinc-800 p-6 flex flex-col items-center space-y-6 animate-slide-in-left">
        <img
          src="../profile.jpg"
          alt="Profile"
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-indigo-500"
        />
        <div className="text-center space-y-1">
          <h1 className="text-xl sm:text-2xl font-bold">Gabriel Glatz</h1>
          <p className="text-xs sm:text-sm text-zinc-400">Dev Front/Back — Jovem Aprendiz</p>
        </div>
        <div className="space-y-2 w-full">
          {infoRows.map((row, index) => (
            <InfoRow key={index} icon={row.icon} text={row.text} />
          ))}
        </div>

        <button
          onClick={handleLike}
          disabled={liked}
          className={`mt-4 flex items-center gap-2 py-2 px-4 rounded-lg bg-indigo-500 text-white transition-all duration-300 ${liked
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-indigo-400"
            }`}
        >
          <ThumbsUp size={20} weight={liked ? "fill" : "regular"} className="transition-all" />
          {liked ? "Você já deu like!" : "Dar Like"}
        </button>
      </aside>

      <main className="flex-1 p-4 md:p-8 animate-fade-in">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">Painel de Dev</h2>

        <div className="flex flex-col sm:flex-row sm:space-x-6 mb-6 border-b-2 border-zinc-600">
          <TabButton
            title="Sobre mim"
            active={activeTab === "about"}
            onClick={() => handleTabChange("about")}
          />
          <TabButton
            title="Linguagens"
            active={activeTab === "languages"}
            onClick={() => handleTabChange("languages")}
          />
          <TabButton
            title="Ferramentas"
            active={activeTab === "tools"}
            onClick={() => handleTabChange("tools")}
          />
        </div>

        <section
          id="about"
          className={`transition-all duration-500 ease-in-out ${activeTab === "about" ? "block" : "hidden"
            }`}
        >
          <h3 className="text-xl sm:text-2xl font-extrabold mb-6 animate-fade-in">
            Sobre Mim
          </h3>

          <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-zinc-300 animate-fade-in leading-relaxed">

            <div className="space-y-6 text-base md:text-lg text-zinc-300 animate-fade-in leading-relaxed">
              <p>
                Sou <strong className="text-indigo-400">Gabriel Glatz</strong>, desenvolvedor full-stack em constante evolução, com foco na criação de soluções
                escaláveis, seguras e de alta performance. Trabalho com tecnologias como <strong>React, TypeScript, Tailwind CSS, Node.js, Python, Go</strong> e <strong>SQL</strong>,
                entregando sistemas otimizados e robustos.
              </p>

              <p>
                Atualmente, atuo como <strong>Jovem Aprendiz</strong>, onde contribuo em projetos reais dentro de um ecossistema
                ágil e colaborativo. Aqui, aperfeiçoo <span className="italic">Boas Práticas</span> e metodologias ágeis, além de participar ativamente da entrega de valor contínuo em ambiente corporativo.
              </p>

              <p>
                Minhas entregas envolvem o desenvolvimento de interfaces modernas e responsivas, integração com APIs RESTful e aplicação de
                padrões arquiteturais escaláveis. Escrevo código com foco em manutenção, performance e aderência a boas práticas de mercado.
              </p>

              <p>
                Tenho forte interesse por automação e devops — utilizo ferramentas como <strong>Playwright</strong> e <strong>Docker</strong> para garantir pipelines de entrega
                com qualidade, e manipulo bancos de dados relacionais e não-relacionais, como <strong>PostgreSQL</strong> e <strong>MongoDB</strong>, com domínio e responsabilidade.
              </p>

              <div className="flex justify-center gap-6 pt-4">
                <a
                  href="https://www.linkedin.com/in/gabrielglatz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-500 hover:text-indigo-300 transition duration-300"
                >
                  <LinkedinLogo size={32} />
                </a>
                <a
                  href="https://github.com/gabrielglatz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-500 hover:text-indigo-300 transition duration-300"
                >
                  <GithubLogo size={32} />
                </a>
                <a
                  href="mailto:gabrielfellipeglatz@gmail.com"
                  className="text-indigo-500 hover:text-indigo-300 transition duration-300"
                >
                  <Envelope size={32} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="languages"
          className={`transition-all duration-500 ease-in-out ${activeTab === "languages" ? "block" : "hidden"
            }`}
        >
          <h3 className="text-lg sm:text-xl font-bold text-zinc-200 mb-4">Linguagens</h3>
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">

            <LanguageCard iconUrl="https://img.icons8.com/?size=100&id=vMqgHSToxrJR&format=png" name="TypeScript" description="Uma linguagem baseada em JavaScript com tipagem estática." />
            <LanguageCard iconUrl="https://img.icons8.com/?size=100&id=13441&format=png" name="Python" description="Linguagem de alto nível, famosa pela simplicidade e clareza." />
            <LanguageCard iconUrl="https://img.icons8.com/?size=100&id=10710&format=png" name="Go" description="Linguagem desenvolvida pelo Google, focada em alta performance e concorrência." />
            <LanguageCard iconUrl="https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png" name="React" description="Biblioteca JavaScript para construção de interfaces de usuário." />
            <LanguageCard iconUrl="https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png" name="Next.js" description="Framework React focado em SSR e DX." />
            <LanguageCard iconUrl="https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png" name="Tailwind" description="Framework CSS utility-first para estilização rápida." />
            <LanguageCard iconUrl="https://img.icons8.com/?size=100&id=20909&format=png" name="HTML5" description="Linguagem de marcação padrão para estruturar páginas web." />
            <LanguageCard iconUrl="https://img.icons8.com/?size=100&id=21278&format=png" name="CSS3" description="Folhas de estilo para definir aparência e layout web." />
            <LanguageCard iconUrl="https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png" name="SQL" description="Linguagem para gerenciar e consultar bancos de dados relacionais." />
            <LanguageCard iconUrl="https://img.icons8.com/?size=100&id=108784&format=png" name="JavaScript" description="Linguagem base do front-end moderno e dinâmica da web." />
            <LanguageCard iconUrl="https://img.icons8.com/?size=100&id=40669&format=png" name="C" description="Linguagem de baixo nível, essencial para sistemas e controle de memória." />
            <LanguageCard iconUrl="https://img.icons8.com/?size=100&id=13444&format=png" name="Arduino" description="Plataforma de código aberto para criação de protótipos eletrônicos." />
            <LanguageCard iconUrl="https://img.icons8.com/?size=100&id=39913&format=png" name="Oracle SQL" description="Linguagem de consulta de bancos de dados Oracle, amplamente usada em grandes empresas." />
            <LanguageCard iconUrl="https://img.icons8.com/?size=100&id=54087&format=png" name="Node.js" description="Ambiente de execução JavaScript para backend." />
          </div>
        </section>

        <section
          id="tools"
          className={`transition-all duration-500 ease-in-out ${activeTab === "tools" ? "block" : "hidden"
            }`}
        >
          <h3 className="text-lg sm:text-xl font-bold text-zinc-200 mb-4">Ferramentas</h3>
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">

            <ToolCard icon={<img src="https://img.icons8.com/?size=100&id=20906&format=png&color=000000" className="w-10 h-10" />} name="Git" description="Sistema de controle de versão distribuído." />
            <ToolCard icon={<img src="https://img.icons8.com/?size=100&id=9OGIyU8hrxW5&format=png&color=000000" className="w-10 h-10" />} name="VSCode" description="Editor de código leve e extensível." />
            <ToolCard icon={<img src="https://img.icons8.com/?size=100&id=rBK06Jf45eiP&format=png&color=000000" className="w-10 h-10" />} name="Vercel" description="Plataforma de deploy focada em front-end." />
            <ToolCard icon={<img src="https://img.icons8.com/?size=100&id=EPbEfEa7o8CB&format=png&color=000000" className="w-10 h-10" />} name="Postman" description="Testes e requisições de APIs REST." />
            <ToolCard icon={<img src="https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000" className="w-10 h-10" />} name="Figma" description="Design de UI colaborativo e prototipação." />
            <ToolCard icon={<img src="https://img.icons8.com/?size=100&id=nvtEH6DpqruC&format=png&color=000000" className="w-10 h-10" />} name="Notion" description="Organização pessoal e documentação de projetos." />
            <ToolCard icon={<img src="https://img.icons8.com/?size=100&id=12599&format=png&color=000000" className="w-10 h-10" />} name="GitHub" description="Hospedagem de repositórios com Git." />
            <ToolCard icon={<img src="https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000" className="w-10 h-10" />} name="Docker" description="Empacotamento e execução de aplicações em containers." />
            <ToolCard icon={<img src="https://img.icons8.com/?size=100&id=0rSGragjGkWl&format=png&color=000000" className="w-10 h-10" />} name="Playwright" description="Framework para testes end-to-end automatizados." />
            <ToolCard icon={<img src="https://img.icons8.com/?size=100&id=znqq179L1K9g&format=png&color=000000" className="w-10 h-10" />} name="Postman" description="Ferramenta para testar APIs REST." />          </div>
        </section>
      </main>
    </div>
  );
};

const TabButton = ({
  title,
  active,
  onClick,
}: {
  title: string;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`py-2 px-3 sm:px-4 text-base sm:text-lg font-semibold transition-all duration-300 ${active
      ? "border-b-2 border-indigo-500 text-white"
      : "text-zinc-400 hover:text-white"
      }`}
  >
    {title}
  </button>
);

const InfoRow = ({ icon, text }: { icon: React.ReactNode | null; text: string }) => (
  <div className="flex items-center gap-2 text-sm sm:text-base">
    {icon && <span>{icon}</span>}
    <span>{text}</span>
  </div>
);

const LanguageCard = ({
  iconUrl,
  name,
  description,
}: {
  iconUrl: string;
  name: string;
  description: string;
}) => (
  <div className="relative flex flex-col items-center justify-start p-3 sm:p-4 w-36 h-52 sm:w-44 sm:h-56 rounded-2xl shadow-xl border border-zinc-700 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-indigo-500/20 group">
    <img src={iconUrl} alt={name} className="w-12 h-12 sm:w-16 sm:h-16 object-contain mb-2 transition-transform duration-300 group-hover:scale-110" />
    <span className="text-xs sm:text-sm font-medium text-white">{name}</span>
    <div className="absolute inset-x-0 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2">
      <div className="text-[8px] sm:text-[10px] text-zinc-300 text-center leading-tight bg-zinc-900/80 rounded-lg px-2 py-1 shadow-inner border border-zinc-600">
        {description}
      </div>
    </div>
  </div>
);

const ToolCard = ({
  icon,
  name,
  description,
}: {
  icon: React.ReactNode;
  name: string;
  description: string;
}) => (
  <div className="relative flex flex-col items-center justify-start p-3 sm:p-4 w-36 h-52 sm:w-44 sm:h-56 rounded-2xl shadow-xl border border-zinc-700 bg-transparent backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-indigo-500/20 group">
    <div className="mb-2 sm:mb-3 transition-transform duration-300 group-hover:scale-110 text-indigo-400">
      {icon}
    </div>
    <span className="text-xs sm:text-sm font-medium text-white">{name}</span>
    <div className="absolute inset-x-0 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2">
      <div className="text-[8px] sm:text-[10px] text-zinc-300 text-center leading-tight bg-zinc-900/80 rounded-lg px-2 py-1 shadow-inner border border-zinc-600">
        {description}
      </div>
    </div>
  </div>
);

export default ProfileLayout;
