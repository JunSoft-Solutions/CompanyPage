/**
 * View: About Us page presentation.
 * Renders the about page UI; data is passed from the controller.
 */
import React from 'react';
import type { Founder } from '../models/companyModel';

export interface AboutViewProps {
  companyName: string;
  mission: string;
  story: string;
  values: string[];
  founders: Founder[];
}

function AboutView({ companyName, mission, story, values, founders }: AboutViewProps) {
  return (
    <main className="page about-page">
      <section className="about-content">
        <h1>About {companyName}</h1>
        <h2>Our Mission</h2>
        <p>{mission}</p>
        <h2>Our Story</h2>
        <p>{story}</p>
        <h2>Our Values</h2>
        <ul>
          {values.map((value) => (
            <li key={value}>{value}</li>
          ))}
        </ul>

        <section className="founders-section">
          <h2>Meet the Founders</h2>
          {founders.map((founder) => (
            <article key={founder.name} className="founder-card">
              <img
                src={founder.image}
                alt={founder.name}
                className="founder-image"
              />
              <div className="founder-info">
                <h3>{founder.name}</h3>
                <p className="founder-role">{founder.role}</p>
                <p className="founder-description">{founder.description}</p>
              </div>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}

export default AboutView;
