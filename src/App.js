import './App-tailwid.css';
import NavBar from './components/navBar';
import Home from './components/homePage';
import About from './components/aboutPage';
import Skills from './components/skillsPage';
import Experience from './components/experiencePage';
import Contact from './components/contactPage';

function App() {
  return (
    <div className="App dark:bg-slate-800 h-screen flex flex-col overflow-hidden">
      <NavBar />
      <div className="flex-grow overflow-y-auto">
        <section id="home" className="h-screen relative">
          <Home />
        </section>
        
        <section id="about">
          <About />
        </section>

        <section id="experience" className="min-h-screen">
          <Experience />
        </section>

        <section id="skills" className="min-h-screen">
          <Skills />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;
