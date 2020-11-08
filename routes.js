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
const USER_CONTROLL = '/user-controll'
const CHANGE_PASSWORD = '/change-password'

// Post
const POSTS = '/posts'
const POST_DETAIL = '/:id'
const UPLOAD_POST = '/upload-post'
const EDIT_POST = '/:id/edit-post'
const DELETE_POST = '/:id/delete-post'

const routes = {
  home: HOME,
  login: LOGIN,
  join: JOIN,
  logout: LOGOUT,
  search: SEARCH,

  users: USERS,
  userDetail: (id) => {
    if (id) {
      return '/users/' + id
    } else {
      return USER_DETAIL
    }
  },
  editProfile: EDIT_PROFILE,
  userControll: USER_CONTROLL,
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
  editPost: (id) => {
    if(id){
      return '/posts/' + id + '/edit-post'
    } else {
      return EDIT_POST
    }
  },
  deletePost: (id) => {
    if(id){
      return '/posts/' + id + '/delete-post'
    } else {
      return DELETE_POST
    }
  }
}

export default routes
