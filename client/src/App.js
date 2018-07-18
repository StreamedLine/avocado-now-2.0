import React, { Component } from 'react';
import './App.css';
import CreateUser from './components/CreateUser';
import LoginUser from './components/LoginUser';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateUser />
        <LoginUser />
      </div>
    );
  }
}

export default App;
