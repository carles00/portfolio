import { useTranslation } from "react-i18next";
import Icon from "./Icon";
import ReactSvg from "../svgs/ReactSvg";
import React, { ReactNode, useRef } from "react";
import TypeScript from "../svgs/Typescript";
import JavaScript from "../svgs/Javascript";
import { useIsVisible } from "../hooks/useVisible";
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

interface Props{
  ref: React.RefObject<HTMLDivElement | null>
  isVisible: boolean
}

export default function Technologies({ref, isVisible}:Props) {
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
  ];

  const backend: { name: string; logo: React.JSX.Element }[] = [
    { name: "Node", logo: <Nodejs /> },
    { name: "Express", logo: <Expressjs /> },
    { name: ".NET", logo: <Net /> },
    { name: "SQL", logo: <MicrosoftSQLServer /> },
    { name: "MongoDB", logo: <MongoDB /> },
    { name: "PostgreSQL", logo: <PostgreSQL /> },
    { name: "Jest", logo: <Jest /> },
  ];

  return (
    <div
      ref={ref}
      className={`row-start-3 flex flex-col items-start gap-5 p-10 transition-opacity duration-700 ease-in ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <span className="flex items-center gap-5 text-4xl font-extrabold">
        <Icon name="stacks" className="text-stone-50" />
        <span className="text-stone-50">{t("stack")}</span>
      </span>
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
      <span className="mt-10 flex items-center gap-5 text-2xl font-semibold text-amber-600">
        <Icon name={iconName} className="text-amber-600" />
        <span>{title}</span>
      </span>
      <div className="custom-scroll flex w-full snap-x gap-5 overflow-x-auto pb-5">
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
  const ref = useRef(null);
  let isVisible = useIsVisible(ref);

  return (
    <div
      ref={ref}
      className={`flex shrink-0 snap-center flex-col items-center justify-center gap-2 rounded-2xl border border-stone-800 bg-stone-900 p-5 transition-opacity duration-500 ease-in ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      {children}
      <span className="text-xl font-semibold text-stone-50">{name}</span>
    </div>
  );
}
