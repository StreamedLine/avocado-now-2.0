import React, { Component } from 'react';
import { createUser } from '../../actions/userActions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Form from './CreateUserForm'

class CreateUser extends Component {
	//pass as prop into form
	handleOnSubmit = (e, {email, username, password}) => {
		e.preventDefault();
		this.props.createUser({email, username, password});
	};

	render() {
		//SIGNUP PAGE
		//may be submitting
		//may need to redirect to login

		if (this.props.redirect) {
			return <Redirect to='/login' />
		}
	
		const message = this.props.creatingUser ? <h3>Creating user..please wait</h3> : null;
		const errors = this.props.errors ? <div className="errors">{this.props.errors[0]}</div> : null;

		return (
			<div>
				<h1>Signup Page</h1>
				{message}
				{errors}
				<Form handleOnSubmit={this.handleOnSubmit} />
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