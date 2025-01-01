import React, { useState } from 'react';

function Home() {
  const [count, setCount] = useState(0);
  const [tasks, setTasks] = useState(['Learn React', 'Build awesome apps']);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  return (
    <div>
      <h1>Welcome to My Simple Page</h1>
      
      <div className="container">
        <h2>About This Page</h2>
        <p>This is a simple React application with basic structure and styling.</p>
        <p>You can modify the content and styles as needed.</p>
      </div>
      
      <div className="container">
        <h2>Interactive Counter</h2>
        <p>Count: <span className="counter">{count}</span></p>
        <div className="button-group">
          <button onClick={() => setCount(count - 1)}>-</button>
          <button onClick={() => setCount(0)}>Reset</button>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
      </div>

      <div className="container">
        <h2>Todo List</h2>
        <div className="todo-input">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add new task..."
            onKeyDown={(e) => e.key === 'Enter' && addTask()}
          />
          <button onClick={addTask}>Add</button>
        </div>
        <ul className="todo-list">
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
      
      <div className="container">
        <h2>Features</h2>
        <ul>
          <li>React components</li>
          <li>Interactive counter</li>
          <li>Todo list functionality</li>
          <li>State management</li>
          <li>Multi-page navigation</li>
          <li>Responsive design</li>
          <li>Clean styling</li>
          <li>Easy to customize</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;