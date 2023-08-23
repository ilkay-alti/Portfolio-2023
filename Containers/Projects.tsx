import React from "react";
import ProjectList from "@/Components/ProjectList";
const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center  ">
      <h1 className="mb-3 text-4xl font-bold text-[#F2F3F4]">Projects</h1>
      <h3 className="mb-6 max-w-lg text-center  text-lg text-[#919298]">
        I have worked on a wide range of projects. From web apps to android
        apps. Here are some of my projects.
      </h3>

      <ProjectList />
    </div>
  );
};

export default Projects;
