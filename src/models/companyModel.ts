/**
 * Model: Company data and structure.
 * Single source of truth for company information used across views.
 */

export interface Founder {
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface CompanyAbout {
  mission: string;
  story: string;
  values: string[];
  founders: Founder[];
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
    mission: 'To partner with buisnesses providing the best quality software and support services to ensure mutual growth and success.',
    story: 'Junsoft Solutions was founded with a simple goal: to build software that is both powerful and easy to use. We combine technical expertise with a deep understanding of our clients\' needs.',
    values: ['Quality', 'Reliability', 'Innovation', 'Partnership'],
    founders: [
      {
        name: 'Abigail Diekmeyer',
        role: 'Co-Founder & Director of Application Development',
        description: 'As a recent college graduate, Abigail has dedicated her career to developing software solutions for any business or organization. An eye for asthetics, as well as a fundamental understanding of user experience, she has developed a passion for creating software that is not only functional, but also easy to use and beautiful to look at. This passion is exemplified in her creation, Foodie Diva. Her goal for this company and her career is to make positive change in the world through software.',
        image: '/images/AbigailDiekmeyer.jpeg',
      },
      {
        name: 'Nathan Diekmeyer',
        role: 'Co-Founder & System Architect',
        description: 'With over ten years experience in software development, Nathan has shepherded numerous applications through the development life cycle, from ideas to fully functional applications, across numerous lines of business and varied tech stacks. Familiar with both new and legacy technology, he strives to pair the best technological solution with the client\'s needs and constraints. He believes strongly in mentoring people with a passion for development to help them be successful and realize their own dreams.',
        image: '/images/NathanDiekmeyer.JPG',
      },
      {
        name: 'Ian Allen',
        role: 'Co-Founder & Director of Marketing and Outreach',
        description: 'Ian is a dedicated and results-driven professional with experience supporting marketing initiatives and campaign development. He specializes in assisting with strategic planning, promotional execution, and audience engagement to help organizations strengthen their visibility and impact. With a strong foundation in professional management and marketing, he brings organization, leadership, and clear communication, and a drive for measurable growth and long-term success.',
        image: '/images/IanAllen.jpg',
      },
    ],
  },
};

export default companyModel;
