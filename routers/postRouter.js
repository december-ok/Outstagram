import express from 'express'
import { getEditPost, getPostDetail, getUploadPost, postUploadPost } from '../controllers/postController'
import { uploadImage } from '../middlewares'
import routes from '../routes'

const postRouter = express.Router()

postRouter.get(routes.uploadPost, getUploadPost)
postRouter.post(routes.uploadPost, uploadImage, postUploadPost)

postRouter.get(routes.editPost, getEditPost)

postRouter.get(routes.postDetail(), getPostDetail)

export default postRouter
