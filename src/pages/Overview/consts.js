const workTypes = {
  header: 'header',
  company: 'company',
  content: 'content',
  length: 'length',
};
/* eslint-disable */
export const fullName = 'Neta Seesam';
export const personDescription = 'Full Stack Developer';

export const workResume = [
  {
    [workTypes.header]: 'Senior Full Stack Developer',
    [workTypes.company]: 'Namogoo',
    [workTypes.length]: 'June 2017 - Present',
    [workTypes.content]: 'Developing Dashboards from scratch, both client and server sides, using Vuejs and Nodejs. The product prevents customer hijacking for an e-commerce client. My role included designing and code-writing of the dashboards for those clients.',
  },
  {
    [workTypes.header]: 'FrontEnd Developer',
    [workTypes.company]: 'Aternity',
    [workTypes.length]: 'December 2015 - June 2017',
    [workTypes.content]: `Writing dashboards that integrates with Tableu, using Angularjs and Typescript. The product estimates the users' computers' performance and reflects it in the dashboard. My role included integrating with Tableu and re-writing some of the dashboard's components.`,
  },
  {
    [workTypes.header]: 'FrontEnd Developer',
    [workTypes.company]: 'Tradency',
    [workTypes.length]: 'December 2014 - December 2015',
    [workTypes.content]: 'Developing new platform for Brokers from scratch, using Angularjs. The product was designed for Brokers to analyze the forex market. My role was to re-write the whole dashboard, including design, in Angularjs.',
  },
  {
    [workTypes.header]: 'Flex Developer',
    [workTypes.company]: 'Tradency',
    [workTypes.length]: 'May 2012 - December 2014',
    [workTypes.content]: 'Developing platform for Brokers in Flex 4, Ant, Hudson CI.',
  },
  {
    [workTypes.header]: 'Flash Developer',
    [workTypes.company]: 'Interlude',
    [workTypes.length]: 'May 2011 - May 2012',
    [workTypes.content]: 'Developing interactive video using Flash language. My role was to implement decision tree in the client side, and integrating interactive experience with client side.',
  },
  {
    [workTypes.header]: 'Manual QA',
    [workTypes.company]: 'Finastra',
    [workTypes.length]: 'October 2009 - May 2011',
    [workTypes.content]: 'Manual QA for private and public MOP clients, using STD, STR, and QC tools.',
  },
];

export const objective = 'Full Stack Developer with fast learning skills, motivated, multitasking, a teammate, friendly.';
export const contactInfo = {
  linkedin: 'https://www.linkedin.com/in/neta-einy-60856412/',
  email: 'netas85@gmail.com',
  address: 'Address: HaGalil 48, Raanana',
  phone: '0544505140',
};

export const skills = {
  'Javascript': 5,
  'VueJs': 5,
  'NodeJS': 4,
  'AngularJS': 5,
  'Typescript': 4,
  'HTML5': 5,
  'CSS3': 5,
  'Sass': 5,
  'MySQL': 3,
  'MSSSQL': 4,
  'Flex4': 5,
  'Flex for Mobile': 5,
  'Flash': 4,
  'AS3': 5,
};

export const education = 'A Bsc in brain science, and computer science, graduate with the grade of 84.5.';
export const educationInstitution = '2009, Bar Ilan University';
export const educationTitle = 'Bsc in Brain Science';

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
  contactInfo,
  educationTitle,
  personDescription,
  educationInstitution,
};
