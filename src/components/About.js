import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div id="about" className="about bg-gray-100 py-16">
      <div className="container mx-auto flex flex-col items-center space-y-8 md:flex-row md:space-y-0 md:space-x-16">
        <div className="about-img" data-aos="fade-right">
          <img
            src="https://img.freepik.com/premium-photo/programmer-generative-ai_860599-3057.jpg?w=500"
            alt="Sharath Gounikadi"
            className="rounded-lg shadow-lg hover:scale-105 transform transition duration-500 ease-in-out"
          />
          <span className="block mt-4 text-center text-xl font-semibold text-gray-700">
            Hi, I'm Sharath Gounikadi
          </span>
        </div>
        <div className="about-text max-w-lg" data-aos="fade-left">
          <h3 className="text-lg font-bold text-indigo-600">ABOUT ME</h3>
          <h2 className="text-3xl font-extrabold text-gray-800 mt-2">
            A dedicated Front-end Developer
          </h2>
          <p className="mt-4 text-gray-600">
            I have completed a comprehensive full-stack development course from Newton School, where I gained proficiency in both front-end technologies. I possess a deep understanding of various technologies and frameworks. I am proficient in languages such as HTML, CSS, Bootstrap, JavaScript, and React.js, DSA, Git. I have demonstrated my ability to quickly learn and implement new technologies, ensuring that I stay current with industry trends and best practices. I am enthusiastic about the opportunity to contribute my skills and knowledge. I'm looking to learn new skills and I'm well able to work with the team to grow the company. I'm ready for it. Thank You! :)
          </p>
          <a
            href="https://drive.google.com/file/d/1iy1PfPihtLcA3jJEYmD6pycy7Do8scIC/view"
            className="btn bg-indigo-600 text-white mt-6 px-4 py-2 rounded-lg shadow-md hover:bg-indigo-700 transform transition duration-300 ease-in-out"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-solid fa-arrow-down-long fa-xs"></i>
            &nbsp;&nbsp;Resume
          </a>
        </div>
      </div>
    </div>
  );
}
