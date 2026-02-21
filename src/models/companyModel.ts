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

export interface Project {
  id: string;
  name: string;
  description: string;
}

export interface CompanyModel {
  name: string;
  tagline: string;
  description: string;
  contactEmail: string;
  about: CompanyAbout;
  projects: Project[];
}

export const companyModel: CompanyModel = {
  name: 'Junsoft Solutions',
  tagline: 'An upstart startup delivering SAAS',
  description: 'We\'re a software-as-a-service company that works differently. Rather than acting as a typical contracting firm, we seek to partner with our clients—on both software delivery and ongoing software support—so we can achieve mutual success and growth. Your wins are our wins.',
  contactEmail: 'contact@junsoft.de',
  about: {
    mission: 'To partner with businesses by delivering high-quality software and support services, so our clients and Junsoft grow and succeed together.',
    story: 'Junsoft Solutions was founded with a simple goal: to build software that is both powerful and easy to use. Unlike traditional contracting firms, we don\'t just deliver a project and move on. We partner with our clients on software and software support for the long term, combining technical expertise with a shared commitment to mutual growth and success.',
    values: ['Quality', 'Reliability', 'Innovation', 'Partnership'],
    founders: [
      {
        name: 'Abigail Diekmeyer',
        role: 'Co-Founder & Director of Application Development',
        description: 'As a recent college graduate, Abigail has dedicated her career to developing software solutions for any business or organization. An eye for asthetics, as well as a fundamental understanding of user experience, she has developed a passion for creating software that is not only functional, but also easy to use and beautiful to look at. This passion is exemplified in her creation, Foodie Diva. Her goal for this company and her career is to make positive change in the world through software.',
        image: '/images/AbigailDiekmeyer.jpeg',
        
      },
      {
        name: 'Ian Allen',
        role: 'Co-Founder & Director of Marketing and Outreach',
        description: 'Ian is a dedicated and results-driven professional with experience supporting marketing initiatives and campaign development. He specializes in assisting with strategic planning, promotional execution, and audience engagement to help organizations strengthen their visibility and impact. With a strong foundation in professional management and marketing, he brings organization, leadership, and clear communication, and a drive for measurable growth and long-term success.',
        image: '/images/IanAllen.jpg',
      
      },
      {
        name: 'Nathan Diekmeyer',
        role: 'Co-Founder & System Architect',
        description: 'With over ten years experience in software development, Nathan has shepherded numerous applications through the development life cycle, from ideas to fully functional applications, across numerous lines of business and varied tech stacks. Familiar with both new and legacy technology, he strives to pair the best technological solution with the client\'s needs and constraints. He believes strongly in mentoring people with a passion for development to help them be successful and realize their own dreams.',
        image: '/images/NathanDiekmeyer.JPG',
        
      },
    ],
  },
  projects: [
    {
      id: 'foodie_diva',
      name: 'Foodie Diva',
      description: 'You ever go out and think "I wish there was a food truck near me?" Look no further! Foodie Diva is here to provide you with a list of food trucks near you.',
    },
    {
      id: 'project-2',
      name: 'Project Two',
      description: 'An internal tool and integration platform that connects existing systems and automates workflows. We are delivering both the initial build and long-term software support to ensure continued success and growth.',
    },
    {
      id: 'project-3',
      name: 'Project Three',
      description: 'A mobile-friendly SaaS product that helps teams collaborate and track progress. We are working closely with the client to refine features and provide reliable support as their needs evolve.',
    },
  ],
};

export default companyModel;
