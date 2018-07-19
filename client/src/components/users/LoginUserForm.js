import React, { Component } from 'react';

export default class LoginUserForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		}
	}

	handleOnChange = (e) => {
		this.setState({[e.target.name]: e.target.value})
	};

	render() {
		const form = (
  	  <form onSubmit={(e) => this.props.handleOnSubmit(e, this.state)}>
  	  	<h3>Welcome! Please Log In</h3> 
  	  	<p>
	    	  <label htmlFor="email">email</label>
  	    	<input type="text" value={this.state.email} name="email" onChange={this.handleOnChange} />
	  	  </p>
	      <p>
	      	<label htmlFor="password">password</label>
	      	<input type="password" value={this.state.password} name="password" onChange={this.handleOnChange} />
	      </p>
	      <br/>
	      <input type="submit" value="Login" />
	    </form>	
		);

		return (
			(form)
		)
	}
}