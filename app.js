import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import { localMiddleWare } from './middlewares'
import homeRouter from './routers/homeRouter'
import postRouter from './routers/postRouter'
import userRouter from './routers/userRouter'
import routes from './routes'

const app = express()

app.use(helmet())
app.use(morgan('dev'))
app.use(express.json())
app.use('/favicon.ico', express.static('favicon.ico'))
app.use('/contents', express.static('contents'))
app.use('/static', express.static('static'))
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
