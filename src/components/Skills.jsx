import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['JavaScript', 'Python', 'SQL', 'Java', 'C++']
    },
    {
      title: 'Frameworks',
      skills: ['Next.js', 'React', 'FastAPI', 'Django', 'Flask', 'Tailwind CSS']
    },
    {
      title: 'Data Engineering',
      skills: ['ETL/ELT Pipelines', 'Data Ingestion', 'REST APIs', 'DBMS']
    },
    {
      title: 'Tools & Concepts',
      skills: ['Git', 'GitHub', 'SQLite', 'Data Structures', 'OOP', 'CI/CD']
    }
  ];
  
  return (
    <section id="skills">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index} 
            className="skill-category"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="skill-category-title">{category.title}</h3>
            <div className="skill-list">
              {category.skills.map((skill, sIndex) => (
                <span key={sIndex} className="skill-tag">{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
