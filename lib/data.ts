import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Filmpire from "@/public/Filmpire.png";

import Ai_Image from "@/public/Ai_Image.webp";
import foodlover from "@/public/foodlover.png";
import unitychat from "@/public/unitychat.png";
import guided from "@/public/guided.jpg";

import { title } from "process";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full Stack Web Development Trainee & Intern",
    location: "",
    description:
      "During my 2nd year of B.Tech in IT, I joined a 6-month internship program at Devtown to strengthen my technical skills. I worked extensively with technologies including React, TypeScript, Tailwind CSS, Node.js, Express.js, and MongoDB, building full-stack web applications.",
    icon: React.createElement(CgWorkAlt),
    date: "JUNE 2022 – NOV 2022",
  },
  {
    title: "Frontend Intern at Simmi Foundation",
    location: "",
    description:
      "Completed a 2-month internship during my 3rd year where I focused on frontend development using React.js and JavaScript. Contributed to feature development and UI improvements.",
    icon: React.createElement(CgWorkAlt),
    date: "JUNE 2023 – JULY 2023",
  },
  {
    title: "Software Development Engineering Frontend Intern at Corider",
    location: "Remote",
    description:
      "Led the implementation of authenticated sockets and file-sharing features in chats, reducing server load by 80%. Developed and integrated PWA features using service workers and worked closely with UI/UX designs. Technologies used: React.js, TypeScript, Chakra UI.",
    icon: React.createElement(CgWorkAlt),
    date: "MAR 2024 – SEPT 2024",
  },
  {
    title: "Frontend Developer Intern at Enalo",
    location: "Remote",
    description:
      "Worked on enhancing the user interface and developing new features using React.js and JavaScript. Debugged and resolved issues to ensure high performance, while actively collaborating with the team to contribute to overall product development.",
    icon: React.createElement(CgWorkAlt),
    date: "OCT 2024 – FEB 2025",
  },
] as const;

export const projectsData = [
  {
    title: "GuideEd - AI-Powered Career Counseling Platform",
    description: `Features: AI-based career suggestions (Gemini AI), real-time chat with counselors (Socket.IO), Redis caching, push notifications (Expo), secure payments (Stripe), Kafka-powered notifications, JWT authentication, and Express rate limiting.`,
    tags: ["React Native", "Express.js", "MongoDB", "Socket.IO", "Kafka", "Redis", "Stripe"],
    imageUrl: guided, // replace 'guided' with your actual image import
  },
  {
    title: "UnityChat - Real-time Communication and Collaboration Platform",
    description: `Features: Real-time messaging, unique invite system, member management, authentication (Clerk), audio/video calls (Livekit), light/dark mode, attachment sharing (UploadThing), and WebSocket fallback mechanism.`,
    tags: ["TypeScript", "Next.js", "Socket.IO", "Tailwind CSS", "Prisma", "MySQL", "Shadcn"],
    imageUrl: unitychat,
  },
  {
    title: "Food Lover - Browse and Order Food from Local Restaurants",
    description: `Features: Live APIs, state management with Redux, Add to Cart, Payment Gateway Integration (Stripe), and authentication.`,
    tags: ["React", "MongoDB", "Express.js", "Redux"],
    imageUrl: foodlover,
  }
] as const;


export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "React Native",
  "Node.js",
  "Golang",
  "Kafka",
  "Docker",
  "Tailwind CSS",
  "Chakra UI",
  "Git",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express Js",
  "Framer Motion",
  "Socket",
] as const;

export const frameworks = [
  "react",
  "chrome",
  "qwik",
  "mobile",
  "tailwind",
  "desktop",
  "vue",
  "safari",
  "svelte",
] as const;

export type Framework = (typeof frameworks)[number];
