
import logo from './logo.svg';
import './App.css';
import "./css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/navbar.component';
import Tag from './components/tag.component';
import About from './components/about.component';
import Education from './components/education.component';
import Project from './components/project.component';
import Skills from './components/skills.component';
import Experience from './components/experience.component';
import ScrollUp from './components/scrollUp.component';
import Footer from './components/footer.component';

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }); 
 return (
    <div>
    <Navbar  />
    <Tag />
    <About  />
    <Education />
    <Project />
    <Skills />
    <Experience />
    <ScrollUp />
    <Footer />
    </div>
  );
}


export default App;
