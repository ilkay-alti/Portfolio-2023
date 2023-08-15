import React from "react";
import { skills } from "@/mockdata/mock";
import SkillBox from "@/Components/SkillBox";

const Skilks = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-5 px-60 gap-3 ">
      <h1 className=" text-4xl font-bold text-[#F2F3F4]">Skills</h1>
      <div className="flex flex-col items-center text-lg text-[#919298]">
        <h3>
          Here are some of my skills on which I have been working on for the
        </h3>
        <h3>past 2 years.</h3>
      </div>
      <div className="grid grid-cols-2 gap-24">
        {skills.map((skill, index) => {
          return <SkillBox key={index} skill={skill} />;
        })}
      </div>
    </div>
  );
};

export default Skilks;
