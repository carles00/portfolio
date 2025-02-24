import { useTranslation } from "react-i18next";
import profilePicture from "../assets/profile.jpeg";
import { useState } from "react";
import Icon from "./Icon";

interface Props{
  ref: React.RefObject<HTMLElement | null>
}

export default function Presentation({ref}: Props) {
  const { t } = useTranslation();
  const [showAboutMe, setShowAboutMe] = useState(false);

  const toggleShowAboutMe = () => {
    setShowAboutMe((currentValue) => !currentValue);
  };

  return (
    <section ref={ref} className="row-start-1 grid h-full grid-cols-[3fr_2fr]">
      <div className="col-start-1 flex flex-col justify-center gap-2 px-10">
        <span className="text-5xl font-extrabold text-amber-600">
          {t("title")}
        </span>
        <span className="text-2xl text-neutral-50">
          {t("presentation1")}{" "}
          <span
            onClick={() => toggleShowAboutMe()}
            className="inline-flex items-center font-bold text-amber-600 hover:cursor-pointer"
          >
            Carles
            <Icon
              name="keyboard_arrow_down"
              className={`transition-transform ${showAboutMe ? "rotate-180" : ""}`}
            />
          </span>{" "}
          {t("presentation2")}
        </span>
        <div className="relative flex">
          <div
            className={`absolute rounded-2xl border border-stone-800 p-3 text-neutral-50 ${showAboutMe ? "flex" : "hidden"}`}
          >
            Hi hello wassup
          </div>
        </div>
      </div>
      <div className="col-start-2 flex justify-center items-center">
        <div>
          <img
            className="rounded-full object-scale-down"
            src={profilePicture}
            alt="Carles Gallardo Ramirez"
          />
        </div>
      </div>
    </section>
  );
}
