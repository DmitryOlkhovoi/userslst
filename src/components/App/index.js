import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import { Container } from 'reactstrap'
import UsersList from '../../containers/UsersList'
import UserEdit from '../../pages/UserEdit'

import './styles/index.css'

class App extends Component {
  render() {
    return (
      <Container className="app">
        <Router>
          <div>
            <Route exact path="/" component={UsersList} />
            <Route path="/create" component={UserEdit} />
            <Route path="/edit/:id" component={UserEdit} />
          </div>
        </Router>
      </Container>
    )
  }
}

export default App
