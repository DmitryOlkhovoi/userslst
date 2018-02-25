import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'
import UserForm from '../index'

it('renders correctly', () => {
  const tree = renderer.create(<UserForm />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly with data', () => {
  const tree = renderer.create(<UserForm data={{
    name: 'foo',
    email: 'bar',
    text: 'lorem'
  }} />).toJSON()
  expect(tree).toMatchSnapshot()
})