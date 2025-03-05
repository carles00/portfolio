import Icon from "./Icon";
import { useTranslation } from "react-i18next";
import Card from "./Card";

import portfolioImg from "../assets/portfolio.png";
import blockerImg from "../assets/blocker.png";
import { ReactNode } from "react";
import ReactSvg from "../svgs/ReactSvg";
import TypeScript from "../svgs/Typescript";
import TailwindCSS from "../svgs/Tailwind";
import CSSNew from "../svgs/Css";
import Vite from "../svgs/Vite";
import Nodejs from "../svgs/Node";
import PostgreSQL from "../svgs/Postgre";
import Prisma from "../svgs/Prisma";
import Expressjs from "../svgs/Express";
import Auth0 from "../svgs/Auth0";
import ReactRouter from "../svgs/ReactRouter";
import Vitest from "../svgs/Vitest";

interface ProjectData {
  title: string;
  descriptionKey: string;
  image: string;
  technologies: ReactNode[];
}

interface Props {
  ref: React.RefObject<HTMLDivElement | null>;
  isVisible: boolean;
}

export default function Projects({ ref, isVisible }: Props) {
  const { t } = useTranslation();
  const projects: ProjectData[] = [
    {
      title: "Portfolio",
      descriptionKey: "portfolio",
      image: portfolioImg,
      technologies: [
        <ReactSvg />,
        <TypeScript />,
        <TailwindCSS />,
        <CSSNew />,
        <Vite />,
      ],
    },
    {
      title: "Blocker",
      descriptionKey: "blocker",
      image: blockerImg,
      technologies: [
        <ReactSvg />,
        <TypeScript />,
        <TailwindCSS />,
        <CSSNew />,
        <Vite />,
        <ReactRouter />,
        <Nodejs />,
        <Expressjs />,
        <PostgreSQL />,
        <Prisma />,
        <Auth0 />,
        <Vitest />,
      ],
    },
  ];
  return (
    <div
      ref={ref}
      className={`row-start-4 flex flex-col gap-10 p-10 transition-opacity duration-700 ease-in ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <span className="flex items-center gap-5 text-4xl font-extrabold">
        <Icon name="folder" className="text-stone-50" />
        <span className="text-stone-50">{t("projects")}</span>
      </span>
      <div className="mt-5 flex flex-col items-center gap-5">
        {projects.map((p) => (
          <Project key={p.title} {...p} />
        ))}
      </div>
    </div>
  );
}

function Project({ title, descriptionKey, image, technologies }: ProjectData) {
  const { t } = useTranslation();
  return (
    <div className="w-full">
      <Card title={title}>
        <div className="flex gap-2">
          <div className="flex flex-3 flex-col justify-between gap-10 text-lg">
            <p>{t(descriptionKey)}</p>
            <div className="flex flex-col gap-5 text-xl text-amber-600">
              {t("projectTech")}
              <div className="flex flex-wrap gap-5 text-3xl">
                {technologies.map((t) => t)}
              </div>
            </div>
          </div>
          <div className="flex-2">
            <img src={image} alt={title} />
          </div>
        </div>
      </Card>
    </div>
  );
}
