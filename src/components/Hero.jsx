import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  FileText,
  Code2,
  Mail,
  Award,
  GraduationCap,
  Sparkles,
  Terminal,
  ExternalLink
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalData } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect loop
  useEffect(() => {
    const fullRole = personalData.roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullRole.substring(0, currentText.length + 1));
        if (currentText === fullRole) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setCurrentText(fullRole.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % personalData.roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, roleIndex]);

  return (
    <>
      <section className="hero-section" id="hero">
        <div className="hero-glow-bg" />
        <div className="container">
          <div className="hero-grid">

            {/* Left Content */}
            <div className="hero-content">
              <div className="hero-badge-wrap">
                <span className="status-dot" />
                <span>{personalData.status}</span>
              </div>

              <h1 className="hero-title">
                Analyzing Data, Driving Better Decisions              </h1>

              <div className="hero-role-wrapper">
                <span style={{ color: 'var(--text-muted)' }}>&gt;</span>
                <span>{currentText}</span>
                <span className="typing-cursor" />
              </div>

              <p className="hero-description">
                Computer Science & Engineering student specializing in Data Analytics, ,
                and AI-driven computer vision systems. Passionate about solving analytical challenges.
              </p>

              <div className="hero-actions">
                <a href="#projects" className="btn btn-primary">
                  <span>Explore Projects</span>
                  <ArrowRight size={18} />
                </a>

                <button onClick={onOpenResume} className="btn btn-secondary">
                  <FileText size={18} />
                  <span>Interactive Resume</span>
                </button>

                <a href={`mailto:${personalData.email}`} className="btn btn-outline">
                  <span>Email Me</span>
                </a>
              </div>

              {/* Social Channels */}
              <div className="hero-socials">
                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-btn"
                  title="GitHub Profile"
                  aria-label="GitHub"
                >
                  <GithubIcon size={19} />
                </a>
                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-btn"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={19} />
                </a>
                <a
                  href={`mailto:${personalData.email}`}
                  className="social-icon-btn"
                  title="Direct Email"
                  aria-label="Email"
                >
                  <Mail size={19} />
                </a>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="hero-visual-wrapper">
              <div className="hero-card">
                <div className="hero-card-glow" />

                {/* Floating Badges */}
                <div className="floating-badge floating-badge-1">
                  <Award size={18} style={{ color: 'var(--cyan)' }} />
                  <div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Certified</div>
                    <div>Oracle AI Associate '25</div>
                  </div>
                </div>

                <div className="floating-badge floating-badge-2">
                  <GraduationCap size={18} style={{ color: 'var(--amber)' }} />
                  <div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Academic Standing</div>
                    <div>B.E. CSE • 7.93 CGPA</div>
                  </div>
                </div>

                {/* Avatar Box */}
                <div className="hero-avatar-box">
                  <img
                    src={personalData.avatar}
                    alt={personalData.fullName}
                    className="hero-avatar-img"
                  />
                  <div className="hero-card-overlay">
                    <div>
                      <div className="hero-card-name">{personalData.fullName}</div>
                      <div className="hero-card-role">SNS College of Technology (2022 - 2026)</div>
                    </div>
                    <div className="status-dot" title="Available" />
                  </div>
                </div>

                {/* Card Quick Metrics */}
                <div className="hero-card-stats">
                  <div className="card-stat-item">
                    <div className="card-stat-val">2</div>
                    <div className="card-stat-lbl">Internships</div>
                  </div>
                  <div className="card-stat-item">
                    <div className="card-stat-val">7.93</div>
                    <div className="card-stat-lbl">CGPA</div>
                  </div>
                  <div className="card-stat-item">
                    <div className="card-stat-val">6+</div>
                    <div className="card-stat-lbl">Projects</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Quick Metrics Ribbon Bar */}
      <section className="stats-bar-section">
        <div className="container">
          <div className="glass-card" style={{ padding: '1.25rem 2rem' }}>
            <div className="stats-grid">
              {personalData.quickStats.map((stat, idx) => (
                <div key={idx} className="stat-metric-card">
                  <div className="stat-metric-val">{stat.value}</div>
                  <div className="stat-metric-lbl">{stat.label}</div>
                  <div className="stat-metric-helper">{stat.helper}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
