import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadRecords } from '../../actions/records'

export class Records extends Component {
	constructor (props) {
		super(props)

		props.dispatch(loadRecords())
	}

	render () {
		return (
			<main>
				<h1>Records</h1>
				<ul>
					{this.props.records.map((record, idx) =>
						<li key={idx}>
								{record.value}
						</li>
					)}
				</ul>
				<a href="/buttons">buttons</a>

			</main>
		)
	}
}

function mapStateToProps (state) {
	return {
		records: state.records.list
	}
}

export default connect(mapStateToProps)(Records)
