import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import EditUserForm from '../../containers/EditUserForm'

class UserEdit extends Component {
  render() {
    return (
      <div>
        <EditUserForm { ...this.props } />
        <Link to="/">Back to list</Link>
      </div>
    )
  }
}

export default UserEdit
