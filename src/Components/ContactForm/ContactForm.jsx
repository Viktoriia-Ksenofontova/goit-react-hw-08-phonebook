import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './ContactForm.module.css';
import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';
import { getAllContacts } from '../../redux/contacts/contacts-selectors';
import { ToastContainer, toast } from 'react-toastify';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = uuidv4();
  numberInputId = uuidv4();

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name } = this.state;
    const { items, formSubmitHandler } = this.props;

    if (items.find(item => item.name === name)) {
      return toast.info(`${name} is already in contacts.`, {
        position: toast.POSITION.TOP_CENTER,
      });
    }

    formSubmitHandler(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <label htmlFor={this.nameInputId} className={styles.formLabel}>
          Name
          <input
            className={styles.formInput}
            type="text"
            placeholder="Enter name"
            name="name"
            value={name}
            onChange={this.handleInputChange}
            id={this.nameInputId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>

        <label htmlFor={this.numberInputId} className={styles.formLabel}>
          Number
          <input
            className={styles.formInput}
            type="tel"
            placeholder="Enter telephone number"
            name="number"
            value={number}
            onChange={this.handleInputChange}
            id={this.numberInputId}
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
          />
        </label>
        <button type="submit" className={styles.formBtn}>
          Add contact
        </button>
        <ToastContainer />
      </form>
    );
  }
}

ContactForm.defaultProps = {
  items: [],
};

ContactForm.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape),
  formSubmitHandler: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  items: getAllContacts(state),
});

const mapDispatchToProps = dispatch => ({
  formSubmitHandler: data => dispatch(contactsOperations.addContact(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
