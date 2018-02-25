import actions from '../index'

describe('Actions', () => {
  it('should create an action to add user', () => {
    const expectedAction = {
      type: 'add user',
      payload: {
        foo: 'bar'
      },
    }

    expect(actions.addUser({foo: 'bar'})).toEqual(expectedAction)
  })

  it('should create an action to update user', () => {
    const expectedAction = {
      type: 'update user',
      payload: {
        foo: 'bar'
      },
    }

    expect(actions.updateUser({foo: 'bar'})).toEqual(expectedAction)
  })

  it('should create an action to update user', () => {
    const expectedAction = {
      type: 'delete user',
      payload: 1,
    }

    expect(actions.deleteUser(1)).toEqual(expectedAction)
  })
})
