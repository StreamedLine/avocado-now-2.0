import React, { Component } from 'react';
import { loginUser } from '../actions/userActions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Form from './LoginUserForm'

class LoginUser extends Component {
	//pass as prop into form
	handleOnSubmit = (e, {email, password}) => {
		e.preventDefault();
		this.props.loginUser({email, password});
	};

	render() {
		//LOGIN PAGE
		//may be submitting
		//may need to direct to homepage

		if (this.props.loggedIn) {
			console.log("Should direct to home page")
		}

		let content = "";

		//loading or form
		if (this.props.loggingInUser) {
			content = ( <h3>logging in</h3> );
		} else {
			content = ( <Form handleOnSubmit={this.handleOnSubmit} /> );
		}

		const errors = this.props.errors ? <div className="errors">{this.props.errors[0]}</div> : null;

		return (
			<div>
				<h1>Login Page</h1>
				{errors}
				{content}
			</div>
		)
	}
}

const mapStateToProps = ({usersReducer}) => {
	const { loggingInUser, errors, loggedIn } = usersReducer;
  return { loggingInUser, errors, loggedIn }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ loginUser }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginUser);