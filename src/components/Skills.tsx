import { FunctionComponent } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaPython,
  FaPhp,
  FaNodeJs,
} from "react-icons/fa";
import { DiDjango, DiLaravel, DiMongodb, DiMysql } from "react-icons/di";
import { SkillCard } from "./SkillCard";
export const Skills: FunctionComponent = ({
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <div className="skills container py-16">
      <div className="title text-5xl font-extrabold mb-16 text-center">
        SKILLS
      </div>
      <div className="text-2xl text-primary font-bold mb-4">
        Frontend technologies
      </div>
      <div className="grid gap-4">
        <SkillCard title="HTML 5" percentage={90} icon={FaHtml5} />
        <SkillCard title="CSS 3" percentage={95} icon={FaCss3Alt} />
        <SkillCard title="JavaScript" percentage={80} icon={FaJsSquare} />
      </div>
      <div className="text-2xl text-primary font-bold my-4">
        Backend technologies
      </div>
      <div className="grid gap-4">
        <SkillCard title="Python" percentage={80} icon={FaPython} />
        <SkillCard title="PHP" percentage={70} icon={FaPhp} />
        <SkillCard title="NodeJS" percentage={55} icon={FaNodeJs} />
      </div>
      <div className="text-2xl text-primary font-bold my-4">Frameworks</div>
      <div className="grid gap-4">
        <SkillCard
          title="React & React Native"
          percentage={75}
          icon={FaReact}
        />
        <SkillCard title="Django" percentage={70} icon={DiDjango} />
        <SkillCard title="Laravel" percentage={65} icon={DiLaravel} />
      </div>
      <div className="text-2xl text-primary font-bold my-4">Database</div>
      <div className="grid gap-4">
        <SkillCard title="MySQL" percentage={75} icon={DiMysql} />
        <SkillCard title="MongoDB" percentage={65} icon={DiMongodb} />
      </div>
    </div>
  );
};
