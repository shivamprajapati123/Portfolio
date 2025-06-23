"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Particles from "@/components/Particles";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useTheme } from "../ThemeProvider";

export default function Contact() {
  const { theme, setTheme } = useTheme();
  const [result, setResult] = useState("");
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsSmallScreen(window.innerWidth < 640);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "0efaa04c-b723-4e8b-af12-77f1402a8b71");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("✅ Form Submitted Successfully!");
      event.target.reset();
    } else {
      setResult(`❌ ${data.message}`);
    }
  };

  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "bg-[#11001F] text-white" : "bg-white text-black"
      }`}
    >
      {!isSmallScreen && <Navbar theme={theme} setTheme={setTheme} />}
      {theme === "dark" && <Particles />}

      <div
        id="Contact"
        className="w-11/12 min-h-screen flex flex-col items-center justify-center mx-auto gap-10 pt-24 pb-12 relative z-10"
      >
        <h2 className="text-center text-5xl font-Ovo mt-5 animate-fade-in-up">
          Contact Me
        </h2>

        <p
          className={`text-center max-w-xl px-4 animate-fade-in-up ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Feel free to reach out for collaborations, freelance work, or just a
          friendly hello 👋
        </p>

        <form
          onSubmit={onSubmit}
          className={`w-full max-w-2xl rounded-xl px-8 py-8 space-y-6 transition-all duration-300 animate-fade-in-up hover:shadow-lg ${
            theme === "dark"
              ? "bg-[#1a0033] border border-purple-900"
              : "bg-white border border-gray-200"
          }`}
        >
          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className={`flex-1 px-4 py-3 rounded-lg transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 ${
                theme === "dark"
                  ? "bg-[#220044] border-gray-700 text-white focus:ring-yellow-400"
                  : "bg-white border-gray-300 text-black focus:ring-indigo-500"
              }`}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className={`flex-1 px-4 py-3 rounded-lg transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 ${
                theme === "dark"
                  ? "bg-[#220044] border-gray-700 text-white focus:ring-yellow-400"
                  : "bg-white border-gray-300 text-black focus:ring-indigo-500"
              }`}
            />
          </div>

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className={`w-full px-4 py-3 rounded-lg transition-all duration-300 hover:scale-[1.01] focus:outline-none focus:ring-2 ${
              theme === "dark"
                ? "bg-[#220044] border-gray-700 text-white focus:ring-yellow-400"
                : "bg-white border-gray-300 text-black focus:ring-indigo-500"
            }`}
          />

          <button
            type="submit"
            className={`py-3 px-8 w-max flex items-center justify-between gap-2 rounded-full mx-auto transition-all duration-300 hover:scale-105 shadow-md ${
              theme === "dark"
                ? "bg-yellow-400 text-black hover:bg-yellow-300"
                : "bg-black/80 text-white hover:bg-black"
            }`}
          >
            Send Message
            <Image
              src={assets.right_arrow_white}
              alt="Right Arrow"
              className="w-4"
            />
          </button>

          <p className="mt-4 text-center text-sm font-medium">{result}</p>

          <p
            className={`text-sm text-center mt-6 ${
              theme === "dark" ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Or drop me an email at{" "}
            <a
              href="mailto:22ce01049@email.com"
              className="text-indigo-600 hover:underline"
            >
              22ce01049@email.com
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
