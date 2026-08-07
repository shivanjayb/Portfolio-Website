import React from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-[#ff2a2a] selection:text-white">
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Gallery />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
