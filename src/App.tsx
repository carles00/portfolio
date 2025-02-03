import Links from "./components/Links";
import Presentation from "./components/Presentation";
import Experience from "./components/Experience";
import Technologies from "./components/Technologies";

function App() {
  
  return (
    <>
      <div className="flex flex-col mt-30">
        <Presentation/>
        <Links/>
        <Experience/>
        <Technologies/>
      </div>
    </>
  );
}

export default App;
