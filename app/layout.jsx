// 'use client';
// import { useEffect, useState } from "react";
// import { Outfit, Ovo } from "next/font/google";
// import "./globals.css";
// import Particles from "@/components/Particles";
// import Navbar from "@/components/Navbar";

// const outfit = Outfit({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
// });
// const ovo = Ovo({ subsets: ["latin"], weight: ["400"] });

// export default function RootLayout({ children }) {
//   const [theme, setTheme] = useState("dark");

//   // On mount, check localStorage or system preference
//   useEffect(() => {
//     const stored = localStorage.getItem("theme");
//     if (stored) setTheme(stored);
//     else if (window.matchMedia("(prefers-color-scheme: dark)").matches) setTheme("dark");
//     else setTheme("light");
//   }, []);

//   // Save theme to localStorage when it changes
//   useEffect(() => {
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   return (
//     <html lang="en" className="scroll-smooth">
//       <body
//         className={`${outfit.className} ${ovo.className} antialiased overflow-x-hidden ${
//           theme === "dark" ? "bg-[#11001F] text-white" : "bg-white text-black"
//         }`}
//       >
//         <Navbar
//           theme={theme}
//           onToggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")}
//         />
//         {theme === "dark" && (
//           <Particles className="inset-0 -z-50 pointer-events-none" quantity={100} />
//         )}
//         {children}
//       </body>
//     </html>
//   );
// }

'use client';
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./ThemeProvider";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
  
const ovo = Ovo({ subsets: ["latin"], weight: ["400"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.className} ${ovo.className} antialiased overflow-x-hidden`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}