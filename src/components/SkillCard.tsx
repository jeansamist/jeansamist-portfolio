import { Card } from "./ui/card";
import { CircularProgressBar } from "./CircularProgress";
import { CardHeader, CardContent } from "./ui/card";
import { FunctionComponent } from "react";
import { Skill } from "@/types/Skill";
import { IconType } from "react-icons";
import { Folder } from "lucide-react";

export const SkillCard: FunctionComponent<Skill & { icon: IconType }> = ({
  title,
  percentage,
  icon: Icon,
}) => {
  return (
    <Card className="relative overflow-hidden">
      <CardHeader className="flex flex-row justify-between items-center relative z-10">
        <div className="text-lg font-bold">{title}</div>
        <div className="flex gap-2 items-center text-muted-foreground">
          <Folder size={18} />
          <div>Projects</div>
        </div>
      </CardHeader>
      <CardContent className=" relative z-10">
        <div className="flex gap-4 w-full">
          <div className="w-[calc(100%-100px-1rem)] flex items-center">
            <div className="text-6xl font-extrabold">
              {percentage}
              <span className="text-primary">%</span>
            </div>
          </div>
          <CircularProgressBar
            progress={percentage}
            label={<Icon size={30} className="text-primary" />}
            width={100}
          />
        </div>
      </CardContent>
      <div className="opacity-10 text-primary">
        {/* <Icon size={150} className="absolute top-[-40%] left-8 z-0" /> */}
        <Icon size={150} className="absolute bottom-[-40%] left-8 z-0" />
      </div>
    </Card>
  );
};
