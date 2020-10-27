import passport from 'passport'
import User from '../models/User'
import Post from '../models/Post'
import routes from '../routes'
import '../db'

export const getLogin = (req, res) => {
  res.render('login', { pageTitle: 'Login' })
}
export const postLogin = passport.authenticate(
  'local',
  {
    failureRedirect: routes.login,
    successRedirect: routes.home
  }
)

export const getJoin = (req, res) => {
  res.render('join', { pageTitle: 'Join' })
}
export const postJoin = async (req, res, next) => {
  const {
    body: { name, email, password, password2 }
  } = req
  if (password !== password2) {
    res.status(400)
    res.render('join', { pageTitle: 'Join' })
  } else {
    try {
      const user = await User({
        name, email
      })
      await User.register(user, password)
      next()
    } catch (error) {
      console.log(error)
      res.redirect(routes.home)
    }
  }
}

export const getLogout = (req, res) => {
  req.logout()
  res.redirect(routes.home)
  res.render('logout', { pageTitle: 'Logout' })
}

export const getSearch = (req, res) => {
  res.render('search', { pageTitle: 'Search' })
}

export const getHome = async (req, res) => {
  let pageTitle = 'Main'
  if (res.locals.authenticated) {
    pageTitle = req.user.name
  }

  let posts = []
  try {
    posts = await Post.find({}).sort({ _id: -1 })
      .populate('author')

    posts.forEach((post, idx) => {
      if (post.isLong) {
        posts[idx].article = post.article.slice(0, 100)
      }
    })
  } catch (error) {
    posts = []
  }

  res.render('home', { pageTitle, posts: posts })
}
