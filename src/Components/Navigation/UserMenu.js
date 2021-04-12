import { connect } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import styles from './AppBar.module.css';

const UserMenu = ({ email, onLogout }) => (
  <div className={styles.userMenu}>
    <p className={styles.userMenuText}> Welcome, your email: {email}</p>
    <button type="button" onClick={onLogout} className={styles.userMenuBtn}>
      Logout
    </button>
  </div>
);

const mapStateToProps = state => ({
  email: authSelectors.getUserEmail(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
