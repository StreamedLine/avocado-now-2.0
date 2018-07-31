import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { findByZip } from './../actions/storeActions';
import Form from './stores/EnterZipForm';

class Home extends Component {
	handleOnSubmit = (e, zip) => {
		e.preventDefault();
		this.props.findByZip(zip);
	};

	render() {
		//HOME PAGE
		//may be submitting search query
		//may need to redirect to stores page

		// if (this.props.redirect) {
		// 	return <Redirect to='/somewhere' />
		// }

		const message = this.props.searching ? <h3>Searching..please wait</h3> : null;
		const errors = this.props.errors ? <div className="errors">{this.props.errors[0]}</div> : null;

    return (
      <div>
        <h1>AvocadoNow</h1>
				<h2>We Love You Too</h2>
				{message}
				{errors}
				<Form handleOnSubmit={this.handleOnSubmit} />
      </div>
    );
  }
}

const mapStateToProps = ({storesReducer}) => {
	const { searching, errors, redirect } = storesReducer;
  return { searching, errors, redirect }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ findByZip }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)