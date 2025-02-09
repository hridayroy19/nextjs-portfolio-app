import { skillsData } from "../../../../Data/data";
import SkillCard from "./SkillCard";

const Skill = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0d0715] ">
      <h2 className="text-center text-3xl text-white font-semibold">
        {" "}
        My Skills
      </h2>
      <div className="mt-20 w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center ">
        {skillsData.map((skill) => {
          return (
            <div key={skill.id}>
              <SkillCard skill={skill} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skill;
