import "./App.css";
import profilePicture from "./assets/profile.jpeg";

function App() {
  return (
    <>
      <div className="first-page">
        <article className="greetings">
          <p>
            Hi! my name is <b className="highlight">Carles</b> and I am a
            Frontend Developer specialized in React.
          </p>
        </article>
        <article className="profile">
          <img className="profilePicture" src={profilePicture} alt="" />
        </article>
      </div>
    </>
  );
}

export default App;
