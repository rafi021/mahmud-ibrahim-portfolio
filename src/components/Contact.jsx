import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../data/mock';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
            style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
          >
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-cyan-600 mx-auto mb-4"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Interested in collaborating or have a project in mind? Let's connect!
          </p>
        </div>

        {/* Contact Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-2 border-slate-200 rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Left side - Contact Info */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-10 text-white">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-cyan-600 rounded-lg p-2">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 mb-1">Email</p>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-white hover:text-cyan-400 transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-cyan-600 rounded-lg p-2">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 mb-1">Phone</p>
                      <a
                        href={`tel:${personalInfo.phone}`}
                        className="text-white hover:text-cyan-400 transition-colors"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-cyan-600 rounded-lg p-2">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 mb-1">Location</p>
                      <p className="text-white">{personalInfo.location}</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-slate-700">
                  <p className="text-sm text-slate-400 mb-4">Connect with me</p>
                  <div className="flex space-x-4">
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-800 hover:bg-cyan-600 p-3 rounded-lg transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-800 hover:bg-cyan-600 p-3 rounded-lg transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="bg-slate-800 hover:bg-cyan-600 p-3 rounded-lg transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right side - CTA */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Let's Work Together
                </h3>
                <p className="text-slate-700 mb-6">
                  I'm always interested in hearing about new opportunities, interesting projects, 
                  and technical challenges. Feel free to reach out!
                </p>
                <div className="space-y-4">
                  <Button
                    onClick={() => window.location.href = `mailto:${personalInfo.email}`}
                    className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-6 text-lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Email
                  </Button>
                  <Button
                    onClick={() => window.open(personalInfo.linkedin, '_blank')}
                    variant="outline"
                    className="w-full border-2 border-slate-300 hover:border-cyan-600 hover:text-cyan-600 py-6 text-lg"
                  >
                    <Linkedin className="mr-2 h-5 w-5" />
                    Connect on LinkedIn
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;