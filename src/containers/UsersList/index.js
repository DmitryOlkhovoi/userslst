import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import { deleteUser } from '../../actions'
import User from '../../components/User'

class UserList extends Component {
  onDelete = (id) => {
    if(window.confirm('Are you sure?')) {
      this.props.deleteUser(id)
    }
  }

  renderUser(data) {
    return <User key={data.id} data={data} onDelete={this.onDelete} />
  }

  renderUsers() {
    return this.props.users.map(user => this.renderUser(user))
  }

  render() {
    return (
      <div>
        <Link to="/create">
          <Button color="secondary" size="lg">Create new user</Button>
        </Link>
        {this.renderUsers()}
      </div>
    )
  }
}

export default connect(
  (state) => ({users: state.users.items}),
  {
    deleteUser,
  }
)(UserList)
