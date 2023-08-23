"use client";
import React, { FC, useState } from "react";
import { projects } from "@/mock/mock";
import ProjectBox from "./ProjectBox";

interface ProjectListProps {}

const ProjectList: FC<ProjectListProps> = ({}) => {
  const [selectedProject, setSelectedProject] = useState<string>("all");

  return (
    <>
      <div className="flex gap-6">
        <button
          className={`px-4 py-2  rounded-full border border-[#854CE6] ${
            selectedProject === "all" ? "bg-[#29223F]" : ""
          } `}
          onClick={() => setSelectedProject("all")}
        >
          All
        </button>
        <button
          className={`px-4 py-2  rounded-full border border-[#854CE6] ${
            selectedProject === "web" ? "bg-[#29223F]" : ""
          } `}
          onClick={() => setSelectedProject("web")}
        >
          Web
        </button>
        <button
          className={`px-4 py-2  rounded-full border border-[#854CE6] ${
            selectedProject === "mobile" ? "bg-[#29223F]" : ""
          } `}
          onClick={() => setSelectedProject("mobile")}
        >
          Mobile
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4 justify-center  ">
        {selectedProject === "all"
          ? projects.map((project, i) => {
              return <ProjectBox key={i} project={project} />;
            })
          : projects
              .filter((project) => project.category === selectedProject)
              .map((project, i) => {
                return <ProjectBox key={i} project={project} />;
              })}
      </div>
    </>
  );
};

export default ProjectList;
