import { WorkCardProps } from "../components/WorkCard";

export interface Service {
  title: string;
  shortDescription: string;
  description: string;
  stacks: number[];
  achievements?: WorkCardProps[];
}
