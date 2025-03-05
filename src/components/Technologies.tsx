import { useTranslation } from "react-i18next";
import Icon from "./Icon";
import ReactSvg from "../svgs/ReactSvg";
import React, { ReactNode } from "react";
import TypeScript from "../svgs/Typescript";
import JavaScript from "../svgs/Javascript";
import HTML5 from "../svgs/Html";
import TailwindCSS from "../svgs/Tailwind";
import Vite from "../svgs/Vite";
import Angular from "../svgs/Angular";
import Bootstrap from "../svgs/Bootstrap";
import Nodejs from "../svgs/Node";
import Net from "../svgs/Net";
import MicrosoftSQLServer from "../svgs/Sql";
import Expressjs from "../svgs/Express";
import PostgreSQL from "../svgs/Postgre";
import MongoDB from "../svgs/Mongo";
import Jest from "../svgs/Jest";
import CSSNew from "../svgs/Css";
import Prisma from "../svgs/Prisma";
import Auth0 from "../svgs/Auth0";
import ReactRouter from "../svgs/ReactRouter";
import Vitest from "../svgs/Vitest";

interface Props {
  ref: React.RefObject<HTMLDivElement | null>;
  isVisible: boolean;
}

export default function Technologies({ ref, isVisible }: Props) {
  const { t } = useTranslation();

  const frontend: { name: string; logo: React.JSX.Element }[] = [
    { name: "React", logo: <ReactSvg /> },
    { name: "Angular", logo: <Angular /> },
    { name: "TypeScript", logo: <TypeScript /> },
    { name: "JavaScript", logo: <JavaScript /> },
    { name: "CSS", logo: <CSSNew /> },
    { name: "Tailwind", logo: <TailwindCSS /> },
    { name: "Bootstrap", logo: <Bootstrap /> },
    { name: "Vite", logo: <Vite /> },
    { name: "HTML 5", logo: <HTML5 /> },
    { name: "React Router", logo: <ReactRouter /> },
    { name: "Vitest", logo: <Vitest /> },
  ];

  const backend: { name: string; logo: React.JSX.Element }[] = [
    { name: "Node", logo: <Nodejs /> },
    { name: "Express", logo: <Expressjs /> },
    { name: ".NET", logo: <Net /> },
    { name: "SQL", logo: <MicrosoftSQLServer /> },
    { name: "MongoDB", logo: <MongoDB /> },
    { name: "PostgreSQL", logo: <PostgreSQL /> },
    { name: "Prisma", logo: <Prisma /> },
    { name: "Auth0", logo: <Auth0 /> },
    { name: "Jest", logo: <Jest /> },
  ];

  return (
    <div
      ref={ref}
      className={`row-start-3 flex w-full flex-col items-start gap-10 p-10 transition-opacity duration-700 ease-in ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <span className="flex items-center gap-5 text-4xl font-extrabold">
        <Icon name="stacks" className="text-stone-50" />
        <span className="text-stone-50">{t("stack")}</span>
      </span>
      <div className="flex flex-col gap-5 w-full justify-center">
        <TechnologiesReel
          technologies={frontend}
          title="Frontend"
          iconName="web"
        />
        <TechnologiesReel
          technologies={backend}
          title="Backend"
          iconName="host"
        />
      </div>
    </div>
  );
}
interface TechnologiesReelProps {
  technologies: { name: string; logo: React.JSX.Element }[];
  iconName: string;
  title: string;
}

function TechnologiesReel({
  technologies,
  iconName,
  title,
}: TechnologiesReelProps) {
  return (
    <>
      <span className="flex items-center gap-5 text-2xl font-semibold text-amber-600">
        <Icon name={iconName} className="text-amber-600" />
        <span>{title}</span>
      </span>
      <div className="custom-scroll flex w-full snap-x gap-5 overflow-auto pb-5">
        {technologies.map((tech) => (
          <Technology key={tech.name} name={tech.name}>
            <span className="text-5xl">{tech.logo}</span>
          </Technology>
        ))}
      </div>
    </>
  );
}

interface TechnologyProps {
  name: string;
  children: ReactNode;
}

function Technology({ children, name }: TechnologyProps) {
  return (
    <div className="flex shrink-0 snap-center flex-col items-center justify-center gap-2 rounded-2xl border border-stone-800 bg-stone-900 p-5 transition-opacity duration-500 ease-in">
      {children}
      <span className="text-xl font-semibold text-stone-50">{name}</span>
    </div>
  );
}
