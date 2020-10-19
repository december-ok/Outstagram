import routes from './routes'
import multer from 'multer'

const multerImage = multer({ dest: 'contents/' })
export const uploadImage = multerImage.single('imageFile')

export const localMiddleWare = (req, res, next) => {
  res.locals.siteName = 'outstagram'
  res.locals.authenticated = false
  res.locals.routes = routes
  next()
}
