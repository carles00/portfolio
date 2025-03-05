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
            <div>
              <p>{t("itequiaText")}</p>
              <ul className="list-disc ps-5">
                <li className="mt-1">{t("itequiaText2")}</li>
                <li className="mt-1">{t("itequiaText3")}</li>
                <li className="mt-1">{t("itequiaText4")}</li>
              </ul>
            </div>
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
            <div>
              <p className="">{t("upfText")}</p>
              <ul className="list-disc ps-5">
                <li className="mt-1">
                  <span className="flex items-center gap-2">
                    {t("thesis")}
                    <a
                      className="inline-flex text-amber-600"
                      href="https://github.com/FuBIntLab/OpenVR_HMD-less_Tracking_Library"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon name="link" />
                      OpenVR HMD-less tracking
                    </a>
                  </span>
                </li>
                <li className="mt-1">
                  <span className="flex items-center gap-2">
                    {t('videogame')}
                    <a
                      className="inline-flex text-amber-600"
                      href="https://github.com/carles00/Metal-Birlant"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon name="link" />
                      Metal Birlant
                    </a>
                  </span>
                </li>
                <li className="mt-1">
                  <span className="inline-flex items-center gap-2">
                    {t('3dChat')}
                    <a
                      className="inline-flex text-amber-600"
                      href="https://github.com/carles00/3D-chat"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon name="link" />
                      3D chat
                    </a>
                  </span>
                </li>
                <li className="mt-1">
                  <span className="flex items-center gap-2">
                    {t('videogame')}
                    <a
                      className="inline-flex text-amber-600"
                      href="https://github.com/andreucastano01/TJE_Framework"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon name="link" />
                      Racing game using an OpenGL engine.
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
