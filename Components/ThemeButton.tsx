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
    >
      {theme === "dark" ? <FaMoon /> : <FaSun />}
    </button>
  );
};

export default ThemeButton;
