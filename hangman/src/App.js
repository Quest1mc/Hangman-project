import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hangman from './components/hangman'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Hangman</h1>
        </header>
        
        <Hangman />
      </div>
    );
  }
}

export default App;
