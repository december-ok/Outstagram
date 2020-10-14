import { posts } from '../db'

export const getPostDetail = (req, res) => {
  res.render('postDetail', { post: posts[0] })
}

export const getEditPost = (req, res) => {
  res.render('editPost')
}
