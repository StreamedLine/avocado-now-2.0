import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreateUser from './components/CreateUser';
import { loginUser } from './actions/userActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class App extends Component {

	loginUserClick = () => {
		const email = "test2@test2.com",
					password = "12345678";
		
		this.props.loginUser({email, password});
	}

  render() {
    return (
      <div className="App">
        <CreateUser />
        <input type="button" onClick={this.loginUserClick} value="login user"/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ loginUser }, dispatch)
}

export default connect(null, mapDispatchToProps)(App);

// //export default App;
