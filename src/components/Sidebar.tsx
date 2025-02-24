import { useEffect, useState } from "react";
import Icon from "./Icon";

interface Props {
  home: React.RefObject<HTMLElement | null>;
  work: React.RefObject<HTMLElement | null>;
  tech: React.RefObject<HTMLElement | null>;
  projects: React.RefObject<HTMLElement | null>;
  homeVisible: boolean;
  workVisible: boolean;
  techVisible: boolean;
  projectsVisible: boolean;
}

export default function Sidebar({
  home,
  work,
  tech,
  projects,
  homeVisible,
  workVisible,
  techVisible,
  projectsVisible,
}: Props) {
  const [highlightIcon, setHighlight] = useState(0);

  const scrollHome = () => {
    home.current?.scrollIntoView();
  };

  const scrollWork = () => {
    work.current?.scrollIntoView();
  };

  const scrollTech = () => {
    tech.current?.scrollIntoView();
  };

  const scrollProjects = () => {
    projects.current?.scrollIntoView();
  };

  useEffect(() => {
    if(homeVisible){
      setHighlight(0)
    }
    if(workVisible){
      setHighlight(1)
    }
    if(techVisible){
      setHighlight(2)
    }
    if(projectsVisible){
      setHighlight(3)
    }
  }, [homeVisible, workVisible, techVisible, projectsVisible]);

  return (
    <div className="fixed top-0 left-0 flex h-full w-20 py-10">
      <div className="timeline flex flex-col items-center justify-around">
        <SidebarButton iconName="home" onClick={scrollHome} highlight={highlightIcon === 0}/>
        <SidebarButton iconName="work" onClick={scrollWork} highlight={highlightIcon === 1}/>
        <SidebarButton iconName="stacks" onClick={scrollTech} highlight={highlightIcon === 2}/>
        <SidebarButton iconName="folder" onClick={scrollProjects} highlight={highlightIcon === 3}/>
      </div>
    </div>
  );
}
interface SidebarButtonProps {
  iconName: string;
  onClick: () => void;
  highlight: boolean;
}

function SidebarButton({ iconName, onClick, highlight }: SidebarButtonProps) {
  return (
    <div
      className={`z-1 flex items-center justify-center bg-black p-2  ${highlight? 'text-amber-600': 'text-stone-50'}`}
      onClick={() => onClick()}
    >
      <Icon
        name={iconName}
        className="z-1 transition duration-100 hover:scale-125 hover:cursor-pointer hover:text-amber-700"
      />
    </div>
  );
}
