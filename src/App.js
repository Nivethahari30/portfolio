import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homee from "./Pages/Homee";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Footer from "./Pages/Footer"

function App() {
  return (
    <div>
      <div>
        <header className="header">
          <a href="#" className="logo"></a>
          <nav className="nav">
            <a href="/" className="active">Home</a>
            <a href="/About" >About</a>
            <a href="/Project" >Project</a>
            <a href="/Contact" >Contact</a>
          </nav>
        </header>
      </div>
      {/* Add ScrollToTop */}
      <div>
        <Routes>
          <Route path="/Home" element={<Homee />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Footer" element={<Footer />} />
        </Routes>
      </div>
      <div id="home">
          <Homee />
        </div>
        
        <div id="about">
          <About />
        </div>
        
        <div id="project">
          <Project />
        </div>
        
        <div id="contact">
          <Contact />
        </div>
        <div id="Footer">
          <Footer />
        </div>
    </div>
  );
}

export default App;
