import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap'
import './styles/index.css'

class UserForm extends Component {
  state = {
    name: '',
    email: '',
    text: ''
  }

  constructor(props) {
    super(props)
    if (props.data) {
      this.state = props.data
    }
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state)
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <FormGroup>
          <Label for="exampleName">Name</Label>
          <Input
            name="name"
            id="exampleName"
            placeholder="name"
            defaultValue={this.state.name}
            onChange={(e) => this.setState({name: e.target.value})}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="with a placeholder"
            defaultValue={this.state.email}
            onChange={(e) => this.setState({email: e.target.value})}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input
            type="textarea"
            name="text"
            id="exampleText"
            defaultValue={this.state.text}
            onChange={(e) => this.setState({text: e.target.value})}
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    )
  }
}

export default UserForm
