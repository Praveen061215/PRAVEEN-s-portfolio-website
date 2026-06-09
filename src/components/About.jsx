import React from 'react';
import { Award, BookOpen, Calendar, MapPin, Users, Brain, Heart, GraduationCap } from 'lucide-react';
import './About.css';

const About = () => {
  const educationHistory = [
    {
      degree: "BSc (Hons) Computer Science in Software Engineering (Top-Up)",
      school: "Kingston University, London",
      location: "UK / Partnered Campus",
      year: "2025",
      description: "Focuses on advanced software engineering methodologies, software architecture, system design, and collaborative development. Explored global industry standards and practices.",
      icon: <GraduationCap size={20} />
    },
    {
      degree: "Pearson BTEC Level 5 Higher National Diploma (HND) in Software Engineering",
      school: "ESOFT Metro Campus, Gampaha",
      location: "Gampaha, Sri Lanka",
      year: "2023 – 2025",
      description: "Core modules included systems analysis, web development, data structures and algorithms, database management, and object-oriented programming.",
      icon: <BookOpen size={20} />
    },
    {
      degree: "Assured Diploma in Information Technology (DiTEC)",
      school: "ESOFT Metro Campus, Gampaha",
      location: "Gampaha, Sri Lanka",
      year: "2022 – 2023",
      result: "Merit",
      description: "Foundational training in networking, office automation, web design, and basics of programming structures.",
      icon: <Award size={20} />
    },
    {
      degree: "Assured Diploma in English (DiE)",
      school: "ESOFT Metro Campus, Gampaha",
      location: "Gampaha, Sri Lanka",
      year: "2022 – 2023",
      result: "Pass",
      description: "Intensive training program focusing on business writing, verbal presentations, and professional communications in English.",
      icon: <Award size={20} />
    },
    {
      degree: "G.C.E. Ordinary Level Examination",
      school: "Minu/Nalanda Boys' Central College",
      location: "Sri Lanka",
      year: "2023",
      result: "B (5 Subjects), C (4 Subjects)",
      description: "Secondary school graduation with high academic standards in Mathematics, Science, and English.",
      icon: <BookOpen size={20} />
    }
  ];

  const softSkills = [
    { name: "Leadership", desc: "Proven capability to lead academic tasks, group assignments, and freelance deliverables.", icon: <Users size={20} /> },
    { name: "Communication", desc: "Professional English proficiency with focus on technical representation.", icon: <Brain size={20} /> },
    { name: "Teamwork", desc: "Collaborative nature designed to deliver complex projects under tight timelines.", icon: <Heart size={20} /> },
    { name: "Problem Solving", desc: "Algorithmic thinking aimed at debugging systems and designing optimal pathways.", icon: <Brain size={20} /> },
    { name: "Time Management", desc: "Synchronizing freelance milestones and curriculum schedules efficiently.", icon: <Calendar size={20} /> }
  ];

  return (
    <section id="about" className="about-section section-container reveal">
      <h2 className="section-title">About Me & Education</h2>
      
      <div className="about-grid">
        {/* Left Column: Bio & Soft Skills */}
        <div className="about-info-col">
          <div className="glass-panel bio-card">
            <h3>Who I Am</h3>
            <p>
              I am a motivated Computing Science graduate holding a <strong>BSc (Hons) Computer Science in Software Engineering</strong> from Kingston University London. 
              My expertise spans software development, cross-platform mobile apps, and web interfaces.
            </p>
            <p>
              I specialize in working with <strong>Dart (Flutter)</strong>, <strong>Java</strong>, and <strong>PHP</strong>, and possess a solid foundation in HTML, JavaScript, C#, and Python.
            </p>
            <p>
              Through academic study and freelance software consulting, I've developed a rigorous workflow for designing, building, and deploying software. 
              My ultimate career goal is to deliver scalable, reliable solutions that solve real-world problems.
            </p>

            <div className="languages-container">
              <span className="lang-tag">Sinhala (Native)</span>
              <span className="lang-tag">English (Professional Working Proficiency)</span>
            </div>
          </div>

          <div className="soft-skills-container">
            <h3>Soft Skills</h3>
            <div className="soft-skills-grid">
              {softSkills.map((skill, index) => (
                <div key={index} className="glass-panel soft-skill-card">
                  <div className="skill-icon-wrapper">
                    {skill.icon}
                  </div>
                  <div>
                    <h4>{skill.name}</h4>
                    <p>{skill.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Timeline */}
        <div className="about-timeline-col">
          <h3 className="timeline-section-heading">Education History</h3>
          <div className="timeline">
            {educationHistory.map((edu, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot-wrapper">
                  <div className="timeline-dot">
                    {edu.icon}
                  </div>
                </div>
                <div className="glass-panel timeline-card">
                  <div className="timeline-card-header">
                    <span className="timeline-year"><Calendar size={14} /> {edu.year}</span>
                    {edu.result && <span className="timeline-result">{edu.result}</span>}
                  </div>
                  <h4 className="timeline-degree">{edu.degree}</h4>
                  <h5 className="timeline-school">{edu.school}</h5>
                  <p className="timeline-location"><MapPin size={14} /> {edu.location}</p>
                  <p className="timeline-desc">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
