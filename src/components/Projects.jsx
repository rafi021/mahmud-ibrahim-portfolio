import React, { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink, Code2, TrendingUp } from 'lucide-react';
import { featuredProjects } from '../data/mock';
import { motion, useInView } from 'framer-motion';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 bg-slate-50" ref={ref}>
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
            Featured Projects
          </h2>
          <motion.div 
            className="w-20 h-1 bg-cyan-600 mx-auto mb-4"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Scalable systems serving hundreds of thousands of users
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {featuredProjects
            .filter((project) => project.featured)
            .map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: -15 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <Card
                  className="hover:shadow-2xl transition-all duration-300 border-2 overflow-hidden h-full"
                >
                  {/* Featured badge */}
                  <motion.div 
                    className="bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-2"
                    initial={{ x: -100 }}
                    animate={isInView ? { x: 0 } : { x: -100 }}
                    transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-white text-sm font-semibold">Featured Project</span>
                      {project.url && (
                        <motion.a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-cyan-200 transition-colors"
                          whileHover={{ scale: 1.2, rotate: 15 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </motion.a>
                      )}
                    </div>
                  </motion.div>

                  <CardHeader>
                    <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                    <CardDescription className="text-base font-medium text-slate-700">
                      {project.company}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    {/* Description */}
                    <p className="text-slate-700 mb-6">{project.description}</p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-2 mb-6">
                      {project.metrics.map((metric, idx) => (
                        <motion.div
                          key={idx}
                          className="bg-cyan-50 border border-cyan-200 rounded-lg p-3 text-center"
                          initial={{ scale: 0, rotate: -180 }}
                          animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                          transition={{ 
                            delay: 0.5 + index * 0.15 + idx * 0.1,
                            type: "spring",
                            stiffness: 200
                          }}
                          whileHover={{ 
                            scale: 1.1,
                            backgroundColor: "rgb(6, 182, 212)",
                            color: "white"
                          }}
                        >
                          <TrendingUp className="h-4 w-4 text-cyan-600 mx-auto mb-1" />
                          <span className="text-xs text-slate-700 font-medium">{metric}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div>
                      <div className="flex items-center mb-3">
                        <Code2 className="h-4 w-4 text-slate-600 mr-2" />
                        <span className="text-sm font-semibold text-slate-700">Technologies:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                            transition={{ delay: 0.6 + index * 0.15 + idx * 0.05 }}
                            whileHover={{ scale: 1.15, y: -3 }}
                          >
                            <Badge
                              variant="outline"
                              className="bg-white border-slate-300 text-slate-700"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
        </div>

        {/* Additional Projects */}
        <div className="max-w-6xl mx-auto mt-12">
          <motion.h3 
            className="text-2xl font-bold text-slate-900 mb-6 text-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Other Notable Projects
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects
              .filter((project) => !project.featured)
              .map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5, scale: 1.03 }}
                >
                  <Card className="hover:shadow-lg transition-all duration-300 border-2 h-full">
                    <CardHeader>
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <CardDescription className="text-sm">{project.company}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-700 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech, idx) => (
                          <motion.div
                            key={idx}
                            whileHover={{ scale: 1.1 }}
                          >
                            <Badge
                              variant="outline"
                              className="text-xs bg-slate-50 border-slate-300"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;