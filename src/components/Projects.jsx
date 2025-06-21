import React from 'react';


const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-container">
        {/* Agro Connect Card */}
        <div className="project-card agro">
          <h3>Agro Connect</h3>
          <p>Designed a contract-based platform connecting farmers with bulk buyers, reducing market 
price fluctuations and ensuring fair trade for both parties. </p>
          <a
            href="https://github.com/Sriram04D/Contractfarming"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            🔗 View GitHub Repo
          </a>
        </div>

        {/* Campus Connect Card */}
        <div className="project-card campus">
          <h3>Campus Connect</h3>
          <p>Created a platform for students to collaborate on projects, share resources, request ODs, 
and track events via a centralized calendar.</p>
          <a
            href="https://github.com/Sriram04D/campconnect"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            🔗 View GitHub Repo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
