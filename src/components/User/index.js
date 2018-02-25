import _ from 'underscore'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'
import './styles/index.css'

class User extends Component {
  render() {
    const { id, name, email, text } = this.props.data

    return (
      <Card className="user">
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle>{email}</CardSubtitle>
          <CardText>{text}</CardText>
          <Link to={`/edit/${id}`}>
            <Button>Update</Button>
          </Link>
          <Button color="danger" onClick={() => this.props.onDelete(id)}>Delete</Button>
        </CardBody>
      </Card>
    )
  }
}

User.propTypes = {
  onDelete: PropTypes.func,
  data: PropTypes.object,
}

User.defaultProps = {
  onDelete: _.noop,
  data: {
    id: ':id',
    name: ':name',
    email: ':email',
    text: ':text',
  },
}

export default User
