import Navbar from "./components/Navbar/Navbar";
import Home from "./sections/Home/Home";
import About from "./sections/About/About";
import Aos from "aos";
import WorkExpirience from "./sections/WorkExpirience/WorkExpirience";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Certificates from "./sections/Certifcates/Certificates";
import Contact from "./sections/Contact/Contact";
import "aos/dist/aos.css";
import "./App.css";

function App() {
  Aos.init();
  return (
    <div className="app">
      <Navbar />
      <div className="main">
        <Home />
        <About />
        <WorkExpirience />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </div>
    </div>
  );
}

export default App;
