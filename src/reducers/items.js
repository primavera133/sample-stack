import { handleActions } from 'redux-actions'

export default handleActions({
  RECEIVE_ITEMS: (state, action) => ({
    ...state,
    list: action.payload
  }),
  SAVE_ITEM: (state, action) => {
    let items = [...state.list]
    items.push(action.payload)
    return {
      ...state,
      list: items
    }
  },
  DELETE_ITEM: (state, action) => {
    const items = state.list.filter(item => {
      return item._id !== action.payload.id
    })
    return {
      ...state,
      list: items
    }
  },
  UPDATE_ITEM: (state, action) => {
    const items = state.list.map(item => {
      if (item._id === action.payload._id) {
        return action.payload
      }
      return item
    })
    return {
      ...state,
      list: items
    }
  }
}, {
  list: []
})
