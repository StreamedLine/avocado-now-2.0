import React, { Component } from 'react';

export default class FriendlyForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
			next: true,
			prev: false
		}
	}

	nextClick = () => {
		let n = this.state.count + 1;
		if (n >= this.props.slides.length - 1) {
			n = this.props.slides.length - 1;
			this.setState({count: n, next: false})
		}
		this.setState({count: n, prev: true})
	}

	prevClick = () => {
		let n = this.state.count - 1;
		if (n <= 0) {
			n = 0;
			this.setState({count: n, prev: false})
		}
		this.setState({count: n, next: true})
	}

	render() {
		let displayed = this.props.slides.find((slide, i) => i == this.state.count)
		if (this.state.count === this.props.slides.length - 1) {
			displayed = [displayed].concat(this.props.slides.filter((s, i) => i !== this.state.count))
		}
		return (
			<div>
				{displayed}
				
				<p className={`btn ${this.state.prev ? 'liveBtn' : 'disabledBtn'}`} onClick={this.prevClick}>previous</p>
				<p className={`btn ${this.state.next ? 'liveBtn' : 'disabledBtn'}`} onClick={this.nextClick}>next</p>
			</div>
		)
	}
}