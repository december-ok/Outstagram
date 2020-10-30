import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import { localMiddleWare } from './middlewares'
import homeRouter from './routers/homeRouter'
import postRouter from './routers/postRouter'
import userRouter from './routers/userRouter'
import routes from './routes'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import passport from 'passport'
import session from 'express-session'
import MongoStore from 'connect-mongo'
import mongoose from 'mongoose'

import './passport'

const app = express()

const CokieStore = MongoStore(session)

app.use(helmet())
app.use(morgan('dev'))
app.use('/favicon.ico', express.static('favicon.ico'))
app.use('/contents', express.static('contents'))
app.use('/static', express.static('static'))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
    store: new CokieStore({
      mongooseConnection: mongoose.connection
    })
  })
)

app.use(passport.initialize())
app.use(passport.session())

app.use(localMiddleWare)

app.set('view engine', 'pug')

app.use(routes.home, homeRouter)
app.use(routes.users, userRouter)
app.use(routes.posts, postRouter)

// Redirect wrong path to home
app.use('/:wrong_path', (req, res) => {
  console.log('!!!!!!!!!!!!!!!!!!!!!!!!!')
  res.redirect(routes.home)
})

export default app
