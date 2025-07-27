import { motion } from 'framer-motion';
import { Heart, Code, Coffee } from 'phosphor-react';

const footerLinks = {
  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ],
  services: [
    { label: 'Web Development', href: '#portfolio' },
    { label: 'UI/UX Design', href: '#portfolio' },
    { label: 'Mobile Apps', href: '#portfolio' },
    { label: 'Consulting', href: '#contact' },
  ],
};

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/glatztp',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12 0.297C5.37 0.297 0 5.668 0 12.297c0 5.293 3.438 9.787 8.205 11.385.6.111.82-.261.82-.58 0-.286-.01-1.04-.015-2.04-3.338.726-4.042-1.612-4.042-1.612-.546-1.386-1.332-1.754-1.332-1.754-1.09-.745.083-.729.083-.729 1.204.085 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.304.76-1.604-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.468-2.382 1.236-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.403c1.018.005 2.046.138 3.003.403 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.913 1.235 3.222 0 4.61-2.804 5.624-5.475 5.92.43.37.823 1.1.823 2.222 0 1.604-.015 2.896-.015 3.293 0 .322.216.698.825.58C20.565 22.08 24 17.585 24 12.297c0-6.63-5.37-12-12-12" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/gabriel-glatz',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M4.983 3.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM3 9h4v12H3V9zm7 0h3.6v1.64h.05a3.95 3.95 0 013.55-1.96c3.8 0 4.5 2.5 4.5 5.74V21h-4v-5.5c0-1.3-.02-3-1.83-3-1.82 0-2.1 1.4-2.1 2.9V21H10V9z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t bg-[#0a0908]" style={{ borderColor: 'rgba(94, 80, 63, 0.5)', backdropFilter: 'blur(10px)' }}>
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #22333b, transparent)', opacity: 0.5, pointerEvents: 'none' }} />

      <div className="relative max-w-7xl mx-auto px-6 py-16 space-y-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h3 className="text-3xl font-bold mb-4" style={{ background: 'linear-gradient(to right, #c6ac8f, #eae0d5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Gabriel.glatz</h3>
            <p className="leading-relaxed max-w-md text-[#eae0d5] mb-6">
              Software Developer apaixonado por criar experiências digitais excepcionais.
              Transformando ideias em apps escaláveis e centrados no usuário.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-sm text-[#eae0d5] select-text">Follow me:</span>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-2 rounded-lg transition-all duration-300"
                    style={{ backgroundColor: 'rgba(14,13,8,0.3)', color: '#c6ac8f' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#eae0d5';
                      e.currentTarget.style.backgroundColor = 'rgba(94,80,63,0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#c6ac8f';
                      e.currentTarget.style.backgroundColor = 'rgba(14,13,8,0.3)';
                    }}
                    aria-label={`Visit my ${social.name}`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
            <h4 className="font-bold text-lg mb-6 text-[#eae0d5]">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-block transition-all duration-300 hover:translate-x-1 text-[#c6ac8f]"
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#eae0d5')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#c6ac8f')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
            <h4 className="font-bold text-lg mb-6 text-[#eae0d5]">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-block transition-all duration-300 hover:translate-x-1 text-[#c6ac8f]"
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#eae0d5')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#c6ac8f')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <p className="text-sm mb-2 text-[#eae0d5]">Get in touch:</p>
              <a
                href="mailto:gabrielfellipeglatz@gmail.com"
                className="font-medium text-sm text-[#c6ac8f] transition-colors"
                onMouseEnter={(e) => (e.currentTarget.style.color = '#eae0d5')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#c6ac8f')}
              >
                gabrielfellipeglatz@gmail.com
              </a>
            </div>
          </motion.div>
        </div>

        

        <div className="border-t pt-8" style={{ borderColor: 'rgba(94, 80, 63, 0.5)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-sm text-[#eae0d5]">
              &copy; {currentYear} Gabriel Glatz. All rights reserved.
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }} className="flex items-center gap-2 text-sm text-[#eae0d5]">
              <span>Made with</span>
              <Heart size={16} className="animate-pulse" style={{ color: '#bf4040' }} />
              <Code size={16} style={{ color: '#c6ac8f' }} />
              <span>and</span>
              <Coffee size={16} style={{ color: '#a97c00' }} />
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
