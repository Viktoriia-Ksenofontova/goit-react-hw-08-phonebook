import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors';

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
      isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuth(state),
});

export default connect(mapStateToProps)(PrivateRoute);
