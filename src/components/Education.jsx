import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { education, certifications, achievements } from '../data/mock';

const Education = () => {
  const getAchievementIcon = (iconName) => {
    const icons = {
      award: Award,
      users: GraduationCap,
      'trending-up': Award,
      zap: Award
    };
    const Icon = icons[iconName] || Award;
    return Icon;
  };

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
            style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
          >
            Education & Achievements
          </h2>
          <div className="w-20 h-1 bg-cyan-600 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <GraduationCap className="mr-3 h-6 w-6 text-cyan-600" />
              Academic Background
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 border-2 hover:border-cyan-200"
                >
                  <CardHeader>
                    <CardTitle className="text-xl">{edu.degree}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-slate-900 mb-1">{edu.institution}</p>
                    <p className="text-sm text-slate-600 mb-2">{edu.location}</p>
                    <div className="flex items-center text-sm text-slate-600 mb-2">
                      <Calendar className="mr-2 h-3 w-3" />
                      {edu.period}
                    </div>
                    <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-3 mt-3">
                      <p className="text-sm text-slate-700">
                        <span className="font-semibold">CGPA:</span> {edu.cgpa}
                      </p>
                      <p className="text-sm text-slate-700">
                        <span className="font-semibold">Specialization:</span> {edu.specialization}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <Award className="mr-3 h-6 w-6 text-cyan-600" />
              Certifications & Training
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <Award className="h-8 w-8 text-cyan-600 mx-auto mb-3" />
                      <h4 className="font-semibold text-slate-900 mb-2 text-sm">{cert.name}</h4>
                      <p className="text-xs text-slate-600 mb-1">{cert.institute}</p>
                      <p className="text-xs font-medium text-cyan-600">{cert.year}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Key Achievements</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                const Icon = getAchievementIcon(achievement.icon);
                return (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-all duration-300 border-2 hover:border-cyan-200"
                  >
                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-3">
                          <Icon className="h-6 w-6 text-cyan-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-900 mb-2">{achievement.title}</h4>
                          <p className="text-sm text-slate-700 mb-2">{achievement.description}</p>
                          <span className="text-xs font-medium text-cyan-600">{achievement.year}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;