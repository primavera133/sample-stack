import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadButtons } from '../../actions/buttons'
import { saveRecord } from '../../actions/records'

export class Buttons extends Component {
	constructor (props) {
		super(props)

		this.handleClick = this.handleClick.bind(this);

		props.dispatch(loadButtons())
	}

	handleClick (event) {
		event.preventDefault();

		const value = event.currentTarget.dataset['value'];
		this.props.dispatch(saveRecord(value));
	}

	render () {
		return (
			<main>
				<h1>The Buttons</h1>
				<ul>
					{this.props.buttons.map((button, idx) =>
						<li key={idx}>
							<button
								data-value={button.value}
								onClick={this.handleClick}
							>
								{button.label}
							</button>
						</li>
					)}
				</ul>
				<a href="/records">records</a>
			</main>
		)
	}
}

function mapStateToProps (state) {
	return {
		buttons: state.buttons.list
	}
}

export default connect(mapStateToProps)(Buttons)
