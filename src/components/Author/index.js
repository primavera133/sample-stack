import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './styles.css';

export class Author extends Component {
	constructor (props) {
		super(props)
	}

	render () {
		return (
			<figure className={styles.author}>
				<img
					src="/static/images/author.jpeg"
					alt="svenne banan"
					className={styles.img}
				/>
				<figcaption className={styles.caption}>
					Svenne Banan
				</figcaption>
			</figure>
		)
	}
}

function mapStateToProps (state) {
	return {}
}

export default connect(mapStateToProps)(Author)
