import React, { useState } from "react";
import { MapPin, Envelope, RocketLaunch, GitBranch, Code, Terminal } from "phosphor-react";
const ProfileLayout = () => {
  const [activeTab, setActiveTab] = useState<string>("about");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen flex bg-zinc-900 text-white font-sans">
      <aside className="w-full md:w-[300px] bg-zinc-800 p-6 flex flex-col items-center space-y-6 animate-slide-in-left">
        <div className="w-32 h-32 rounded-full bg-zinc-700 animate-pulse" />

        <div className="text-center space-y-1">
          <h1 className="text-2xl font-bold">Gabriel Glatz</h1>
          <p className="text-sm text-zinc-400">Dev Front/Back — Jovem Aprendiz</p>
        </div>

        <div className="text-sm text-zinc-400 space-y-2">
          <InfoRow icon={<MapPin size={16} />} text="Jaraguá do Sul, SC" />
          <InfoRow icon={<Envelope size={16} />} text="gabrielfellipeglatz@gmail.com" />
          <InfoRow icon={<RocketLaunch size={16} />} text="Em constante evolução" />
        </div>
      </aside>

      <main className="flex-1 p-8 animate-fade-in">
        <h2 className="text-3xl font-bold mb-8">Painel de Dev</h2>

        <div className="flex space-x-6 mb-6 border-b-2 border-zinc-600">
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
          className={`transition-all duration-500 ease-in-out ${activeTab === "about" ? "block" : "hidden"}`}
        >
          <h3 className="text-xl font-bold text-zinc-200 mb-4">Sobre Mim</h3>
          <p className="text-zinc-400 text-center">
            Bem-vindo(a) ao meu GitHub! Sou Gabriel Glatz, apaixonado por tecnologia e programação. 
            Atualmente, sou Jovem Aprendiz no Grupo Malwee e busco sempre aprimorar minhas habilidades. 
            Estou confiante de que posso agregar valor em diversas equipes de trabalho e estou empolgado para evoluir como desenvolvedor.
          </p>
        </section>

        <section
          id="languages"
          className={`transition-all duration-500 ease-in-out ${activeTab === "languages" ? "block" : "hidden"}`}
        >
          <h3 className="text-xl font-bold text-zinc-200 mb-4">Linguagens</h3>
          <div className="flex flex-wrap gap-6 justify-center">
            <LanguageCard
              iconUrl="https://img.icons8.com/?size=100&id=vMqgHSToxrJR&format=png&color=000000h"
              name="TypeScript"
              description="Uma linguagem baseada em JavaScript com tipagem estática."
            />
            <LanguageCard
              iconUrl="https://img.icons8.com/?size=100&id=13441&format=png&color=000000"
              name="Python"
              description="Linguagem de alto nível, famosa pela simplicidade e clareza."
            />
            <LanguageCard
              iconUrl="https://img.icons8.com/?size=100&id=10710&format=png&color=000000"
              name="Go"
              description="Linguagem desenvolvida pelo Google, focada em alta performance e concorrência."
            />
            <LanguageCard
              iconUrl="https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000"
              name="React"
              description="Biblioteca JavaScript para construção de interfaces de usuário."
            />
            <LanguageCard
              iconUrl="https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000"
              name="Next.js"
              description="Framework React focado em renderização do lado do servidor e experiência do desenvolvedor."
            />
            <LanguageCard
              iconUrl="https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000"
              name="Tailwind"
              description="Sistema de gerenciamento de banco de dados relacional de código aberto."
            />
          </div>
        </section>

        <section
          id="tools"
          className={`transition-all duration-500 ease-in-out ${activeTab === "tools" ? "block" : "hidden"}`}
        >
          <h3 className="text-xl font-bold text-zinc-200 mb-4">Ferramentas</h3>
          <div className="flex flex-wrap gap-6 justify-center">
            <IconWithTooltip icon={<GitBranch size={40} />} name="Git" />
            <IconWithTooltip icon={<Code size={40} />} name="VSCode" />
            <IconWithTooltip icon={<Terminal size={40} />} name="Terminal" />
          </div>
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
}) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 text-lg font-semibold transition-all duration-300 ${
        active
          ? "border-b-2 border-indigo-500 text-white"
          : "text-zinc-400 hover:text-white"
      }`}
    >
      {title}
    </button>
  );
};

const LanguageCard = ({
  iconUrl,
  name,
  description,
}: {
  iconUrl: string;
  name: string;
  description: string;
}) => {
  return (
    <div className="relative flex flex-col items-center p-6 w-44 h-56 border border-zinc-600 rounded-lg group hover:border-indigo-500 transition-all duration-300 bg-gradient-to-t from-zinc-800 to-zinc-700">
      <img src={iconUrl} alt={name} className="w-20 h-20 object-contain mb-4" />
      <span className="text-xs text-zinc-200 mb-2">{name}</span>
      <div className="absolute bottom-0 left-0 right-0 w-full h-0 bg-indigo-500 opacity-0 group-hover:h-20 group-hover:opacity-100 transition-all duration-300 rounded-b-lg"></div>
      <div className="absolute bottom-[10px] left-0 right-0 w-full text-xs text-center text-zinc-200 opacity-0 group-hover:opacity-100 transition-all duration-300 px-4">
        {description}
      </div>
    </div>
  );
};

const IconWithTooltip = ({
  icon,
  name,
}: {
  icon: React.ReactNode;
  name: string;
}) => {
  return (
    <div className="flex flex-col items-center">
      {icon}
      <span className="text-xs text-zinc-400">{name}</span>
    </div>
  );
};

const InfoRow = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-2">
    {icon}
    <span>{text}</span>
  </div>
);

export default ProfileLayout;