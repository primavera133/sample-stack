import * as request from 'axios';
import { httpError } from './error';

export const saveRecord = (value) => (dispatch) => {
	return request.post('/api/record', { value: value })
		.then(({ data }) => {
			console.log('action value saved', value);
		}).catch((error) => {
			dispatch(httpError(error));
		});
}

export const loadRecords = () => (dispatch) => {
	return request.get('/api/records')
		.then(({ data }) => {
			dispatch({
				type: 'LOAD_RECORDS',
				payload: data
			});
		}).catch((error) => {
			dispatch(httpError(error));
		});
}