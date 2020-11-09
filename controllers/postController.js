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
  let isLong = article.length > 80 ? true : false

  // create post
  const newPost = await Post.create({
    author: req.user.id,
    contentUrl: path,
    article,
    isLong
  })

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

export const getEditPost = async (req, res) => {
  const {
    params: { id }
  } = req
  
  try {
    const post = await Post.findById(id)
      .populate('author')
    res.render('editPost', { post })
  } catch (error) {
    res.redirect(routes.home)
  }
}
export const postEditPost = async (req, res) => {
  const{
    params: { id },
    body: { article }
  } = req
  let isLong = article.length > 80 ? true : false
  try{
    await Post.findByIdAndUpdate( id, { article, isLong } )
    res.redirect('/posts/' + id)
  } catch(error) {
    res.redirect(routes.home)
  }
}

export const getDeletePost = async (req, res) => {
  const {
    params: { id }
  } = req;
  try{
    const post = await Post.findById(id)
    console.log(post.author, req.user.id)
    if(post.author != req.user.id){
      throw Error();
    } else {
      await Post.findByIdAndRemove(id)
      //remove post from user post list
    }
  } catch(error) {
    console.log(error)
  }

  res.redirect(routes.home)
}
