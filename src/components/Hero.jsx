import React from 'react';
import profileImg from '../assets/profile.jpg'; // replace with your image path

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          Building digital <br />
          products, brands <br />
          <span className="highlight">experience.</span>
        </h1>
        <p>
          A <strong>Python Developer</strong> and <strong>Problem Solver</strong>.
          <br />
         Aspiring student with a strong foundation in coding and problem solving, seeking opportunities to 
apply my skills and gain hands-on experience in real-world projects.
        </p>
        <form className="email-form">
          <input type="email" placeholder="Email address" />
          <button type="submit">Connect With Me</button>
        </form>
      </div>
      <div className="hero-right">
        <img src={profileImg} alt="Profile" />
      </div>
    </section>
  );
};

export default Hero;
