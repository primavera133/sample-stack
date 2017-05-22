import React, { Component } from 'react'
import Logo from '../Logo'
import Article from '../Article'
import Author from '../Author'
import ListBox from '../ListBox'


export class Basic extends Component {
	constructor (props) {
		super(props)
	}

	render () {
		return (
			<main>
				<Logo />
				<Article />
				<Author/>
				<ListBox/>
			</main>
		)
	}
}

export default Basic
