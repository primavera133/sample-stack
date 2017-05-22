import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './styles.css';

export class Article extends Component {
	constructor (props) {
		super(props)
	}

	render () {
		return (
			<article className={styles.article}>
				<small className={styles.date}>2017-05-22</small>
				<h1 className={styles.header}>Title</h1>
				<strong className={styles.preamble}>An nescis mi fili quantilla prudentia mundus regatur?</strong>
				<p>
					Stinking bishop stinking bishop cheese slices. Mascarpone cheeseburger cheeseburger pecorino fromage pecorino pepper jack camembert de normandie. Cut the cheese cow cauliflower cheese cheeseburger melted cheese cheese and wine danish fontina jarlsberg. Fondue brie.
				</p>
				<p>
					Mozzarella cheese strings paneer. Gouda manchego mozzarella monterey jack stinking bishop feta pecorino cheese on toast. Swiss brie cheese and biscuits stinking bishop swiss swiss cheese and wine fromage frais. Taleggio cheddar rubber cheese the big cheese.
				</p>
				<p>
					Cheese triangles roquefort edam. Cheddar parmesan halloumi hard cheese pepper jack chalk and cheese who moved my cheese red leicester. Everyone loves babybel melted cheese croque monsieur cow croque monsieur st. agur blue cheese camembert de normandie. Manchego st. agur blue cheese cheese and biscuits when the cheese comes out everybody's happy fromage macaroni cheese port-salut.
				</p>
			</article>
		)
	}
}

function mapStateToProps (state) {
	return {}
}

export default connect(mapStateToProps)(Article)
