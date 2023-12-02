import { Service } from "@/types/Service";
import { achievements } from "./achievements";

export const services: Service[] = [
  {
    title: "Websites Development",
    stacks: [0, 2, 4],
    achievements: [achievements[0]],
    shortDescription: "Websites, from simple landing pages to complex sites.",
    description: `Creation of personalized websites, ranging from showcase sites to online shops, using modern web technologies to guarantee an optimal user experience.`,
  },
  {
    title: "Mobile Development",
    stacks: [1, 2, 4],
    achievements: [achievements[2]],
    shortDescription: `Mobile applications for iOS and Android platforms.`,
    description: `Design and creation of mobile applications for iOS and Android platforms, providing usability and advanced functionality`,
  },
  {
    title: "APIs Development",
    stacks: [2, 3, 4, 5],
    achievements: [achievements[1]],
    shortDescription: `Creation of APIs to enable communication between different applications`,
    description: `Creation of application programming interfaces (APIs) to enable communication between different applications and services.`,
  },
  {
    title: "Information System Development",
    stacks: [0, 2, 3, 4, 5],
    achievements: [achievements[1]],
    shortDescription: `Information system for easy business management`,
    description: `Focusing on custom information system development, I create robust solutions that automate key processes, facilitate data collection and analysis, and improve decision-making.`,
  },
];
