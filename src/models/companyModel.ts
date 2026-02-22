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

export interface Partner {
  id: string;
  name: string;
  image: string;
  url: string;
  description: string;
}

export interface CompanyModel {
  name: string;
  tagline: string;
  description: string;
  contactEmail: string;
  about: CompanyAbout;
  projects: Project[];
  partners: Partner[];
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
      description: 'She’s an icon. She’s the moment. Foodie Diva is the app that brings food trucks and their hungry patrons together—on mobile and on the web. Whether you’re on your phone hunting for the nearest truck or at your laptop planning your next bite, she’s there to connect you with the best street food around. One platform, every device, and one mission: uniting food trucks with the people who love them.',
    },
    {
      id: 'yggdrasil',
      name: 'Yggdrasil',
      description: 'An application for the creation and management of tabletop roleplaying games. From character creation to campaign management. Build worlds that grow with you. Connect to players from all over the world to share stories. All without the need of a forest worths of papers.',
    },
    {
      id: 'shop_manager',
      name: 'Shop Manager',
      description: 'A web base service to allow easy check in, repair, and billing for small auto repair shops.',
    },
  ],
  partners: [
    {
      id: 'diekmeyer_designs',
      name: 'Diekmeyer Designs',
      image: '/images/logo.png',
      url: 'https://diekmeyerdesigns.com',
      description: 'Redesigned a stacked sales site for a small family owned custom jewelry business into a dynamic gallery view of the intricate jewlery designs working in a style that would match the artistry of the jewlery.',
    },
  ],
};

export default companyModel;
