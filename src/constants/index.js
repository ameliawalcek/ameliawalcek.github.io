import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  ChitChat,
  WEBOX,
  TriviaTime,
  TaskTracker,
  SnapShot,
  maze,
  MarioRush,
  ExpenseTracker,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: creator,
  },
  {
    title: "UI/UX Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Project Manager",
    company_name: "Comtec Group",
    icon: backend,
    iconBg: "#050816",
    date: "May 2017 - June 2020",
    points: [
      "Executed full-cycle global conferences (25 - 8,000 participants)",
      "Convened with clients weekly to guarantee satisfaction",
      "Coordinated departments to ensure a unified purpose",
      "Designed conference websites, application, and printed materials",
    ],
  },
  {
    title: "Fullstack Developer Bootcamp",
    company_name: "Elevation",
    icon: creator,
    iconBg: "#050816",
    date: "August 2020 - October 2020",
    points: [
      "Completed an intensive MERN stack coding Bootcamp",
      "Built interactive end-to-end websites and single-page applications",
      "Collaborated within teams using Agile development workflow",
    ],
  },
  {
    title: "Full Stack Instructor",
    company_name: "Elevation",
    icon: mobile,
    iconBg: "#050816",
    date: "October 2020 - February 2021",
    points: [
      "Trained over 35 developers in the MERN stack",
      "Emphasized OOP and MVC architecture",
      "Promoted agile workflow and encourage self-learning",
      "Reviewed code to improve quality and readability",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Storrsoft",
    icon: web,
    iconBg: "#050816",
    date: "February 2021 - Present",
    points: [
      "Create and help publish Android and iOS React Native applications",
      "Worked closely with the product team to build an interactive virtual tour web application platform",
      "Implemented 360° interactive videos, Twilio 3-way video chat feature, and  a text chat function using socket.io",
      "Used sockets to emit and store live tour data",
      "Built and maintain REST  API and SQL databases",
      "Implementing responsive design and ensuring cross-browser compatibility (iOS, android, FireFox, Safari, and Chrome)",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Snap Shot",
    description:
      "Post pictures, create memories, and share them with your friends",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
      {
        name: "Express",
        color: "blue-text-gradient",
      },
      {
        name: "Mongoose",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Material UI",
        color: "blue-text-gradient",
      },
    ],
    image: SnapShot,
    source_code_link: "https://github.com/",
  },
  
 
  {
    name: "Expense Tracker",
    description:
      "Add, remove, and edit your purchases to track your expenses/income by categories",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MobX",
        color: "green-text-gradient",
      },
      {
        name: "Mongoose",
        color: "pink-text-gradient",
      },
      {
        name: "Express",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
    ],
    image: ExpenseTracker,
    source_code_link: "https://github.com/",
  },
  {
    name: "WEBOX",
    description:
      "Social media aggregator. View creator's Twitch, YourTube, Instagram, & Twitter on one platform",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "MobX",
        color: "pink-text-gradient",
      },
      {
        name: "socket.io",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Puppeteer",
        color: "blue-text-gradient",
      },
      {
        name: "Docker",
        color: "green-text-gradient",
      },
    ],
    image: WEBOX,
    source_code_link: "https://github.com/",
  },
  {
    name: "Mario Rush",
    description:
      "Help Mario defeat Bowser in this two player game using 2D array logic",
    tags: [
      {
        name: "JS",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "Handlebars",
        color: "pink-text-gradient",
      },
      {
        name: "Jquery",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
    ],
    image: MarioRush,
    source_code_link: "https://github.com/",
  },
  {
    name: "Maze Game",
    description:
      "Maze game using matrices, beat the clock if you can...",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Hooks",
        color: "green-text-gradient",
      },
      {
        name: "Matrices",
        color: "pink-text-gradient",
      },
      {
        name: "Css",
        color: "blue-text-gradient",
      },
    ],
    image: maze,
    source_code_link: "https://github.com/",
  },

  {
    name: "Task Tracker",
    description:
      "Add, remove, and keep track of your tasks",
    tags: [
      {
        name: "JS",
        color: "blue-text-gradient",
      },
      {
        name: "JQuery",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "Mongoose",
        color: "blue-text-gradient",
      },
      {
        name: "Atlas",
        color: "green-text-gradient",
      },
      {
        name: "Materialize",
        color: "pink-text-gradient",
      },
    ],
    image: TaskTracker,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trivia Time",
    description:
      "Select topic and difficulty to test your knowledge using Open Trivia API",
    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "APIs",
        color: "pink-text-gradient",
      },
      {
        name: "Material UI",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
    ],
    image: TriviaTime,
    source_code_link: "https://github.com/",
  },

  {
    name: "Chit Chat",
    description:
      "Join your favorite chat room and meet users across the globe",
    tags: [
      {
        name: "JS",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "Socket.io",
        color: "blue-text-gradient",
      },
      {
        name: "HTML5",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: ChitChat,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
