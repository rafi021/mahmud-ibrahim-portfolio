import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/mock';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    'High-availability systems serving 600K+ users',
    'Performance optimization up to 75%',
    'DevOps-driven CI/CD pipelines on AWS & Kubernetes',
    'Microservices architecture expertise',
    'SaaS & Fintech platform development'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
              style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
            >
              About Me
            </h2>
            <motion.div 
              className="w-20 h-1 bg-cyan-600 mx-auto"
              initial={{ width: 0 }}
              animate={isInView ? { width: 80 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            ></motion.div>
          </motion.div>

          {/* Content */}
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Summary */}
            <motion.div 
              className="bg-slate-50 border border-slate-200 rounded-lg p-8"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
              }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-lg text-slate-700 leading-relaxed">
                {personalInfo.summary}
              </p>
            </motion.div>

            {/* Key Highlights */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                Key Expertise
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    whileHover={{ x: 10 }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                    >
                      <CheckCircle2 className="h-6 w-6 text-cyan-600 flex-shrink-0 mt-0.5" />
                    </motion.div>
                    <span className="text-slate-700">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Additional Info */}
            <motion.div 
              className="grid md:grid-cols-2 gap-6"
              variants={itemVariants}
            >
              <motion.div 
                className="bg-gradient-to-br from-cyan-50 to-slate-50 border border-cyan-100 rounded-lg p-6"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(6, 182, 212, 0.2)"
                }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-xl font-semibold text-slate-900 mb-3">
                  Technical Leadership
                </h4>
                <p className="text-slate-700">
                  Leading cross-functional teams in architecting and deploying scalable, 
                  high-performance systems. Expertise in translating business requirements 
                  into robust technical solutions.
                </p>
              </motion.div>
              <motion.div 
                className="bg-gradient-to-br from-slate-50 to-cyan-50 border border-slate-200 rounded-lg p-6"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(6, 182, 212, 0.2)"
                }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-xl font-semibold text-slate-900 mb-3">
                  Continuous Innovation
                </h4>
                <p className="text-slate-700">
                  Passionate about staying at the forefront of technology. Currently exploring 
                  AI-driven analytics and smart recommendation engines for business intelligence.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;