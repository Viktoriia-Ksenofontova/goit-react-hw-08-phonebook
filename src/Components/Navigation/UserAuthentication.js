import { NavLink } from 'react-router-dom';
import styles from './AppBar.module.css';

const UserAuthentication = () => (
  <div>
    <NavLink
      className={styles.headerLink}
      activeClassName={styles.headerLinkActive}
      to="/register"
      exact
    >
      Регистрация
    </NavLink>
    <NavLink
      className={styles.headerLink}
      activeClassName={styles.headerLinkActive}
      to="/login"
      exact
    >
      Вход
    </NavLink>
  </div>
);
export default UserAuthentication;
