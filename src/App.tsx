import "./App.css";
import profilePicture from "./assets/profile.jpeg";
import Github from "./svgs/Github";
import Gmail from "./svgs/Gmail";
import LinkedIn from "./svgs/Linkedin";

function App() {
  return (
    <>
      <div className="first-page">
        <article className="greetings">
          <p className="appear-left">
            Hi! My name is <b className="highlight">Carles</b> and I am a
            Frontend Developer specialized in React.
          </p>
        </article>
        <article className="profile">
          <img className="profilePicture" src={profilePicture} alt="Carles Gallardo Ramirez"/>
          <div className="links">
            <a className="linkedin" href="https://www.linkedin.com/in/carles-gallardo-ramirez/" target="_blank">
              <LinkedIn/>
            </a>
            <a className="github" href="https://github.com/carles00" target="_blank">
              <Github/>
            </a>
            <a className="gmail" href="mailto:carles.gallardo00@gmail.com">
              <Gmail/>
            </a>
          </div>
        </article>
      </div>
    </>
  );
}

export default App;
