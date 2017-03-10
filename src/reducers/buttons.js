import { handleActions } from 'redux-actions'

export default handleActions({
  LOAD_BUTTONS: (state, action) => ({
    ...state,
    list: action.payload
  }),
}, {
  list: []
})
