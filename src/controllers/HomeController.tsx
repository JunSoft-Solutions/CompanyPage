/**
 * Controller: Home page.
 * Connects company model to HomeView.
 */
import React from 'react';
import { companyModel } from '../models/companyModel';
import HomeView from '../views/HomeView';

function HomeController() {
  return (
    <HomeView
      companyName={companyModel.name}
      tagline={companyModel.tagline}
      description={companyModel.description}
    />
  );
}

export default HomeController;
