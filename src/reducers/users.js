import { handleActions } from 'redux-actions'

export const defaultState = {
  items: [],
}

export default
handleActions({
  'add user': (state, action) => ({
    ...state,
    items: [...state.items, action.payload],
  }),
  'update user': (state, action) => ({
    ...state,
    items: [
      ...(state.items.filter(item => item.id !== action.payload.id)),
      action.payload,
    ]
  }),
  'delete user': (state, action) => ({
    ...state,
    items: state.items.filter(item => item.id !== action.payload)
  }),
}, defaultState)