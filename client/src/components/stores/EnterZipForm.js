import React, { Component } from 'react';

export default class EnterZipForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			zip: ''
		}
	}

	handleOnChange = (e) => {
		this.setState({[e.target.name]: e.target.value})
	};

	render() {
		const form = (
  	  <form onSubmit={(e) => this.props.handleOnSubmit(e, this.state)}>
  	  	<h3>Enter Your Zip Code</h3>
	  	  	<p className='displayInline'>
		    	  <label htmlFor="zip">zip</label>
	  	    	<input autoFocus type="zip" value={this.state.zip} name="zip" onChange={this.handleOnChange} />
		  	  </p>
			    <input className='displayInline' type="submit" value="Search" />
	    </form>	
		);

		return (
			(form)
		)
	}
}