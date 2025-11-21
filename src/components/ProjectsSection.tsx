import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Project, ProjectCategory } from '../types';

interface ProjectsSectionProps {
  projects: Project[];
  darkMode: boolean;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects, darkMode }) => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'All'>('All');

  const categories: Array<ProjectCategory | 'All'> = [
    'All',
    'AI/ML',
    'Distributed Systems',
    'Cloud',
    'Mobile/IoT',
    'Frontend',
    'Backend',
    'Open Source',
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category.includes(activeFilter));

  const featuredProjects = projects.filter((p) => p.featured);
  const displayProjects = activeFilter === 'All' ? featuredProjects : filteredProjects;

  return (
    <section id="projects" className={`py-20 px-4 ${darkMode ? 'bg-gray-800/50' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Projects</h2>
        <p className={`text-center mb-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {activeFilter === 'All'
            ? `Showcasing ${featuredProjects.length} featured projects. Use filters to explore all ${projects.length} projects.`
            : `Showing ${filteredProjects.length} project${filteredProjects.length !== 1 ? 's' : ''} in ${activeFilter}`}
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeFilter === category
                  ? 'bg-blue-500 text-white shadow-lg scale-105'
                  : darkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayProjects.map((project, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg ${
                darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 shadow-lg'
              } hover:scale-105 transition-transform flex flex-col`}
            >
              {/* Project Header */}
              <div className="mb-3">
                <h3 className="text-xl font-bold mb-2 text-blue-500">{project.title}</h3>
                <p className={`text-sm mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-1 mb-3">
                {project.category.map((cat, i) => (
                  <span
                    key={i}
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      darkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-700'
                    }`}
                  >
                    {cat}
                  </span>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="mb-3 flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 6).map((tech, i) => (
                    <span
                      key={i}
                      className={`px-2 py-1 rounded text-xs ${
                        darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 6 && (
                    <span
                      className={`px-2 py-1 rounded text-xs ${
                        darkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-200 text-gray-600'
                      }`}
                    >
                      +{project.tech.length - 6} more
                    </span>
                  )}
                </div>
              </div>

              {/* Highlights - First 2 */}
              <ul className="space-y-1 mb-4 text-sm">
                {project.highlights.slice(0, 2).map((highlight, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-500 mr-2 text-xs">•</span>
                    <span className="text-sm">{highlight}</span>
                  </li>
                ))}
                {project.highlights.length > 2 && (
                  <li className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    +{project.highlights.length - 2} more highlights
                  </li>
                )}
              </ul>

              {/* Links */}
              <div className="flex space-x-4 mt-auto pt-3 border-t border-gray-700">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-500 hover:text-blue-400 text-sm"
                >
                  <Github size={16} className="mr-1" />
                  Code
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-500 hover:text-blue-400 text-sm"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Show message when filter returns no results */}
        {filteredProjects.length === 0 && activeFilter !== 'All' && (
          <div className="text-center py-12">
            <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              No projects found in {activeFilter} category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
