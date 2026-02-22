/**
 * View: Partners page presentation.
 * Gallery of partner logos; each image and text link opens the partner's site.
 */
import React from 'react';
import type { Partner } from '../models/companyModel';

export interface PartnersViewProps {
  companyName: string;
  partners: Partner[];
}

function PartnersView({ companyName, partners }: PartnersViewProps) {
  return (
    <main className="page partners-page">
      <section className="partners-content">
        <h1>Our Partners</h1>
        <p className="partners-intro">
          We are proud to work with these organizations.
        </p>
        <ul className="partners-gallery">
          {partners.map((partner) => (
            <li key={partner.id} className="partner-card">
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="partner-image-link"
                aria-label={`Visit ${partner.name}`}
              >
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="partner-image"
                />
              </a>
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="partner-name-link"
              >
                {partner.name}
              </a>
              <p className="partner-description">{partner.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default PartnersView;
