import Links from "./components/Links";
import Presentation from "./components/Presentation";
import Experience from "./components/Experience";

function App() {
  
  return (
    <>
      <div className="flex flex-col mt-30">
        <Presentation/>
        <Links/>
        <Experience/>
      </div>
    </>
  );
}

export default App;
