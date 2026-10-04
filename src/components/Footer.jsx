import React from 'react';
import { ArrowUp, Heart, Code2 } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-top-row">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span className="logo-badge" style={{ width: 34, height: 34, fontSize: '1rem' }}>R</span>
            <div>
              <div style={{ fontWeight: '800', fontSize: '1.15rem' }}>
                {personalData.name}<span className="gradient-text"></span>
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Computer Science & Engineering • Class of 2026
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="#about" className="nav-link" style={{ fontSize: '0.86rem' }}>About</a>
            <a href="#skills" className="nav-link" style={{ fontSize: '0.86rem' }}>Skills</a>
            <a href="#projects" className="nav-link" style={{ fontSize: '0.86rem' }}>Projects</a>
            <a href="#experience" className="nav-link" style={{ fontSize: '0.86rem' }}>Experience</a>
          </div>
        </div>

        <div className="footer-bottom-row">
          <div>
            © {new Date().getFullYear()} {personalData.fullName}. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="back-to-top-btn"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
}
