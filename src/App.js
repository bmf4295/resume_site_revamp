import './App-tailwid.css';
import NavBar from './components/navBar';
import Home from './components/homePage';
import About from './components/aboutPage';
import Skills from './components/skillsPage';
import Experience from './components/experiencePage';
import FeaturedProjects from './components/featuredProjects';
import Contact from './components/contactPage';
import Footer from './components/footer';

function App() {
  return (
    <div className="App bg-slate-800 h-screen flex flex-col overflow-hidden">
      <NavBar />
      <div className="flex-grow overflow-y-auto">
        <section id="home" className="h-full relative">
          <Home />
        </section>

        <About id="about" />
        <Experience id="experience" />
        <FeaturedProjects id="projects" />
        <Skills id="skills" />
        <Contact id="contact" />

        <Footer className="flex-grow px-6" />
      </div>
    </div>
  );
}

export default App;
