import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-container">
        <motion.p 
          className="contact-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
          feel free to drop a message!
        </motion.p>
        
        <div className="contact-cards">
          <motion.a 
            href="tel:+917644004689" 
            className="contact-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="contact-icon">
              <FaPhoneAlt />
            </div>
            <h3>Phone</h3>
            <p>7644004689</p>
          </motion.a>
          
          <motion.a 
            href="mailto:shrmaaryan.77@gmail.com" 
            className="contact-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="contact-icon">
              <FaEnvelope />
            </div>
            <h3>Email</h3>
            <p>shrmaaryan.77@gmail.com</p>
          </motion.a>
          
          <motion.a 
            href="https://github.com/aryansh9090" 
            target="_blank" 
            rel="noreferrer" 
            className="contact-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="contact-icon">
              <FaGithub />
            </div>
            <h3>GitHub</h3>
            <p>aryansh9090</p>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
