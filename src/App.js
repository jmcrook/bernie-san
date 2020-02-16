import React from 'react';
import bernie_slow from './bernie_slow.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={bernie_slow} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Order Now
        </a>
      </header>
    </div>
  );
}

export default App;
