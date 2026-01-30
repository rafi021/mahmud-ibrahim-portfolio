import React, { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Badge } from './ui/badge';
import { Briefcase, MapPin, Calendar, ExternalLink, CheckCircle2 } from 'lucide-react';
import { experience } from '../data/mock';
import { motion, useInView } from 'framer-motion';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 bg-white" ref={ref}>
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
            Work Experience
          </h2>
          <motion.div 
            className="w-20 h-1 bg-cyan-600 mx-auto mb-4"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            10+ years of building scalable systems and leading technical teams
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <motion.div 
              className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-slate-200"
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : { height: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              style={{ top: 0 }}
            ></motion.div>

            {/* Experience items */}
            <div className="space-y-12">
              {experience.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <motion.div 
                    className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-600 rounded-full border-4 border-white shadow-lg z-10"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.3 + index * 0.15, type: "spring" }}
                    whileHover={{ scale: 1.5 }}
                  ></motion.div>

                  {/* Content card */}
                  <motion.div 
                    className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}
                    initial={{ 
                      opacity: 0, 
                      x: index % 2 === 0 ? -100 : 100,
                      scale: 0.8
                    }}
                    animate={isInView ? { 
                      opacity: 1, 
                      x: 0,
                      scale: 1
                    } : { 
                      opacity: 0, 
                      x: index % 2 === 0 ? -100 : 100,
                      scale: 0.8
                    }}
                    transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Card className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-cyan-200">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                            <CardDescription className="flex items-center text-base font-semibold text-slate-900 mb-1">
                              <Briefcase className="mr-2 h-4 w-4" />
                              {exp.company}
                            </CardDescription>
                            <div className="flex flex-col space-y-1 text-sm text-slate-600">
                              <span className="flex items-center">
                                <MapPin className="mr-2 h-3 w-3" />
                                {exp.location}
                              </span>
                              <span className="flex items-center">
                                <Calendar className="mr-2 h-3 w-3" />
                                {exp.period}
                              </span>
                            </div>
                          </div>
                          {exp.current && (
                            <motion.div
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ delay: 0.5 + index * 0.15, type: "spring" }}
                            >
                              <Badge className="bg-cyan-600 text-white">
                                Current
                              </Badge>
                            </motion.div>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-700 mb-4">{exp.description}</p>

                        {/* Achievements */}
                        <div className="space-y-2 mb-4">
                          {exp.achievements.slice(0, 3).map((achievement, idx) => (
                            <motion.div 
                              key={idx} 
                              className="flex items-start space-x-2"
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                              transition={{ delay: 0.5 + index * 0.15 + idx * 0.1 }}
                              whileHover={{ x: 5 }}
                            >
                              <CheckCircle2 className="h-4 w-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-slate-600">{achievement}</span>
                            </motion.div>
                          ))}
                        </div>

                        {/* Project links */}
                        {exp.projects && exp.projects.length > 0 && (
                          <div className="border-t pt-4">
                            <p className="text-sm font-semibold text-slate-700 mb-2">Projects:</p>
                            <div className="flex flex-wrap gap-2">
                              {exp.projects.map((project, idx) => (
                                <motion.a
                                  key={idx}
                                  href={project.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center text-sm text-cyan-600 hover:text-cyan-700 hover:underline"
                                  whileHover={{ scale: 1.1, x: 5 }}
                                >
                                  {project.name}
                                  <ExternalLink className="ml-1 h-3 w-3" />
                                </motion.a>
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;