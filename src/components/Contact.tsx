import { motion } from 'framer-motion';
import { useState } from 'react';
import { PaperPlaneTilt, MapPin, Phone, EnvelopeSimple, GithubLogo, LinkedinLogo, Check } from 'phosphor-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: EnvelopeSimple,
      label: 'Email',
      value: 'gabrielfellipeglatz@gmail.com',
      href: 'mailto:gabrielfellipeglatz@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+55 (47) 99926-2337',
      href: 'tel:+5547999262337',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Santa Catarina, Brazil',
      href: 'https://maps.google.com/?q=Santa+Catarina,+Brazil',
    },
  ];

  const socialLinks = [
    {
      icon: GithubLogo,
      label: 'GitHub',
      href: 'https://github.com/glatztp',
      color: 'hover:text-gray-400',
    },
    {
      icon: LinkedinLogo,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/gabriel-glatz',
      color: 'hover:text-blue-400',
    },

  ];

  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-medium mb-4">
            Get in touch
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              Let's Work Together
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-2xl blur-xl" />
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
                
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg"
                  >
                    <p className="text-green-400 font-medium">
                      <Check /> Message sent successfully! I'll get back to you soon.
                    </p>
                  </motion.div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-slate-300 font-medium mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-slate-300 font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-slate-300 font-medium mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                      placeholder="Project discussion"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-slate-300 font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <PaperPlaneTilt size={20} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                Ready to start your next project? Feel free to reach out through any of these channels. 
                I typically respond within 24 hours.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.a
                      key={index}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : '_self'}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4 group"
                    >
                      <div className="p-3 bg-slate-800/50 rounded-lg border border-slate-700/50 group-hover:border-cyan-500/50 transition-all">
                        <IconComponent size={24} className="text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">{info.label}</p>
                        <p className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Follow me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`p-3 bg-slate-800/50 rounded-lg border border-slate-700/50 text-slate-400 hover:border-cyan-500/50 transition-all ${social.color}`}
                    >
                      <IconComponent size={24} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
            
            {/* Availability */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-xl blur-sm" />
              <div className="relative bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <h4 className="text-white font-semibold">Available for new projects</h4>
                </div>
                <p className="text-slate-400 text-sm">
                  I'm currently available for freelance work and interesting full-time opportunities. 
                  Let's discuss how we can work together!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}