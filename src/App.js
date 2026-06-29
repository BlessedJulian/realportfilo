import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import './index.css'; // Importing our pure CSS stylesheet
import jk from '../src/assets/jk.png'
import { MdComputer } from 'react-icons/md';
import { FaReact, FaBug, FaDatabase, FaGithub, FaFileWord, FaSatelliteDish, FaTools } from 'react-icons/fa';
import { GiCctvCamera } from 'react-icons/gi';
import {  FaBoxes } from 'react-icons/fa';
import {  FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';



function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [notification, setNotification] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Open default mail client with prefilled message
    window.location.href = `mailto:ogbajijuliam@gmail.com?subject=Message from ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.email}`;

    // Show notification
    setNotification('✅ Your message has been sent!');

    // Clear form
    setFormData({ name: '', email: '', message: '' });

    // Hide notification after 3 seconds
    setTimeout(() => {
      setNotification('');
    }, 3000);
  };

  return (
    <section className="contact-section">
      <div className="contact-constrained">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-subtitle">Send me a message!</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="form-input"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <textarea
            rows="4"
            name="message"
            placeholder="Message"
            className="form-textarea"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <div className="form-actions">
            <button type="submit" className="btn-submit">Send Message</button>
          </div>
        </form>

        {notification && <p className="notification">{notification}</p>}
      </div>
    </section>
  );
}

const skills = [
  { name: 'IT Support & Troubleshooting', icon: <MdComputer /> },
  { name: 'Web Development (HTML, CSS, JS, React, Express.js)', icon: <FaReact /> },
  { name: 'Software Testing (QA, Debugging)', icon: <FaBug /> },
  { name: 'Database Management (MongoDB, backups, optimization)', icon: <FaDatabase /> },
  { name: 'GitHub', icon: <FaGithub /> },
  { name: 'Microsoft Office Suite (Excel, Word, PowerPoint, Outlook)', icon: <FaFileWord /> },
  { name: 'CCTV Installation & Surveillance', icon: <GiCctvCamera /> },
  { name: 'Starlink Installation', icon: <FaSatelliteDish /> },
  { name: 'Telecom ODU Installation (Airtel, MTN)', icon: <FaTools /> }
];

export default function App() {
  return (
    <div className="portfolio-container">
      
      {/* HERO / HEADER SECTION */}
      <header className="hero-header">
        <div className="hero-content">
          <div className="hero-text-block">
            <h1 className="hero-title">
              <span className="text-highlight"> Ogbaji Julian Ogbaji</span>
            </h1>
            <p className="hero-subtitle">ICT Technician & Programmer</p>
            
            <div className="contact-badges">
              <span className="badge">
                <Mail size={16} /> ogbajijulian@gmail.com
              </span>
              <span className="badge">
                <Phone size={16} /> +2348094557154
              </span>
              <span className="badge">
                <MapPin size={16} /> Abuja, Nigeria
              </span>
            </div>
          </div>

          <div className="profile-image-container">
            {/* Replace with your cutout avatar path */}
            <img 
              src={jk} 
              alt="Julian Picture." 
              className="profile-img"
            />
          </div>
        </div>
      </header>

      {/* ABOUT ME SECTION */}
      <section className="about-section">
        <div className="inner-constrained">
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
             Results-driven ICT Technician with 3+ years’ experience in programming, network administration, and IT support. 
         Strong foundation in Mathematics and Computer Science, with proven expertise in React, Express, GitHub, and system
          optimization. Adapt at delivering reliable software solution, conducting advanced debugging and training users. 
          Recognized for leading successful deployments and improving operational efficiency at EveryDay Transact Limited.
          </p>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="skills-section">
        <div className="inner-constrained">
          <h2 className="section-title">My Skills</h2>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className={`skill-pill delay-${index + 1}`}>
                  <span className="skill-dot"></span>
                  <span className="skill-icon">{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* ASYMMETRIC GRID MAIN CONTENT (Experience & Projects) */}
      <section className="main-content-split">
        <div className="split-grid-container">
          
          {/* Left Column: Projects Panel */}
        <div className="projects-column">
          <div className="section-heading-wrap">
            <h2 className="split-section-title">Experience</h2>
            <div className="title-underline"></div>
          </div>

          <div className="projects-stack">
            <h3 className="sub-section-title">My Projects</h3>
            
            <div className="project-card card-one">
              <div className="card-overlay"></div>
              <div className="card-content">
                <h4>
                  <FaReact className="project-icon" /> A sleek personal portfolio
                </h4>
                <p>React</p>
                  <button className="btn-primary" onClick={() => window.open("https://blessedjulian.github.io/myPortfolio/", "_blank")}>
                    Explore Project
                  </button>
              </div>
            </div>

            <div className="project-card card-two">
              <div className="card-overlay"></div>
              <div className="card-content">
                <h4>
                  <FaBoxes className="project-icon" /> Inventory Management System
                </h4>
                <p>Full Stack App</p>
                <button className="btn-primary" onClick={() => window.open("https://github.com/BlessedJulian/projectCommerce", "_blank")}>
                  View Project
                </button>
              </div>
            </div>
          </div>
        </div>

          {/* Right Column: Experience Timeline List */}
          <div className="timeline-column">
            <div className="timeline-list">
              
              <div className="timeline-item">
                <div className="timeline-year">2025–2026</div>
                <div className="timeline-details">
                  <h4>CCTV Surveillance Personnel</h4>
                  <h5>Bakangizo pharmacy & Store Mabushi, Abuja</h5>
                  <p><li>Monitored surveillance systems across company premises.</li></p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-year">2020–2024</div>
                <div className="timeline-details">
                  <h4>Programmer & Customer Support</h4>
                  <h5>EveryDay Transact Limited Kubwa, Abuja</h5>
                  <p><li>Developed applications and assisted clients.</li></p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-year">2018–2019</div>
                <div className="timeline-details">
                  <h4>Computer Instructor</h4>
                  <h5>Wisdom Group of Schools Igueben, Edo State</h5>
                  <p><li>Taught computer Programming and usage skills to Students and Staff.</li></p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-year">2014–2017</div>
                <div className="timeline-details">
                  <h4>Network Administrator</h4>
                  <h5>Diamond InfoTech, Madalla, Niger State</h5>
                  <p><li>Installed and Managed network infrastructure.</li></p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section className="education-section">
      <div className="inner-constrained">
        <h2 className="education-title">Education</h2>
        <div className="education-grid">
      
          {/* Card 1 */}
          <div className="education-card">
            <div className="education-icon">🎓</div>
            <div className="education-details">
              <h3>B.Sc. Mathematics & Computer Science</h3>
              <p>Federal University of Agriculture, Makurdi</p>
            </div>
          </div>

          {/* Card 2 - Google Cybersecurity Course */}
      <div className="education-card">
        <div className="education-icon">🔐</div>
        <div className="education-details">
          <h3>Google Cybersecurity Professional Certificate</h3>
          <p>Google</p>
        </div>
      </div>

        </div>
      </div>
      </section>


      {/* CONTACT FORM SECTION */}
      <ContactForm />

      {/* FOOTER SOCIAL LINKS */}
      <footer className="portfolio-footer">
        <div className="footer-socials">
          <a href="https://github.com/BlessedJulian" target="_blank" rel="noopener noreferrer" className="social-icon-link">
            <FaGithub size={18} />
          </a>
          <a href="https://linkedin.com/in/yourusername" className="social-icon-link">
            <FaLinkedin size={18} />
          </a>
          <a href="mailto:ogbajitrinity.com" className="social-icon-link">
            <FaEnvelope size={18} />
          </a>
          <a href="/JulianCv.pdf" download className="social-icon-link tooltip">
            <FaDownload size={18} />
            <span className="tooltip-text">Download Ogbaji CV</span>
          </a>

        </div>

        <div className="footer-copy">
          © 2026 Ogbaji — All rights reserved.
        </div>
      </footer>

    </div>
  );
}