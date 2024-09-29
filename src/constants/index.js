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
  meta,
  tcs,
  c,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  selenium,
  awsec2,
  flask,
  mysql,
} from "../assets";

export const navLinks = [
  {
    id: "tech",
    title: "Tech",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  }
];

const technologies = [
  {
    name: "c",
    icon: c,
  },
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
    name: "React JS",
    icon: reactjs,
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
    name: "Python",
    icon: python,
  },
  {
    name: "Seleniumn",
    icon: selenium,
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
    name: "My SQL",
    icon: mysql,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "AWS EC2",
    icon: awsec2,
  },
];

const experiences = [
  {
    title: "Assistant Systems Engineer - Trainee",
    company_name: "Tata Consultancy Services",
    icon: tcs,
    iconBg: "#383E56",
    date: "August 2021 - July 2022",
    points: [
      "Monitored server disk space and resolved library errors using Remote Desktop Protocol.",
      "Coordinated with teams during power outages to safely shut down and restart devices.",
      "Assisted in server maintenance tasks, ensuring optimal performance and availability.",
      "Won Best team Award for 100% customer satisfaction and effective power outage management",
    ],
  },
  {
    title: "Assistant Systems Engineer",
    company_name: "Tata Consultancy Services",
    icon: tcs,
    iconBg: "#383E56",
    date: "August 2022 - July 2023",
    points: [
      "Managed client servers, reducing downtime by 50% and boosting client satisfaction.",
      "Improved job scheduling and monitoring with Control-M software, ensuring seamless operations.",
      "Implemented solutions to resolve library error messages swiftly, maintaining operating efficiency.",
      "Achieved 100% satisfaction rate during client site power outages in August 2022.",
    ],
  },
];

const projects = [
  {
    name: "Fotstrike",
    description:
      "Developed a dynamic website offering real-time football updates, standings, and statistics for major European leagues.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/pk710/Football-Website",
  },
  {
    name: "T- Shirt Website",
    description:
      "Created an interactive 3D t-shirt customization website with real-time design previews.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "three.js",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/pk710/T---Shirt-Website",
  },
  {
    name: "Phone Book REST API",
    description:
      "Built a Dockerized REST API using Python, Flask, and SQLite3 for managing phone book operations.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "sqlite",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/pk710/Phone-Book-REST-API",
  },
];

export { technologies, experiences, projects };
