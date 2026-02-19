/**
 * Model: Company data and structure.
 * Single source of truth for company information used across views.
 */

export interface CompanyAbout {
  mission: string;
  story: string;
  values: string[];
}

export interface CompanyModel {
  name: string;
  tagline: string;
  description: string;
  about: CompanyAbout;
}

export const companyModel: CompanyModel = {
  name: 'Junsoft Solutions',
  tagline: 'Building software that works for you',
  description: 'We deliver reliable software solutions tailored to your business needs.',
  about: {
    mission: 'To provide high-quality software solutions that help businesses grow and succeed.',
    story: 'Junsoft Solutions was founded with a simple goal: to build software that is both powerful and easy to use. We combine technical expertise with a deep understanding of our clients\' needs.',
    values: ['Quality', 'Reliability', 'Innovation', 'Partnership'],
  },
};

export default companyModel;
