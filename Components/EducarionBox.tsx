import Education from "@/Containers/Education";
import Image from "next/image";
import React, { FC } from "react";

interface EducationBoxProps {
  edu: {
    id: number;
    img: string;
    school: string;
    date: string;
    grade: string;
    desc: string;
    degree: string;
  };
}

const EducationBox: FC<EducationBoxProps> = ({ edu }) => {
  return (
    <div className="group flex flex-col gap-6  shadow drop-shadow-2xl shadow-[#306ee8] px-4 py-3 max-w-2xl transition ease-in-out  duration-200 text-[#F2F3F499]">
      <div className="flex gap-3 text-[#9C9DA2]">
        <img src={edu.img} alt={edu.school} className=" h-16 w-16 " />
        <div className="flex flex-col text-[#9C9DA2]">
          <label className="text-lg font-semibold ">{edu.school}</label>
          <label className="text-sm font-medium text-[#707178]">
            {edu.degree}
          </label>
          <label className="text-xs font-normal text-[#707178]">
            {edu.date}
          </label>
        </div>
      </div>
      <label className="flex items-start ">
        <label className="mr-4 text-[#B1B2B399] text-sm ">
          Grade: {edu.grade}
        </label>
      </label>
      <label className="line-clamp-3 group-hover:line-clamp-none">
        {edu.desc}
      </label>
    </div>
  );
};

export default EducationBox;
