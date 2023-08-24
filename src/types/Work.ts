import { StaticImageData } from "next/image";
import { Skill } from "./Skill";

export interface Work {
  title: string;
  short_title: string;
  skills: Skill[];
  logo?: StaticImageData | string;
  cover: StaticImageData | string;
}
