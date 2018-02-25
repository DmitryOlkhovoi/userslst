import { createAction } from 'redux-actions'

export const addUser = createAction('add user')
export const updateUser = createAction('update user')
export const deleteUser = createAction('delete user')

export default {
  addUser,
  updateUser,
  deleteUser,
}