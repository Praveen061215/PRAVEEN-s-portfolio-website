import React, { useState } from 'react';
import { ExternalLink, Layers, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import './Projects.css';

// Custom GitHub Icon to replace missing brand icon in Lucide 1.0+
const GithubIcon = ({ size = 16, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedCard, setExpandedCard] = useState(null);

  const projects = [
    {
      id: 1,
      title: "KYA Food Production",
      subtitle: "Web Food Management System",
      category: "web",
      technologies: ["PHP", "MySQL", "HTML5", "Bootstrap"],
      description: "Developed a web-based food management system for managing food production workflows. Implemented backend functionalities to process data and generate dynamic content.",
      features: [
        "Food production workflow management",
        "Database integration",
        "Dynamic content generation",
        "Food item tracking",
        "Production record management"
      ],
      link: "https://github.com/Praveen061215"
    },
    {
      id: 2,
      title: "Eco-Ride System",
      subtitle: "Sustainable Transportation Application",
      category: "desktop",
      technologies: ["Java", "MySQL", "Swing"],
      description: "Designed and developed a Java-based desktop application focused on eco-friendly transportation services, implementing core route calculation logic and user travel tracking systems.",
      features: [
        "Ride selection system",
        "Route optimization algorithms",
        "User trip tracking logs",
        "User profile management",
        "Ride history storage"
      ],
      link: "https://github.com/Praveen061215"
    },
    {
      id: 3,
      title: "Health Mate App",
      subtitle: "Personal Health Tracking Mobile App",
      category: "mobile",
      technologies: ["Flutter", "Dart", "SQLite"],
      description: "Created a cross-platform mobile application for personal health monitoring and wellness tracking, featuring responsive interface metrics and clean local database records.",
      features: [
        "Daily health logging system",
        "Activity and workout tracking",
        "Wellness and fitness insights",
        "Responsive cross-platform UI",
        "Local SQLite database storage",
        "Real-time input validation"
      ],
      link: "https://github.com/Praveen061215"
    },
    {
      id: 4,
      title: "Smart Learning Assistant",
      subtitle: "Educational Mobile Application",
      category: "mobile",
      technologies: ["Flutter", "Dart", "Local Storage"],
      description: "Developed an educational mobile application that helps students organize their study routines, schedule lessons, and track note updates efficiently.",
      features: [
        "Study schedule management",
        "Interactive quiz sections",
        "Automated lesson notifications/reminders",
        "Integrated note-taking system",
        "User-friendly navigation drawer",
        "Smooth page routing transitions"
      ],
      link: "https://github.com/Praveen061215"
    },
    {
      id: 5,
      title: "Smart Library Management System",
      subtitle: "Enterprise Book Tracking Solution",
      category: "desktop",
      technologies: ["Java", "MySQL", "JDBC"],
      description: "Designed and implemented a complete library management software solution for managing books catalog databases, membership tiers, and lending transactions.",
      features: [
        "Book catalog database management",
        "Member management & subscription tracking",
        "Borrowing and return logging",
        "Fine calculation logic",
        "Automated check-in/check-out status"
      ],
      link: "https://github.com/Praveen061215"
    },
    {
      id: 6,
      title: "Weather Pro App",
      subtitle: "Real-Time Weather Forecaster",
      category: "mobile",
      technologies: ["Flutter", "Dart", "Weather API", "Geolocator"],
      description: "Developed a weather forecasting mobile application that integrates open weather APIs to provide real-time details and warnings depending on coordinates.",
      features: [
        "Live weather forecasting",
        "Automatic location detection",
        "Hourly and daily updates",
        "Dynamic weather condition icons",
        "External REST API integration"
      ],
      link: "https://github.com/Praveen061215"
    },
    {
      id: 7,
      title: "Grifindo Toys Company",
      subtitle: "Employee & Payroll Management System",
      category: "desktop",
      technologies: ["C#", ".NET Framework", "SQL Server"],
      description: "Developed a Windows Forms application for employee payroll operations, managing staff work patterns, salary structures, and leaves databases.",
      features: [
        "Employee record management",
        "Payroll calculation engine",
        "Leave application database",
        "Salary slip reporting",
        "SQL Server integration",
        "Automated monthly payroll processing"
      ],
      link: "https://github.com/Praveen061215"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const toggleExpand = (id) => {
    if (expandedCard === id) {
      setExpandedCard(null);
    } else {
      setExpandedCard(id);
    }
  };

  return (
    <section id="projects" className="projects-section section-container reveal">
      <h2 className="section-title">Project Portfolio</h2>
      
      <p className="projects-subtitle">
        Explore some of my academic projects, freelance work, and self-directed applications. 
        Filter by technology focus to see specific capabilities.
      </p>

      {/* Filter Tabs */}
      <div className="filter-tabs">
        {['all', 'web', 'mobile', 'desktop'].map((tab) => (
          <button
            key={tab}
            className={`filter-btn ${activeFilter === tab ? 'active' : ''}`}
            onClick={() => {
              setActiveFilter(tab);
              setExpandedCard(null);
            }}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            className={`glass-panel project-card ${expandedCard === project.id ? 'expanded' : ''}`}
          >
            <div className="project-body">
              <div className="project-category-tag">{project.category}</div>
              <h3 className="project-card-title">{project.title}</h3>
              <h4 className="project-card-subtitle">{project.subtitle}</h4>
              
              <div className="tech-badges">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-badge">{tech}</span>
                ))}
              </div>

              <p className="project-desc">{project.description}</p>
              
              <button 
                className="expand-btn" 
                onClick={() => toggleExpand(project.id)}
                aria-expanded={expandedCard === project.id}
                aria-label={`Show key features for ${project.title}`}
              >
                {expandedCard === project.id ? (
                  <>Hide Key Features <ChevronUp size={16} /></>
                ) : (
                  <>Show Key Features <ChevronDown size={16} /></>
                )}
              </button>

              {expandedCard === project.id && (
                <div className="project-features-list">
                  <h5>Key Features:</h5>
                  <ul>
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="project-footer">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                <GithubIcon size={16} /> Codebase
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
