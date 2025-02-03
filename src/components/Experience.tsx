import { useTranslation } from "react-i18next";
import Card from "./Card";
import Icon from "./Icon";
import { useRef } from "react";
import { useIsVisible } from "../hooks/useVisible";

export default function Experience() {
  const { t } = useTranslation();
  const workRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const isWorkVisible = useIsVisible(workRef);
  const isEducationVisible = useIsVisible(educationRef);

  return (
    <div className="mt-70 flex flex-col">
      <div className="grid grid-cols-2">
        <div ref={workRef} className={`col-start-1 flex flex-col gap-5 p-5 transition-opacity ease-in duration-700 opacity-0 ${isWorkVisible? 'opacity-100' : 'opacity-0'}`}>
          <span className="flex items-center gap-5 text-4xl font-extrabold">
            <Icon name="work" className="text-stone-50" />
            <span className="text-stone-50">{t("work")}</span>
          </span>
          <Card
            title="Itequia"
            subtitle={t("itequia")}
            timeRange={
              <>
                <Icon name="calendar_month" className="text-teal-600" />
                {t("itequiaTime")}
              </>
            }
          >
            <div>{t("itequiaText")}</div>
          </Card>
        </div>
        <div ref={educationRef} className={`col-start-2 flex flex-col gap-5 p-5 transition-opacity ease-in duration-700 opacity-0 ${isEducationVisible? 'opacity-100' : 'opacity-0'}`}>
          <span className="flex items-center gap-5 text-4xl font-extrabold">
            <Icon name="School" className="text-stone-50" />
            <span className="text-stone-50">{t("education")}</span>
          </span>
          <Card
            title="Universitat Pompeu Fabra"
            subtitle={t("degree")}
            timeRange={
              <>
                <>
                  <Icon name="calendar_month" className="text-teal-600" />
                  2018 - 2023
                </>
              </>
            }
          >
            <div>...</div>
          </Card>
        </div>
      </div>
    </div>
  );
}
