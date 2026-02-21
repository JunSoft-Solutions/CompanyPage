/**
 * View: Projects page presentation.
 * Renders current projects; data is passed from the controller.
 */
import React from 'react';
import type { Project } from '../models/companyModel';

export interface ProjectsViewProps {
  companyName: string;
  projects: Project[];
}

function ProjectsView({ companyName, projects }: ProjectsViewProps) {
  return (
    <main className="page projects-page">
      <section className="projects-content">
        <h1>Current Projects</h1>
        <p className="projects-intro">
          Here are some of the projects we are working on at {companyName}. We partner with our clients from concept through delivery and ongoing support.
        </p>
        <ul className="projects-list">
          {projects.map((project) => (
            <li key={project.id} className="project-card">
              <h2>{project.name}</h2>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default ProjectsView;
