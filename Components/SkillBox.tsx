import { FC } from "react";

interface SkillBoxProps {
  skill: {
    title: string;
    skills: {
      name: string;
      image: string;
    }[];
  };
}

const SkillBox: FC<SkillBoxProps> = ({ skill }) => {
  return (
    <div className="flex flex-col items-center border gap-6 border-[#854CE6] rounded-2xl py-4 px-8 shadow-2xl shadow-[#854CE6] ">
      <h2 className="mb-4 text-3xl text-[#919298] font-extrabold">
        {skill.title}
      </h2>
      <div className="flex flex-wrap gap-3 mb-5 justify-center max-w-lg ">
        {skill.skills.map((skill, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-center border border-[#84858A] rounded-full px-6 py-4 text-base font-semibold gap-2"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-120 h-10 object-contain"
              />
              <p>{skill.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillBox;
