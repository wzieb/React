import React from 'react';
import profileImage from "../assets/images/Senior_2020.jpg"
import '../About.css'; // Optional for custom styles

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <img id= "profilepic"src= {profileImage} alt="Profile" />
      <p>Hi, I’m Will. I’m a Full Stack Developer with experience in customer analytics.</p>
    </section>
  );
};

export default About;