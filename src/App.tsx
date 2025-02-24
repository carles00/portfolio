import Links from "./components/Links";
import Presentation from "./components/Presentation";
import Experience from "./components/Experience";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";
import { useRef } from "react";
import { useIsVisible } from "./hooks/useVisible";

function App() {
  const presentationRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const presentationIsVisible = useIsVisible(presentationRef);
  const experienceIsVisible = useIsVisible(experienceRef);
  const techIsVisible = useIsVisible(techRef);
  const projectsIsVisible = useIsVisible(projectsRef);

  return (
    <>
      <div className="grid grid-cols-1 grid-rows-[100vh_100vh_100vh_100vh]">
        <Links />
        <Sidebar
          home={presentationRef}
          work={experienceRef}
          tech={techRef}
          projects={projectsRef}
          homeVisible = {presentationIsVisible}
          workVisible = {experienceIsVisible}
          techVisible = {techIsVisible}
          projectsVisible = {projectsIsVisible}
        />
        <Presentation ref={presentationRef} />
        <Experience ref={experienceRef} isVisible={experienceIsVisible} />
        <Technologies ref={techRef} isVisible={techIsVisible} />
        <Projects ref={projectsRef} isVisible={projectsIsVisible} />
      </div>
    </>
  );
}

export default App;
