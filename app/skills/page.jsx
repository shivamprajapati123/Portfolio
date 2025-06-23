"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Particles from "@/components/Particles";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaLaptopCode,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiC,
  SiPostgresql,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiAutocad,
} from "react-icons/si";
import { useTheme } from "../ThemeProvider";

const skills = [
  {
    title: "Frontend",
    items: [
      { name: "HTML", icon: FaHtml5, level: 90 },
      { name: "CSS / Tailwind", icon: SiTailwindcss, level: 80 },
      { name: "JavaScript", icon: FaJs, level: 85 },
      { name: "React.js", icon: FaReact, level: 75 },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs, level: 75 },
      { name: "Express.js", icon: SiExpress, level: 70 },
      { name: "PostgreSQL", icon: SiPostgresql, level: 65 },
      { name: "MongoDB", icon: SiMongodb, level: 65 },
    ],
  },
  {
    title: "Languages",
    items: [
      { name: "C", icon: SiC, level: 80 },
      { name: "C++", icon: SiCplusplus, level: 80 },
      { name: "JavaScript", icon: FaJs, level: 85 },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "VS Code", icon: FaLaptopCode, level: 85 },
      { name: "Git", icon: FaGitAlt, level: 75 },
      { name: "AutoCAD", icon: SiAutocad, level: 80 },
    ],
  },
];

const SkillBar = ({ name, Icon, level, theme }) => (
  <div className="mb-6 animate-fade-in-up">
    <div className="flex items-center justify-between mb-1">
      <div
        className={`flex items-center gap-2 ${
          theme === "dark" ? "text-gray-200" : "text-gray-700"
        }`}
      >
        <Icon
          className={`text-lg ${
            theme === "dark" ? "text-yellow-300" : "text-indigo-500"
          }`}
        />
        <span className="font-medium font-Ovo">{name}</span>
      </div>
      <span
        className={`text-sm font-Ovo ${
          theme === "dark" ? "text-gray-400" : "text-gray-500"
        }`}
      >
        {level}%
      </span>
    </div>
    <div
      className={`w-full h-2 rounded ${
        theme === "dark" ? "bg-[#2a1740]" : "bg-gray-200"
      }`}
    >
      <div
        className={`h-full rounded transition-all duration-700 ${
          theme === "dark"
            ? "bg-gradient-to-r from-yellow-400 to-pink-400"
            : "bg-gradient-to-r from-indigo-400 to-pink-400"
        }`}
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </div>
);

export default function Skills() {
  const { theme, setTheme } = useTheme();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsSmallScreen(window.innerWidth < 640);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        theme === "dark" ? "bg-[#11001F] text-white" : "bg-white text-black"
      }`}
    >
      {!isSmallScreen && <Navbar theme={theme} setTheme={setTheme} />}
      {theme === "dark" && <Particles />}
      <section id="skills" className="pt-20 pb-5 px-4 md:px-12 lg:px-24">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-5xl font-Ovo mt-5">My Skills</h2>
          <p
            className={`mt-2 font-Ovo ${
              theme === "dark" ? "text-gray-300" : "text-gray-500"
            }`}
          >
            Technologies I have worked with
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((category, i) => (
            <div
              key={category.title}
              className={`rounded-xl shadow-sm p-6 font-Ovo group transition-all duration-500 delay-[${i * 75}ms]
                ${
                  theme === "dark"
                    ? "bg-[#1a0033] border border-purple-900 hover:shadow-xl hover:scale-105"
                    : "bg-white border border-gray-200 hover:shadow-xl hover:scale-105"
                }
              `}
            >
              <h3
                className={`text-xl font-semibold mb-4 font-Ovo transition
                ${
                  theme === "dark"
                    ? "text-yellow-300 group-hover:text-pink-400"
                    : "text-gray-800 group-hover:text-indigo-500"
                }
              `}
              >
                {category.title}
              </h3>
              {category.items.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  Icon={skill.icon}
                  level={skill.level}
                  theme={theme}
                />
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
