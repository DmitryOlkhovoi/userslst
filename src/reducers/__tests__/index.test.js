import actions from '../../actions/index'
import reducer, { defaultState } from '../users'

describe('Reducers', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(defaultState)
  })

  it('should add new user', () => {
    const user = {
      name: 'foo',
    }

    expect(reducer(defaultState, actions.addUser(user))).toEqual({
      ...defaultState,
      items: [user],
    })
  })

  it('should update user', () => {
    const user = {
      id: Date.now(),
      name: 'foo',
    }

    expect(reducer({
      items: [user]
    }, actions.updateUser({...user, name: 'bar'}))).toEqual({
      ...defaultState,
      items: [{...user, 'name': 'bar'}],
    })
  })

  it('should delete user', () => {
    const users = [
      {
        id: 1,
        name: 'foo',
      },
      {
        id: 2,
        name: 'bar',
      }
    ]

    expect(reducer({
      items: users
    }, actions.deleteUser(1))).toEqual({
      ...defaultState,
      items: [users[1]],
    })
  })
})