import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import SocialLinks from "./components/SocialLinks/SocialLinks";

function App() {
  return (
    <div>
     <Navbar />
     <Home />
     <SocialLinks />
     <About />
     <Portfolio />
     <Experience />
     <Contact />
    </div>
  );
}

export default App;
