import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import UserRoutes from './components/users/UserRoutes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />  
        <UserRoutes />
      </div>
    );
  }
}

export default App;
