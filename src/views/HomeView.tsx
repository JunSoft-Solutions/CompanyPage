/**
 * View: Home page presentation.
 * Renders the home page UI; data is passed from the controller.
 */
import React from 'react';

export interface HomeViewProps {
  companyName: string;
  tagline: string;
  description: string;
}

function HomeView({ companyName, tagline, description }: HomeViewProps) {
  return (
    <main className="page home-page">
      <section className="hero">
        <h1>{companyName}</h1>
        <p className="tagline">{tagline}</p>
        <p className="description">{description}</p>
      </section>
    </main>
  );
}

export default HomeView;
