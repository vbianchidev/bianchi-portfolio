import { Profile } from '../types/profile';

export const PROFILE_INITIAL_VALUE: Profile = {
  personalData: {
    name: 'Vitor Bianchi da Silva',
    email: 'vitor.bianchi@example.com',
    phone: '+55 (17) 99781-7534',
    birthDate: new Date('11-11-1998'),
    links: [],
  },
  skills: [
    'Angular',
    'TypeScript',
    'JavaScript',
    'Node.JS',
    'RxJS',
    'NgRX',
    'NgXS',
    'HTML/HTML5',
    'CSS/CSS3',
    'SASS',
    'Jasmine',
    'Jest',
    'AWS',
    'Azure',
    'Figma',
  ],
  experiences: [
    {
      company: '',
      role: '',
      startDate: new Date('01-09-2023'),
      endDate: new Date('01-09-2023'),
    },
    {
      company: '',
      role: '',
      startDate: new Date('01-09-2023'),
      endDate: new Date('01-09-2023'),
    },
    {
      company: '',
      role: '',
      startDate: new Date('01-09-2023'),
      endDate: new Date('01-09-2023'),
    },
    {
      company: '',
      role: '',
      startDate: new Date('01-09-2023'),
      endDate: new Date('01-09-2023'),
    },
  ],
  educations: [
    {
      degree: '',
      institution: '',
      startDate: new Date('01-09-2023'),
      endDate: new Date('01-11-2022'),
    },
    {
      degree: '',
      institution: '',
      startDate: new Date('01-09-2023'),
      endDate: new Date('01-11-2022'),
    },
    {
      degree: '',
      institution: '',
      startDate: new Date('01-09-2023'),
      endDate: new Date('01-11-2022'),
    },
    {
      degree: '',
      institution: '',
      startDate: new Date('01-09-2023'),
      endDate: new Date('01-11-2022'),
    },
  ],
};
