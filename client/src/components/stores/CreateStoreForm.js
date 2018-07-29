import React, { Component } from 'react';

export default class CreateUserForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			zip: '',
			address: '',
			storeName: '',
			website: '',
			ripeness: ''
		}
	}

	handleOnChange = (e) => {
		this.setState({[e.target.name]: e.target.value})
	};

	render() {
		const form = (
  	  <form onSubmit={(e) => this.props.handleOnSubmit(e, this.state)}>
  	  	<h3>Add New Store!</h3> 
  	  	<p>
	    	  <label htmlFor="zip">zip</label>
  	    	<input type="zip" value={this.state.zip} name="zip" onChange={this.handleOnChange} />
	  	  </p>
  	  	<p>
	    	  <label htmlFor="address">address</label>
  	    	<input type="text" value={this.state.address} name="address" onChange={this.handleOnChange} />
	  	  </p>
	      <p>
	      	<label htmlFor="storeName">name</label>
	      	<input type="storeName" value={this.state.storeName} name="storeName" onChange={this.handleOnChange} />
	      </p>
	      <p>
	      	<label htmlFor="website">website</label>
	      	<input type="website" value={this.state.website} name="website" onChange={this.handleOnChange} />
	      </p>
	      <p>
	      	<label htmlFor="ripeness">ripeness</label>
	      	<input type="ripeness" value={this.state.ripeness} name="ripeness" onChange={this.handleOnChange} />
	      </p>
	      <br/>
	      <input type="submit" value="Add Store" />
	    </form>	
		);

		return (
			(form)
		)
	}
}