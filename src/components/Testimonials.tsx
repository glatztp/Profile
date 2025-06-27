import { motion } from 'framer-motion';
import { useState } from 'react';
import { Check, Star,  } from 'phosphor-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'TechCorp Solutions',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b0b4?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'Gabriel is an exceptional developer who consistently delivers high-quality work. His attention to detail and ability to solve complex problems makes him an invaluable team member.',
  },
  {
    id: 2,
    name: 'Marcus Chen',
    role: 'CTO',
    company: 'Digital Innovations',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'Working with Gabriel was a pleasure. He brought fresh ideas to our projects and his technical expertise helped us launch our platform ahead of schedule.',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'UI/UX Designer',
    company: 'Creative Studio',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'Gabriel has an excellent eye for design and seamlessly translates UI mockups into pixel-perfect, responsive interfaces. His collaboration skills are outstanding.',
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Startup Founder',
    company: 'InnovateLab',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'Gabriel helped bring our vision to life with his technical expertise and creative problem-solving. Our web application exceeded all expectations thanks to his work.',
  },
  {
    id: 5,
    name: 'Lisa Wang',
    role: 'Marketing Director',
    company: 'GrowthHack Inc',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'The website Gabriel built for us not only looks amazing but also performs exceptionally well. Our conversion rates increased by 40% after the launch.',
  },
  {
    id: 6,
    name: 'Alex Kumar',
    role: 'Senior Developer',
    company: 'DevTeam Pro',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'Gabriel is a skilled developer who writes clean, maintainable code. His ability to mentor junior developers and lead technical discussions is impressive.',
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-medium mb-4">
            What people say
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              Client Testimonials
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Feedback from amazing clients and colleagues I've had the pleasure to work with
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-2xl blur-xl" />
            <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-slate-700/50">
              <Check size={48} className="text-cyan-400 mb-6" />
              
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <blockquote className="text-xl lg:text-2xl text-slate-200 leading-relaxed mb-8">
                  "{testimonials[currentIndex].text}"
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full border-2 border-cyan-500/50"
                    />
                    <div>
                      <h4 className="text-white font-bold text-lg">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-cyan-400 font-medium">
                        {testimonials[currentIndex].role}
                      </p>
                      <p className="text-slate-400 text-sm">
                        {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </motion.div>
              
              {/* Navigation */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-slate-700/50 text-slate-400 hover:text-cyan-400 hover:bg-slate-600/50 transition-all"
                >
                  ←
                </button>
                
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentIndex
                          ? 'bg-cyan-400 w-8'
                          : 'bg-slate-600 hover:bg-slate-500'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-slate-700/50 text-slate-400 hover:text-cyan-400 hover:bg-slate-600/50 transition-all"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-emerald-500/5 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 group-hover:border-cyan-500/30 transition-all duration-300">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-slate-300 text-sm mb-4 leading-relaxed line-clamp-4">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full border border-slate-600"
                    />
                    <div>
                      <h5 className="text-white font-semibold text-sm">
                        {testimonial.name}
                      </h5>
                      <p className="text-slate-400 text-xs">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}