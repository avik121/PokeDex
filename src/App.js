import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import backgroundImage from './bground.jpg';

import Pokemon from './components/pokemon/Pokemon';
import NavBar from "./components/layout/NavBar"
import Dashboard from './components/layout/Dashboard';
import SearchBar from './components/search/SearchBar';

function App() {
  return (
    <Router>
    <div className="App" style={{ background: `url(${backgroundImage})` }}>
      <NavBar />
      <div className="container">
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
        <Route exact path="/" component={SearchBar} />
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
