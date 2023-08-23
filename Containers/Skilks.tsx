import React from "react";
import { skills } from "@/mock/mock";
import SkillBox from "@/Components/SkillBox";

const Skilks = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-5 px-60  ">
      <h1 className=" mb-3 text-4xl font-bold text-[#F2F3F4]">Skills</h1>
      <h3 className="max-w-xl text-center text-lg text-[#919298]">
        Here are some of my skills on which I have been working on for the past
        2 years.
      </h3>
      <div className="grid grid-cols-2 gap-24 mt-20  text-[#919298]">
        {skills.map((skill, index) => {
          return <SkillBox key={index} skill={skill} />;
        })}
      </div>
    </div>
  );
};

export default Skilks;
