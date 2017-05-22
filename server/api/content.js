import Content from '../models/content'
import Boom from 'boom'

const CLICKFACTOR = .1;

const handleContentClick = (request, reply) => {
	const id = request.params.id;
	Content.findById(id).then(item => {
		if (item === null) {
			return reply().code(400);
		}
		item.clicks += 1;
		item.save()
			.then(result => {
				reply().code(200)
			})
			.catch(error => reply(Boom.wrap(error)));
	})
}

const handleGetContent = (request, reply) => {
	Content.find({}).then(contentList => {
		let totalCalculatedWeight = 0;

		const weightCalcList = contentList.map((item, index) => {
			item.calculatedWeight = item.baseWeight + (item.clicks * CLICKFACTOR);
			totalCalculatedWeight += item.calculatedWeight;
			return item;
		})

		const weightCalcList2 = weightCalcList.map((item, index) => {
			item.weight = item.calculatedWeight / totalCalculatedWeight;
			return item;
		})

		const returnList = weightCalcList2.map(item => {
			return {
				_id: item._id,
				weight: item.weight,
				article: item.article
			}
		})

		reply(returnList).code(200)

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
		},
		{
			method: 'GET',
			path: '/api/content',
			config: {
				handler: handleGetContent
			}
		}
	])

	next()
}

exports.register.attributes = {
	name: 'content'
}
