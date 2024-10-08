import { useEffect } from "react";
import { Skills } from "./Skills";

const Home = () => {
  function apiCall() {
    const p = document.getElementById("quotes");
    const data = fetch("https://api.kanye.rest/")
      .then((response) => response.json())
      .then((data) => (p.innerText = data.quote + "\n- Kanye West"));
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    apiCall();
    console.log("i fire once");
  });
  return (
    <section className="hero " id="home">
      <div className="hero-content ">
        <div className="hero-text">
          <h1>Front-End React Developer</h1>
          <p>
            Hi, I'm <span className="imp">Sharath Gounikadi</span>. A passionate
            Front-end React Developer.
          </p>

          <p id="quotes"></p>
          <div className="hero-icons">
            <a href="https://www.linkedin.com/in/sharath-gounikadi-487646239/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/Sharathgounikadi">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://drive.google.com/file/d/1iy1PfPihtLcA3jJEYmD6pycy7Do8scIC/view" download="">
              <span>
                <i className="fa-solid fa-file"></i>
              </span>
            </a>
          </div>
        
        </div>

        <div className="hero__img">
          <img className="hero-img" src="dp.jpg" alt="" />
        </div>
      </div>

      <Skills />
    </section>
  );
};
export default Home;
