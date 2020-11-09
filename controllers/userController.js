import routes from '../routes'
import User from '../models/User'
import Post from '../models/Post'
import Comment from '../models/Comment'
import { postEditPost } from './postController'

export const getUserDetail = async (req, res) => {
  const { params: { id } } = req
  try {
    const findingUser = await User.findById(id)
    // show posts in latest order
    const posts = await Post.find({ author: findingUser }).sort({ _id:-1 })
    const comments = await Comment.find({ author: findingUser })

    res.render('userDetail', { 
      pageTitle: findingUser.name, 
      findingUser, 
      posts, 
      comments 
    })
  } catch (error) {
    console.log(error)
    res.redirect(routes.home)
  }
}

export const getUserControll = (req, res) => {
  res.render('userControll', { pageTitle: 'Account Management' })
}

export const getEditProfile = (req, res) => {
  res.render('editProfile', { pageTitle: 'Edit Profile' })
}
export const postEditProfile = async (req, res) => {
  const {
    body: { description },
    file
  } = req

  try {
    await User.findByIdAndUpdate(req.user.id, {
      description,
      avatarUrl: file ? `/${file.path}` : req.user.avatarUrl
    })

    res.redirect('/users' + routes.userDetail(req.user.id))
  } catch (error) {
    res.redirect(routes.editProfile)
  }
}

export const getChangePassword = (req, res) => {
  res.render('changePassword')
}
export const postChangePassword = async (req, res) => {
  const {
    body: { oldPassword, newPassword, newPassword1 }
  } = req

  try {
    if (newPassword !== newPassword1) {
      res.status(400)
      res.redirect(`/users${routes.changePassword}`)
      return
    }
    await req.user.changePassword(oldPassword, newPassword)
    res.redirect(`/users${routes.userDetail(req.user.id)}`)
  } catch (error) {
    res.redirect(routes.changePassword)
  }
}
