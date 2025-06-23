"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Particles from "@/components/Particles";
import { FaUserTie, FaGraduationCap, FaTrophy } from "react-icons/fa";
import { useTheme } from "../ThemeProvider";

const ResumeCard = ({ title, org, date, icon, link, theme }) => (
  <a
    href={link || "#"}
    target={link ? "_blank" : "_self"}
    rel="noopener noreferrer"
    className={`block rounded-xl p-5 border transition-all duration-300 transform hover:scale-105 hover:shadow-lg
      ${
        theme === "dark"
          ? "bg-[#1a0033] border-purple-900 text-white"
          : "bg-white border-gray-200 text-gray-900"
      }
    `}
  >
    <div
      className={`flex items-center text-sm font-semibold mb-2 ${
        theme === "dark" ? "text-yellow-300" : "text-indigo-600"
      }`}
    >
      {icon}
      <span className="ml-2">{title}</span>
    </div>
    <h3 className="text-lg font-semibold">{org}</h3>
    <p
      className={`text-sm ${
        theme === "dark" ? "text-gray-400" : "text-gray-500"
      }`}
    >
      {date}
    </p>
  </a>
);

export default function Resume() {
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

      <section className="pt-20 px-4 md:px-12 lg:px-24">
        <h2 className="text-5xl font-Ovo text-center mt-4 mb-16 animate-fade-in-up">
          My Resume
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-fade-in-up">
          {/* Positions of Responsibility */}
          <div>
            <h3
              className={`text-2xl font-bold mb-6 flex items-center gap-2 ${
                theme === "dark" ? "text-yellow-300" : "text-gray-700"
              }`}
            >
              <FaUserTie className="text-purple-500" />
              Positions of Responsibility
            </h3>
            <div className="space-y-6">
              <ResumeCard
                title="Basketball Secretary"
                org="Student Gymkhana, IITBBS"
                date="2023 – 2024"
                icon={<FaUserTie />}
                theme={theme}
              />
              <ResumeCard
                title="Core Head"
                org="Ashvamedha Fest, IITBBS"
                date="2024 – 2025"
                icon={<FaUserTie />}
                theme={theme}
              />
              <ResumeCard
                title="Member"
                org="Basketball Team, IITBBS"
                date="2022 – Present"
                icon={<FaUserTie />}
                theme={theme}
              />
            </div>
          </div>

          {/* Education */}
          <div>
            <h3
              className={`text-2xl font-bold mb-6 flex items-center gap-2 ${
                theme === "dark" ? "text-yellow-300" : "text-gray-700"
              }`}
            >
              <FaGraduationCap className="text-purple-500" />
              Education
            </h3>
            <div className="space-y-6">
              <ResumeCard
                title="B.Tech – Civil Engineering"
                org="IIT Bhubaneswar"
                date="Oct 2022 – June 2026"
                icon={<FaGraduationCap />}
                theme={theme}
              />
              <ResumeCard
                title="Higher Secondary School"
                org="Hans Int'l School (12th CBSE – 90.8%)"
                date="2019 – 2021"
                icon={<FaGraduationCap />}
                theme={theme}
              />
              <ResumeCard
                title="Secondary School"
                org="Hans Int'l School (10th CBSE)"
                date="2018 – 2019"
                icon={<FaGraduationCap />}
                theme={theme}
              />
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-20 animate-fade-in-up">
          <h3
            className={`text-2xl font-bold mb-6 flex items-center gap-2 ${
              theme === "dark" ? "text-yellow-300" : "text-gray-700"
            }`}
          >
            <FaTrophy className="text-purple-500" />
            Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ResumeCard
              title="Web Development Bootcamp"
              org="by Angela Yu"
              date="Certificate Available"
              icon={<FaTrophy />}
              link="https://drive.google.com/file/d/1YuHbWALZGy3CK-LtRqx10Mbluzz7RcqF/view"
              theme={theme}
            />
            <ResumeCard
              title="Graph Theory Camp"
              org="by Algo University"
              date="Certificate Available"
              icon={<FaTrophy />}
              link="https://drive.google.com/file/d/1ZX_Vue4ncZgN_nQ-0Bx2zXVWT6znOKKB/view"
              theme={theme}
            />
            <ResumeCard
              title="Basketball Secretary"
              org="Student Gymkhana Recognition"
              date="2023 – 2024"
              icon={<FaTrophy />}
              link="https://drive.google.com/file/d/1-9jUtFSaOqUAm1F0iN2UHlSw_I7Syg1A/view"
              theme={theme}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
