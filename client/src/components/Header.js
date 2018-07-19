import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';

class Header extends Component {
	render() { 
		//1
		//create links variable
		let links = null;

		//2 
		//put corrent links in variable
		if (!this.props.loggedIn) {
			links = (
				<div className='links'>
					<NavLink 
					  to="/login"
					  activeClassName="headerLink"
					>login</NavLink>
					<NavLink 
					  to="/signup"
					  activeClassName="headerLink"
					>signup</NavLink>
				</div>
			)

		} else {
			links = (
				<div className='links'>
					<NavLink 
					  to="/logout"
					  activeClassName="headerLink"
					>logout</NavLink>
				</div>
			)
		}

		//3
		//display links in header
		return (
			<div className='header'>
				{links}
			</div>
		)
	}
}

const mapStateToProps = ({usersReducer}) => {
	return {loggedIn: usersReducer.loggedIn}
};

export default withRouter(connect(mapStateToProps, null)(Header));