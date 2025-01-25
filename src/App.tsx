import "./App.css";
import profilePicture from "./assets/profile.jpeg";
import Github from "./svgs/Github";
import Gmail from "./svgs/Gmail";
import LinkedIn from "./svgs/Linkedin";

function App() {
  return (
    <>
      <article className="greetings">
        <p className="appear-left presentation">
          Hi! My name is <b className="highlight">Carles</b> and I am a Frontend
          Developer
        </p>
        <div></div>
      </article>
      <article className="profile">
        <img
          className="profilePicture"
          src={profilePicture}
          alt="Carles Gallardo Ramirez"
        />
        <div className="links">
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/carles-gallardo-ramirez/"
            target="_blank"
          >
            <LinkedIn />
          </a>
          <a
            className="github"
            href="https://github.com/carles00"
            target="_blank"
          >
            <Github />
          </a>
          <a className="gmail" href="mailto:carles.gallardo00@gmail.com">
            <Gmail />
          </a>
        </div>
      </article>
      <article className="experience">
          <div className="card">
            <h2 className="card-title">Experience</h2>
            <hr className="card-divider"/>
            <div className="card-body">
              <p className="card-body-title">Frontend Developer at Itequia, 2023 - Present</p>
              <p>
              Started the development of Akute, a CRM Saas. Developed as a SPA using React, I was responsible for the architecture of the frontend, setting up the test environment using Jest and creating CI/CD pipelines.
              At TeamInsights I was responsible for the migration of the website to a modern standard using Angular, making sure to follow best practices and writing clean and maintainable code. During this time I improved the load time of the website as well as improved the developer experience by creating highly reusable components.
              </p>
            </div>
          </div>
          <div className="card">
            <h2 className="card-title">Education</h2>
            <hr className="card-divider"/>
            <div className="card-body">
              <p className="card-body-title">Universitat Pompeu Fabra, 2018 - 2023</p>
              <p>
                Bachelor's degree in Computer Engineering
              </p>
            </div>
          </div>
      </article>
      <article className="professional"></article>
    </>
  );
}

export default App;
