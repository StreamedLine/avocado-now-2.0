import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logoutUser } from '../../actions/userActions'

class LogoutUser extends Component {
	render() {
		this.props.logoutUser();

		return (
			<Redirect to='/login' />
		)
	}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ logoutUser }, dispatch)
}

export default connect(null, mapDispatchToProps)(LogoutUser);