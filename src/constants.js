import AnchantoLogo from "./assets/images/anchanto-removebg-preview.png";
import ByjusLogo from "./assets/images/Byjus-Logo.png";
import CollegeduniaLogo from "./assets/images/Collegedunia_Logo-removebg-preview.png";
import LandingSS from "./assets/images/projects/landing_page_ss.png";
import Inito2 from "./assets/images/projects/inito2.png";
import Inito3 from "./assets/images/projects/inito3.png";
import Inito4 from "./assets/images/projects/inito4.png";
import TaskManagment_Home from "./assets/images/projects/task_managment_home_ss.png";
import TaskManagment_Add from "./assets/images/projects/task_managment_add_ss.png";
import Carousel_SS from "./assets/images/projects/animated_carousel_ss.png";
import TrademoSS1 from "./assets/images/projects/trademon1.png";
import TrademoSS2 from "./assets/images/projects/trademon2.png";
import TrademoSS3 from "./assets/images/projects/trademon3.png";
import RealEziSS1 from "./assets/images/projects/realezi1.png";
import RealEziSS2 from "./assets/images/projects/realezi2.png";
import RealEziSS3 from "./assets/images/projects/realezi3.png";
import RealEziSS4 from "./assets/images/projects/realezi4.png";
// import TodoApp1 from "./assets/images/projects/todo-home.jpeg";
// import TodoApp2 from "./assets/images/projects/todoapp2.jpeg";
// import TodoApp3 from "./assets/images/projects/todo3.jpeg";
// import TodoApp4 from "./assets/images/projects/todo4.jpeg";
// import MovieFix1 from "./assets/images/projects/moviefix1.jpeg";
// import MovieFix2 from "./assets/images/projects/moviefix2.jpeg";

export const workExpirienceData = [
  {
    id: 1,
    companyName: "Collegedunia",
    logo: CollegeduniaLogo,
    designation: "Frontend Developer (Intern)",
    startDate: "15-03-2021",
    endDate: "31-07-2021",
    current: false,
    location: "Gurgoan, Haryana (WFH)",
    skills: [
      "Next.Js",
      "Javascript",
      "SCSS",
      "Redux",
      "Cypress.io",
      "Git",
      "Github",
    ],
    tenure: "5 Months",
    description: [
      "Worked on the migration of the static HTML webPages to new dynamic Next.js pages.",
      "Performed unit testing with Cypress to enhance the website’s production readiness",
    ],
  },
  {
    id: 2,
    companyName: "Think & Learn Pvt. Ltd ( Byjus )",
    logo: ByjusLogo,
    designation: "Software Engineer",
    startDate: "10-06-2022",
    endDate: "NA",
    current: true,
    location: "Bangalore, Karnataka (WFH)",
    skills: [
      "React,Js",
      "Javascript",
      "SCSS",
      "Redux",
      "Redux-saga",
      "Typescript",
      "Next.js",
      "Kotlin",
      "Android Development",
      "Git",
      "Github",
    ],
    tenure: "2 Years",
    description: [
      `Currently, I’m dedicated to crafting an order-punching platform using ReactJS for our sales division. This platform will
enable efficient order placement on behalf of students.`,

      `Implemented a second layer of authentication utilizing Google Single Sign-On (SSO), transitioning the
micro-frontend platform into an independent platform.`,
      `Lead the development of an in-house lead management system, OneLead to replace LeadSquared and streamline
company’s operation by managing 6 crore leads, which will lead to cost savings of around Rs. 25 crore per year.`,
      `Completed the end to end deliverable by performing unit testing using react-testing library and Jest.`,
      `Managed a scholarship test platform with 1 million plus download.`,
      `Developed and integrated a new authentication flow to onboard offline user on the android app increasing the user base
by 30 percent.`,
      `Developed an offline learning app that can be installed on tablets and TVs, aiding students in remote areas.`,
    ],
  },
  {
    id: 3,
    companyName: "Anchanto",
    logo: AnchantoLogo,
    designation: "SDE (Intern)",
    startDate: "02-01-2022",
    endDate: "30-04-2022",
    current: false,
    location: "Pune, Maharashtra (WFH)",
    skills: [
      "React,Js",
      "Javascript",
      "SCSS",
      "Redux",
      "Cypress.io",
      "Git",
      "Github",
    ],
    tenure: "4 Months",
    description: [
      `Developed the frontend of an order management system,Control Tower using modern web technologies such as Next.js
and SCSS`,
      `Executed unit testing using Cypress.io to guarantee the quality and reliability of the codebase`,
    ],
  },
];

export const projectsList = [
  {
    tab: "Full Stack",
    projects: [
      {
        id: 1,
        title: "Chat Application",
        description:
          "Developed a secure and intuitive one-on-one chat application using the MERN stack. By implementing JWT authentication, I ensured robust security for user interactions. The application allows users to add friends and engage in seamless, real-time communication through an easy-to-navigate interface.",
        github: "https://github.com/amit1884/ChatApp",
        deployed: "NA",
        screenshots: [LandingSS, LandingSS, LandingSS],
        techStack: ["React.Js", "SCSS", "Node.js", "Express.Js", "MongoDb"],
      },
      {
        id: 2,
        title: "Task Managment Web App",
        description:
          " Developed a task management web app which allows users to create, edit, and delete tasks, offering a user-friendly interface and reliable performance.",
        github: "https://github.com/amit1884/TaskManagement_Assign_Client",
        deployed: "https://task-management-app-murex.vercel.app/",
        screenshots: [TaskManagment_Home, TaskManagment_Add],
        techStack: ["React.Js", "SCSS", "Node.js", "Express.Js", "MongoDb"],
      },
    ],
  },
  {
    tab: "Frontend",
    projects: [
      {
        id: 1,
        title: "Inito Landing Page",
        description: "A fully responsive landing page.",
        github: "https://github.com/amit1884/Inito_Responsive_landing_Page",
        deployed: "https://inito-landing-page.vercel.app/",
        screenshots: [LandingSS, Inito2, Inito3, Inito4],
        techStack: ["React.Js", "SCSS"],
      },
      {
        id: 2,
        title: "Trademo Data Visualiser",
        description:
          "A fully responsive data visualiser web app, using chart.js",
        github: "https://github.com/amit1884/trademo_data_visualiser",
        deployed: "https://trademo-data-visualiser.vercel.app/",
        screenshots: [TrademoSS1, TrademoSS2, TrademoSS3],
        techStack: ["React.Js", "Chart.js", "SCSS"],
      },
      {
        id: 3,
        title: "Realezi Landing Page",
        description: "A fully responsive static landing page.",
        github: "https://github.com/amit1884/realEzi_landing_page",
        deployed: "https://real-ezi-landing-page.vercel.app/",
        screenshots: [RealEziSS1, RealEziSS2, RealEziSS3, RealEziSS4],
        techStack: ["HTML", "CSS", "Javascript", "Bootstrap"],
      },
      {
        id: 4,
        title: "Animated Carousel",
        description: "An animated image carousel built using react.js.",
        github: "https://github.com/amit1884/AnimatedCarousel",
        deployed: "https://5dkyg4-5173.csb.app/",
        screenshots: [Carousel_SS, Carousel_SS],
        techStack: ["React.Js", "Typescript", "CSS", "Vite"],
      },
    ],
  },
  // {
  //   tab: "Mobile App",
  //   projects: [
  //     {
  //       id: 1,
  //       title: "Todo App",
  //       description:
  //         " Developed a todo native mobile app which allows users to create, edit, and delete tasks, offering a user-friendly interface and reliable performance.",
  //       github: "https://github.com/amit1884/TaskManagment-App",
  //       deployed: "NA",
  //       screenshots: [TodoApp1, TodoApp2, TodoApp3, TodoApp4],
  //       techStack: ["React Native", "Node.js", "Express.Js", "MongoDb"],
  //     },
  //     {
  //       id: 2,
  //       title: "MovieFix",
  //       description:
  //         "An Android app that displays a list of movies by fetching data from an API. It features a nice user interface with pagination in both directions and allows users to filter movies by year and name.",
  //       github: "https://github.com/amit1884/moviefix",
  //       deployed: "NA",
  //       screenshots: [MovieFix1, MovieFix2],
  //       techStack: ["React Native"],
  //     },
  //   ],
  // },
];
export const skills = {
  languages: [
    {
      id: 1,
      name: "Javascript",
      score: 9,
    },
    {
      id: 2,
      name: "Typescript",
      score: 8,
    },
    {
      id: 3,
      name: "C",
      score: 8,
    },
    {
      id: 4,
      name: "C++",
      score: 8,
    },
    {
      id: 5,
      name: "Java",
      score: 7,
    },
    {
      id: 5,
      name: "PHP",
      score: 7,
    },
  ],
  framework: [
    {
      id: 1,
      name: "React.Js",
      score: 9,
    },
    {
      id: 2,
      name: "Next.Js",
      score: 8,
    },
    {
      id: 3,
      name: "Redux",
      score: 8,
    },
    {
      id: 4,
      name: "Redux-Saga",
      score: 7,
    },
    {
      id: 5,
      name: "React Native",
      score: 8,
    },
    {
      id: 4,
      name: "HTML5",
      score: 10,
    },
    {
      id: 5,
      name: "CSS",
      score: 9,
    },
    {
      id: 6,
      name: "SCSS",
      score: 9,
    },
    {
      id: 7,
      name: "Angular.Js",
      score: 7,
    },
    {
      id: 8,
      name: "Node.Js",
      score: 8,
    },
    {
      id: 9,
      name: "MongoDB",
      score: 7,
    },
    {
      id: 10,
      name: "OOP",
      score: 7,
    },
    {
      id: 11,
      name: "REST API",
      score: 9,
    },
    {
      id: 12,
      name: "Express.Js",
      score: 7,
    },
    {
      id: 13,
      name: "Git",
      score: 9,
    },
  ],
};
