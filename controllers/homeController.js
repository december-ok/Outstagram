import { posts } from '../db'
import routes from '../routes'

export const getLogin = (req, res) => {
  res.render('login', { pageTitle: 'Login' })
}
export const postLogin = (req, res) => {
  console.log(req.body)
  res.redirect(routes.home)
}

export const getJoin = (req, res) => {
  res.render('join', { pageTitle: 'Join' })
}
export const postJoin = (req, res) => {
  console.log(req.body)
  res.redirect(routes.home)
}

export const getLogout = (req, res) => {
  res.render('logout', { pageTitle: 'Logout' })
}
export const getSearch = (req, res) => {
  res.render('search', { pageTitle: 'Search' })
}
export const getHome = (req, res) => {
  const displayPosts = JSON.parse(JSON.stringify(posts))
  displayPosts.forEach((post, idx) => {
    if (post.article.length >= 100) {
      displayPosts[idx].article = post.article.slice(0, 100)
      displayPosts[idx].isLong = true
    }
  })
  if (res.locals.authenticated) {
    res.render('home', { pageTitle: "Someone's name", posts: displayPosts })
  } else {
    res.render('home', { pageTitle: 'Main', posts: displayPosts })
  }
}
