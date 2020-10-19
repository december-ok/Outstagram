import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: String,
  nickName: String,
  email: String,
  avatarUrl: {
    type: String,
    default: '../contents/user.png'
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post'
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

const model = mongoose.model('User', UserSchema)
export default model
