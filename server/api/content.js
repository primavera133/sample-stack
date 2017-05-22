import Content from '../models/content'
import Boom from 'boom'

const handleContentClick = (request, reply) => {
	const id = request.params.id;
	Content.findById(id).then( item => {
		if (item === null) {
			return reply().code(400);
		}
		item.clicks += 1;
		item.save()
			.then(result => { reply().code(200) })
			.catch(error => reply(Boom.wrap(error)));
	})
}

exports.register = (server, options, next) => {
	server.route([
		{
			method: 'POST',
			path: '/api/click/{id}',
			config: {
				handler: handleContentClick
			}
		}
	])

	next()
}

exports.register.attributes = {
	name: 'content'
}
