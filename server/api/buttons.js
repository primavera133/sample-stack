const getButtons = (request, reply) => {
	reply([
		{
			label: 'button 1',
			value: '1'
		}, {
			label: 'button 2',
			value: '2'
		}
	]).code(200);
}

exports.register = (server, options, next) => {
	server.route([
		{
			method: 'GET',
			path: '/api/buttons',
			config: {
				handler: getButtons
			}
		}
	])

	next()
}

exports.register.attributes = {
	name: 'buttons'
}
