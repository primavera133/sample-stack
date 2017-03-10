import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

export class Update extends Component {
  constructor (props) {
    super(props)

    this.state = {
      _id: null,
      name: null,
      description: null
    }
  }

  componentDidMount () {
    if (this.props.item) {
      this.setState(this.props.item)
    }
  }

  componentWillReceiveProps ({item}) {
    if (item && item._id !== this.state._id) {
      this.setState(item)
    }
  }

  handleSubmit (event) {
    event.preventDefault()

    this.props.handleSubmit(this.state)
  }

  render () {
    if (!this.state._id) {
      return <div></div>
    }
    return (
      <div>
        <h1>Update</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label htmlFor='name'>Name</label>
          <input
            id='name'
            type='text'
            value={this.state.name}
            onChange={e => this.setState({name: e.target.value})} />

          <label htmlFor='description'>Description</label>
          <input
            id='description'
            type='text'
            value={this.state.description}
            onChange={e => this.setState({description: e.target.value})} />

          <button type='submit'>Update item</button>
        </form>
      </div>
    )
  }
}

Update.propTypes = {
  item: PropTypes.object
}

export default Update
