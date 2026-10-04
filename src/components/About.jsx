import React from 'react';
import {
  Binary,
  Layers,
  Server,
  BrainCircuit,
  Trophy,
  MapPin,
  GraduationCap,
  Briefcase,
  Award,
  ExternalLink,
  Code,
  CheckCircle2,
  Mail,
  Zap,
  Boxes
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalData, educationData, achievementsData } from '../data/portfolioData';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">

        <div className="section-header">
          <div className="section-badge">
            <Binary size={14} />
            <span>Profile & Background</span>
          </div>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Computer Science Engineering student specializing in Data Analytics, , and AI-driven systems.
          </p>
        </div>

        <div className="about-grid">

          {/* Left Column: Portrait & Key Details */}
          <div className="glass-card about-profile-card">

            {/* Rubesh's Photo Frame */}
            <div className="about-photo-frame">
              <img
                src={personalData.avatar}
                alt={personalData.fullName}
                className="about-photo-img"
              />
              <div className="about-badge-floating">
                B.E. CSE • Class of 2026
              </div>
            </div>

            <h3 style={{ fontSize: '1.45rem', fontWeight: '800', marginBottom: '0.25rem' }}>
              {personalData.fullName}
            </h3>

            <div style={{ color: 'var(--cyan)', fontSize: '0.88rem', fontFamily: 'var(--font-mono)', fontWeight: '600', marginBottom: '1.25rem' }}>
              & Data Analytics
            </div>

            {/* Quick Metadata List */}
            <div className="about-details-list">
              <div className="about-detail-item">
                <GraduationCap size={18} className="about-detail-icon" />
                <div>
                  <strong style={{ color: 'var(--text-main)' }}>B.E. CSE (CGPA: 7.93)</strong>
                  <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>SNS College Of Technology (2022-2026)</div>
                </div>
              </div>

              <div className="about-detail-item">
                <MapPin size={18} className="about-detail-icon" />
                <div>
                  <strong style={{ color: 'var(--text-main)' }}>Location</strong>
                  <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>Bangalore, Karnataka, India</div>
                </div>
              </div>

              <div className="about-detail-item">
                <Briefcase size={18} className="about-detail-icon" />
                <div>
                  <strong style={{ color: 'var(--text-main)' }}>2 Industry Internships</strong>
                  <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>Gateway Software & Litz Tech</div>
                </div>
              </div>

              <div className="about-detail-item">
                <Award size={18} className="about-detail-icon" />
                <div>
                  <strong style={{ color: 'var(--text-main)' }}>Oracle AI & Databricks Certified</strong>
                  <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>Cloud AI Foundation Associate (2025)</div>
                </div>
              </div>
            </div>

            {/* Social & Contact Buttons */}
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem', width: '100%', justifyContent: 'center' }}>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={personalData.github}
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                title="GitHub Profile"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={`mailto:${personalData.email}`}
                className="social-icon-btn"
                title="Direct Email"
              >
                <Mail size={18} />
              </a>
            </div>

          </div>

          {/* Right Column: Career Objective & 4 Core Pillars */}
          <div className="glass-card about-main-card">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <span className="project-category-badge" style={{ position: 'static' }}>
                  Professional Profile
                </span>
                <span className="project-tag" style={{ color: 'var(--emerald)' }}>
                  Active Candidate
                </span>
              </div>

              <p className="about-narrative" style={{ fontSize: '1.05rem', lineHeight: '1.75' }}>
                {personalData.bio}
              </p>

              {/* 4 Pillars of Competencies */}
              <div className="about-pillars">
                <div className="pillar-item">
                  <div className="pillar-icon-box">
                    <BrainCircuit size={20} />
                  </div>
                  <div className="pillar-title">AI & Computer Vision</div>
                  <div className="pillar-desc">
                    OpenCV, MediaPipe 21-point hand landmark tracking, and real-time facial recognition attendance pipelines.
                  </div>
                </div>

                <div className="pillar-item">
                  <div className="pillar-icon-box">
                    <Server size={20} />
                  </div>
                  <div className="pillar-title"></div>
                  <div className="pillar-desc">
                    Pytest test automation, Flask RESTful web services, Tkinter desktop GUIs, and PyMySQL database transactions.
                  </div>
                </div>

                <div className="pillar-item">
                  <div className="pillar-icon-box">
                    <Boxes size={20} />
                  </div>
                  <div className="pillar-title">Business Intelligence</div>
                  <div className="pillar-desc">
                    Power BI executive dashboards, DAX queries, sales data visualization, and real-time performance tracking.
                  </div>
                </div>

                <div className="pillar-item">
                  <div className="pillar-icon-box">
                    <Binary size={20} />
                  </div>
                  <div className="pillar-title">Software Engineering</div>
                  <div className="pillar-desc">
                    NIT Trichy Software Development course graduate. Strong grasp of OOP, SDLC, Git workflows, and UI/UX design (KCT).
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications Bar */}
            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Award size={16} style={{ color: 'var(--amber)' }} />
                <span>Verified Credentials & Honors:</span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {achievementsData.slice(0, 4).map((ach) => (
                  <span key={ach.id} className="project-tag" style={{ fontSize: '0.76rem' }}>
                    ✓ {ach.title}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
