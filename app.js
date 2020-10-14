import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import { localMiddleWare } from './middlewares'
import homeRouter from './routers/homeRouter'
import postRouter from './routers/postRouter'
import userRouter from './routers/userRouter'
import routes from './routes'
import bodyParser from 'body-parser'

const app = express()

app.use(helmet())
app.use(morgan('dev'))
app.use('/favicon.ico', express.static('favicon.ico'))
app.use('/contents', express.static('contents'))
app.use('/static', express.static('static'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(localMiddleWare)

app.set('view engine', 'pug')

app.use(routes.home, homeRouter)
app.use(routes.users, userRouter)
app.use(routes.posts, postRouter)

// Redirect wrong path to home
app.use('/:wrong_path', (req, res) => {
  res.redirect(routes.home)
})

export default app
