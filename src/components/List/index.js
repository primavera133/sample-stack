import React, { Component } from 'react'
import styles from './styles.css';

export class List extends Component {
	constructor (props) {
		super(props)
	}

	render () {
		return (
			<ul>
				{ this.props.items.map((item, index) => {
					return (
						<li key={ index }>
							<a href={ item.href }>{ item.value }</a>
						</li>
					)
				})
				}
			</ul>
		)
	}
}

export default List;
