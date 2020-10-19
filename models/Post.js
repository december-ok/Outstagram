import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  contentUrl: {
    type: String,
    required: 'Url is REQUIRED'
  },
  article: {
    type: String,
    required: 'article is REQUIRED'
  },
  likedUsers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const model = mongoose.model('Post', PostSchema)
export default model
