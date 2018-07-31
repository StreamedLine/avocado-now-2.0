import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CreateStore from './CreateStore';

export default class StoreRoutes extends Component {
	render() {
		return (
			<Route path='/add-store' component={CreateStore} />
		)
	}
}