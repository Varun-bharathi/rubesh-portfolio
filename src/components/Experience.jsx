import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, Award, CheckCircle } from 'lucide-react';
import { experienceData, educationData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        
        <div className="section-header">
          <div className="section-badge">
            <Briefcase size={14} />
            <span>Career & Academics</span>
          </div>
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle">
            Hands-on software internships, engineering leadership, and rigorous computer science academics.
          </p>
        </div>

        <div className="exp-edu-grid">
          
          {/* Left Column: Experience Timeline */}
          <div>
            <div className="timeline-column-title">
              <div className="timeline-column-icon">
                <Briefcase size={18} />
              </div>
              <span>Engineering Experience</span>
            </div>

            <div className="timeline-container">
              {experienceData.map((exp) => (
                <div key={exp.id} className="timeline-item">
                  <div className="timeline-node-dot" />

                  <div className="glass-card timeline-content-card">
                    <span className="timeline-period-badge">
                      {exp.period} • {exp.type}
                    </span>

                    <h3 className="timeline-role-title">{exp.role}</h3>
                    <div className="timeline-org-name">{exp.company} — {exp.location}</div>

                    <ul className="timeline-bullets-list">
                      {exp.responsibilities.map((bullet, idx) => (
                        <li key={idx} className="timeline-bullet-item">
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    <div className="timeline-tags">
                      {exp.skills.map((skill) => (
                        <span key={skill} className="timeline-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education Foundation */}
          <div>
            <div className="timeline-column-title">
              <div className="timeline-column-icon">
                <GraduationCap size={18} />
              </div>
              <span>Academic Education</span>
            </div>

            <div className="glass-card" style={{ padding: '2.2rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: '800', marginBottom: '0.35rem' }}>
                    {educationData.degree}
                  </h3>
                  <div style={{ color: 'var(--cyan)', fontWeight: '600', fontSize: '1.05rem', marginBottom: '0.25rem' }}>
                    {educationData.major}
                  </div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
                    {educationData.institution}
                  </div>
                </div>
                <span className="project-category-badge" style={{ position: 'static' }}>
                  {educationData.duration}
                </span>
              </div>

              {/* CGPA Score Highlight */}
              <div className="edu-highlight-box">
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Cumulative Grade Point Average
                </div>
                <div className="edu-cgpa-score">
                  {educationData.cgpa}
                </div>
                <div style={{ fontSize: '0.84rem', color: 'var(--emerald)', marginTop: '0.25rem' }}>
                  ★ Ranked in Department Top 5%
                </div>
              </div>

              {/* Relevant Coursework */}
              <div style={{ marginBottom: '1.6rem' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: '700', marginBottom: '0.75rem', color: 'var(--text-main)' }}>
                  Core Computer Science Coursework:
                </div>
                <div className="coursework-chips-grid">
                  {educationData.coursework.map((course, idx) => (
                    <span key={idx} className="course-chip">
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Academic Achievements */}
              <div>
                <div style={{ fontSize: '0.95rem', fontWeight: '700', marginBottom: '0.75rem', color: 'var(--text-main)' }}>
                  Academic Honors:
                </div>
                <ul className="timeline-bullets-list">
                  {educationData.academicAchievements.map((ach, idx) => (
                    <li key={idx} className="timeline-bullet-item">
                      {ach}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
