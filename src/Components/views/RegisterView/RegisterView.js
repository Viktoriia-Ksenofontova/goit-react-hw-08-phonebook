import { Component } from 'react';
import { connect } from 'react-redux';
import Section from '../../Section';
import authOperations from '../../../redux/auth/auth-operations';
import styles from './RegisterView.module.css';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <Section title="Регистрация">
        <form
          onSubmit={this.handleSubmit}
          autoComplete="off"
          className={styles.formRegisterView}
        >
          <label className={styles.labelRegisterView}>
            Имя
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              className={styles.inputRegisterView}
            />
          </label>
          <label className={styles.labelRegisterView}>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              className={styles.inputRegisterView}
            />
          </label>
          <label className={styles.labelRegisterView}>
            Пароль
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              className={styles.inputRegisterView}
            />
          </label>
          <button type="submit" className={styles.btnRegisterView}>
            Зарегестрироваться
          </button>
        </form>
      </Section>
    );
  }
}

// const mapDispatchToProps = dispatch=>({
//   onSubmit: (data)=>dispatch(authOperations.register(data))
// })

const mapDispatchToProps = {
  onSubmit: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
