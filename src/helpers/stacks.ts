import { StackCardProps } from "@/components/StackCard";
import {
  DiDjango,
  DiMongodb,
  DiMysql,
  DiNodejs,
  DiReact,
} from "react-icons/di";

export const stacks: StackCardProps[] = [
  {
    title: "ReactJS",
    icon: DiReact,
  },
  {
    title: "React Native",
    icon: DiReact,
  },
  {
    title: "NodeJS",
    icon: DiNodejs,
  },
  {
    title: "Django",
    icon: DiDjango,
  },
  {
    title: "MongoDB",
    icon: DiMongodb,
  },
  {
    title: "MySQL",
    icon: DiMysql,
  },
];
