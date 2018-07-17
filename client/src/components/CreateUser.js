import React, { Component } from 'react';
import { createUser } from '../actions/userActions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Form from './CreateUserForm'

class CreateUser extends Component {
	constructor(props) {
		super(props);

	}

	handleOnSubmit = (e, {email, username, password}) => {
		e.preventDefault();
		this.props.createUser({email, username, password});
	};

	render() {
		//SIGNUP PAGE
		//may be loading
		//may need to direct to login

		if (this.props.redirect) {
			console.log("Should direct to login page")
		}

		let content = "";

		if (this.props.creatingUser) {
			content = ( <h3>creating user</h3> );
		} else {
			content = ( <Form handleOnSubmit={this.handleOnSubmit} /> );
		}

		return (
			<div>
				<h1>Signup Page</h1>
				{this.props.errors && <div className="errors">{this.props.errors[0]}</div>}
				{content}
			</div>
		)
	}
}

const mapStateToProps = ({usersReducer}) => {
  return {creatingUser: usersReducer.creatingUser, errors: usersReducer.errors, redirect: usersReducer.redirect}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ createUser }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);