/**
 * Controller: Projects page.
 * Connects company model to ProjectsView.
 */
import React from 'react';
import { companyModel } from '../models/companyModel';
import ProjectsView from '../views/ProjectsView';

function ProjectsController() {
  return (
    <ProjectsView
      companyName={companyModel.name}
      projects={companyModel.projects}
    />
  );
}

export default ProjectsController;
