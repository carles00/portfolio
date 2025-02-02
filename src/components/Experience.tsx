import { useTranslation } from "react-i18next";
import Card from "./Card";
import Icon from "./Icon";

export default function Experience() {
  const {t} = useTranslation()
  return (
    <div className="mt-50 flex flex-col">
      <div className="grid grid-cols-2">
        <div className="col-start-1 flex flex-col gap-5 p-5">
          <span className="flex items-center gap-5 text-4xl font-extrabold">
            <Icon name="work" className="text-stone-50" />
            <span className="text-neutral-50">{t("work")}</span>
          </span>
          <Card title="Itequia" subtitle={t("itequia")}>
            <div>{t("itequiaText")}</div>
          </Card>
        </div>
        <div className="col-start-2 flex flex-col gap-5 p-5">
          <span className="flex items-center gap-5 text-4xl font-extrabold">
            <Icon name="School" className="text-stone-50" />
            <span className="text-neutral-50">{t('education')}</span>
          </span>
          <Card title='Universitat Pompeu Fabra' subtitle={t("degree")}>
            <div>...</div>
          </Card>
        </div>
      </div>
    </div>
  );
}
