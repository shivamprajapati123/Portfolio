"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Particles from "@/components/Particles";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { Ovo } from "next/font/google";
import { useTheme } from "./ThemeProvider";

// Import your section components
import AboutSection from "./about/page";
import SkillsSection from "./skills/page";
import WorksSection from "./works/page";
import ResumeSection from "./resume/page";
import ContactSection from "./contact/page";

const ovo = Ovo({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
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
        theme === "dark" ? "bg-[#11001f] text-white" : "bg-[#f9f9f9] text-black"
      } ${ovo.className}`}
    >
      <Navbar theme={theme} setTheme={setTheme} />
      {theme === "dark" && <Particles />}

      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center pt-40 relative z-10">
        <Image
          src={assets.profile_img}
          alt="Profile"
          className="w-36 h-36 rounded-full border-4 border-white hover:scale-110 transition-transform duration-300 animate-float"
        />
        <h3 className="flex flex-row item-center gap-2  text-xl md:text-2xl mb-3 mt-4 font-Ovo animate-fade-in-up delay-0">
          Hi! I'm Shivam Prajapati
          <Image
            src={assets.hand_icon}
            alt="hand icon"
            className="h-6 w-auto animate-wave"
          />
        </h3>
        <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo animate-fade-in-up delay-1">
          Software Developer
        </h1>
        <p className="max-w-2xl font-Ovo text-center mt-4 text-sm md:text-base animate-fade-in-up delay-2">
          Hi! I'm Shivam Prajapati, a software developer passionate about
          building efficient, scalable, and user-centric applications. I
          specialize in writing clean code, solving real-world problems, and
          continuously learning new technologies. Let's build something
          meaningful together!
        </p>
        <div className="flex gap-4 mt-8 animate-fade-in-up delay-3">
          <a
            href="/contact"
            className={`px-6 py-2 rounded-full transition-all shadow-md hover:shadow-xl hover:scale-105
          ${
            theme === "dark"
              ? "bg-transparent border border-white text-white hover:bg-white hover:text-black"
              : "bg-black text-white hover:bg-gray-900"
          }
          `}
          >
            Contact Me →
          </a>
          <a
            href="/Resume_Shivam.pdf"
            target="_blank"
            className={`border ${
              theme === "dark" ? "border-white" : "border-black"
            } px-6 py-2 rounded-full hover:scale-110 transition-all shadow-md hover:shadow-xl`}
          >
            <div className="flex items-center">
              My resume
              <Image
                src={assets.download_icon}
                alt="download icon"
                className={`inline w-4 ml-2 ${
                  theme === "dark" ? "invert brightness-0" : ""
                }`}
              />
            </div>
          </a>
        </div>
      </div>

      {/* Render all sections ONLY on small screens */}
      {isSmallScreen && (
        <>
          <AboutSection />
          <SkillsSection />
          <WorksSection />
          <ResumeSection />
          <ContactSection />
        </>
      )}
    </div>
  );
}
