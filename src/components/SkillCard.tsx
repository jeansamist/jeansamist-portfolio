import { Card } from "./ui/card";
import { CircularProgressBar } from "./CircularProgress";
import { CardHeader, CardContent } from "./ui/card";
import { FunctionComponent } from "react";
import { Skill } from "@/types/Skill";
import { IconType } from "react-icons";
import { Folder } from "lucide-react";
import { Progress } from "./ui/progress";

export const SkillCard: FunctionComponent<Skill & { icon: IconType }> = ({
  title,
  percentage,
  icon: Icon,
}) => {
  return (
    <Card className="">
      <CardContent className="flex gap-4 p-4 px-6">
        <div className="w-14 h-14 hidden md:flex justify-center items-center font-bold text-xl text-center leading-[0]">
          {percentage}%
        </div>
        <div className="w-[calc(100%-2.5rem-1rem)] md:w-[calc(100%-7rem-2rem)] flex flex-col justify-between">
          <div className="font-bold text-xl">{title}</div>
          <Progress value={percentage} />
        </div>
        <div className="w-14 h-14 flex justify-center items-center text-primary">
          <Icon
            size={50}
            // className="flex justify-center items-center leading-[1]"
          />
        </div>
      </CardContent>
    </Card>
  );
  // return (
  //   <Card className="relative overflow-hidden">
  //     <CardHeader className="flex flex-row justify-between items-center relative z-10">
  //       <div className="text-lg font-bold">{title}</div>
  //       <div className="flex gap-2 items-center text-muted-foreground">
  //         <Folder size={18} />
  //         <div>Projects</div>
  //       </div>
  //     </CardHeader>
  //     <CardContent className=" relative z-10">
  //       <div className="flex gap-4 w-full">
  //         <div className="w-[calc(100%-100px-1rem)] flex items-center">
  //           <div className="text-6xl font-extrabold">
  //             {percentage}
  //             <span className="text-primary">%</span>
  //           </div>
  //         </div>
  //         <CircularProgressBar
  //           progress={percentage}
  //           label={<Icon size={30} className="text-primary" />}
  //           width={100}
  //         />
  //       </div>
  //     </CardContent>
  //     <div className="opacity-10 text-primary">
  //       {/* <Icon size={150} className="absolute top-[-40%] left-8 z-0" /> */}
  //       <Icon size={150} className="absolute bottom-[-40%] left-8 z-0" />
  //     </div>
  //   </Card>
  // );
};
