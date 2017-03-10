import { routeActions } from 'redux-simple-router';

export const httpError = (error) => (dispatch) => {
	if (error.response) {
		if (error.response.status === 401) {
			console.error(401)
			return;
		}

		if (error.response.status === 403) {
			console.error(403);
			return;
		}

		if (error.response.status === 404) {
			console.error(404)
			return;
		}

		if (error.response.status === 409) {
			console.error(409)
			return;
		}
	}

	console.log('Generalknas');
};
