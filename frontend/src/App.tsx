import React from 'react';
import gear from './gear-spinner.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={gear} className="App-logo" alt="logo" />
        <p>
          Under Construction.
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/ritvik-nambiar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact me
        </a>
      </header>
    </div>
  );
}

export default App;
