import React from 'react';
import { Briefcase, Calendar, Award, FileText, CheckCircle2 } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const freelanceResponsibilities = [
    "Developing responsive, dynamic web applications using PHP, HTML5, and Bootstrap layouts.",
    "Building robust cross-platform mobile applications for Android and iOS using Flutter and Dart.",
    "Creating customized standalone software solutions tailored to specific client specifications.",
    "Managing UI/UX design workflows, from initial wireframing to high-fidelity mockups.",
    "Integrating secure database systems (MySQL, SQLite) and API backend services.",
    "Performing application maintenance, debugging, and code optimization tasks.",
    "Handling end-to-end project planning, requirements gathering, and independent development cycles."
  ];

  const certificates = [
    {
      title: "Pearson (BTEC) Level 5 Higher National Diploma (HND) in Software Engineering",
      issuer: "ESOFT Metro Campus",
      year: "2023 – 2025"
    },
    {
      title: "Assured Diploma in Information Technology (DiTEC)",
      issuer: "ESOFT Metro Campus",
      year: "2022 – 2023"
    },
    {
      title: "Assured Diploma in English (DiE)",
      issuer: "ESOFT Metro Campus",
      year: "2022 – 2023"
    },
    {
      title: "Residential English Language Training Course",
      issuer: "The English Bank",
      year: "2026"
    },
    {
      title: "Python for Beginners Programme",
      issuer: "University of Moratuwa",
      year: "2024"
    },
    {
      title: "Computer Office Course",
      issuer: "Institute of Vocational Education, Datatech Institute of Computer",
      year: "2019 – 2020"
    },
    {
      title: "Certificate for Excellent Conduct and Leadership Qualities",
      issuer: "Minu/Nalanda Boys' Central College",
      year: "2022 & 2023"
    },
    {
      title: "Certificate for Leadership Workshop & Outbound Training",
      issuer: "ESOFT / Leadership Training Academy",
      year: "2022"
    }
  ];

  return (
    <section id="experience" className="experience-section section-container reveal">
      <h2 className="section-title">Experience & Certifications</h2>

      <div className="experience-grid">
        {/* Left Column: Freelance Experience */}
        <div className="experience-col">
          <div className="section-subtitle-wrapper">
            <Briefcase size={20} className="col-icon" />
            <h3 className="col-title">Professional Experience</h3>
          </div>

          <div className="glass-panel job-card">
            <div className="job-header">
              <div>
                <h4 className="job-role">Freelance Software Developer</h4>
                <h5 className="job-company">Self-Employed | Remote</h5>
              </div>
              <span className="job-duration"><Calendar size={14} /> 2024 – Present</span>
            </div>

            <p className="job-desc">
              Building bespoke software solutions for various local and remote clients. Handled tasks spanning
              full-stack development, mobile UI/UX engineering, and database integrations.
            </p>

            <ul className="responsibilities-list">
              {freelanceResponsibilities.map((resp, index) => (
                <li key={index} className="responsibility-item">
                  <CheckCircle2 size={16} className="check-icon" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Certificates */}
        <div className="certificates-col">
          <div className="section-subtitle-wrapper">
            <Award size={20} className="col-icon" />
            <h3 className="col-title">Certifications & Awards</h3>
          </div>

          <div className="certificates-grid">
            {certificates.map((cert, index) => (
              <div key={index} className="glass-panel cert-card">
                <div className="cert-icon-wrapper">
                  <FileText size={18} />
                </div>
                <div className="cert-details">
                  <h4 className="cert-name">{cert.title}</h4>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <span className="cert-year">{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
