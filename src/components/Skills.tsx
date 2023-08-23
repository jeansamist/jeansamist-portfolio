import Image from "next/image";
import { FunctionComponent } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { CircularProgressBar } from "./CircularProgress";
import { AiFillHtml5 } from "react-icons/ai";
import { SkillCard } from "./SkillCard";
export const Skills: FunctionComponent = ({
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  const percentage = 66;
  return (
    <div className="skills container py-16">
      <div className="title text-5xl font-extrabold mb-16 text-center">
        SKILLS
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        <SkillCard title="HTML" percentage={percentage} icon={AiFillHtml5} />
        <SkillCard title="CSS" percentage={percentage} icon={AiFillHtml5} />
      </div>
    </div>
  );
};
