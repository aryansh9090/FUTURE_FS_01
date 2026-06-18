import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const projects = [
    { 
      title: 'Bake \'N\' Flake - Bakery Website', 
      desc: 'Built a complete e-commerce website for a local bakery. Features include a Live Cake Customizer, Gift & Occasion Planner, full ordering system (UPI & COD), real-time order tracking, and a Store locator with Google Maps.', 
      tech: ['HTML', 'CSS', 'JavaScript'],
      demoLink: 'https://lnkd.in/gPPfQJn4',
      githubLink: 'https://github.com/aryansh9090/FUTURE_FS_03'
    },
    {
      title: 'Weather Travel Assistant',
      desc: 'AI-powered weather application built with Next.js & Open-Meteo API. Features real-time weather, 10-day forecast, AQI, city comparison, and AI-driven smart clothing & travel suggestions with a dynamic UI.',
      tech: ['Next.js', 'React', 'Tailwind CSS', 'API'],
      demoLink: '#',
      githubLink: 'https://github.com/aryansh9090/weather_forecast_app'
    },
    { 
      title: 'Mini CRM System', 
      desc: 'Developed a comprehensive CRM system with an Overview Dashboard, Kanban Board for Leads, Analytics & Lead Trend, AI Insights, Cross Insights, and a Golden Hour Predictor to optimize sales conversions.', 
      tech: ['Node.js', 'Express.js', 'MySQL', 'JavaScript'],
      demoLink: '#',
      githubLink: 'https://github.com/aryansh9090/FUTURE_FS_02'
    },
    { 
      title: 'AI Interview Preparation Platform', 
      desc: 'Designed and developed backend APIs using FastAPI to process user data and generate personalized interview questions. Built automated data ingestion and processing pipelines. Integrated NLP models to analyze responses and improve feedback accuracy.', 
      tech: ['React', 'FastAPI', 'Python', 'NLP'],
      demoLink: '#',
      githubLink: 'https://github.com/aryansh9090'
    },
    { 
      title: 'TerraMind – Agri Intelligence Platform', 
      desc: 'Built an ELT pipeline to ingest and transform satellite NDVI datasets for crop health monitoring. Processed and analyzed agricultural datasets to generate irrigation and soil recommendations. Designed dashboards to visualize actionable insights.', 
      tech: ['Python', 'Django', 'Data Analysis'],
      demoLink: '#',
      githubLink: 'https://github.com/aryansh9090/new_terramind'
    },
    { 
      title: 'Crypto Trading Bot (Simulated)', 
      desc: 'Built a real-time data ingestion pipeline fetching live cryptocurrency price data via external REST APIs. Engineered a continuous ETL pipeline for data transformation and decision-making (BUY/HOLD logic). Maintained structured logs.', 
      tech: ['Python', 'REST APIs'],
      demoLink: '#',
      githubLink: 'https://github.com/aryansh9090'
    },
  ];

  return (
    <section id="projects">
      <h2 className="section-title">Selected Work</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-pill">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                {project.demoLink !== '#' && (
                  <a href={project.demoLink} target="_blank" rel="noreferrer" className="btn-outline project-btn">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
                {project.githubLink !== '#' && (
                  <a href={project.githubLink} target="_blank" rel="noreferrer" className="btn-outline project-btn">
                    <FaGithub /> View Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
