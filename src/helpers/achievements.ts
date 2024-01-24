import { WorkCardProps } from "@/components/WorkCard";
import lephenix from "@/images/lephenix.png";
import watapp from "@/images/watapp.png";
import uikit from "@/images/uikit.png";
import bmo from "@/images/bmo.png";
import challenge1 from "@/images/cover.png";
import { stacks } from "./stacks";
import { DiPhp } from "react-icons/di";
export const achievements: WorkCardProps[] = [
  
  {
    cover: challenge1,
    title: "Doctor Website (Figma to code)",
    links: [
      {
        name: `Open`,
        href: "https://figma-to-code-challenge-week1-jeansamist.vercel.app/",
      },{
        name: `Github`,
        href: "https://github.com/jeansamist/FigmaToCode-Challenge-Week1-Jeansamist",
      },
    ],
    stacks: [stacks[0]],
    description:
      "This is the result of developing a figma challenge model. The main problem I encountered here was the exact reproduction of the sizes presented on the model and the use of resources because as I was coding with React + Tailwind it was not easy to find exactly the same sizes.",
  },
  {
    cover: lephenix,
    title: "Le Phenix Website",
    links: [
      {
        name: `Open`,
        href: "https://lephenix.vercel.app/",
      },
    ],
    stacks: [stacks[0], stacks[2], stacks[4]],
    description:
      "Le Phenix is a renowned photography agency. They transform every moment into a timeless work of art, capturing emotion and beauty with every click. It therefore required a presence on the Internet through a website to broaden the communications of their services to customers.",
  },
  {
    cover: watapp,
    title: "Watapp",
    links: [
      {
        name: `Open`,
        href: "https://watapp.vercel.app/",
      },
      {
        name: `Github`,
        href: "https://github.com/jeansamist/watapp",
      },
    ],
    stacks: [
      stacks[0],
      {
        icon: DiPhp,
        title: "PHP",
      },
      stacks[5],
    ],
    description:
      "Watapp is a business and store management information system designed to simplify and optimize commercial operations. This centralized platform offers merchants and store owners a complete suite of management tools, from inventory tracking to sales management, customer management and performance monitoring.",
  },
  {
    cover: bmo,
    title: "BMO",
    links: [
      {
        name: `Github`,
        href: "https://github.com/jeansamist/BMOApp",
      },
    ],
    stacks: [stacks[1]],
    description:
      "BMO is an innovative dropshipping app that simplifies the online shopping experience. With a user-friendly and intuitive interface, BMO allows users to browse a wide selection of products from various suppliers without having to manage inventory. Through seamless integration with reputable suppliers, BMO offers a variety of products without worrying about logistical constraints.",
  },
  {
    cover: uikit,
    title: "Jeansamist UIkit",
    links: [
      {
        name: `Github`,
        href: "https://github.com/jeansamist/uikit-1",
      },
    ],
    stacks: [stacks[0]],
    description:
      "Watapp is a business and store management information system designed to simplify and optimize commercial operations. This centralized platform offers merchants and store owners a complete suite of management tools, from inventory tracking to sales management, customer management and performance monitoring.",
  },
];
