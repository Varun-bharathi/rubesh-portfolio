import React, { useState } from 'react';
import { 
  Wrench, 
  Code2, 
  Terminal, 
  Code, 
  FileCode, 
  Coffee, 
  Database, 
  Layers, 
  Globe, 
  Layout, 
  Palette, 
  Cpu, 
  Radio, 
  Server, 
  Compass, 
  Zap, 
  Network, 
  Workflow, 
  HardDrive, 
  FastForward, 
  Box, 
  Cloud, 
  GitBranch, 
  Binary, 
  Component, 
  MonitorCheck, 
  Boxes, 
  Wifi, 
  TerminalSquare,
  BrainCircuit,
  CheckCircle2
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

// Map icon name string to Lucide component
const iconMap = {
  Code2,
  Terminal,
  Code,
  FileCode,
  Coffee,
  Database,
  Layers,
  Globe,
  Layout,
  Palette,
  Cpu,
  Radio,
  Server,
  Compass,
  Zap,
  Network,
  Workflow,
  HardDrive,
  FastForward,
  Box,
  Cloud,
  GitBranch,
  Binary,
  Component,
  MonitorCheck,
  Boxes,
  Wifi,
  TerminalSquare,
  BrainCircuit,
  CheckCircle2,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills =
    activeCategory === 'all'
      ? skillsData.items
      : skillsData.items.filter((item) => item.category === activeCategory);

  return (
    <section className="section" id="skills">
      <div className="container">
        
        <div className="section-header">
          <div className="section-badge">
            <Wrench size={14} />
            <span>Technical Stack</span>
          </div>
          <h2 className="section-title">Skills & Proficiencies</h2>
          <p className="section-subtitle">
            Core competencies across technical programming, AI & vision frameworks, analytical problem-solving, soft skills, and tools.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="skills-tabs">
          {skillsData.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`skill-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill) => {
            const IconComponent = iconMap[skill.icon] || Code;

            return (
              <div key={skill.name} className="glass-card skill-card">
                <div>
                  <div className="skill-card-top">
                    <div className="skill-icon-wrap">
                      <IconComponent size={22} />
                    </div>
                    <span className="skill-tag-pill">{skill.tag}</span>
                  </div>

                  <h3 className="skill-name">{skill.name}</h3>
                  <p className="skill-highlight">{skill.highlight}</p>
                </div>

                <div>
                  <div className="skill-level-row">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-level-meter">
                    <div
                      className="skill-level-fill"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
