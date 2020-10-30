import routes from '../routes'
import User from '../models/User'

export const getUserDetail = async (req, res) => {
  const { params: { id } } = req
  try {
    const findingUser = await User.findById(id).populate('posts')
    console.log(findingUser)
    res.render('userDetail', { pageTitle: findingUser.name, findingUser })
  } catch (error) {
    res.redirect(routes.home)
  }
}
export const getEditProfile = (req, res) => {
  res.render('editProfile')
}
export const getChangePassword = (req, res) => {
  res.render('changePassword')
}
