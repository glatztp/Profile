import { useState, useEffect } from 'react';

const footerLinks = {
  perfil: [ 'Home','Sobre mim', 'Contato'],
};

const socialPlatforms = [
  {
    name: 'GitHub',
    href: 'https://github.com/glatztp',
    icon: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 0.297C5.37 0.297 0 5.668 0 12.297c0 5.293 3.438 9.787 8.205 11.385.6.111.82-.261.82-.58 0-.286-.01-1.04-.015-2.04-3.338.726-4.042-1.612-4.042-1.612-.546-1.386-1.332-1.754-1.332-1.754-1.09-.745.083-.729.083-.729 1.204.085 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.304.76-1.604-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.468-2.382 1.236-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.403c1.018.005 2.046.138 3.003.403 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.913 1.235 3.222 0 4.61-2.804 5.624-5.475 5.92.43.37.823 1.1.823 2.222 0 1.604-.015 2.896-.015 3.293 0 .322.216.698.825.58C20.565 22.08 24 17.585 24 12.297c0-6.63-5.37-12-12-12" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/gabriel-glatz',
    icon: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4.983 3.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM3 9h4v12H3V9zm7 0h3.6v1.64h.05a3.95 3.95 0 013.55-1.96c3.8 0 4.5 2.5 4.5 5.74V21h-4v-5.5c0-1.3-.02-3-1.83-3-1.82 0-2.1 1.4-2.1 2.9V21H10V9z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(''), 4000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleSubscribe = () => {
    setError('');
    if (!email || !email.includes('@')) {
      setError('Email inválido, corrige aí.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setSubscribed(true);
      setEmail('');
      setLoading(false);
    }, 1500);
  };

  return (
    <footer id="contato" className="w-full bg-gradient-to-tr  text-gray-300 py-14 px-6 select-none border-t border-gray-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        <div className="flex flex-col space-y-6">
          <h3 className="text-2xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-wide">
            Conecte-se comigo
          </h3>
          <p className="text-gray-400 leading-relaxed max-w-sm">
            Sou desenvolvedor front-end focado em entregar interfaces incríveis e UX afiado. Vamos construir algo juntos? Se liga nas redes sociais e projetos!
          </p>

          <div>
            <label htmlFor="newsletter" className="block mb-2 font-semibold text-gray-200">
              Newsletter
            </label>
            <div className="flex max-w-md">
              <input
                id="newsletter"
                type="email"
                placeholder="email@seuemail.com"
                className={`flex-grow rounded-l-md px-4 py-2 text-black focus:outline-none transition-shadow focus:shadow-lg focus:ring-2 focus:ring-purple-600 ${
                  error ? 'ring-2 ring-red-500' : ''
                }`}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError('');
                  if (subscribed) setSubscribed(false);
                }}
                aria-invalid={!!error}
                aria-describedby="email-error"
              />
              <button
                onClick={handleSubscribe}
                disabled={loading}
                className={`bg-purple-700 hover:bg-purple-800 transition-colors text-white px-6 rounded-r-md font-semibold shadow-lg flex items-center justify-center ${
                  loading ? 'cursor-wait opacity-70' : 'cursor-pointer'
                }`}
                aria-label="Assinar newsletter"
              >
                {loading ? 'Enviando...' : 'Assinar'}
              </button>
            </div>
            {error && <p id="email-error" className="mt-2 text-red-500 font-semibold">{error}</p>}
            {subscribed && !error && <p className="mt-2 text-green-400 font-semibold">Feito! Você tá dentro.</p>}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="mb-4 font-bold text-lg capitalize text-purple-400 tracking-wide">{section}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="relative group text-gray-300 hover:text-purple-500 transition-colors"
                    >
                      {link}
                      <span
                        className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[2px] bg-purple-500 transition-[width] ease-in-out duration-300"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col space-y-6">
          <h4 className="font-bold text-lg text-purple-400 tracking-wide">Redes Sociais</h4>
          <div className="flex space-x-6">
            {socialPlatforms.map(({ name, href, icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Acesse meu ${name}`}
                className="text-gray-400 hover:text-purple-500 transition transform hover:scale-110 hover:shadow-lg hover:brightness-110"
                style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease' }}
              >
                <span className="inline-block animate-pulse-slow">{icon}</span>
              </a>
            ))}
          </div>

          <div>
            <h4 className="font-bold text-lg text-purple-400 tracking-wide">Contato direto</h4>
            <a
              href="mailto:gabrielglatz@example.com"
              className="text-gray-300 hover:text-purple-600 transition underline decoration-purple-600 hover:decoration-2"
            >
              gabrielfellipeglatz@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500 select-text">
        &copy; {new Date().getFullYear()} Gabriel Glatz — Todos os direitos reservados.
      </div>

      <style>{`
        .animate-pulse-slow {
          animation: pulse 3s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.05);
          }
        }
      `}</style>
    </footer>
  );
}
