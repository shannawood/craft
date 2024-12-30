import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to My Simple Page</h1>
      
      <div className="container">
        <h2>About This Page</h2>
        <p>This is a simple React application with basic structure and styling.</p>
        <p>You can modify the content and styles as needed.</p>
      </div>
      
      <div className="container">
        <h2>Features</h2>
        <ul>
          <li>React components</li>
          <li>Responsive design</li>
          <li>Clean styling</li>
          <li>Easy to customize</li>
        </ul>
      </div>
    </div>
  );
}

export default App;