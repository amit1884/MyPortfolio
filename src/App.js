import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./sections/Home/Home";
import About from "./sections/About/About";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import WorkExpirience from "./sections/WorkExpirience/WorkExpirience";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
function App() {
  Aos.init();
  return (
    <div className="app">
      <Navbar />
      <div className="main">
        <Home />
        <About />
        <WorkExpirience />
        <Skills/>
        <Projects/>
      </div>
    </div>
  );
}

export default App;
