const workTypes = {
  header: 'header',
  company: 'company',
  content: 'content',
  length: 'length',
};
/* eslint-disable */
export const fullName = 'Yael Seesam';
export const personDescription = 'Actuarial assistant';
export const workResume = [
  {
    [workTypes.header]: 'Actuarial assistant in the field of IAS 19 and Finance',
    [workTypes.company]: 'Ogen',
    [workTypes.length]: 'August 2018 - Present',
    [workTypes.content]: 'Providing actuarial services by statistically and financially calculating the liabilities and assets of large companies in the economy',
  },
  {
    [workTypes.header]: 'Private Math and English Teacher',
    [workTypes.company]: 'Self Employed',
    [workTypes.length]: '2017 - 2018',
    [workTypes.content]: `Private Math and English Teacher, for High School and University students.`,
  },
  {
    [workTypes.header]: 'Database tester',
    [workTypes.company]: 'Arineta',
    [workTypes.length]: '2017',
    [workTypes.content]: 'Retrieval and Recovery Requirements and Testing Database at Arinta.',
  },
  {
    [workTypes.header]: 'Infra and IT Person',
    [workTypes.company]: '8200 unit',
    [workTypes.length]: '2010 - 2012',
    [workTypes.content]: 'Responsible for managing and operating unit servers, working with control systems.',
  },
  {
    [workTypes.header]: 'Manual QA',
    [workTypes.company]: 'CMT',
    [workTypes.length]: '2010',
    [workTypes.content]: 'Responsible for testing advanced medical equipment image processing software. The role required systemic understanding and analysis.',
  },
];

export const objective = 'Actuarial assistant with high analytical abilities, quick learning ability, vevotion to work, task oriented';
export const contactInfo = {
  linkedin: 'https://www.linkedin.com/in/yael-seesam-5808975b/',
  email: 'yaelsee@gmail.com',
  address: 'Address: Tel Aviv',
  phone: '054-7892575',
};

export const skills = {
  'Excel': 5,
  'Photography': 5,
  'Ballet': 5,
};

export const education = 'Business Administration in Finance Specialization, graduate With great honors with the grade of 94.6.';
export const educationInstitution = '2015 - 2018, IDC Herzliya';
export const educationTitle = 'Business Administration in Finance Specialization';

export const languages = {
  'Hebrew': 5,
  'English': 4,
};

export default {
  skills,
  fullName,
  languages,
  education,
  objective,
  workResume,
  educationTitle,
  personDescription,
  educationInstitution,
};
