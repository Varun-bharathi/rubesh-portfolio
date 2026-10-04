import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, AlertTriangle, Cpu } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="project-modal-box" onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button */}
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Hero Image */}
        <img
          src={project.image}
          alt={project.title}
          className="modal-hero-img"
        />

        {/* Modal Content */}
        <div className="modal-content-body">
          <div className="modal-header-meta">
            <span className="project-category-badge" style={{ position: 'static' }}>
              {project.category}
            </span>
            <span className="project-metrics-chip" style={{ marginBottom: 0 }}>
              {project.metrics}
            </span>
          </div>

          <h3 className="modal-title">{project.title}</h3>
          
          <p className="modal-long-desc">
            {project.longDescription}
          </p>

          {/* System Architecture */}
          <div style={{ marginBottom: '1.8rem' }}>
            <h4 className="modal-section-title">
              <Cpu size={18} style={{ color: 'var(--cyan)' }} />
              <span>System Architecture & Components</span>
            </h4>
            <ul className="modal-arch-list">
              {project.architecture.map((item, idx) => (
                <li key={idx} className="modal-arch-item">
                  <CheckCircle2 size={16} className="modal-arch-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Challenge */}
          {project.challenges && (
            <div className="modal-challenge-box">
              <div className="modal-challenge-title">
                Technical Challenge Conquered
              </div>
              <p className="modal-challenge-text">
                {project.challenges}
              </p>
            </div>
          )}

          {/* Tags */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginBottom: '0.6rem' }}>
              Technologies Utilized:
            </div>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="modal-action-bar">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              <GithubIcon size={18} />
              <span>Source Code</span>
            </a>

            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              <span>Live Demonstration</span>
              <ExternalLink size={18} />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
