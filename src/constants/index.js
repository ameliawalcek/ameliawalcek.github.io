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
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
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
    services_detail: [
      "Proficient in front-end technologies such as HTML, CSS, and JavaScript",
      "Experienced building responsive and visually appealing websites using modern frameworks including React",
    ],
  },
  {
    title: "React Native Developer",
    icon: mobile,
    services_detail: [
      "Created mobile applications for both iOS and Android platforms",
      "Well-versed in state management libraries such as Redux",
      "Implemented features such as push notifications and geolocation services",
    ],
  },
  {
    title: "Backend Developer",
    icon: creator,
    services_detail: [
      "Specialized in server-side programming using technologies including Node.js and Express.js",
      "Designed and optimized databases",
      "Proficient in API development and have implemented secure authentication mechanisms",
    ],
  },
  {
    title: "UI/UX Developer",
    icon: backend,
    services_detail: [
      "Focused on user-centered design,  specializing in creating visually appealing and intuitive user interfaces",
      "Expertise in wireframing, prototyping, and implementing user feedback to improve the user experience.",
    ],
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
      "Successfully executed full-cycle global conferences ranging from 25 to 8,000 participants",
      "Conducted regular meetings with clients to ensure their satisfaction and address any concerns",
      "Coordinated and aligned multiple departments to ensure a unified purpose and seamless event execution",
      "Designed and developed conference websites, applications, and printed materials",
    ],
  },
  {
    title: "Fullstack Developer Boot Camp",
    company_name: "Elevation",
    icon: creator,
    iconBg: "#050816",
    date: "August 2020 - October 2020",
    points: [
      "Earned top honors, securing 1st place in the final project among 35 talented developers",
      "Successfully completed a 3 month MERN stack coding boot camp",
      "Designed and developed interactive end-to-end websites and single-page applications",
      "Collaborated within teams, following Agile development methodologies",
    ],
  },
  {
    title: "Full Stack Instructor",
    company_name: "Elevation",
    icon: mobile,
    iconBg: "#050816",
    date: "October 2020 - February 2021",
    points: [
      "Trained 35+ developers in the MERN stack, resulting in an 80% increase in project completion rates",
      "Championed OOP and MVC architecture, fostering Agile workflows and self-learning",
      "Reviewed code for 20+ projects, elevating quality and readability",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Storrsoft",
    icon: web,
    iconBg: "#050816",
    date: "February 2021 - Present",
    points: [
      "Lead successful launches of 4 React Native applications for Android and iOS",
      "Integrate third-party APIs, enhancing app functionality and user experience",
      "Engineer 5 scalable, high-performance web interfaces using React",
      "Collaborate with the product team to implement innovative features",
      "Ensure 99.9% uptime through proactive application maintenance",
      "Utilize A/B testing and user feedback to enhance app usability",
      "Create an immersive web-based virtual tour app with 20+ interactive 360° videos",
      "Implement Twilio 3-way video chat and socket.io for real-time tour engagement",
      "Build and manage REST APIs and databases, reducing response times by 50%",
      "Achieve cross-platform compatibility for iOS, Android, Firefox, Safari, and Chrome",
    ],
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
    source_code_link: "https://github.com/ameliawalcek/SnapShot",
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
    source_code_link: "https://github.com/ameliawalcek/Expense_Tracker",
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
    source_code_link: "https://github.com/ameliawalcek/WEBOX",
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
    source_code_link: "https://github.com/ameliawalcek/Mario_Rush_Matrices",
  },
  {
    name: "Maze Game",
    description: "Maze game using matrices, beat the clock if you can...",
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
    source_code_link: "https://github.com/ameliawalcek/Maze_Game",
  },

  {
    name: "Task Tracker",
    description: "Add, remove, and keep track of your tasks",
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
    source_code_link: "https://github.com/ameliawalcek/Task_Tracker",
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
    source_code_link: "https://github.com/ameliawalcek/Typescript_TriviaTime",
  },

  {
    name: "Chit Chat",
    description: "Join your favorite chat room and meet users across the globe",
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
    source_code_link: "https://github.com/ameliawalcek/Chit_Chat",
  },
];

export { services, technologies, experiences, projects };
