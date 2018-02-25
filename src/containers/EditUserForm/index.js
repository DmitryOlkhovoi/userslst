import _ from 'underscore'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addUser, updateUser } from '../../actions'
import UserForm from '../../components/UserForm'

class EditUserForm extends Component {
  onSubmit = (data) => {
    if (this.props.match.params.id) {
      this.updateUser(this.props.match.params.id, data)
    } else {
      this.addUser(data)
    }
    
    this.props.history.push('/')
  }

  updateUser(id, data) {
    this.props.updateUser({
      id,
      ...data,
    })
  }

  addUser(data) {
    this.props.addUser({
      id: Date.now(),
      ...data,
    })
  }

  getData() {
    return this.props.userData || {}
  }

  render() {
    return (
      <UserForm onSubmit={this.onSubmit} data={this.getData()} />
    )
  }
}

export default connect((state, ownProps) => ({
  userData: _.findWhere(state.users.items, {id: +ownProps.match.params.id})
}), { addUser, updateUser })(EditUserForm)
