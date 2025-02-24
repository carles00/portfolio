import { useTranslation } from "react-i18next";
import profilePicture from "../assets/profile.jpeg";
import Icon from "./Icon";

import pdfEN from "../assets/data/cv_en.pdf"
import pdfES from "../assets/data/cv_es.pdf"

interface Props {
  ref: React.RefObject<HTMLElement | null>;
}

export default function Presentation({ ref }: Props) {
  const { t } = useTranslation();

  return (
    <section ref={ref} className="row-start-1 grid h-full grid-cols-[3fr_2fr]">
      <div className="col-start-1 flex flex-col  p-10">
        <div className="flex flex-3 flex-col gap-3 justify-center">
          <span className="text-5xl font-extrabold text-amber-600">
            {t("title")}
          </span>
          <span className="text-2xl text-neutral-50">
            {t("presentation1")}{" "}
            <span className="inline-flex items-center font-bold text-amber-600">
              Carles
            </span>{" "}
            {t("presentation2")}
          </span>
        </div>
        <div className="flex gap-5 text-stone-50">
          <a
            className="flex items-center justify-center hover:text-amber-600"
            href={pdfEN}
            download="Carles Gallardo CV"
          >
            Download CV (ENG) <Icon name="download" className="" />
          </a>
          <a
            className="flex items-center justify-center hover:text-amber-600"
            href={pdfES}
            download="Carles Gallardo CV"
          >
            Descargar CV (ES) <Icon name="download" className="" />
          </a>
        </div>
      </div>
      <div className="col-start-2 flex items-center justify-center">
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
