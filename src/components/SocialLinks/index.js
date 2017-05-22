import React, { Component } from 'react'

export class SocialLinks extends Component {
	constructor (props) {
		super(props)
	}

	render () {
		return (
			<ul>
				{ this.props.links.map((link, index) => {
					return (
						<li key={ index }>
							<a href={ link.href }>{ link.value }</a>
						</li>
					)
				})
				}
			</ul>
		)
	}
}

export default SocialLinks;
