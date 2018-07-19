import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CreateUser from './CreateUser';
import LoginUser from './LoginUser';
import LogoutUser from './LogoutUser';

class UserRoutes extends Component {
	render() { 
		let content = '';

		return (
			<div>
				<Route path='/signup' component={CreateUser} />
				<Route path='/login' component={LoginUser}  />
				<Route path='/logout' component={LogoutUser}  />
			</div>
		)
	}
}

export default UserRoutes