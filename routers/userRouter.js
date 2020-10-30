import express from 'express'
import { getChangePassword, getEditProfile, getUserControll, getUserDetail, postChangePassword, postEditProfile } from '../controllers/userController'
import { uploadImage } from '../middlewares'
import routes from '../routes'

const userRouter = express.Router()

userRouter.get(routes.editProfile, getEditProfile)
userRouter.post(routes.editProfile, uploadImage, postEditProfile)

userRouter.get(routes.userControll, getUserControll)

userRouter.get(routes.changePassword, getChangePassword)
userRouter.post(routes.changePassword, postChangePassword)

userRouter.get(routes.userDetail(), getUserDetail)

export default userRouter
