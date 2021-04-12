const getIsAuth = state => state.auth.isLogin;

const getUserEmail = state => state.auth.user.email;

export default { getIsAuth, getUserEmail };
