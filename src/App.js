import React, { Suspense, lazy, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Spinner from "./components/Loader/Spinner";
import 'leaflet/dist/leaflet.css';

// Lazy load the components
const Navbar = lazy(() => import("./components/Navbar/Navbar"));
const Home = lazy(() => import("./sections/Home/Home"));
const About = lazy(() => import("./sections/About/About"));
const WorkExpirience = lazy(() =>
  import("./sections/WorkExpirience/WorkExpirience")
);
const Projects = lazy(() => import("./sections/Projects/Projects"));
const Skills = lazy(() => import("./sections/Skills/Skills"));
const Certificates = lazy(() => import("./sections/Certifcates/Certificates"));
const Contact = lazy(() => import("./sections/Contact/Contact"));

function App() {
  Aos.init();
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);
  
  return (
    <div className="app">
      <Suspense fallback={<Spinner />}>
        <Navbar />
      </Suspense>
      <div className="main">
        <Suspense fallback={<Spinner />}>
          <Home />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <About />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <WorkExpirience />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <Certificates />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <Contact />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
