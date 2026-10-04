import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  ArrowRight, 
  Sparkles,
  Layers
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';

export default function Projects({ onSelectProject }) {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const categories = ['All', 'Full Stack', 'AI & ML', 'Systems', 'Core CS'];

  const filteredProjects =
    selectedFilter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedFilter);

  return (
    <section className="section" id="projects">
      <div className="container">
        
        <div className="section-header">
          <div className="section-badge">
            <FolderGit2 size={14} />
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="section-title">Featured Engineering Projects</h2>
          <p className="section-subtitle">
            Production-grade systems, machine learning pipelines, and interactive full-stack web applications.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="projects-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`skill-tab-btn ${selectedFilter === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="glass-card project-card">
              
              {/* Image Box */}
              <div className="project-img-box">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                  loading="lazy"
                />
                <span className="project-category-badge">{project.category}</span>
              </div>

              {/* Body */}
              <div className="project-body">
                <div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  
                  {/* Metrics Chip */}
                  <div className="project-metrics-chip">
                    <Sparkles size={14} />
                    <span>{project.metrics}</span>
                  </div>

                  {/* Tags */}
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="project-footer-actions">
                  <div className="project-links-group">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-icon-btn"
                      title="GitHub Repository"
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon size={18} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="project-icon-btn"
                      title="Live Demo"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="view-details-btn"
                  >
                    <span>Deep-Dive</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
