import { FC } from "react";

interface ExpreinceBoxProps {
  exp:
    | {
        id: number;
        img: string;
        role: string;
        company: string;
        date: string;
        desc: string;
        skills: string[];
      }
    | {
        id: number;
        img: string;
        role: string;
        company: string;
        date: string;
        desc: string;
        skills?: undefined;
      };
}

const ExpreinceBox: FC<ExpreinceBoxProps> = ({ exp }) => {
  return (
    <div className="group flex flex-col gap-6  shadow drop-shadow-2xl shadow-[#306ee8] px-4 py-3 max-w-2xl transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-200">
      <div className="flex gap-3 text-[#9C9DA2]">
        <img src={exp.img} alt={exp.company} className=" h-16 w-16 " />
        <div className="flex flex-col">
          <label className="text-lg font-semibold ">{exp.role}</label>
          <label className="text-sm font-medium text-[#707178]">
            {exp.company}
          </label>
          <label className="text-xs font-normal text-[#707178]">
            {exp.date}
          </label>
        </div>
      </div>
      <label className="line-clamp-3 group-hover:line-clamp-none">
        {exp.desc}
      </label>
      <label className="flex items-start ">
        <label className="mr-4">Skills:</label>
        <div className="flex flex-wrap">
          {exp.skills?.map((skill, i) => (
            <span
              key={i}
              className="flex  gap-2 max-w-xs text-[#707178] text-sm font-medium"
            >
              <span>•</span>
              {skill}
            </span>
          ))}
        </div>
      </label>
    </div>
  );
};

export default ExpreinceBox;
