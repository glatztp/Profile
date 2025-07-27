# Gabriel Glatz - Portfolio

Um portfólio moderno e responsivo desenvolvido com React, TypeScript e Framer Motion, apresentando design elegante e animações fluidas.

## Tecnologias Utilizadas

### Frontend

- **React 19** - Biblioteca JavaScript para interfaces de usuário
- **TypeScript** - Superset tipado do JavaScript
- **Vite** - Build tool moderna e rápida
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Biblioteca de animações para React

### Animações e Interações

- **GSAP** - Biblioteca de animações de alta performance
- **OGL** - WebGL library para gráficos 3D
- **Phosphor React** - Biblioteca de ícones moderna

### Funcionalidades

- **EmailJS** - Integração para envio de emails
- **React Icons** - Conjunto adicional de ícones

## Características do Projeto

### Design e UX

- Interface moderna com paleta de cores khaki e almond
- Design responsivo extremo (320px a 1536px+)
- Animações fluidas e interações suaves
- Loading screen animado com efeitos visuais
- Menu mobile touch-friendly

### Componentes Principais

- **Hero** - Seção de apresentação principal
- **About** - Informações pessoais e estatísticas
- **Skills** - Habilidades técnicas organizadas por categorias
- **Portfolio** - Projetos desenvolvidos
- **Experience** - Experiência profissional
- **Contact** - Formulário de contato integrado

### Responsividade Extrema

Sistema de breakpoints ultra-detalhado:

- `xs`: 320px+ (smartphones pequenos)
- `sm`: 480px+ (smartphones)
- `md`: 640px+ (tablets pequenos)
- `lg`: 768px+ (tablets)
- `xl`: 1024px+ (desktops)
- `2xl`: 1280px+ (desktops grandes)
- `3xl`: 1536px+ (monitores ultra-wide)

## Instalação e Execução

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Configuração Local

```bash
# Clone o repositório
git clone https://github.com/glatztp/Profile.git

# Entre no diretório do projeto
cd Profile

# Instale as dependências
npm install

# Execute em modo de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build de produção
npm run preview
```

## Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Build de produção
npm run lint     # Executa linting do código
npm run preview  # Preview da build de produção
```

## Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── animations/      # Componentes de animação
│   ├── About.tsx       # Seção sobre
│   ├── Contact.tsx     # Formulário de contato
│   ├── Experience.tsx  # Experiência profissional
│   ├── Footer.tsx      # Rodapé
│   ├── Hero.tsx        # Seção principal
│   ├── Navbar.tsx      # Navegação
│   ├── Portfolio.tsx   # Projetos
│   └── Skills.tsx      # Habilidades
├── utils/              # Utilitários
│   └── animations.ts   # Configurações de animação
├── assets/             # Recursos estáticos
├── App.tsx            # Componente principal
└── main.tsx           # Ponto de entrada
```

## Características Técnicas

### Performance

- Carregamento otimizado com lazy loading
- Animações otimizadas para dispositivos móveis
- Detecção de dispositivos low-end
- Bundle size otimizado

### Acessibilidade

- Navegação por teclado
- ARIA labels adequados
- Contraste de cores otimizado
- Touch targets adequados (44px mínimo)

### SEO

- Meta tags otimizadas
- Estrutura semântica
- Performance de carregamento

## Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Deploy

O projeto está configurado para deploy fácil em:

- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

## Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## Contato

Gabriel Glatz - [Seu Email] - [Suas Redes Sociais]

Link do Projeto: [https://github.com/glatztp/Profile](https://github.com/glatztp/Profile)

---

Desenvolvido com React e TypeScript por Gabriel Glatz
