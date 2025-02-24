import Icon from "./Icon";
import { useTranslation } from "react-i18next";
import Card from "./Card";

interface ProjectData{
  title: string,
  descriptionKey: string,
}

interface Props{
  ref: React.RefObject<HTMLDivElement | null>;
  isVisible: boolean
}

export default function Projects({ref, isVisible}:Props) {
  const { t } = useTranslation();
  const projects : ProjectData[] = [
    {
      title: 'Portfolio',
      descriptionKey: 'portfolio'
    },
    {
      title: 'Blocker',
      descriptionKey: 'blocker'
    }
  ]
  return (
    <div
      ref={ref}
      className={`row-start-4 p-10 flex flex-col transition-opacity duration-700 ease-in ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <span className="flex items-center gap-5 text-4xl font-extrabold">
        <Icon name="folder" className="text-stone-50" />
        <span className="text-stone-50">{t("projects")}</span>
      </span>
      <div className="mt-5 flex flex-col items-center gap-5">
        {projects.map(p => <Project key={p.title} {...p}/>)}
      </div>
    </div>
  );
}

function Project({title, descriptionKey}: ProjectData){
  const { t } = useTranslation();
  return(
    <div className="w-3/4">    
      <Card title={title}>
        <p>{t(descriptionKey)}</p>      
      </Card>
    </div>
  )
}