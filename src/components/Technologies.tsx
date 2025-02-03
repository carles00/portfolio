import { useTranslation } from "react-i18next";
import Icon from "./Icon";
import ReactSvg from "../svgs/ReactSvg";
import { ReactNode, useEffect, useRef } from "react";
import TypeScript from "../svgs/Typescript";
import JavaScript from "../svgs/Javascript";
import { useIsVisible } from "../hooks/useVisible";
import HTML5 from "../svgs/Html";
import CSS from "../svgs/Css";
import TailwindCSS from "../svgs/Tailwind";
import Vite from "../svgs/Vite";
import Angular from "../svgs/Angular";
import Bootstrap from "../svgs/Bootstrap";

interface Props {
  name: string;
  children: ReactNode;
}

function Technology({ children, name }: Props) {
  const ref = useRef(null);
  let isVisible = useIsVisible(ref);

  return (
    <div
      ref={ref}
      className={`flex shrink-0 snap-center flex-col items-center justify-center gap-2 rounded-2xl border border-stone-800 p-5 transition-opacity duration-500 ease-in ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      {children}
      <span className="text-2xl font-semibold text-stone-50">{name}</span>
    </div>
  );
}

export default function Technologies() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  let isVisible = useIsVisible(ref);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", () => {
        console.log(scrollRef.current?.scrollLeft);
      });
    }

    return () => {};
  }, []);

  const technologies: { name: string; logo: JSX.Element }[] = [
    { name: "React", logo: <ReactSvg /> },
    { name: "Angular", logo: <Angular /> },
    { name: "TypeScript", logo: <TypeScript /> },
    { name: "JavaScript", logo: <JavaScript /> },
    { name: "Tailwind", logo: <TailwindCSS /> },
    { name: "Bootstrap", logo: <Bootstrap /> },
    { name: "Vite", logo: <Vite /> },
    { name: "HTML 5", logo: <HTML5 /> },
    { name: "CSS 3", logo: <CSS /> },
  ];

  return (
    <div
      ref={ref}
      className={`mt-10 flex flex-col items-start gap-5 p-5 transition-opacity duration-700 ease-in ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <span className="flex items-center gap-5 text-4xl font-extrabold">
        <Icon name="stacks" className="text-stone-50" />
        <span className="text-stone-50">{t("stack")}</span>
      </span>
      <div
        ref={scrollRef}
        className="pb-5 flex w-full snap-x gap-5 overflow-x-scroll"
      >
        {technologies.map((tech) => (
          <Technology key={tech.name} name={tech.name}>
            <span className="text-5xl">{tech.logo}</span>
          </Technology>
        ))}
      </div>
    </div>
  );
}
