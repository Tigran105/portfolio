import { create } from "zustand";
import type {
  ContactInfo,
  EducationItem,
  ExperienceItem,
  SkillsCategory,
} from "../types/indexs.ts";

interface PortfolioData {
  experience: ExperienceItem[];
  skills: SkillsCategory;
  education: EducationItem[];
  about: string;
  contact: ContactInfo;
}
export const useData = create<PortfolioData>(() => ({
  experience: [
    {
      id: 1,
      role: "FrontEnd Developer",
      time: "09.2022 - present",
      company: "Pixeria LAB",
      type: "Full-time, Hybrid",
      skills: [
        "react",
        "react native",
        "three.js",
        "stripe",
        "javascript",
        "typescript",
        "html5",
        "css3",
        "scss",
        "responsive design",
        "rest apis",
        "axios",
        "redux toolkit",
      ],
      description: [
        "Led frontend development of web and mobile apps using React / React Native. Built scalable UI and integrated 3D components with Three.js (360° Viewer). Developed a platform where users could customize room-change floors, walls, and add decorations interactively. Owned feature lifecycle, improved frontend skills, and collaborated with design, backend, and product teams.",
        "Built a scalable admin panel for the room customization platform. Integrated analytics dashboards and charts, implemented role-based access, managed interlinked product categories and subcategories, and added payment integration with Stripe. Collaborated with backend and product teams to ensure smooth data flow and maintainable architecture.",
        "Developed a mobile app that allows users to capture multiple photos of a room from several central points and view it in 360°. Implemented UI guidance showing where to position the phone, with automatic photo capture for precise results. Built interactive 360° viewing and ensured smooth user experience across devices.",
      ],
    },
    {
      id: 2,
      role: "Frontend Developer",
      time: "01.2024 - 12.2025 (2 yrs)",
      company: "GenieWeb",
      type: "Part-time, Remote",
      skills: [
        "javascript",
        "rest apis",
        "responsive design",
        "mobile-first layout",
        "html5",
        "css3",
        "tailwind css",
        "fetch",
        "axios",
        "typescript",
      ],
      description: [
        "Contributed to frontend development of web applications with GenieWeb, building responsive, mobile-first UIs and integrating REST APIs. Participated in UI testing and supported SEO-focused technical and product content.",
      ],
    },
    {
      id: 3,
      role: "FrontEnd Developer",
      time: "01.2022 - 12.2022 (1 yr)",
      company: "NWS LAB",
      type: "Full-time, On-site",
      skills: [
        "react",
        "zustand",
        "javascript",
        "typescript",
        "css3",
        "html5",
        "scss",
        "dynamic forms",
        "visual diagrams",
      ],
      description: [
        "Developed a dynamic portfolio management platform for algorithmic trading strategies using React.js and Zustand. Implemented interactive tables, dynamic forms, and visual diagrams to effectively present trading logic and portfolio data. Additionally, continuously strengthened frontend skills and participated in conferences covering modern frontend architectures and best practices.",
      ],
    },
    {
      id: 4,
      role: "FrontEnd Developer",
      time: "08.2020 - 12.2021 (1 yr 6 mos)",
      company: "BeeOnCode LLC",
      type: "Full-time, On-site",
      skills: [
        "javascript",
        "typescript",
        "rest apis",
        "html5",
        "css3",
        "responsive design",
        "ui components",
        "dynamic ui",
        "backend integration",
      ],
      description: [
        "Developed and enhanced the admin panel used by the Ministry of Territorial Administration and Infrastructure. Built flexible UI components and implemented dynamic structure control, allowing administrators to modify interface elements and content. Worked closely with backend APIs to ensure full functionality and smooth UI experience. Project website: ",
      ],
    },
  ],
  skills: {
    Core: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"],
    "Frameworks & Libraries": [
      "React",
      "Next.js",
      "React Native",
      "Redux",
      "Zustand",
      "Three.js",
    ],
    Styling: [
      "Sass (SCSS)",
      "Tailwind CSS",
      "Responsive Design",
      "Mobile-First Layout",
    ],
    "State & Data": ["Redux Toolkit", "Zustand", "REST APIs", "Fetch / Axios"],
    "Graphics & Rendering": ["HTML Canvas", "WebGL (basic)"],
    "Auth & Integrations": ["OAuth 2.0", "Google Login", "Facebook Login"],
    Tools: ["Git / GitHub", "npm / yarn", "Vite", "Figma (UI implementation)"],
    Quality: [
      "Cross-browser compatibility",
      "Performance optimization (basic)",
      "Debugging",
    ],
    Languages: ["English", "Russian"],
    "Personal Skills": [
      "Responsibility",
      "Adaptability",
      "Time management",
      "Fast learning",
      "Critical and logical thinking",
      "Accuracy",
      "Teamwork",
    ],
  },
  education: [
    {
      institution: "Basic IT Center",
      time: "02.2020 - 09.2020",
    },
    {
      institution: "National Polytechnic University of Armenia, Yerevan",
      time: "09.2016 - 05.2022",
    },
  ],
  about:
    "Front-End Developer with 5+ years of experience in React and React Native, building web and mobile applications. Skilled in interactive UIs, including 3D experiences with Three.js, and integrating analytics and payment solutions like Stripe. Passionate about delivering user-focused solutions that drive business value.",
  contact: {
    address: "Shiraz St. 26/27, 0088 Yerevan, Armenia",
    phone: "+374 43 150 200",
    email: "tigran.sargsyan105@gmail.com",
    birthdate: "19.04.1999",
  },
}));
