import React, { Component } from 'react';
import router from './router';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to a thing that things</h1>
        </header>
        {router}
        <footer>
        </footer>
      </div>
    );
  }
}

export default App;
