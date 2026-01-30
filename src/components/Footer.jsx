import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Top section */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3
                className="text-2xl font-bold mb-3"
                style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
              >
                {personalInfo.name}
              </h3>
              <p className="text-slate-400 text-sm">
                Senior Backend Engineer / Tech Lead
              </p>
              <p className="text-slate-400 text-sm mt-2">
                Proud Father of Two Sons
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#about" className="hover:text-cyan-400 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="hover:text-cyan-400 transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#experience" className="hover:text-cyan-400 transition-colors">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-cyan-400 transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-cyan-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-3">Get In Touch</h4>
              <div className="space-y-2 text-sm text-slate-400">
                <p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </p>
                <p>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </p>
                <div className="flex space-x-4 mt-4">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between text-sm text-slate-400">
              <p className="flex items-center">
                © {currentYear} {personalInfo.name}. Built with
                <Heart className="h-4 w-4 mx-1 text-red-500" />
                Love
              </p>
              <p className="mt-2 md:mt-0">All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;