"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={(e) => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
      className="absolute right-0 bottom-0 mb-6 mr-6 focus:outline-none dark:hover:bg-[#8f4ce6] border border-black dark:border-[#8f4ce6]  rounded-full p-4 ease-in-out duration-300"
    >
      {theme === "dark" ? <FaMoon className="w-5 h-5" /> : <FaSun />}
    </button>
  );
};

export default ThemeButton;
