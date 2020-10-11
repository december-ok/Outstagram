import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import homeRouter from './routers/homeRouter'
import postRouter from './routers/postRouter'
import userRouter from './routers/userRouter'
import routes from './routes'

const app = express()

app.use(helmet())
app.use(morgan('dev'))
app.use('/favicon.ico', express.static('favicon.ico'))

app.set('view engine', 'pug')

app.use(routes.home, homeRouter)
app.use(routes.users, userRouter)
app.use(routes.posts, postRouter)
app.use('/:wrong_path', (req, res) => {
  res.redirect(routes.home)
})

export default app
