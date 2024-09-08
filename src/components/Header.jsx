import React from 'react';
import navPhoto from '../assets/images/unnamed.jpg'
const Header = () => {
  return (
    <header>
      <div className="intro">
      <h1><img id="outdoorphoto" src = {navPhoto} ></img>Will Ziebert</h1>
      </div>
      <h2>Full Stack Developer ~ <h2 id="MS">M.S. Business Analytics</h2></h2>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;