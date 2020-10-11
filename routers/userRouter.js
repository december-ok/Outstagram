import express from 'express'
import { getChangePassword, getEditProfile, getUserDetail } from '../controllers/userController'
import routes from '../routes'

const userRouter = express.Router()

userRouter.get(routes.userDetail, getUserDetail)
userRouter.get(routes.editProfile, getEditProfile)
userRouter.get(routes.changePassword, getChangePassword)

export default userRouter
