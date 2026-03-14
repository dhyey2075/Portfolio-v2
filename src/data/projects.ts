// import type { Project } from "@/types";

// export const PROJECTS: Project[] = [
//   {
//     title: "VS Code Web",
//     description: "A web version of VS Code with folder structure and file management. It uses Docker containers for each user's codespace and give limited resources and access to the user.",
//     github: "https://github.com/dhyey2075/VSCodeWebBE",
//     demo: "https://vscodeweb.netlify.app",
//     tags: ["Node.js", "Express.js", "Docker", "React", "Tailwind CSS"],
//   },
//   {
//     title: "URL Shortener",
//     description: "Made a custom URL shortener with a custom domain and custom endpoints. This emerge out as a solution of the problem of long URLs being difficult to remember and share which me and my friends faced and we all starting using it.",
//     github: "https://github.com/dhyey2075/url-shortner",
//     demo: "https://short.dhyey2075.fun",
//     tags: ["Next.js", "Tailwind CSS"],
//   },
//   {
//     title: "Ride Ronin",
//     description: "A platform for booking and managing rides for the users. It is a web application that allows the users to book a ride and manage their rides.",
//     github: "https://github.com/dhyey2075/Ride-Ronin",
//     demo: "https://rideronin.dhyeyparekh.in",
//     tags: ["Node.js", "Supabase", "Tailwind CSS", "React"]
//   },
//   {
//     title: "Droply",
//     description: "",
//     github: "https://github.com/dhyey2075/droply",
//     demo: "https://youtu.be/UtoEn-mm9b0",
//     tags: ["React Native", "Expo", "Firebase", "Cloudinary", "Babel", "Gradle", "Jest", "Gemini API"],
//   },
//   {
//     title: "Stock Price Predictor - for HDFC Bank",
//     description: "A stock price forecasting model for HDFC Bank using Linear Regression.",
//     github: "https://github.com/harshhh28/Stock-Price-Predictor",
//     demo: "https://github.com/harshhh28/Stock-Price-Predictor/blob/main/stock_predictor.ipynb",
//     tags: ["Python", "NumPy", "pandas", "Scikit-Learn"],
//   },
//   {
//     title: "Bank Database Management System",
//     description: "A DBMS designed with ERD, normalization, and robust structures for efficient banking workflows.",
//     github: "https://github.com/harshhh28/Bank-DBMS",
//     demo: "https://drive.google.com/file/d/114hIJA8mLtuOb-HweuiwDbd_qzyFauaR/view?usp=sharing",
//     tags: ["PostgreSQL"],
//   },
//   {
//     title: "An E-Commerce Clone",
//     description: "Successfully crafted a fully-fledged responsive Amazon clone using the dynamic duo - HTML and CSS!",
//     github: "https://github.com/harshhh28/amazon-clone",
//     demo: "https://amazon-clone-eta-self.vercel.app/",
//     tags: ["HTML5", "CSS3"],
//   },
//   {
//     title: "Convolutional Codes",
//     description: "Tackled minimum distance search path problem using Viterbi soft and hard decoding",
//     github: "https://github.com/harshhh28/Convolution-Coding",
//     demo: "https://github.com/harshhh28/Convolution-Coding",
//     tags: ["Viterbi Algorithm", "Dynamic Programming", "Backtracking"],
//   },
//   {
//     title: "RailNet Optimizer",
//     description: "Reduced cost and time of transportation in railway networks using Graph Theory.",
//     github: "https://github.com/harshhh28/RailNet-Optimizer/",
//     demo: "https://transportationrouteproblem.weebly.com/",
//     tags: ["Dijkstra's Algorithm", "Chinese Postman", "Yard location"],
//   },
//   {
//     title: "Vehicle Theft Detector",
//     description: "Created a real-time monitoring system, improving fleet management, security, and tracking efficiency.",
//     github: "https://github.com/harshhh28/Vehicle-Theft-Detector/",
//     demo: "https://youtu.be/QJU5-LBFimQ",
//     tags: ["Arduino Uno R3", "GSM", "GPS", "Accelerometer"],
//   },
//   {
//     title: "Variational Calculus",
//     description: "Explored Euler-Lagrange Equation, the Brachistochrone, Geodesic Sphere, and Catenary problems.",
//     github: "https://github.com/harshhh28/Variational-Calculus/",
//     demo: "https://variationalcalculus.weebly.com/",
//     tags: ["Brachistochrone", "Geodesic Sphere", "Catenary"],
//   },
// ];

import type { Project } from "@/types";

/**
 * Projects derived from GitHub repos (src/data/repo.ts).
 * FE/BE repos (e.g. ChatApp-Flutter- + ChatAppBackend) are merged into single projects with combined tags.
 */
export const PROJECTS: Project[] = [
  {
    title: "iNote (Cloud Notebook)",
    description:
      "iNote : A secure cloud-based notes storing web app where users can conveniently store and access their notes using a username and password. Keep your thoughts organized and accessible from anywhere with ease.",
    github: "https://github.com/dhyey2075/iNotebook",
    demo: "https://github.com/dhyey2075/iNotebook",
    tags: ["JavaScript"],
  },
  {
    title: "ai-agent",
    description:
      "AI agent web application deployed on Vercel.",
    github: "https://github.com/dhyey2075/ai-agent",
    demo: "https://ai-agent-cyan.vercel.app",
    tags: ["JavaScript"],
  },
  {
    title: "Automatic-Email-Sender",
    description:
      "A utility using nodemailer and Gmail to automatically send emails to several users with text and file attachments.",
    github: "https://github.com/dhyey2075/Automatic-Email-Sender",
    demo: "https://github.com/dhyey2075/Automatic-Email-Sender",
    tags: ["JavaScript", "Node.js", "Nodemailer"],
  },
  {
    title: "Build-My-Own-Cloud-Storage",
    description:
      "A basic cloud storage implementation made using Node.js and MongoDB.",
    github: "https://github.com/dhyey2075/Build-My-Own-Cloud-Storage",
    demo: "https://github.com/dhyey2075/Build-My-Own-Cloud-Storage",
    tags: ["JavaScript", "Node.js", "MongoDB"],
  },
  {
    title: "Business-Game (Navo Vyapar)",
    description:
      "An indoor traditional game (Navo Vyapar). Four players can join and play using Socket.io, Node.js and React.",
    github: "https://github.com/dhyey2075/Business-Game",
    demo: "https://github.com/dhyey2075/Business-Game",
    tags: ["JavaScript", "Socket.io", "Node.js", "React"],
  },
  {
    title: "chat-with-chai",
    description:
      "AI personas modeled after educators Hitesh Choudhary and Piyush Garg. These AI assistants emulate their teaching styles and provide guidance in software development.",
    github: "https://github.com/dhyey2075/chat-with-chai",
    demo: "https://chat-with-chai-ten.vercel.app",
    tags: ["JavaScript"],
  },
  {
    title: "Chat App",
    description:
      "A chatting mobile app built with Flutter and a Node.js backend using Socket.io.",
    github: "https://github.com/dhyey2075/ChatApp-Flutter-",
    demo: "https://github.com/dhyey2075/ChatApp-Flutter-",
    tags: ["Flutter", "C++", "JavaScript", "Node.js", "Socket.io"],
  },
  {
    title: "Code API",
    description:
      "API that returns entire coding profile for a username (Codeforces, LeetCode, etc.).",
    github: "https://github.com/dhyey2075/Code-API",
    demo: "https://github.com/dhyey2075/Code-API",
    tags: ["Python", "JavaScript"],
  },
  {
    title: "CodeRunnerBackend",
    description:
      "Backend service for code execution.",
    github: "https://github.com/dhyey2075/CodeRunnerBackend",
    demo: "https://code-runner-backend.vercel.app",
    tags: ["Python"],
  },
  {
    title: "Custom-Tokenizer",
    description:
      "Custom tokenizer implementation.",
    github: "https://github.com/dhyey2075/Custom-Tokenizer",
    demo: "https://github.com/dhyey2075/Custom-Tokenizer",
    tags: ["Python"],
  },
  {
    title: "Droply",
    description:
      "Mobile app for file sharing and management.",
    github: "https://github.com/dhyey2075/droply",
    demo: "https://droply.dhyeyparekh.in",
    tags: ["TypeScript"],
  },
  {
    title: "DSA (C++)",
    description:
      "C++ practice problems for Data Structures and Algorithms.",
    github: "https://github.com/dhyey2075/DSA_CPP",
    demo: "https://github.com/dhyey2075/DSA_CPP",
    tags: ["C++"],
  },
  {
    title: "E-Shopify",
    description:
      "E-commerce tech website for electronic gadgets, built with Next.js, MongoDB, Tailwind CSS, and REST API. Users can browse and purchase from various organizations.",
    github: "https://github.com/dhyey2075/E-Shopify",
    demo: "https://e-shopify-beige.vercel.app",
    tags: ["JavaScript", "Next.js", "MongoDB", "Tailwind CSS", "REST API"],
  },
  {
    title: "EDA",
    description:
      "Repository for IT - 462: Exploratory Data Analysis course.",
    github: "https://github.com/dhyey2075/EDA",
    demo: "https://github.com/dhyey2075/EDA",
    tags: ["Data Analysis"],
  },
  {
    title: "Expense Tracker MCP Server",
    description:
      "MCP server for expense tracking.",
    github: "https://github.com/dhyey2075/Expense_Tracker_MCP_Server",
    demo: "https://github.com/dhyey2075/Expense_Tracker_MCP_Server",
    tags: ["Python"],
  },
  {
    title: "Food-App",
    description:
      "Food app with customer section (restaurants), restaurant panel for listing, and delivery partner flow for accepting and delivering orders.",
    github: "https://github.com/dhyey2075/Food-App",
    demo: "https://github.com/dhyey2075/Food-App",
    tags: ["JavaScript"],
  },
  {
    title: "IRCTC",
    description:
      "Clone of the IRCTC website with PNR status, find trains between stations, train routes, and a clean login/sign-up page.",
    github: "https://github.com/dhyey2075/IRCTC",
    demo: "https://github.com/dhyey2075/IRCTC",
    tags: ["JavaScript"],
  },
];
