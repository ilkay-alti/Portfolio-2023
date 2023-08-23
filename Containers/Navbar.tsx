import ThemeButton from "@/Components/ThemeButton";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const githubPortfolioUrl = process.env.NEXT_PUBLIC_GITHUB_PROFILE_URL;
  return (
    <div className="flex z-10 justify-between items-center py-4 px-60 sticky top-0 dark:bg-[#191924] bg-white ">
      <h1>Potfolio</h1>
      <div className="flex gap-4">
        <Link href={"#about"}>About</Link>
        <Link href={"#skills"}>Skills</Link>
        <Link href={"#experience"}>Experience</Link>
        <Link href={"#projects"}>Projects</Link>
        <Link href={"#education"}>Education</Link>
      </div>

      <Link
        href={githubPortfolioUrl!}
        target="_blank"
        className="px-5 py-2 border border-[#8f4ce6] text-[#8f4ce6] hover:text-white hover:bg-[#8f4ce6] rounded-full ease-in-out duration-700"
      >
        Github Profile
      </Link>
      <ThemeButton />
    </div>
  );
};

export default Navbar;
