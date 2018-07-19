import React, { Component } from 'react';
import './App.css';
import CreateUser from './components/CreateUser';
import LoginUser from './components/LoginUser';
import {
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/signup' component={CreateUser} />
        <Route path='/login' component={LoginUser}  />
      </div>
    );
  }
}

export default App;
