import React from 'react';
import './App.css';
import Banner from './components/Banner.js'
import Footer from './components/Footer.js'
import Projects from './components/Projects.js'

function App() {
  return (
    <div className="App body">
      <Banner />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
