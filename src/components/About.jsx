import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Rocket, Activity, Compass } from 'lucide-react';
import './About.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>
      
      <motion.div 
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        
        {/* Main Intro Highlight */}
        <motion.div className="about-intro-card" variants={itemVariants}>
          <p className="intro-text">
            I'm <strong>Aryan Sharma</strong>, a Computer Science and Engineering student at SRM Institute of Science and Technology. 
            I build web applications and systems with one goal in mind — taking complex problems and turning them into 
            experiences that feel <em>effortless</em> for the person on the other end of the screen.
          </p>
        </motion.div>

        <div className="about-grid">
          {/* Engineering Philosophy */}
          <motion.div className="about-grid-item" variants={itemVariants}>
            <div className="about-icon-wrapper">
              <Server className="about-icon" />
              <Code className="about-icon" />
            </div>
            <h3>The Engineering</h3>
            <p>
              I enjoy working across the stack, from designing backend architecture that can actually scale, to crafting frontend interfaces that feel intuitive on the first click. For me, good engineering isn't just about writing code that works — it's about writing code that disappears into a smooth, frictionless experience for the user.
            </p>
          </motion.div>

          {/* Cosmos & Curiosity */}
          <motion.div className="about-grid-item" variants={itemVariants}>
            <div className="about-icon-wrapper">
              <Rocket className="about-icon" />
            </div>
            <h3>The Cosmos</h3>
            <p>
              Beyond the screen, I'm endlessly curious about what lies beyond our planet. Space has always fascinated me — the physics of distant galaxies, the mysteries of planets light-years away, and the sheer scale of a universe that makes lakhs of kilometers feel like a rounding error. If I'm not debugging code, I'm likely reading about the cosmos.
            </p>
          </motion.div>

          {/* Offline Life */}
          <motion.div className="about-grid-item" variants={itemVariants}>
            <div className="about-icon-wrapper">
              <Activity className="about-icon" />
            </div>
            <h3>Off The Keyboard</h3>
            <p>
              When I step away from the keyboard, you'll usually find me chasing a faster 5K time, on the badminton court working on my smash, with headphones in losing myself in music, or exploring a new place I haven't been to yet.
            </p>
          </motion.div>

          {/* Philosophy */}
          <motion.div className="about-grid-item highlight-item" variants={itemVariants}>
            <div className="about-icon-wrapper">
              <Compass className="about-icon" />
            </div>
            <h3>The Philosophy</h3>
            <p>
              I believe the best builders stay curious — about technology, about the universe, and about everything in between. This portfolio is a small window into that curiosity, one project, one idea, and one line of code at a time.
            </p>
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
};

export default About;
