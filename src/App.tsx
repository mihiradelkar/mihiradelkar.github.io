import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Menu,
  X,
  Moon,
  Sun,
  ChevronDown,
} from 'lucide-react';
import { Section } from './types';
import { experiences, projects, skills, personalInfo } from './data/content';

const Portfolio: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<Section>('home');

  useEffect(() => {
    const handleScroll = (): void => {
      const sections: Section[] = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: Section): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const sections: Section[] = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];

  return (
    <div
      className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}
    >
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${darkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-sm border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              MA
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section
                      ? 'text-blue-500'
                      : darkMode
                        ? 'text-gray-300 hover:text-white'
                        : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div
            className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left px-3 py-2 rounded-md capitalize ${
                    activeSection === section
                      ? 'bg-blue-500 text-white'
                      : darkMode
                        ? 'text-gray-300 hover:bg-gray-700'
                        : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            {personalInfo.name}
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6 text-gray-400">{personalInfo.title}</h2>
          <p
            className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
          >
            {personalInfo.tagline}
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-lg transition-all hover:scale-110 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-lg transition-all hover:scale-110 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className={`p-3 rounded-lg transition-all hover:scale-110 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce"
            aria-label="Scroll to about section"
          >
            <ChevronDown size={32} className="text-blue-500" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-4 ${darkMode ? 'bg-gray-800/50' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="space-y-6 text-lg">
            <p>
              I'm a Software Engineer currently working as a Full-Stack Developer at{' '}
              <span className="text-blue-500 font-semibold">KeelWorks</span> and a recent graduate
              student from{' '}
              <span className="text-blue-500 font-semibold">Northeastern University</span> in
              Software Engineering Systems.
            </p>
            <p>
              With 3+ years of professional experience, I've built scalable applications serving{' '}
              <span className="text-blue-500 font-semibold">500K+ users</span>, designed distributed
              systems processing{' '}
              <span className="text-blue-500 font-semibold">1B+ messages/day</span>, and led
              migrations from monolithic to microservices architectures.
            </p>
            <p>
              I specialize in building full-stack applications using React/Next.js, Node.js, Python,
              and Go, with extensive experience in cloud technologies (AWS, Docker, Kubernetes),
              event-driven architectures (Kafka), and AI/ML applications (RAG systems with LLMs).
            </p>
            <p>
              Currently seeking Software Engineering opportunities at innovative tech companies
              where I can contribute to building impactful products.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <span
                className={`px-4 py-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
              >
                🎓 MS in Software Engineering Systems
              </span>
              <span
                className={`px-4 py-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
              >
                📍 Boston, MA
              </span>
              <span
                className={`px-4 py-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
              >
                💼 Open to opportunities
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'} hover:scale-105 transition-transform`}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-500">{exp.title}</h3>
                    <p className="text-xl">{exp.company}</p>
                    <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {exp.location}
                    </p>
                  </div>
                  <span
                    className={`mt-2 md:mt-0 px-4 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
                  >
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-500 mr-2">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 px-4 ${darkMode ? 'bg-gray-800/50' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 shadow-lg'} hover:scale-105 transition-transform`}
              >
                <h3 className="text-2xl font-bold mb-2 text-blue-500">{project.title}</h3>
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-500 hover:text-blue-400"
                  >
                    <Github size={20} className="mr-1" />
                    Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-500 hover:text-blue-400"
                    >
                      <ExternalLink size={20} className="mr-1" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'}`}
              >
                <h3 className="text-xl font-bold mb-4 text-blue-500">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-4 ${darkMode ? 'bg-gray-800/50' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            I'm currently seeking full-time Software Engineering opportunities. Whether you have a
            question or just want to say hi, feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href={`mailto:${personalInfo.email}`}
              className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors flex items-center"
            >
              <Mail size={20} className="mr-2" />
              Email Me
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-8 py-3 rounded-lg transition-colors flex items-center ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              <Linkedin size={20} className="mr-2" />
              LinkedIn
            </a>
          </div>
          <div className="mt-8">
            <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
              📍 {personalInfo.location} | 📧 {personalInfo.email}
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-8 px-4 border-t ${darkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-gray-50'}`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
            Built with React & Tailwind CSS • © 2024 Mihir Adelkar
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
