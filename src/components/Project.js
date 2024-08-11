import QuoraImage from './Quora.png';
import WynkImage from './Wynk.png';
import GuessNumberGameImage from './GuessNumberGame.png';
import PortfolioImage from './Portfolio.png';

const Project = () => {
  let data = [
    {
      id: 1,
      img_url: QuoraImage,
      title: "Quora Clone",
      text: "It is a clone of Quora",
      git_url: "https://github.com/Sharathgounikadi/Quora-React-Clone---React-Project-2---tpibj7ie8i1w",
      host_url: "https://quora-clone-by-sharath.vercel.app",
      description: "Built with React and Tailwind CSS, this Quora clone replicates the functionality of the original platform, allowing users to ask questions, post answers, and interact with content."
    },

    {
      id: 2,
      img_url: WynkImage,
      title: "Wynk Clone",
      text: "It is a clone of Wynk music",
      git_url: "https://github.com/Sharathgounikadi/Wynk-Music-Clone---React-Project-1---5yvv6z6b97u9",
      host_url: "https://wynk-music-clone-bysharath.vercel.app/",
      description: "Developed using React and Tailwind CSS, this Wynk Music clone allows users to explore and play music, mimicking the core features of the popular music streaming app."
    },

    {
      id: 3,
      img_url: GuessNumberGameImage,
      title: "Number Game",
      text: "It is a number game where we need to guess a number between 1 to 20",
      git_url: "https://github.com/Sharathgounikadi/GuessTheNumberGame",
      host_url: "https://guessthenumbergame.onrender.com/",
      description: "A simple number guessing game created with vanilla JavaScript, HTML, and CSS. Players must guess a random number between 1 and 20, with hints provided for each guess."
    },
    {
      id: 4,
      img_url: PortfolioImage,
      title: "Portfolio",
      text: "Portfolio page",
      git_url: "https://github.com/Sharathgounikadi/Portfolio1",
      host_url: "https://sharathportfolio2.onrender.com/",
      description: "This is a personal portfolio website created using HTML and CSS, showcasing various projects and providing a professional online presence."
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h3>PROJECTS</h3>
        <h5>Each project is a unique piece of development</h5>

        <div className="project-content">
          {data.map((item) => {
            return (
              <div key={item.id} className="project-items">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={item.img_url}
                    alt={item.title}
                  />
                  <div className="card-body">
                    <p className="card-title">{item.title}</p>
                    <p className="card-description">{item.description}</p>
                    <div className="cardbtn">
                      <a href={item.git_url} className="btn" target="_blank" rel="noopener noreferrer">
                        Code &nbsp;&nbsp;
                        <i className="fa-brands fa-github"></i>
                      </a>
                      <a href={item.host_url} className="btn" target="_blank" rel="noopener noreferrer">
                        Live Demo &nbsp;
                        <i className="fa-solid fa-arrow-up-right-from-square link-icon"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Project;
