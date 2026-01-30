import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo, metrics } from '../data/mock';
import { motion } from 'framer-motion';

const Hero = () => {
  const [counts, setCounts] = useState(metrics.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  // Counter animation
  useEffect(() => {
    if (hasAnimated) return;
    
    const timer = setTimeout(() => {
      setHasAnimated(true);
      metrics.forEach((metric, index) => {
        const target = parseInt(metric.value);
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;

        const counter = setInterval(() => {
          current += increment;
          if (current >= target) {
            setCounts(prev => {
              const newCounts = [...prev];
              newCounts[index] = metric.value;
              return newCounts;
            });
            clearInterval(counter);
          } else {
            setCounts(prev => {
              const newCounts = [...prev];
              newCounts[index] = Math.floor(current) + (metric.value.includes('+') ? '+' : metric.value.includes('%') ? '%' : '');
              return newCounts;
            });
          }
        }, duration / steps);
      });
    }, 500);

    return () => clearTimeout(timer);
  }, [hasAnimated]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)'
      }}
    >
      {/* Animated decorative elements */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, -50, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
            {/* Profile Image with animation */}
            <motion.div 
              className="flex-shrink-0"
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 1
              }}
            >
              <div className="relative">
                <motion.div 
                  className="absolute inset-0 bg-cyan-500/20 rounded-full blur-2xl"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.3, 0.2]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                ></motion.div>
                <motion.div 
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-500/30 shadow-2xl"
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: "rgba(6, 182, 212, 0.6)",
                    boxShadow: "0 0 30px rgba(6, 182, 212, 0.4)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="https://customer-assets.emergentagent.com/job_cv-portfolio-pro-1/artifacts/id4ypwya_DSC_3153%202X2--.jpg"
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Text Content with stagger animation */}
            <div className="text-center md:text-left flex-1">
              {/* Location */}
              <motion.div 
                className="flex items-center justify-center md:justify-start mb-6 text-cyan-400"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <MapPin className="mr-2 h-4 w-4" />
                <span className="text-sm">{personalInfo.location}</span>
              </motion.div>

              {/* Name */}
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
                style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
              >
                {personalInfo.name}
              </motion.h1>

              {/* Title */}
              <motion.h2 
                className="text-xl md:text-2xl lg:text-3xl font-semibold text-cyan-400 mb-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                {personalInfo.title}
              </motion.h2>

              {/* Tagline */}
              <motion.p 
                className="text-base md:text-lg lg:text-xl text-slate-300 mb-8 max-w-2xl mx-auto md:mx-0"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                {personalInfo.tagline}
              </motion.p>
            </div>
          </div>

          {/* Metrics with counter animation */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {metrics.map((metric, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="text-3xl md:text-4xl font-bold text-cyan-400 mb-1"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
                >
                  {counts[index] || metric.value}
                </motion.div>
                <div className="text-sm text-slate-400">{metric.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => scrollToSection('#contact')}
                size="lg"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-6 text-lg relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center">
                  <Mail className="mr-2 h-5 w-5" />
                  Get in Touch
                </span>
                <span className="absolute inset-0 bg-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => scrollToSection('#projects')}
                size="lg"
                variant="outline"
                className="border-2 border-cyan-400 text-white hover:bg-cyan-400/10 px-8 py-6 text-lg"
              >
                View My Work
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex items-center justify-center space-x-6 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            {[
              { href: personalInfo.github, Icon: Github },
              { href: personalInfo.linkedin, Icon: Linkedin },
              { href: `mailto:${personalInfo.email}`, Icon: Mail }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.href.includes('mailto') ? undefined : '_blank'}
                rel={social.href.includes('mailto') ? undefined : 'noopener noreferrer'}
                className="text-slate-400 hover:text-cyan-400 transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-cyan-400 transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.2 }}
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
};

export default Hero;