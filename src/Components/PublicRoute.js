import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors';

const PublicRoute = ({
  component: Component,
  isAuthenticated,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
      isAuthenticated && routeProps.restricted ? (
        <Redirect to="/contacts" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuth(state),
});

export default connect(mapStateToProps)(PublicRoute);
