import React from 'react';
import { Award, Trophy, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section className="section" id="certifications" style={{ paddingTop: '1rem' }}>
      <div className="container">
        
        <div className="section-header">
          <div className="section-badge">
            <Trophy size={14} />
            <span>Honors & Certifications</span>
          </div>
          <h2 className="section-title">Certifications & Awards</h2>
          <p className="section-subtitle">
            Industry cloud credentials, hackathon victories, and competitive recognitions.
          </p>
        </div>

        <div className="achievements-grid">
          {achievementsData.map((item) => (
            <div key={item.id} className="glass-card achievement-card">
              <div className="achieve-icon-box">
                {item.tag.includes('Winner') || item.tag.includes('Honor') ? (
                  <Trophy size={24} />
                ) : (
                  <ShieldCheck size={24} />
                )}
              </div>

              <div className="achieve-body">
                <span className="achieve-tag">{item.tag}</span>
                <h3 className="achieve-title">{item.title}</h3>
                <div className="achieve-issuer">
                  {item.issuer} • <span style={{ color: 'var(--text-muted)' }}>{item.date}</span>
                </div>
                <p className="achieve-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
