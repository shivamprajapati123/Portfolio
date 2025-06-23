"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Particles from "@/components/Particles";
import { assets, infoList } from "@/assets/assets";
import Image from "next/image";
import { useTheme } from "../ThemeProvider";
import { FaGitAlt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import {
  SiMongodb,
  SiPostgresql,
  SiAutocad,
  SiPostman,
} from "react-icons/si";
import { motion } from "framer-motion";

const toolsData = [
  { name: "MongoDB", icon: <SiMongodb className="w-6 h-6 text-green-600" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="w-6 h-6 text-blue-800" /> },
  { name: "Git", icon: <FaGitAlt className="w-6 h-6 text-orange-500" /> },
  { name: "AutoCAD", icon: <SiAutocad className="w-6 h-6 text-red-600" /> },
  { name: "Postman", icon: <SiPostman className="w-6 h-6 text-orange-400" /> },
];

export default function About() {
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
      className={`min-h-screen ${
        theme === "dark" ? "bg-[#11001F] text-white" : "bg-white text-black"
      }`}
    >
      {!isSmallScreen && <Navbar theme={theme} setTheme={setTheme} />}
      {theme === "dark" && <Particles />}

      <div
        id="About"
        className="w-11/12 min-h-screen flex flex-col text-center mx-auto justify-center items-center gap-4 pt-16 relative z-10"
      >
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-5xl font-Ovo mt-5"
        >
          About Me
        </motion.h2>

        <div className="flex flex-col w-full lg:flex-row items-center gap-20 my-10 px-4 md:px-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-64 sm:w-80 rounded-3xl max-w-none"
          >
            <Image
              src={assets.user_image}
              alt="User Image"
              className="w-full rounded-3xl shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <p className="mb-10 max-w-2xl font-Ovo">
              Hello! I'm Shivam Prajapati, a dedicated and enthusiastic software
              developer. I specialize in creating scalable, efficient, and
              user-focused applications using modern technologies like React and
              beyond. My development approach emphasizes clean, maintainable
              code and strong performance. I thrive in collaborative
              environments, adapt quickly to new tools and frameworks, and am
              always eager to grow both technically and professionally. I'm
              excited to contribute meaningfully to an innovative team and help
              build impactful software solutions.
            </p>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
            >
              {infoList.map(({ icon, title, description }, index) => (
                <li
                  key={index}
                  className={`border-[0.5px] rounded-xl p-6 cursor-pointer hover:-translate-y-1 duration-500 hover:[box-shadow:4px_4px_0_#000] ${
                    theme === "dark"
                      ? "border-gray-700 bg-[#1a0033] text-white"
                      : "border-gray-400 bg-white text-gray-700"
                  }`}
                >
                  <Image src={icon} alt={title} className="w-7 mt-3" />
                  <h3 className="my-4 font-semibold text-start">{title}</h3>
                  <p className="text-start text-sm">{description}</p>
                </li>
              ))}
            </motion.ul>

            <h4 className="my-6 text-start font-Ovo text-xl">Tools I Use</h4>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 sm:gap-5"
            >
              <li
                className={`flex flex-col items-center justify-center w-14 sm:w-16 aspect-square border rounded-lg cursor-pointer hover:scale-110 transition-transform duration-300 ${
                  theme === "dark"
                    ? "border-gray-700 bg-[#1a0033] hover:shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                    : "border-gray-400 bg-white hover:shadow-md"
                }`}
              >
                <VscVscode className="w-6 h-6 text-blue-600" />
                <span className="text-xs mt-1">VS Code</span>
              </li>
              {toolsData.map((tool, index) => (
                <li
                  key={index}
                  className={`flex flex-col items-center justify-center w-14 sm:w-16 aspect-square border rounded-lg cursor-pointer hover:scale-110 transition-transform duration-300 ${
                    theme === "dark"
                      ? "border-gray-700 bg-[#1a0033] hover:shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                      : "border-gray-400 bg-white hover:shadow-md"
                  }`}
                >
                  {tool.icon}
                  <span className="text-xs mt-1">{tool.name}</span>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
