import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { createItem } from '../../actions/items'

export class Create extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: null,
      description: null
    }
  }

  handleSubmit (event) {
    event.preventDefault()

    this.props.dispatch(createItem(this.state))
  }

  render () {
    return (
      <div>
        <h1>Create</h1>
        <nav>
          <Link to="/list">List</Link>
        </nav>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label htmlFor='name'>Name</label>
          <input
            id='name'
            type='text'
            onChange={e => this.setState({name: e.target.value})} />

          <label htmlFor='description'>Description</label>
          <input
            id='description'
            type='text'
            onChange={e => this.setState({description: e.target.value})} />

          <button type='submit'>Add item</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    dispatch: state.dispatch
  }
}

export default connect(mapStateToProps)(Create)
