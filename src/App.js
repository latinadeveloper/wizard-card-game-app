//import { Navbar, Jumbotron, Button } from 'react-bootstrap'; //
import React, { Component } from 'react';
import logo from './wizard.png';
import Players from './containers/Players';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './containers/Home';
import Game from './containers/Game';

//import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="container-fluid" style={{ paddingTop: '12px' }} >
        <header className="row title  App-header">
            <div className="col-md-6 col-md-offset-2">
              {/*<img src={logo} className="App-logo" alt="logo" />*/}
              </div>
              <div className="col-md-6  col-md-offset-2">
              
            </div>
            <NavBar />

        </header>
        <Route exact path="/" component={Home} />
        <Route exact path="/players" component={Players} />
        <Route exact path="/game" component={Game} />
      
      </div>
      </Router>
    );
  }
}

export default App;
