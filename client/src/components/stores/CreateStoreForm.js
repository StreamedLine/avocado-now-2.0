import React, { Component } from 'react';
import FriendlyForm from './../../helpers/FriendlyForm'

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
  	  	<FriendlyForm
  	  		handleOnSubmit={(e) => this.props.handleOnSubmit(e, this.state)} 
  	  		slides={[
	  	  	<p>
		    	  <label htmlFor="zip">zip</label>
	  	    	<input type="zip" value={this.state.zip} name="zip" onChange={this.handleOnChange} />
		  	  </p>,
	  	  	<p>
		    	  <label htmlFor="address">address</label>
	  	    	<input type="text" value={this.state.address} name="address" onChange={this.handleOnChange} />
		  	  </p>,
		      <p>
		      	<label htmlFor="storeName">name</label>
		      	<input type="storeName" value={this.state.storeName} name="storeName" onChange={this.handleOnChange} />
		      </p>,
		      <p className="optional">
		      	<label htmlFor="website">website</label>
		      	<input type="website" value={this.state.website} name="website" onChange={this.handleOnChange} />
		      </p>,
		      <p className='optional'>
		      	<label htmlFor="ripeness">ripeness</label>
		      	<input type="ripeness" value={this.state.ripeness} name="ripeness" onChange={this.handleOnChange} />
		      </p>,
			    <input autoFocus type="submit" value="Add Store" />
		    ]} />
		);

		return (
			<div>
				<h3>Add New Store!</h3> 
				{form}
			</div>
		)
	}
}