/**
 * View: About Us page presentation.
 * Renders the about page UI; data is passed from the controller.
 */
import React from 'react';

export interface AboutViewProps {
  companyName: string;
  mission: string;
  story: string;
  values: string[];
}

function AboutView({ companyName, mission, story, values }: AboutViewProps) {
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
      </section>
    </main>
  );
}

export default AboutView;
