import { useEffect } from 'react';

import {About}from './components/About';
import {Contact}from './components/Contact';
import {Footer}from './components/Footer';
import {Header}from './components/Header';
import {Projects}from './components/Projects';
import './App.css';

function App() {
  const title = 'Homepage';
  // useEffect(() => {
  //   document.title = title;
  // }, []);

  return (
    <div className="root">
      <Header /> {/* Header usually comes first */}
      <h1>{title}</h1> {/* Display title */}
      <About /> {/* Main content sections */}
      <Projects />
      <Contact />
      <Footer /> {/* Footer usually comes last */}
    </div>
  );
}

export default App;