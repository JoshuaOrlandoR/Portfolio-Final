import React from 'react';
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer /> 
    </div>
  );
}

export default App;
