

import About from '../About/About';
import Contact from '../Contact/Contact';
import Education from '../Education/Education';
import Hero from '../Hero/Hero';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import './main.css';

export const Main = () => {
  return (
    <>
      <main className="main_container">

        <Hero />
        <About />
        <Skills />
        <Education/>
        <Projects/>
        <Contact/>
      
      </main>
    </>
  )
}


