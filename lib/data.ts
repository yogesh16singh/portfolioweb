import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Filmpire from "@/public/Filmpire.png";

import Ai_Image from "@/public/Ai_Image.webp";
import foodlover from "@/public/foodlover.png";
import unitychat from "@/public/unitychat.png";


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
    title: "Full Stack Web Development Trainee And Intern",
    location: "",
    description:
      "When I was in 2nd Year of my Btech - IT course, to improve my skills and knowledge, I joined a 6 month Internship Program of Devtown. I was working on React, TypeScript, Tailwind, Node, Express and MongoDB.",
    icon: React.createElement(CgWorkAlt),
    date: "JUNE 2022 – NOV 2022",
  },
  {
    title: "Frontend Intern at Simmi Foundation",
    location: " ",
    description:
      "In 3rd Year I have completed 2 months internship at Simmi Foundation. there I worked on React Js and Javascript.",
    icon: React.createElement(CgWorkAlt),
    date: "JUNE 2023 – JULY 2023",
  },
  {
    title: "Software Development Engineering Frontend Internship at Corider",
    location: "Remote ",
    description:
      "I'm now a frontend developer working with Corider. My responsibilities include developing frontend and integrating it with backend services and working with service workers for PWA Features. Here I was working on React Js, TypeScript and Chakra UI. ",
    icon: React.createElement(CgWorkAlt),
    date: "MAR 2024 – Present",
  },
] as const;

export const projectsData = [
  {
    title: "UnityChat - Real-time Communication and Collaboration Platform",
    description:
      `Features - Real-time messaging , unique invite system , member man-
agement , authentication , Audio and Video Calls , WebSocket fallback mechanism`,
    tags: ["TypeScript", "Next.js", "Socket IO", "Tailwind", "Prisma"],
    imageUrl: unitychat,
  },
  {
    title: "Food Lover - Browse and Order food from local restaurants.",
    description:
      `Features - Built Live APIs , State management with Redux , Add to Cart , Payment Gateway Integation , Autentication.`,
    tags: ["React", "Mongo DB", "Express Js"],
    imageUrl: foodlover,
  },
 
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
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
