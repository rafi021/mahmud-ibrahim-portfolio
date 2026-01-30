import React, { useRef, useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Code2, Database, Cloud, Layers, Server, Box } from 'lucide-react';
import { skills } from '../data/mock';
import { motion, useInView } from 'framer-motion';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [animatedLevels, setAnimatedLevels] = useState({});

  const skillCategories = [
    { title: 'Backend', data: skills.backend, icon: Server, color: 'cyan' },
    { title: 'Frontend', data: skills.frontend, icon: Code2, color: 'blue' },
    { title: 'Database', data: skills.database, icon: Database, color: 'purple' },
    { title: 'Messaging & Cache', data: skills.messaging, icon: Layers, color: 'green' },
    { title: 'DevOps & Cloud', data: skills.devops, icon: Cloud, color: 'orange' },
    { title: 'Architecture', data: skills.architecture, icon: Box, color: 'red' }
  ];

  const getColorClasses = (color) => {
    const colors = {
      cyan: 'text-cyan-600 bg-cyan-50 border-cyan-200',
      blue: 'text-blue-600 bg-blue-50 border-blue-200',
      purple: 'text-purple-600 bg-purple-50 border-purple-200',
      green: 'text-green-600 bg-green-50 border-green-200',
      orange: 'text-orange-600 bg-orange-50 border-orange-200',
      red: 'text-red-600 bg-red-50 border-red-200'
    };
    return colors[color] || colors.cyan;
  };

  // Animate progress bars when in view
  useEffect(() => {
    if (isInView) {
      skillCategories.forEach((category) => {
        category.data.forEach((skill, idx) => {
          setTimeout(() => {
            setAnimatedLevels(prev => ({
              ...prev,
              [`${category.title}-${idx}`]: skill.level
            }));
          }, idx * 100);
        });
      });
    }
  }, [isInView]);

  return (
    <section id="skills" className="py-20 bg-slate-50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
            Technical Skills
          </h2>
          <motion.div 
            className="w-20 h-1 bg-cyan-600 mx-auto mb-4"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive expertise across modern technology stack
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card
                  className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 h-full"
                >
                  <CardHeader>
                    <motion.div 
                      className="flex items-center space-x-3"
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div 
                        className={`p-2 rounded-lg border ${getColorClasses(category.color)}`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="h-6 w-6" />
                      </motion.div>
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                    </motion.div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.data.map((skill, idx) => (
                        <div key={idx}>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium text-slate-700">
                              {skill.name}
                            </span>
                            <motion.span
                              className="text-sm font-semibold"
                              style={{ fontFamily: 'JetBrains Mono, monospace' }}
                              initial={{ opacity: 0 }}
                              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                              transition={{ delay: 0.3 + idx * 0.1 }}
                            >
                              {skill.level}%
                            </motion.span>
                          </div>
                          <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                            <motion.div
                              className="bg-cyan-600 h-2 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ 
                                width: isInView ? `${animatedLevels[`${category.title}-${idx}`] || 0}%` : 0
                              }}
                              transition={{ 
                                duration: 1,
                                delay: 0.3 + idx * 0.1,
                                ease: "easeOut"
                              }}
                            ></motion.div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;