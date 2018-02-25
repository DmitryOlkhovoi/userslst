import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import User from '../index'

it('renders correctly', () => {
  const tree = renderer.create(
  <MemoryRouter><User /></MemoryRouter>
).toJSON()
  expect(tree).toMatchSnapshot()
})
