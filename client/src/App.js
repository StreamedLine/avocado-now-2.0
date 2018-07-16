import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { createUser, loginUser } from './actions/userActions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class App extends Component {
	
	createUserClick = () => {
		const email = "test2@test2.com",
					username = "test2",
					password = "12345678";
		
		this.props.createUser({email, username, password});
	}

	loginUserClick = () => {
		const email = "test2@test2.com",
					password = "12345678";
		
		this.props.loginUser({email, password});
	}

  render() {
    return (
      <div className="App">
        <input type="button" onClick={this.createUserClick} value="create user"/>
        <input type="button" onClick={this.loginUserClick} value="login user"/>
      </div>
    );
  }
}

// const mapStateToProps = ({restaurantReducer}) => {
//   return {done: restaurantReducer.done, err: restaurantReducer.error, currentRestaurant: restaurantReducer.currentRestaurant}
// }

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ createUser, loginUser }, dispatch)
}

export default connect(null, mapDispatchToProps)(App);

// //export default App;
