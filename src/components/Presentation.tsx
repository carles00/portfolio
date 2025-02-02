import { useTranslation } from "react-i18next";
import profilePicture from "../assets/profile.jpeg";

export default function Presentation() {
  const { t } = useTranslation();
  return (
    <section className="h-full grid grid-cols-[3fr_2fr] pb-5">
      <div className="gap flex flex-col justify-center p-10 col-start-1">
        <span className="text-5xl font-extrabold text-teal-500">
          {t("title")}
        </span>
        <span className="text-2xl text-neutral-50">
          {t("presentation1")} <span className="font-bold text-teal-500">Carles</span> {t('presentation2')}
        </span>
      </div>
      <div className="flex justify-center col-start-2">
        <img
          className="w-auto rounded-full"
          src={profilePicture}
          alt="Carles Gallardo Ramirez"
        />
      </div>
    </section>
  );
}
