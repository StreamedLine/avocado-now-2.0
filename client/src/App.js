import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import UserRoutes from './components/users/UserRoutes';
import CreateStores from './components/stores/CreateStores';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />  
        <UserRoutes />

        <CreateStores />
      </div>
    );
  }
}

export default App;
