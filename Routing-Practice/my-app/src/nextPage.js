import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';

function nextPage() {
  return (
    <div className="nextPage">
      <header className="App-header">
        <Router>
          <Link to="/"><a>You are on the next page!</a></Link>
        </Router>
      </header>
    </div>
  );
}

export default nextPage;