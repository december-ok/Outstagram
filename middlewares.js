import routes from './routes'

export const localMiddleWare = (req, res, next) => {
  res.locals.siteName = 'outstagram'
  res.locals.authenticated = 0
  res.locals.routes = routes
  next()
}
