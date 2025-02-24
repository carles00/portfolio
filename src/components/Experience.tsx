import { useTranslation } from "react-i18next";
import Card from "./Card";
import Icon from "./Icon";

interface Props {
  ref: React.RefObject<HTMLDivElement | null>;
  isVisible: boolean;
}

export default function Experience({ ref, isVisible }: Props) {
  const { t } = useTranslation();

  return (
    <div
      ref={ref}
      className={`row-start-2 flex flex-col p-5 opacity-0 transition-opacity duration-700 ease-in ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="grid grid-cols-2">
        <div className="col-start-1 flex flex-col gap-10 p-5">
          <span className="flex items-center gap-5 text-4xl font-extrabold">
            <Icon name="work" className="text-stone-50" />
            <span className="text-stone-50">{t("work")}</span>
          </span>
          <Card
            title={t("itequia")}
            location="Itequia"
            timeRange={
              <>
                <Icon name="calendar_month" className="text-amber-700" />
                {t("itequiaTime")}
              </>
            }
          >
            <div>{t("itequiaText")}</div>
          </Card>
        </div>
        <div className="col-start-2 flex flex-col gap-10 p-5">
          <span className="flex items-center gap-5 text-4xl font-extrabold">
            <Icon name="School" className="text-stone-50" />
            <span className="text-stone-50">{t("education")}</span>
          </span>
          <Card
            title={t("degree")}
            location="Universitat Pompeu Fabra"
            timeRange={
              <>
                <Icon name="calendar_month" className="text-amber-700" />
                2018 - 2023
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
