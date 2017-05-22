import mongoose, { Schema } from 'mongoose'

const ContentSchema = Schema({
	baseWeight: {
		type: Number,
		min: 0,
		max: 1,
		required: true,
		default: 0.5
	},
	clicks: {
		type: Number,
		default: 0
	},
	img: {
		type: String
	}
})

export default mongoose.model('Content', ContentSchema)
