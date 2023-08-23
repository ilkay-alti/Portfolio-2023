import React from "react";
import { education } from "@/mock/mock";
import EducationBox from "@/Components/EducarionBox";

const Education = () => {
  return (
    <div id="education" className="pt-1  ">
      <div className="flex flex-col items-center justify-center m-36">
        <h1 className="mb-3 text-4xl font-bold text-[#F2F3F4]">Education</h1>
        <h3 className="max-w-lg text-center  text-lg text-[#919298] pb-20">
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.
        </h3>
        <div className="flex flex-col gap-6">
          {education.map((edu, i) => {
            return <EducationBox edu={edu} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Education;
