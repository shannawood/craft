import React from 'react';

function About() {
  const techStack = [
    { name: 'React', description: 'A JavaScript library for building user interfaces' },
    { name: 'React Router', description: 'Declarative routing for React applications' },
    { name: 'Webpack', description: 'Module bundler for modern JavaScript applications' },
    { name: 'Babel', description: 'JavaScript compiler for next generation JavaScript' }
  ];

  return (
    <div>
      <h1>About This Project</h1>
      
      <div className="container">
        <h2>Project Overview</h2>
        <p>This is a simple React application demonstrating basic concepts and functionality.</p>
        <p>The project includes multiple pages, interactive components, and modern web development practices.</p>
      </div>

      <div className="container">
        <h2>Technology Stack</h2>
        <div className="tech-grid">
          {techStack.map((tech, index) => (
            <div key={index} className="tech-card">
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <h2>Getting Started</h2>
        <div className="steps">
          <div className="step">
            <h4>1. Install Dependencies</h4>
            <code>npm install</code>
          </div>
          <div className="step">
            <h4>2. Start Development Server</h4>
            <code>npm start</code>
          </div>
          <div className="step">
            <h4>3. Build for Production</h4>
            <code>npm run build</code>
          </div>
        </div>
      </div>

      <div className="container">
        <h2>Contact</h2>
        <p>This project was created as a demonstration of React capabilities.</p>
        <p>Feel free to explore the code and modify it as needed!</p>
      </div>
    </div>
  );
}

export default About;