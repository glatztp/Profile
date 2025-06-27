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
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0.297C5.37 0.297 0 5.668 0 12.297c0 5.293 3.438 9.787 8.205 11.385.6.111.82-.261.82-.58 0-.286-.01-1.04-.015-2.04-3.338.726-4.042-1.612-4.042-1.612-.546-1.386-1.332-1.754-1.332-1.754-1.09-.745.083-.729.083-.729 1.204.085 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.304.76-1.604-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.468-2.382 1.236-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.403c1.018.005 2.046.138 3.003.403 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.913 1.235 3.222 0 4.61-2.804 5.624-5.475 5.92.43.37.823 1.1.823 2.222 0 1.604-.015 2.896-.015 3.293 0 .322.216.698.825.58C20.565 22.08 24 17.585 24 12.297c0-6.63-5.37-12-12-12" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/gabriel-glatz',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.983 3.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM3 9h4v12H3V9zm7 0h3.6v1.64h.05a3.95 3.95 0 013.55-1.96c3.8 0 4.5 2.5 4.5 5.74V21h-4v-5.5c0-1.3-.02-3-1.83-3-1.82 0-2.1 1.4-2.1 2.9V21H10V9z" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/gabrielglatz',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-900/50 backdrop-blur-sm border-t border-slate-700/50">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 mb-4">
                Gabriel.glatz
              </h3>
              <p className="text-slate-400 leading-relaxed max-w-md">
                Full-Stack Developer passionate about creating exceptional digital experiences.
                Transforming ideas into scalable, user-centric applications with modern technologies.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-slate-400 text-sm">Follow me:</span>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-2 bg-slate-800/50 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-700/50 transition-all duration-300"
                    aria-label={`Visit my ${social.name}`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-bold text-lg mb-6">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="mt-8">
              <p className="text-slate-400 text-sm mb-2">Get in touch:</p>
              <a
                href="mailto:gabrielfellipeglatz@gmail.com"
                className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium text-sm"
              >
                gabrielfellipeglatz@gmail.com
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-slate-400 text-sm"
            >
              <span>&copy; {currentYear} Gabriel Glatz. All rights reserved.</span>
            </motion.div>

            {/* Made with love */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-slate-400 text-sm"
            >
              <span>Made with</span>
              <Heart size={16} className="text-red-400 animate-pulse" />
              <Code size={16} className="text-cyan-400" />
              <span>and lots of</span>
              <Coffee size={16} className="text-yellow-600" />
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}