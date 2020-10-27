import express from 'express'
import { getHome, getJoin, getLogin, getLogout, getSearch, postJoin, postLogin } from '../controllers/homeController'
import routes from '../routes'

const homeRouter = express.Router()

homeRouter.get(routes.join, getJoin)
homeRouter.post(routes.join, postJoin, postLogin)

homeRouter.get(routes.login, getLogin)
homeRouter.post(routes.login, postLogin)

homeRouter.get(routes.logout, getLogout)
homeRouter.get(routes.search, getSearch)
homeRouter.get(routes.home, getHome)

export default homeRouter
