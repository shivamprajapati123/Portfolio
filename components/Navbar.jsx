"use client";
import { assets } from "@/assets/assets";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Ovo } from "next/font/google";
import Link from "next/link";

const ovo = Ovo({ subsets: ["latin"], weight: ["400"] });

export default function Navbar({ theme, setTheme }) {
  const sideMenuRef = useRef();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  return (
    <>
      {theme === "light" && (
        <div className="fixed top-0 right-0 w-full -z-10 translate-y-[-80%]">
          <Image
            src={assets.header_bg_color}
            alt="Header Background"
            className="inset-0 -z-50 pointer-events-none"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      )}

      <nav
        className={`w-full fixed lg:px-8 xl:px-[8%] py-4 flex justify-between items-center z-50 transition-all duration-300
          ${scrolled ? "shadow-xl backdrop-blur-md bg-opacity-90" : ""}
          ${theme === "dark" ? "bg-[#1a0033] text-white" : "bg-white text-black"}
        `}
      >
        <a
          href="#top"
          className="flex flex-row gap-3 items-center mr-14 sm:mx-4"
        >
          <Image
            src={assets.navbar_img}
            alt="Logo"
            className="w-7 cursor-pointer "
          />
          <span
            className={`${theme === "dark" ? " text-white" : " text-black"}`}
          >
            Portfolio
          </span>
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 shadow-sm backdrop-blur-md
    ${theme === "dark" ? "bg-[#1a0033] text-white" : "bg-white text-black"}
  `}
        >
          {["home", "about", "skills", "resume", "works", "contact"].map(
            (item) => (
              <li key={item}>
                <Link
                  className={`
            ${ovo.className}
            relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full
            transition-transform duration-200 hover:scale-110 hover:text-pink-500
          `}
                  href={item === "home" ? "/" : `/${item}`}
                >
                  {item === "contact"
                    ? "Contact me"
                    : item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            )
          )}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="cursor-pointer"
          >
            <Image
              src={theme === "dark" ? assets.sun_icon : assets.moon_icon}
              className="w-6"
              alt="Theme Toggle Icon"
            />
          </button>

          <a
            className={`hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 ${ovo.className}`}
            href="/contact"
          >
            Contact
            <Image src={assets.arrow_icon} alt="Arrow" className="w-3" />
          </a>

          <button className="block md:hidden lg:hidden ml-3 group">
            <Image
              src={assets.menu_black}
              onClick={openMenu}
              className={`w-5 mr-1 transition-transform duration-300 group-hover:rotate-90 ${
                theme === "dark" ? "invert brightness-0" : ""
              }`}
              alt="Menu Icon"
            />
          </button>
        </div>

        {/* Mobile menu */}
        <ul
          ref={sideMenuRef}
          className={`md:hidden gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-500 h-screen transition duration-500
            ${
              theme === "dark"
                ? "bg-[#1a0033] text-white"
                : "bg-rose-50 text-black"
            }
          `}
        >
          <div className="absolute right-6 z-1000 top-6" onClick={closeMenu}>
            <Image src={assets.close_black} alt="Close Icon" className="w-5" />
          </div>
          {["home", "about", "skills", "resume", "works", "contact"].map(
            (item) => (
              <li key={item}>
                <Link
                  className={`${ovo.className} relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full`}
                  href={item === "home" ? "/" : `/${item}`}
                >
                  {item === "contact"
                    ? "Contact me"
                    : item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>
    </>
  );
}
