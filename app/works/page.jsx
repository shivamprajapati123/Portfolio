"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Particles from "@/components/Particles";
import { assets } from "@/assets/assets";
import { FaGithub } from "react-icons/fa";
import { useTheme } from "../ThemeProvider";

const ProjectCard = ({ title, description, tech, link, image }) => (
  <div
    className="relative group border border-gray-200 rounded-xl overflow-hidden shadow-md bg-white
    transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-transparent
    hover:bg-gradient-to-br hover:from-indigo-100 hover:to-pink-100 animate-fade-in-up"
  >
    {/* Background Image with blur + zoom on hover */}
    <div
      className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:blur-sm group-hover:scale-110"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />

    {/* Dark gradient overlay */}
    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500 z-0" />

    {/* Card content - fade + lift on hover */}
    <div className="relative z-10 h-full w-full p-6 flex flex-col justify-center items-start text-white opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-8 transition-all duration-500">
      <h3 className="text-xl font-semibold mb-2 font-Ovo">{title}</h3>
      <p className="text-sm mb-3 font-Ovo">{description}</p>
      <div className="text-xs font-medium mb-4 font-Ovo">{tech}</div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white font-semibold text-sm underline hover:text-pink-200 transition"
        >
          <FaGithub className="text-base" />
          View Project
        </a>
      )}
    </div>
  </div>
);

export default function Works() {
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
      <section className="pt-20 pb-5 px-4 md:px-12 lg:px-24">
        <h2 className="text-5xl font-Ovo text-center mt-4 mb-16 animate-fade-in-up">
          My Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <ProjectCard
            title="Job Portal"
            description="A fully functional full-stack job portal built with MERN stack. Users can register, post jobs, and apply."
            tech="MERN Stack, JWT, MongoDB, REST API"
            link="https://github.com/shivamprajapati123/Job_Portal_Frontend"
            image={assets.job_prtal_img.src}
          />
          <ProjectCard
            title="Secret API"
            description="On every refresh, a new secret is generated and displayed. Secrets are revealed on image hover."
            tech="Node.js, Express.js, API, JS"
            link="https://github.com/shivamprajapati123/Secret_API"
            image={assets.secret_img.src}
          />
          <ProjectCard
            title="To-do Keeper"
            description="A simple and elegant to-do app built using React. Users can add, mark complete, and delete tasks with ease."
            tech="React.js, CSS"
            link="https://github.com/shivamprajapati123/Keepers-To-Do-"
            image={assets.keeper_img.src}
          />
          <ProjectCard
            title="Code Editor"
            description="Live editor that executes HTML, CSS, and JS and displays real-time output as you type."
            tech="HTML, CSS, JavaScript"
            link="https://github.com/shivamprajapati123/Code_editor"
            image={assets.code_editor_img.src}
          />
          <ProjectCard
            title="Calculator"
            description="Simple and responsive calculator made using HTML, CSS and JavaScript."
            tech="HTML, CSS, JavaScript"
            link="https://github.com/shivamprajapati123/Calculator"
            image={assets.calculator_img.src}
          />
          <ProjectCard
            title="Portfolio Website"
            description="Personal portfolio website created using only HTML, CSS and a little JS to showcase skills and projects."
            tech="HTML, CSS, JavaScript"
            link="https://github.com/shivamprajapati123/Personal_Portfolio"
            image={assets.portfolio_img.src}
          />
          <ProjectCard
            title="Drum Kit"
            description="Interactive drum kit built using JS. Each key or button plays a different drum sound."
            tech="HTML, CSS, JavaScript"
            link="https://github.com/shivamprajapati123/Drum-Kitt"
            image={assets.drumKit_img.src}
          />
          <ProjectCard
            title="Food Website"
            description="A modern restaurant landing page layout built using HTML and CSS."
            tech="HTML, CSS"
            link="https://github.com/shivamprajapati123/Food_website"
            image={assets.foodWebsite_img.src}
          />
        </div>
      </section>
    </div>
  );
}
