import React, { useState, useEffect } from 'react';
import {
  X,
  Printer,
  Download,
  FileText,
  Eye,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalData } from '../data/portfolioData';

export default function ResumeModal({ onClose }) {
  const [viewMode, setViewMode] = useState('ats'); // 'ats' | 'pdf'

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

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="resume-modal-box"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: viewMode === 'pdf' ? '920px' : '840px' }}
      >

        {/* Sticky Header Bar */}
        <div className="resume-header-bar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            {/* View Mode Switcher */}
            <div className="resume-view-tabs">
              <button
                onClick={() => setViewMode('ats')}
                className={`resume-tab-btn ${viewMode === 'ats' ? 'active' : ''}`}
              >
                <FileText size={14} style={{ display: 'inline', marginRight: '4px' }} />
                Interactive ATS
              </button>
              <button
                onClick={() => setViewMode('pdf')}
                className={`resume-tab-btn ${viewMode === 'pdf' ? 'active' : ''}`}
              >
                <Eye size={14} style={{ display: 'inline', marginRight: '4px' }} />
                Original PDF
              </button>
            </div>
            <span className="project-tag" style={{ color: 'var(--emerald)', fontSize: '0.74rem' }}>
              Verified Resume
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <a
              href="/Rubesh_Karthik_SS_Resume.pdf"
              download="Rubesh_Karthik_SS_Resume.pdf"
              className="btn btn-primary"
              style={{ padding: '0.45rem 0.95rem', fontSize: '0.82rem' }}
              title="Download original PDF resume"
            >
              <Download size={15} />
              <span>Download PDF</span>
            </a>

            <button
              onClick={handlePrint}
              className="btn btn-secondary"
              style={{ padding: '0.45rem 0.95rem', fontSize: '0.82rem' }}
              title="Print ATS resume"
            >
              <Printer size={15} />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              className="modal-close-btn"
              style={{ position: 'static' }}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* View Mode 1: Original PDF Viewer */}
        {viewMode === 'pdf' ? (
          <div className="resume-pdf-container">
            <iframe
              src="/Rubesh_Karthik_SS_Resume.pdf"
              title="Rubesh Karthik SS Resume PDF"
              className="resume-pdf-iframe"
            />
          </div>
        ) : (
          /* View Mode 2: Interactive ATS Structured Resume Sheet */
          <div className="resume-paper" id="printable-resume">

            {/* Header Candidate Block */}
            <div className="resume-title-block">
              <h1 className="resume-candidate-name">RUBESH KARTHIK SS</h1>
              <div className="resume-candidate-contact" style={{ marginTop: '0.5rem' }}>
                <a href="tel:+917708050935" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: 'inherit' }}>
                  <Phone size={14} style={{ color: 'var(--cyan)' }} />
                  <span>+91 7708050935</span>
                </a>
                <span>|</span>
                <a href="mailto:rubeshkarthik166@gmail.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: 'inherit' }}>
                  <Mail size={14} style={{ color: 'var(--cyan)' }} />
                  <span>rubeshkarthik166@gmail.com</span>
                </a>
                <span>|</span>
                <a href={personalData.linkedin} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: 'inherit' }}>
                  <LinkedinIcon size={14} style={{ color: 'var(--indigo)' }} />
                  <span>LinkedIn: rubesh-karthik-ss</span>
                </a>
                <span>|</span>
                <a href="https://github.com/Rubesh166" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: 'inherit' }}>
                  <GithubIcon size={14} style={{ color: 'var(--cyan)' }} />
                  <span>GitHub: rubeshkarthikSS</span>
                </a>
                <span>|</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  <MapPin size={14} style={{ color: 'var(--cyan)' }} />
                  <span>Bangalore, Karnataka</span>
                </span>
              </div>
            </div>

            {/* Objective */}
            <div style={{ marginBottom: '1.4rem' }}>
              <h2 className="resume-sec-head">Objective</h2>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.65' }}>
                Aspiring Software Professional with a strong foundation in Data Analyst and  Development. Skilled in Python, SQL, data analysis, visualization, and test automation. Proficient in developing efficient, data-driven solutions with strong problem-solving and analytical skills.
              </p>
            </div>

            {/* Key Competencies */}
            <div style={{ marginBottom: '1.4rem' }}>
              <h2 className="resume-sec-head">Key Competencies</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.6rem', fontSize: '0.88rem' }}>
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '0.5rem 0.75rem', borderRadius: '6px', border: '1px solid var(--border-subtle)' }}>
                  <strong style={{ color: 'var(--cyan)' }}>▪ Technical Skills:</strong> Python, SQL
                </div>
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '0.5rem 0.75rem', borderRadius: '6px', border: '1px solid var(--border-subtle)' }}>
                  <strong style={{ color: 'var(--cyan)' }}>▪ Framework:</strong> Pandas, Pytest, OpenCV, Media pipe, Flask
                </div>
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '0.5rem 0.75rem', borderRadius: '6px', border: '1px solid var(--border-subtle)' }}>
                  <strong style={{ color: 'var(--cyan)' }}>▪ Analytical Skills:</strong> problem-solving, Critical thinking
                </div>
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '0.5rem 0.75rem', borderRadius: '6px', border: '1px solid var(--border-subtle)' }}>
                  <strong style={{ color: 'var(--cyan)' }}>▪ Soft Skills:</strong> Communication, Teamwork, Leadership
                </div>
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '0.5rem 0.75rem', borderRadius: '6px', border: '1px solid var(--border-subtle)' }}>
                  <strong style={{ color: 'var(--cyan)' }}>▪ Tools:</strong> PowerBi, Figma, MS Excel, PyCharm, GitHub
                </div>
              </div>
            </div>

            {/* Experience & Internship */}
            <div style={{ marginBottom: '1.4rem' }}>
              <h2 className="resume-sec-head">Experience & Internship</h2>

              {/* Gateway Software Solutions */}
              <div className="resume-item-row">
                <div className="resume-row-top">
                  <span>
                    <strong>Data Analytics Intern</strong> — Gateway software solutions
                  </span>
                  <span className="resume-date-meta">May 2025 – June 2025</span>
                </div>
                <ul className="resume-bullets" style={{ marginTop: '0.35rem' }}>
                  <li>
                    Developed skills in sales data visualization and reporting, enhancing the ability to interpret trends and patterns.
                  </li>
                  <li>
                    Gained practical exposure to how data-driven insights influence real-world business decisions (sales analyst).
                  </li>
                  <li style={{ color: 'var(--cyan)', fontWeight: '600' }}>
                    Tools: Power Bi
                  </li>
                </ul>
              </div>

              {/* Litz Tech */}
              <div className="resume-item-row" style={{ marginTop: '1rem' }}>
                <div className="resume-row-top">
                  <span>
                    <strong>Python Development Intern</strong> — Litz Tech
                  </span>
                  <span className="resume-date-meta">March 2024 – April 2024</span>
                </div>
                <ul className="resume-bullets" style={{ marginTop: '0.35rem' }}>
                  <li>
                    Built a Movie Ticket Reservation System using Python and Tkinter for the user interface.
                  </li>
                  <li>
                    PyMySQL to connect with MySQL for handling booking, seat availability, and payment records. Implemented features such as seat allocation, booking validation and database driven show management.
                  </li>
                  <li style={{ color: 'var(--cyan)', fontWeight: '600' }}>
                    Tech Stack: PyMySQL, MySQL
                  </li>
                </ul>
              </div>
            </div>

            {/* Workshop Experiences */}
            <div style={{ marginBottom: '1.4rem' }}>
              <h2 className="resume-sec-head">Workshop Experiences</h2>
              <ul className="resume-bullets">
                <li>
                  Completed the <strong>'Introduction to Software Development'</strong> course at <strong>NIT Trichy</strong>, acquiring a solid understanding Object-Oriented Programming (OOP) principle.
                </li>
                <li style={{ marginTop: '0.4rem' }}>
                  Participated in a <strong>UI/UX workshop at KCT</strong>, where I gained foundational knowledge in UI/UX design principles.
                </li>
              </ul>
            </div>

            {/* Education */}
            <div style={{ marginBottom: '1.4rem' }}>
              <h2 className="resume-sec-head">Education</h2>

              <div className="resume-item-row">
                <div className="resume-row-top">
                  <span>
                    <strong>B.E Computer Science and Engineering</strong> — SNS College Of Technology
                  </span>
                  <span className="resume-date-meta">2022-2026 | CGPA: 7.93</span>
                </div>
              </div>

              <div className="resume-item-row">
                <div className="resume-row-top">
                  <span>
                    <strong>HSC</strong> — Fusco’s Matric Hr Sec school
                  </span>
                  <span className="resume-date-meta">2021-2022 | 82.3 %</span>
                </div>
              </div>

              <div className="resume-item-row">
                <div className="resume-row-top">
                  <span>
                    <strong>SSLC</strong> — Fusco’s Matric Hr Sec school
                  </span>
                  <span className="resume-date-meta">2019 – 2020 | 91.8 %</span>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div style={{ marginBottom: '1.4rem' }}>
              <h2 className="resume-sec-head">Certifications</h2>
              <ul className="resume-bullets">
                <li>Python Programming</li>
                <li>Oracle Cloud Certified AI Foundation Associate – 2025</li>
                <li>SQL Certification</li>
                <li>Data Science Certification</li>
                <li>Databricks Gen AI Fundamentals</li>
              </ul>
            </div>

            {/* Projects */}
            <div>
              <h2 className="resume-sec-head">Projects</h2>

              {/* Project 1 */}
              <div className="resume-item-row">
                <div className="resume-row-top">
                  <strong style={{ fontSize: '1rem', color: 'var(--text-main)' }}>
                    Facial and Hand Gesture Using AI-Powered Attendance System
                  </strong>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: '0.35rem 0' }}>
                  Developed an AI-powered system for real-time face recognition and hand gesture detection. Implemented Thumbs Up, Thumbs Down, and Neutral gesture feedback within a 15-second capture window. Developed separate Staff and Student dashboards to monitor attendance and hand gesture feedback. Enabled staff to mark attendance using face recognition and collect gesture-based feedback. Automatically stored user details and feedback in a CSV file.
                </p>
                <div style={{ fontSize: '0.84rem', color: 'var(--cyan)', fontWeight: '600' }}>
                  Tech Stack: Pandas, OpenCV, Media pipe, Flask, Face-Recognition
                </div>
              </div>

              {/* Project 2 */}
              <div className="resume-item-row" style={{ marginTop: '1.1rem' }}>
                <div className="resume-row-top">
                  <strong style={{ fontSize: '1rem', color: 'var(--text-main)' }}>
                    Real-Time Attendance & Performance Tracking using Business Intelligence
                  </strong>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: '0.35rem 0' }}>
                  Designed and developed an interactive BI dashboard to track real-time attendance and performance across teams, managers, and job levels, enabling data-driven insights and improved decision-making.
                </p>
                <div style={{ fontSize: '0.84rem', color: 'var(--cyan)', fontWeight: '600' }}>
                  Tools: Power Bi
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
