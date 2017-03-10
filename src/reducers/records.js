import { handleActions } from 'redux-actions'

export default handleActions({
	LOAD_RECORDS: (state, action) => ({
		...state,
		list: action.payload
	}),
}, {
	list: []
})
