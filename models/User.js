import mongoose from 'mongoose'
import passportLocalMongoose from 'passport-local-mongoose'

const UserSchema = new mongoose.Schema({
  name: String,
  description: String,
  email: String,
  liked: {
    type: Number,
    default: 0
  },
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

UserSchema.plugin(passportLocalMongoose, { usernameField: 'email' })

const model = mongoose.model('User', UserSchema)
export default model
