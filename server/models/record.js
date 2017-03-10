import mongoose, { Schema } from 'mongoose'

const recordSchema = Schema({
	value: {
		type: String
	}
})

export default mongoose.model('Record', recordSchema)
