import mongoose, { Schema } from 'mongoose'

const itemSchema = Schema({
  name: {
    type: String, unique: true, required: true
  },
  description: {
    type: String, required: true
  }
})

export default mongoose.model('Item', itemSchema)
