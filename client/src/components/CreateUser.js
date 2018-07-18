import React, { Component } from 'react';
import { createUser } from '../actions/userActions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Form from './CreateUserForm'

class CreateUser extends Component {
	//pass as prop into form
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

		//loading or form
		if (this.props.creatingUser) {
			content = ( <h3>creating user</h3> );
		} else {
			content = ( <Form handleOnSubmit={this.handleOnSubmit} /> );
		}

		const errors = this.props.errors ? <div className="errors">{this.props.errors[0]}</div> : null;

		return (
			<div>
				<h1>Signup Page</h1>
				{errors}
				{content}
			</div>
		)
	}
}

const mapStateToProps = ({usersReducer}) => {
	const { creatingUser, errors, redirect } = usersReducer;
  return { creatingUser, errors, redirect }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ createUser }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);