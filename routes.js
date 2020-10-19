// main
const HOME = '/'
const LOGIN = '/login'
const JOIN = '/join'
const LOGOUT = '/logout'
const SEARCH = '/search'

// User
const USERS = '/users'
const USER_DETAIL = '/:id'
const EDIT_PROFILE = '/edit-profile'
const CHANGE_PASSWORD = '/change-password'

// Post
const POSTS = '/posts'
const POST_DETAIL = '/:id'
const UPLOAD_POST = '/upload-post'
const EDIT_POST = '/edit-post'

const routes = {
  home: HOME,
  login: LOGIN,
  join: JOIN,
  logout: LOGOUT,
  search: SEARCH,

  users: USERS,
  userDetail: USER_DETAIL,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,

  posts: POSTS,
  postDetail: (id) => {
    if (id) {
      return '/posts/' + id
    } else {
      return POST_DETAIL
    }
  },
  uploadPost: UPLOAD_POST,
  editPost: EDIT_POST
}

export default routes
