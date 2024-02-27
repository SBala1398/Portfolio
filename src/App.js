import Navbar from "./components/Navbar";
import ContactUs from "./components/ContactUs";
import Education from "./components/Education";
import Home from "./components/Home";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import "./App.css"

function App() {
  return (<div className="bg-[#0F172A] ">
    <Navbar />
    <Home/>
    <AboutMe/>
    <Education/>
    <Projects/>
    <ContactUs/>
   
   
  </div>);
}

export default App;
