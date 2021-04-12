import axios from 'axios';
import authActions from './auth-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = registrationData => async dispatch => {
  dispatch(authActions.registerRequest());
  try {
    const res = await axios.post('/users/signup', registrationData);

    token.set(res.data.token);
    dispatch(authActions.registerSuccess(res.data));
  } catch (error) {
    dispatch(authActions.registerError(error.message));
  }
};

const login = loginData => async dispatch => {
  dispatch(authActions.loginRequest());
  try {
    const res = await axios.post('/users/login', loginData);

    token.set(res.data.token);
    dispatch(authActions.loginSuccess(res.data));
  } catch (error) {
    dispatch(authActions.loginError(error.message));
  }
};

const logout = () => async dispatch => {
  dispatch(authActions.logoutRequest());
  try {
    await axios.post('/users/logout');

    token.unset();
    dispatch(authActions.logoutSuccess());
  } catch (error) {
    dispatch(authActions.logoutError(error.message));
  }
};

const getUserInfo = () => async (dispatch, getState) => {
  const {
    auth: { token: savedToken },
  } = getState();

  if (!savedToken) {
    return;
  }

  token.set(savedToken);

  dispatch(authActions.getUserInfoRequest());

  try {
    const res = await axios.get('/users/current');
    dispatch(authActions.getUserInfoSuccess(res.data));
  } catch (error) {
    dispatch(authActions.getUserInfoError(error.message));
  }
};

export default { register, login, logout, getUserInfo };
