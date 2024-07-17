import './App.css';
import logo from './logo.svg';
import React from 'react';
import NavBar from './components/navBar'
import Home from './components/homePage'
import Skils from './components/skillsPage'
import About from './components/aboutPage'
import Experience from './components/experiencePage'
import Contact from './components/contactPage'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/skills' element={<Skils/>}/>
          <Route path='/experience' element={<Experience/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
