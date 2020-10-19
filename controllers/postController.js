import Post from '../models/Post'
import routes from '../routes'

export const getUploadPost = (req, res) => {
  res.render('uploadPost')
}
export const postUploadPost = async (req, res) => {
  const {
    body: { article },
    file: { path }
  } = req
  const newPost = await Post.create({
    contentUrl: path,
    article
  })
  res.redirect(routes.postDetail(newPost.id))
}

export const getPostDetail = async (req, res) => {
  const {
    params: { id }
  } = req
  try {
    const post = await Post.findById(id)
    res.render('postDetail', { post })
  } catch (error) {
    res.redirect(routes.home)
  }
}

export const getEditPost = (req, res) => {
  res.render('editPost')
}
