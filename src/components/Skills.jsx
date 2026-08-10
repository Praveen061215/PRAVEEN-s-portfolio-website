import React from 'react';
import { Terminal, Cpu, Layers, Database, Code, Shield } from 'lucide-react';
import './Skills.css';

// Styled custom SVG icons for tech stack compatibility and consistency
const JavaIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 10h12v3a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6v-3z" />
    <path d="M18 10h1a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3h-1" />
    <path d="M6 2c.5 1-1 3.5 0 5" />
    <path d="M10 1c.5 1-1 4 0 6" />
    <path d="M14 2c.5 1-1 3.5 0 5" />
  </svg>
);

const FlutterIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M14.297 2 2 14.29l3.541 3.541L22 3.542z" />
    <path d="m14.297 14.29-4.25 4.25 4.25 4.25h7.094l-7.094-7.09z" />
  </svg>
);

const PhpIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="12" rx="10" ry="6" />
    <path d="M8 9h2a1.5 1.5 0 0 1 0 3H8v2.5" />
    <path d="M8 9v6" />
    <path d="M13 9h2a1.5 1.5 0 0 1 0 3h-2v2.5" />
    <path d="M13 9v6" />
  </svg>
);

const PythonIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2A10 10 0 0 0 2 12c0 2.2.7 4.2 2 5.8l1.4-1.4A8 8 0 0 1 4 12c0-4.4 3.6-8 8-8s8 3.6 8 8c0 1.8-.6 3.5-1.6 4.8l1.4 1.4A10 10 0 0 0 22 12c0-5.5-4.5-10-10-10z" />
    <path d="M12 22a10 10 0 0 0 10-10c0-2.2-.7-4.2-2-5.8l-1.4 1.4a8 8 0 0 1 1.4 4.4c0 4.4-3.6 8-8 8s-8-3.6-8-8c0-1.8.6-3.5 1.6-4.8L4.6 4.6A10 10 0 0 0 2 12c0 5.5 4.5 10 10 10z" />
  </svg>
);

const CSharpIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 5H8a7 7 0 1 0 7 7" />
    <path d="M14 9h6" />
    <path d="M14 13h6" />
    <path d="M15 7v10" />
    <path d="M19 7v10" />
  </svg>
);

const JavaScriptIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M15 15c0 .6-.4 1-1 1h-2a1 1 0 0 1-1-1v-1" />
    <path d="M10 10h1.5a1.5 1.5 0 0 1 0 3H10v2" />
  </svg>
);

const HtmlIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

const ReactIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="12" rx="10" ry="3" transform="rotate(30 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="3" transform="rotate(90 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="3" transform="rotate(150 12 12)" />
    <circle cx="12" cy="12" r="1.5" />
  </svg>
);

const BootstrapIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="4" y="4" width="16" height="16" rx="3" />
    <path d="M9 8h4a2 2 0 0 1 0 4H9V8z" />
    <path d="M9 12h4.5a2 2 0 0 1 0 4H9v-4z" />
  </svg>
);

const FirebaseIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2L3.5 12l2.5 1.5L12 5.5l6 8 2.5-1.5z" />
    <path d="M5.5 15.5L12 22l6.5-6.5-6.5-1.5z" />
  </svg>
);

const FigmaIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M8 5a3 3 0 1 1-3 3v0a3 3 0 0 1 3-3z" />
    <path d="M12 5a3 3 0 1 1-3 3v0a3 3 0 0 1 3-3z" />
    <path d="M8 11a3 3 0 1 1-3 3v0a3 3 0 0 1 3-3z" />
    <path d="M12 11a3 3 0 1 1-3 3v0a3 3 0 0 1 3-3z" />
    <path d="M8 17a3 3 0 1 1-3 3v0a3 3 0 0 1 3-3z" />
  </svg>
);

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Terminal size={22} />,
      skills: [
        { name: "Java", icon: <JavaIcon className="skill-logo" /> },
        { name: "Dart", icon: <Layers className="skill-logo" /> },
        { name: "PHP", icon: <PhpIcon className="skill-logo" /> },
        { name: "JavaScript", icon: <JavaScriptIcon className="skill-logo" /> },
        { name: "HTML & CSS", icon: <HtmlIcon className="skill-logo" /> },
        { name: "C#", icon: <CSharpIcon className="skill-logo" /> },
        { name: "Python", icon: <PythonIcon className="skill-logo" /> }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: <Layers size={22} />,
      skills: [
        { name: "Flutter", icon: <FlutterIcon className="skill-logo" /> },
        { name: "Bootstrap", icon: <BootstrapIcon className="skill-logo" /> },
        { name: "React", icon: <ReactIcon className="skill-logo" /> }
      ]
    },
    {
      title: "Database Technologies",
      icon: <Database size={22} />,
      skills: [
        { name: "MySQL", icon: <Database className="skill-logo" /> },
        { name: "Firebase", icon: <FirebaseIcon className="skill-logo" /> }
      ]
    },
    {
      title: "Design & Development Tools",
      icon: <Cpu size={22} />,
      skills: [
        { name: "Figma", icon: <FigmaIcon className="skill-logo" /> },
        { name: "VS Code", icon: <Code className="skill-logo" /> },
        { name: "Android Studio", icon: <Cpu className="skill-logo" /> },
        { name: "Eclipse / NetBeans", icon: <Terminal className="skill-logo" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section section-container reveal">
      {/* Section number badge */}
      <div className="section-number-badge">
        <div className="badge-line" />
        <span className="badge-number">02 — EXPERTISE</span>
        <div className="badge-line badge-line-right" />
      </div>

      <h2 className="section-title">Technical Skills & Expertise</h2>
      
      <p className="skills-subtitle">
        A breakdown of the programming languages, database systems, developmental frameworks, 
        and IDE tools that make up my development environment.
      </p>

      <div className="skills-grid">
        {skillCategories.map((category, catIndex) => (
          <div key={catIndex} className="glass-panel skill-category-card stagger-item">
            <div className="category-header">
              <div className="category-icon-wrapper">
                {category.icon}
              </div>
              <h3 className="category-title">{category.title}</h3>
            </div>

            <div className="skills-items-grid">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-tag-card">
                  <div className="skill-icon-outer">
                    <div className="skill-icon-inner">
                      {skill.icon}
                    </div>
                  </div>
                  <span className="skill-label-text">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
