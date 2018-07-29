import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CreateUser from './CreateUser';
import LoginUser from './LoginUser';
import LogoutUser from './LogoutUser';

class UserRoutes extends Component {
	render() { 
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