import { useRef } from "react";
import { useIsVisible } from "../hooks/useVisible";
import Icon from "./Icon";
import { useTranslation } from "react-i18next";
import Card from "./Card";

export default function Projects() {
  const ref = useRef(null);
  const isVisible = useIsVisible(ref);
  const { t } = useTranslation();

  return (
    <div
      ref={ref}
      className={`mt-8 flex flex-col transition-opacity duration-700 ease-in ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <span className="flex items-center gap-5 text-4xl font-extrabold">
        <Icon name="folder" className="text-stone-50" />
        <span className="text-stone-50">{t("projects")}</span>
      </span>
      <div className="mt-5 flex flex-col items-center gap-5">
        <div className="w-3/4">
          <Card title="Portfolio">
            <div>hola</div>
          </Card>
        </div>
        <div className="w-3/4">
          <Card title="Bloker">
            <div>hola</div>
          </Card>
        </div>
      </div>
    </div>
  );
}
