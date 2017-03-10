import * as request from 'axios';
import { httpError } from './error';

export const loadButtons = () => (dispatch) => {
	return request.get('/api/buttons')
		.then(({ data }) => {
			// console.log('received data', data)
			dispatch({
				type: 'LOAD_BUTTONS',
				payload: data
			});
		}).catch((error) => {
			dispatch(httpError(error));
		});
}
