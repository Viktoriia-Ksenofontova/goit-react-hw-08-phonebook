import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './auth-actions';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [authActions.registerSuccess]: (_, { payload }) => payload.user,
  [authActions.loginSuccess]: (_, { payload }) => payload.user,
  [authActions.logoutSuccess]: () => initialUserState,
  [authActions.getUserInfoSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.token,
  [authActions.loginSuccess]: (_, { payload }) => payload.token,
  [authActions.logoutSuccess]: () => null,
});

const setError = (_, { payload }) => payload;
const error = createReducer(null, {
  [authActions.registerError]: setError,
  [authActions.loginError]: setError,
  [authActions.logoutError]: setError,
  [authActions.getUserInfoError]: setError,
});

const isLogin = createReducer(false, {
  [authActions.registerSuccess]: () => true,
  [authActions.loginSuccess]: () => true,
  [authActions.logoutSuccess]: () => false,
  [authActions.getUserInfoSuccess]: () => true,
  [authActions.registerError]: () => false,
  [authActions.loginError]: () => false,
  [authActions.getUserInfoError]: () => false,
});

export default combineReducers({
  user,
  isLogin,
  token,
  error,
});
