import { FunctionComponent } from "react";
import Image, { StaticImageData } from "next/image";
export type ExperienceCardProps = {
  logo: string | StaticImageData;
  agency: string;
  title: string;
  description: string;
  start: string | Date;
  end?: string | Date;
};

export const ExperienceCard: FunctionComponent<ExperienceCardProps> = ({
  logo,
  agency,
  title,
  description,
  start,
  end,
}) => (
  <div className="p-8 border-b hover:border-zinc-300 border-transparent hidden-card flex flex-col space-y-4">
    <div className="flex gap-4 sm:flex-row flex-col sm:items-center">
      <div className="bg-zinc-100 aspect-square w-full sm:w-32">
        <Image
          src={logo}
          width={128}
          height={128}
          className="w-full h-full object-contain"
          alt={agency + " logo"}
        />
      </div>
      <div className="h-32 space-y-4 w-full sm:w-[calc(100%-128px-16px)]">
        <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
        <div className="text-sm text-zinc-500">
          At <span className="font-semibold">{agency}</span>
        </div>
        <div className="text-sm text-zinc-500">
          From <span className="font-semibold">{start.toString()}</span>{" "}
          {end && (
            <>
              to <span className="font-semibold">{end.toString()}</span>
            </>
          )}
        </div>
      </div>
    </div>
    <div>{description}</div>
  </div>
);
