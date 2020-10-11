import express from 'express'
import { getEditPost, getPostDetail } from '../controllers/postController'
import routes from '../routes'

const postRouter = express.Router()

postRouter.get(routes.postDetail, getPostDetail)
postRouter.get(routes.editPost, getEditPost)

export default postRouter
