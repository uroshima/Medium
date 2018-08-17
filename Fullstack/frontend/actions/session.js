
import * as APIUtil from '../utils/session';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = (user) =>({
  type: RECEIVE_CURRENT_USER,
  user
});

export const logoutCurrentUser = (user) =>({
  type: LOGOUT_CURRENT_USER,
  user
});

export const receiveErrors = (errors) =>({
  type: RECEIVE_SESSION_ERRORS,
  errors
});


export const signup = user => dispatch => (
  APIUtil.signup(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const login = user => dispatch => (
    APIUtil.login(user).then(user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveErrors(err.responseJSON)))
)

export const logout = () => dispatch => (
  APIUtil.logout().then((user) => dispatch(logoutCurrentUser(user)))
)
