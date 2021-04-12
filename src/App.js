import { Component, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import AppBar from './Components/Navigation/AppBar';
import Spinner from './Components/Loader/Loader';
import authOperations from './redux/auth/auth-operations';
import { getLoading, getError } from './redux/contacts/contacts-selectors';
import { ToastContainer, toast } from 'react-toastify';
import PropTypes from 'prop-types';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const Home = lazy(() =>
  import('./Components/views/Home/Home' /*webpackChunkName: "home-page"*/),
);
const RegisterView = lazy(() =>
  import(
    './Components/views/RegisterView/RegisterView' /*webpackChunkName: "register-page"*/
  ),
);
const LoginView = lazy(() =>
  import(
    './Components/views/LoginView/LoginView' /*webpackChunkName: "login-page"*/
  ),
);
const ContactsView = lazy(() =>
  import(
    './Components/views/ContactsView' /*webpackChunkName: "contacts-page"*/
  ),
);

class App extends Component {
  componentDidMount() {
    this.props.onGetUserInfo();
  }

  render() {
    const { error } = this.props;

    return (
      <>
        <div className="App">
          <AppBar />
          {/* {this.props.isLoading && <Spinner />} */}
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route exact path="/" component={Home} />
              <PublicRoute
                path="/register"
                restricted
                component={RegisterView}
              />
              <PublicRoute path="/login" restricted component={LoginView} />
              <PrivateRoute path="/contacts" component={ContactsView} />
            </Switch>
          </Suspense>
          <ToastContainer />
        </div>
        {error &&
          toast.error(`${error}`, { position: toast.POSITION.TOP_CENTER })}
      </>
    );
  }
}

App.defaultProps = {
  error: null,
  isLoading: false,
};

App.propTypes = {
  error: PropTypes.string,
  isLoading: PropTypes.bool,
};

const mapStateToProps = state => ({
  isLoading: getLoading(state),
  error: getError(state),
});

const mapDispatchToProps = {
  onGetUserInfo: authOperations.getUserInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
