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
  yef,
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
    title: "Assistant Systems Engineer",
    company_name: "Tata Consultancy Services",
    icon: tcs,
    iconBg: "#383E56",
    date: "August 2021 - July 2023",
    points: [
        "Automated server maintenance with Bash and Python, reducing manual effort by 40% and downtime by 20%.",
        "Optimized distributed Control-M workflows orchestrating 10,000+ daily jobs, boosting scheduling efficiency and system uptime from 80% to 90%, ensuring high availability of backend services.",
        "Engineered Python automation scripts for change request processing, saving 30+ minutes per request.",
        "Collaborated with cross-functional teams to ensure 100% service availability during power outages, reducing downtime by 50%.",
        "Led recovery during critical failures, earning “Best Team Award” for exceptional performance in system recovery."
      ],
  },
  {
    title: "Software Development Intern",
    company_name: "Youth Empowerment Foundation",
    icon: yef,
    iconBg: "#383E56",
    date: "July 2020 - August 2020",
    points: [
        "Developed a full-stack donation platform using JavaScript and Node.js to support COVID-19 relief efforts.",
        "Implemented a system to collect and manage beneficiary data using Python and MS Excel, helping the organization efficiently track and organize information of 100+ victims.",
        "Designed digital posters and presentations using HTML, CSS, and Canva to promote campaigns and raise awareness for COVID-19 relief efforts.",
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
