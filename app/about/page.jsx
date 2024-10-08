"use client";
import { title } from "process";
import React from "react";
import { FaHtml5, FaCss3, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";
import { motion } from "framer-motion";
import { ScrollArea } from "../../components/ui/scroll-area";

// about data
const about = {
  title: "About me",
  description:
    "A highly motivated Computer Science student at the University of Nottingham with a passion for AI-driven solutions, technology, and innovation. Skilled in predictive analytics and project leadership.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Linus Sharp",
    },
    {
      fieldName: "Email",
      fieldValue: "linuscolesharp@gmail.com",
    },
    {
      fieldName: "Nationnality",
      fieldValue: "British & French",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, French & Spanish",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "Experience ranges from web development and design to team leadership in collaborative projects. Expertise in API development and management, and practical exposure in various service roles.",
  items: [
    {
      company: "Resilient Health",
      position: "Website Designer",
      duration: "Summer 2024",
    },
    {
      company: "UNiDAYS x UoN",
      position: "Team Leader",
      duration: "Oct 2023 - Jul 2024",
    },
    {
      company: "Fox Cafe",
      position: "Barista",
      duration: "Jun 2023- Oct 2023",
    },
    {
      company: "Le Pain Quotidien",
      position: "Barista",
      duration: "Jan 2022 - Aug 2022",
    },
    {
      company: "Aviva",
      position: "Work Experience",
      duration: "April 2019",
    },
  ],
};

//education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Pursuing a BSc in Computer Science at the University of Nottingham, with a focus on artificial intelligence, predictive analytics, and software development. Background includes completing an A level during my gap year to learn more about the subject .",
  items: [
    {
      insititution: "University of Nottingham",
      degree: "Bsc Computer Science",
      duration: "2022 - 2025",
    },
    {
      insititution: "Collingham College",
      degree: "A level - Computer Science",
      duration: "2021 - 2022",
    },
    {
      insititution: "Lycee St Jean - France",
      degree: "French Baccalaureat",
      duration: "2018 - 2021",
    },
  ],
};

//skills data
const skills = {
  title: "My Skills",
  description:
    "I have a diverse skill set spanning front-end development, UI/UX design, and backend systems, with a continuous drive to expand my expertise in emerging technologies.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.insititution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        {/* Mobile and tablet view: Show icon and name */}
                        <div className="w-full h-[150px] bg-[#232329] rounded-xl flex flex-col justify-center items-center gap-2 group sm:flex md:flex lg:hidden">
                          <div className="text-6xl group-hover:text-accent">
                            {skill.icon}
                          </div>
                          <div className="text-xl capitalize group-hover:text-accent">
                            {skill.name}
                          </div>
                        </div>

                        {/* Desktop view: Show icon and name with tooltip on hover */}
                        <TooltipProvider delayDuration={50}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group hidden sm:hidden md:hidden lg:flex">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[20px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>

                <div className="bg-[#1e1e24] p-8 rounded-xl shadow-lg max-w-[1020px] mx-auto xl:mx-0">
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 gap-x-5">
                    {about.info.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex justify-start gap-1 text-lg"
                        >
                          <span className="text-white/60 font-semibold">
                            {item.fieldName}:
                          </span>
                          <span className="font-bold text-accent text-right">
                            {item.fieldValue}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
