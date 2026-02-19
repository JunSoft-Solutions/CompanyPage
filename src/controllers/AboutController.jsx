/**
 * Controller: About Us page.
 * Connects company model to AboutView.
 */
import React from 'react';
import { companyModel } from '../models/companyModel';
import AboutView from '../views/AboutView';

function AboutController() {
  const { name, about } = companyModel;
  return (
    <AboutView
      companyName={name}
      mission={about.mission}
      story={about.story}
      values={about.values}
    />
  );
}

export default AboutController;
