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

  // simplied view?
  let isLong = false
  if (article.length > 80) {
    isLong = true
  }

  // create post
  const newPost = await Post.create({
    author: req.user.id,
    contentUrl: path,
    article,
    isLong
  })

  // add user's post list
  req.user.posts.push(newPost.id)
  req.user.save()

  res.redirect(routes.postDetail(newPost.id))
}

export const getPostDetail = async (req, res) => {
  const {
    params: { id }
  } = req
  try {
    const post = await Post.findById(id)
      .populate('author')
    res.render('postDetail', { post })
  } catch (error) {
    res.redirect(routes.home)
  }
}

export const getEditPost = (req, res) => {
  res.render('editPost')
}
