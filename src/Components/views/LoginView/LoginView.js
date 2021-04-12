import { Component } from 'react';
import { connect } from 'react-redux';
import Section from '../../Section';
import authOperations from '../../../redux/auth/auth-operations';
import styles from './LoginView.module.css';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <Section title="Вход">
        <form
          onSubmit={this.handleSubmit}
          autoComplete="off"
          className={styles.formLoginView}
        >
          <label className={styles.labelLoginView}>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              className={styles.inputLoginView}
            />
          </label>
          <label className={styles.labelLoginView}>
            Пароль
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              className={styles.inputLoginView}
            />
          </label>
          <button type="submit" className={styles.btnLoginView}>
            Войти
          </button>
        </form>
      </Section>
    );
  }
}

const mapDispatchToProps = {
  onSubmit: authOperations.login,
};

export default connect(null, mapDispatchToProps)(LoginView);
