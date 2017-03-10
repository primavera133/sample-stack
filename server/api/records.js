import Record from '../models/Record'
import Boom from 'boom';

const getRecords = (request, reply) => {
	Record.find({}, (error, records) => {
		if (error) {
			Boom.badImplementation()
		}

		reply(records).code(200)
	})
}

const addRecord = (request, reply) => {
	const record = new Record({ ...request.payload })
	record.save((error) => {
		if (error) {
			Boom.badImplementation()
		}
		reply().code(200)
	});
}

exports.register = (server, options, next) => {
	server.route([

		{
			method: 'GET',
			path: '/api/records',
			config: {
				handler: getRecords
			}
		},

		{
			method: 'POST',
			path: '/api/record',
			config: {
				handler: addRecord
			}
		}

	])

	next()
}

exports.register.attributes = {
	name: 'records'
}
