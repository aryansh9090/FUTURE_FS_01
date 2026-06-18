import React from 'react';
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';
import './Hero.css';

const Github = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const Linkedin = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="hero-image-container">
          <div className="profile-photo">
            <img src={profileImg} alt="Aryan Sharma" />
          </div>
        </div>

        <h1 className="hero-title">
          Aryan Sharma
        </h1>
        <h2 className="hero-subtitle">Full Stack <span className="accent">&</span> Developer</h2>
        
        <p className="hero-description">
          Hello! I am a passionate Full Stack Web Developer. 
          I love building modern, responsive, and performant web applications. 
          With a strong foundation in both frontend and backend technologies, 
          I enjoy transforming complex problems into simple, beautiful, and intuitive designs.
        </p>

        <div className="hero-buttons">
          <a href="/resume.pdf" target="_blank" className="btn btn-primary">Download Resume</a>
          <a href="#projects" className="btn btn-outline">My Projects</a>
        </div>

        <div className="social-icons">
          <a href="https://github.com/aryansh9090" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/aryan-sharma-a02111402" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="mailto:shrmaaryan.77@gmail.com" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
