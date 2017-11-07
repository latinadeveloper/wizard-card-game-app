import { Navbar, Jumbotron, Button } from 'react-bootstrap'; // 
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid" style={{ paddingTop: '12px' }} >
        <header className="row title App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Wizard Card Game Score Keeper</h1>
        </header>
        <p className="App-intro">
          Rules of Wizard. Click start to keep score.
        </p>
      </div>
    );
  }
}

export default App;
