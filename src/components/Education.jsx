import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      institution: "SRM Institute of Science and Technology",
      location: "Chennai, India",
      degree: "B.Tech in Computer Science and Engineering",
      score: "CGPA: 9.18",
      icon: "🎓"
    },
    {
      institution: "DAV Public School, Bariatu",
      location: "Ranchi, Jharkhand, India",
      degree: "High School (Class X & XII)",
      score: "",
      icon: "🏫"
    }
  ];

  return (
    <section id="education" className="education-section">
      <h2 className="section-title">Education</h2>
      
      <div className="education-grid">
        {educationData.map((item, index) => (
          <motion.div 
            className="education-card" 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="education-icon">{item.icon}</div>
            <div className="education-content">
              <h3 className="education-institution">{item.institution}</h3>
              {item.degree && <p className="education-degree">{item.degree}</p>}
              <div className="education-details">
                {item.location && <span className="education-location">{item.location}</span>}
                {item.score && <span className="education-score">{item.score}</span>}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
