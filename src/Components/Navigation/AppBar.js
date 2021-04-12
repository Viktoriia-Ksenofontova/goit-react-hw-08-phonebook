import UserAuthentication from './UserAuthentication';
import UserMenu from './UserMenu';
import MainNavigation from './MainNavigation';
import { connect } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import styles from './AppBar.module.css';

const AppBar = ({ isAuthenticated }) => (
  <header className={styles.header}>
    <MainNavigation />
    {isAuthenticated ? <UserMenu /> : <UserAuthentication />}
  </header>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuth(state),
});

export default connect(mapStateToProps)(AppBar);
