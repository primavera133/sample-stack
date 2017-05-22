import mongoose, { Schema } from 'mongoose'

const recordSchema = Schema({
	value: {
		type: String,
		required: true
	}
})

export default mongoose.model('Record', recordSchema)
