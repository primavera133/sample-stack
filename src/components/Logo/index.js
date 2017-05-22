import React, { Component } from 'react'
import styles from './styles.css';

export class Logo extends Component {
	constructor (props) {
		super(props)
	}

	render () {
		return (
			<img src='/static/images/logo.png' alt='logo' className={styles.logo} />
		)
	}
}

export default Logo
