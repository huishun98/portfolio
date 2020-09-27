import React from 'react';
import './App.css';
import Articles from './components/Articles';
import Banner from './components/Banner.js'
import Footer from './components/Footer.js'
import Contact from './components/Contact.js'
import Projects from './components/Projects.js'

function App() {
  return (
    <div className="App body">
      <Banner />
      <Projects />
      <Articles />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
