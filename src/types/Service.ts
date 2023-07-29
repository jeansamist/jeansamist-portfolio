import { StaticImageData } from "next/image";
import { ReactNode } from "react";

type Service = {
  name: string | ReactNode;
  image: StaticImageData;
  description: ReactNode;
};
export default Service;
