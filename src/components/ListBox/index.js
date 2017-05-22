import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './styles.css';
import List from '../List';
import SocialLinks from '../SocialLinks'
import HomePageLink from '../HomePageLink'
import NewsLetterLink from '../NewsLetterLink'

export class ListBox extends Component {
	constructor (props) {
		super(props)
	}

	render () {
		return (
			<div className={styles.listBox}>
				<h2>Heading</h2>
				<List items={ this.props.items } />
				<SocialLinks links={ this.props.socialLinks } />
				<NewsLetterLink />
				<HomePageLink />
			</div>
		)
	}
}

function mapStateToProps (state) {
	return {
		items: state.links.items,
		socialLinks: state.links.socialLinks
	}
}

export default connect(mapStateToProps)(ListBox)
