import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Link to="/nextPage"><button>Click here to test route</button></Link>
          <Link to="/"><a>Click here if it didn't work!</a></Link>
        </Router>
      </header>
    </div>
  );
}

export default App;
