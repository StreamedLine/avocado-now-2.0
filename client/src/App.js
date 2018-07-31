import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import UserRoutes from './components/users/UserRoutes';
import StoreRoutes from './components/stores/StoreRoutes';
import Home from './components/Home';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />  
        <UserRoutes />
				<StoreRoutes />
				<Route exact path='/' component={Home} />
      </div>
    );
  }
}

export default App;
