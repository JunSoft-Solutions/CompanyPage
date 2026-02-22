/**
 * Controller: Partners page.
 * Connects company model to PartnersView.
 */
import React from 'react';
import { companyModel } from '../models/companyModel';
import PartnersView from '../views/PartnersView';

function PartnersController() {
  return (
    <PartnersView
      companyName={companyModel.name}
      partners={companyModel.partners}
    />
  );
}

export default PartnersController;
