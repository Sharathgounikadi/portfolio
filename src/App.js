import { Routes, Route } from "react-router-dom";
/* import { useSpring, animated } from "@react-spring/web"; */
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Project from "./components/Project";
import Contact from "./components/Contact";
import { About } from "./components/About";
import "./style.css";

export default function App() {
  return (
    <div className="App">   
      <Nav />
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
