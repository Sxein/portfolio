import NavigationBar from "./components/NavBar/NavigationBar";

import Home from "./components/Home/HomeSection";
import About from "./components/About/AboutSection";
import Skills from "./components/Skills/SkillsSection";
import Experience from "./components/Experience/ExperienceSection";
import Projects from "./components/Projects/ProjectSection";
import Contact from "./components/Contact/ContactSection";

function App() {

  return (
    <>
      <NavigationBar />
      <main>
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App
