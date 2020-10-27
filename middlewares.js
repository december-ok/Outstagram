import routes from './routes'
import multer from 'multer'
import { others } from './controllers/otherController'

const multerImage = multer({ dest: 'contents/' })
export const uploadImage = multerImage.single('imageFile')

export const localMiddleWare = (req, res, next) => {
  res.locals.siteName = 'outstagram'
  res.locals.routes = routes
  res.locals.authenticated = false
  res.locals.user = req.user
  res.locals.others = others

  console.log('user : ' + req.user)
  if (req.user) {
    res.locals.authenticated = true
  }

  next()
}
