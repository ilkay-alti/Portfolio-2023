import Image from "next/image";
import React, { FC } from "react";

interface ProjectBoxProps {
  project: {
    id: number;
    title: string;
    date: string;
    description: string;
    image: string;
    tags: string[];
    category: string;
    github: string;
    webapp: string;
  };
}

const ProjectBox: FC<ProjectBoxProps> = ({ project }) => {
  return (
    <div className="flex flex-col w-80  rounded-xl mt-10 px-5 py-6 bg-[#1B1B2B] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-400">
      <img
        src={project.image}
        alt={project.title}
        className="object-cover w-full max-h-44 max-w-72 rounded-2xl"
      />
      <div className="flex flex-wrap py-4">
        {project.tags.map((tag, i) => {
          return (
            <div
              key={i}
              className="rounded-full px-2 py-1 bg-purple-950 opacity-80"
            >
              <label className="font-normal text-xs text-white opacity-100">
                {tag}
              </label>
            </div>
          );
        })}
      </div>
      <label className="text-[#B1B2B3] text-sm font-semibold">
        {project.title}
      </label>
      <label className="text-[#B1B2B380] text-[12px] font-normal ">
        {project.date}
      </label>
      <label className="line-clamp-3 text-[#B1B2B380] font-normal mt-2">
        {project.description}
      </label>
    </div>
  );
};

export default ProjectBox;
