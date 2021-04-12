import { createAction } from '@reduxjs/toolkit';

const registerRequest = createAction('auth/registerRequest');
const registerSuccess = createAction('auth/registerSuccess');
const registerError = createAction('auth/registerError');

const loginRequest = createAction('auth/loginRequest');
const loginSuccess = createAction('auth/loginSuccess');
const loginError = createAction('auth/logintError');

const logoutRequest = createAction('auth/logoutRequest');
const logoutSuccess = createAction('auth/logoutSuccess');
const logoutError = createAction('auth/logoutError');

const getUserInfoRequest = createAction('auth/getUserInfoRequest');
const getUserInfoSuccess = createAction('auth/getUserInfoSuccess');
const getUserInfoError = createAction('auth/getUserInfoError');

export default {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getUserInfoRequest,
  getUserInfoSuccess,
  getUserInfoError,
};
