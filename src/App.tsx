import NavigationBar from "./components/NavigationBar";

import Home from "./components/Home";
import About from "./components/About";

function App() {

  return (
    <>
      <NavigationBar />
      <main>
        <Home />
        <About />
        <section id="skills" className="min-h-screen flex items-center justify-center bg-white">
          <h2 className="text-4xl font-bold">Skills Section</h2>
        </section>
        <section id="experience" className="min-h-screen flex items-center justify-center bg-white">
          <h2 className="text-4xl font-bold">Experience Section</h2>
        </section>
        <section id="projects" className="min-h-screen flex items-center justify-center bg-white">
          <h2 className="text-4xl font-bold">Projects Section</h2>
        </section>
        <section id="contact" className="min-h-screen flex items-center justify-center bg-white">
          <h2 className="text-4xl font-bold">Contact Section</h2>
        </section>
      </main>
    </>
  )
}

export default App
