import { StaticImageData } from "next/image";

export interface Service {
  title: string;
  shortDescription: string;
  description: string;
  image: StaticImageData | string;
}
