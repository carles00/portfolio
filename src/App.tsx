import Links from "./components/Links";
import Presentation from "./components/Presentation";
import Experience from "./components/Experience";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";

function App() {
  
  return (
    <>
      <div className="flex flex-col mt-30">
        <Presentation/>
        <Links/>
        <Experience/>
        <Technologies/>
        <Projects/>
      </div>
    </>
  );
}

export default App;
