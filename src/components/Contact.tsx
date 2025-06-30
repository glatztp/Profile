import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import {
  PaperPlaneTilt,
  MapPin,
  Phone,
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  Check,
} from 'phosphor-react';

const colors = {
  black: '#0a0908',
  gunmetal: '#22333b',
  almond: '#eae0d5',
  khaki: '#c6ac8f',
  walnut_brown: '#5e503f',
  cyan: '#22d3ee',
  emerald: '#10b981',
  greenPulse: '#4ade80',
};

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await emailjs.send(
      'service_qvvnyvi', // ID do seu serviço (fixo)
      'template_jlw5wgf', // ID do seu template
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      'gH7FhQnOKbr2NS8HK' // sua public key
    );

    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  } catch (error) {
    console.error('Erro ao enviar:', error);
    alert('Ocorreu um erro ao enviar. Tente novamente mais tarde.');
  }

  setIsSubmitting(false);
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
      color: 'hover:text-' + colors.walnut_brown,
    },
    {
      icon: LinkedinLogo,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/gabriel-glatz',
      color: 'hover:text-' + colors.khaki,
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 lg:py-32"
      style={{ backgroundColor: colors.black }}
    >
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
              background:
                `linear-gradient(90deg, ${colors.khaki}33, ${colors.walnut_brown}33)`,
              borderColor: colors.khaki + '66',
              color: colors.khaki,
              userSelect: 'none',
            }}
          >
            Get in touch
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ color: colors.almond }}
          >
            <span
              className="bg-clip-text text-transparent inline-block"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #c6ac8f, #5e503f)',
                  }}
            >
              Let's Work Together
            </span>
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: colors.almond + 'cc' }}
          >
            Have a project in mind? I'd love to hear about it. Let's create
            something amazing together.
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
              <div
                className="absolute inset-0 rounded-2xl blur-xl"
                style={{
                  background: `linear-gradient(90deg, ${colors.khaki}22, ${colors.walnut_brown}22)`,
                }}
              />
              <div
                className="relative rounded-2xl p-8 border"
                style={{
                  backgroundColor: colors.gunmetal + 'dd',
                  borderColor: colors.walnut_brown + '80',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <h3
                  className="text-2xl font-bold mb-6"
                  style={{ color: colors.almond }}
                >
                  Send me a message
                </h3>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 rounded-lg border"
                    style={{
                      backgroundColor: colors.greenPulse + '22',
                      borderColor: colors.greenPulse + '80',
                    }}
                  >
                    <p
                      className="font-medium flex items-center gap-2"
                      style={{ color: colors.greenPulse }}
                    >
                      <Check size={20} />
                      Message sent successfully! I'll get back to you soon.
                    </p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {['name', 'email'].map((field) => (
                      <div key={field}>
                        <label
                          htmlFor={field}
                          className="block font-medium mb-2"
                          style={{ color: colors.almond + 'cc' }}
                        >
                          {field.charAt(0).toUpperCase() + field.slice(1)} *
                        </label>
                        <input
                          type={field === 'email' ? 'email' : 'text'}
                          id={field}
                          name={field}
                          value={formData[field as keyof typeof formData]}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg placeholder-slate-400 focus:outline-none transition-all"
                          style={{
                            backgroundColor: colors.gunmetal + 'bb',
                            border: `1px solid ${colors.walnut_brown}80`,
                            color: colors.almond,
                          }}
                          placeholder={
                            field === 'email' ? 'your@email.com' : 'Your name'
                          }
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block font-medium mb-2"
                      style={{ color: colors.almond + 'cc' }}
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg placeholder-slate-400 focus:outline-none transition-all"
                      style={{
                        backgroundColor: colors.gunmetal + 'bb',
                        border: `1px solid ${colors.walnut_brown}80`,
                        color: colors.almond,
                      }}
                      placeholder="Project discussion"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-medium mb-2"
                      style={{ color: colors.almond + 'cc' }}
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg placeholder-slate-400 focus:outline-none transition-all resize-none"
                      style={{
                        backgroundColor: colors.gunmetal + 'bb',
                        border: `1px solid ${colors.walnut_brown}80`,
                        color: colors.almond,
                      }}
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-3 rounded-lg font-semibold shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    style={{
                      background:
                        'linear-gradient(90deg, ' +
                        colors.khaki +
                        ', ' +
                        colors.walnut_brown +
                        ')',
                      color: colors.black,
                      boxShadow: `0 4px 14px ${colors.khaki}bb`,
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black" />
                        Sending...
                      </>
                    ) : (
                      <div className='flex p-4'>
                        <PaperPlaneTilt size={20} />
                        <p>Send Message</p>
                      </div>
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
              <h3
                className="text-2xl font-bold mb-6"
                style={{ color: colors.almond }}
              >
                Contact Information
              </h3>
              <p
                className="leading-relaxed mb-8"
                style={{ color: colors.almond + 'cc' }}
              >
                Ready to start your next project? Feel free to reach out through
                any of these channels. I typically respond within 24 hours.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.a
                      key={index}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : '_self'}
                      rel={
                        info.href.startsWith('http') ? 'noopener noreferrer' : ''
                      }
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4 group"
                    >
                      <div
                        className="p-3 rounded-lg border transition-all"
                        style={{
                          backgroundColor: colors.gunmetal + 'bb',
                          borderColor: colors.walnut_brown + '80',
                        }}
                      >
                        <IconComponent size={24} style={{ color: colors.khaki }} />
                      </div>
                      <div>
                        <p
                          className="text-sm"
                          style={{ color: colors.almond + 'aa' }}
                        >
                          {info.label}
                        </p>
                        <p
                          className="font-medium transition-colors"
                          style={{ color: colors.almond }}
                        >
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
              <h4
                className="text-xl font-bold mb-4"
                style={{ color: colors.almond }}
              >
                Follow me
              </h4>
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
                      className="p-3 rounded-lg border transition-all"
                      style={{
                        backgroundColor: colors.gunmetal + 'bb',
                        borderColor: colors.walnut_brown + '80',
                        color: colors.khaki,
                      }}
                    >
                      <IconComponent size={24} />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <div className="relative">
              <div
                className="absolute inset-0 rounded-xl blur-sm"
                style={{
                  background: `linear-gradient(90deg, ${colors.khaki}22, ${colors.walnut_brown}22)`,
                }}
              />
              <div
                className="relative rounded-xl p-6 border"
                style={{
                  backgroundColor: colors.gunmetal + 'bb',
                  borderColor: colors.walnut_brown + '80',
                  backdropFilter: 'blur(6px)',
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-3 h-3 rounded-full animate-pulse"
                    style={{ backgroundColor: colors.greenPulse }}
                  />
                  <h4 style={{ color: colors.almond, fontWeight: 600 }}>
                    Available for new projects
                  </h4>
                </div>
                <p style={{ color: colors.almond + 'cc', fontSize: '0.875rem' }}>
                  I'm currently available for freelance work and interesting
                  full-time opportunities. Let's discuss how we can work
                  together!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
