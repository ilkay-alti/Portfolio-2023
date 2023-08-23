import React from "react";
import { experiences } from "@/mock/mock";
import ExpreinceBox from "@/Components/ExperienceBox";

const Exprerience = () => {
  return (
    <div id="experience" className="p-1 ">
      <div className="flex flex-col items-center justify-center m-36">
        <h1 className="mb-3 text-4xl font-bold text-[#F2F3F4]">Experience</h1>
        <h3 className="max-w-lg text-center  text-lg text-[#919298]">
          My work experience as a software engineer and working on different
          companies and projects.
        </h3>
        {experiences.map((exp, i) => {
          return (
            <div key={i} className="flex flex-col mt-10">
              <ExpreinceBox exp={exp} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Exprerience;
