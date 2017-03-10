import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../actions/auth.js'

export class Authenticate extends Component {
  constructor (props) {
    super(props)

    this.state = {
      username: null,
      password: null
    }
  }

  handleSubmit (event) {
    event.preventDefault()

    this.props.dispatch(signIn(this.state, '/list'))
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label htmlFor='username'>Username</label>
        <input
          id='username'
          type='text'
          onChange={e => this.setState({username: e.target.value})} />

        <label htmlFor='password'>Password</label>
        <input
          id='password'
          type='text'
          onChange={e => this.setState({password: e.target.value})} />

        <button type='submit'>Add item</button>
      </form>
    )
  }
}

Authenticate.propTypes = {
  dispatch: PropTypes.func
}

export default connect()(Authenticate)
