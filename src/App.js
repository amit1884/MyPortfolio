import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./sections/Home/Home";
import About from "./sections/About/About";
function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main">
        <Home />
        <About />
      </div>
    </div>
  );
}

export default App;
