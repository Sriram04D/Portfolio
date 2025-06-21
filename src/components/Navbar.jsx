import React from 'react';
import './Navbar.css'; // optional if you're splitting CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">👨‍💻</div>
     <ul className="nav-links">
  <li><a href="#about">About</a></li>
  <li><a href="#projects">Projects</a></li>
  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
    Resume
  </a>
  <li><a href="#contact">Contact</a></li>

</ul>

    </nav>
  );
};

export default Navbar;
