import React, { Component } from 'react';
import { createStore } from '../../actions/storeActions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Form from './CreateStoreForm';

class CreateStore extends Component {
	//pass as prop into form
	handleOnSubmit = (e, storeData) => {
		e.preventDefault();
		this.props.createStore(storeData);
	};

	render() {
		//CREATE PAGE
		//may be submitting
		//may need to redirect to login

		if (this.props.redirect) {
			return <Redirect to='/' />
		}
	
		const message = this.props.creatingStore ? <h3>Creating store..please wait</h3> : null;
		const errors = this.props.errors ? <div className="errors">{this.props.errors[0]}</div> : null;

		return (
			<div>
				<h1>Add Store</h1>
				<p>To see if a store is already listed <a src='#'>click here</a></p>
				{message}
				{errors}
				<Form handleOnSubmit={this.handleOnSubmit} />
			</div>
		)
	}
}

const mapStateToProps = ({usersReducer, storesReducer}) => {
	const { creatingStore, errors, redirect } = storesReducer;
  return { creatingStore, errors, redirect }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ createStore }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateStore);