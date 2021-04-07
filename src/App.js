import { Component } from 'react';
import { connect } from 'react-redux';
import ContactForm from './Components/ContactForm';
import ContactList from './Components/Contacts/ContactsList';
import Section from './Components/Section';
import Filter from './Components/Filter';
import { getLoading, getError } from './redux/contacts/contacts-selectors';
import Spinner from './Components/Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

class App extends Component {
  render() {
    const { error } = this.props;

    return (
      <>
        <div className="App">
          <Section title="Phonebook">
            <ContactForm />
            {this.props.isLoading && <Spinner />}
          </Section>

          <Section title="Contacts">
            <Filter />
            <ContactList />
          </Section>

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
  error: PropTypes.array,
  isLoading: PropTypes.bool,
};

const mapStateToProps = state => ({
  isLoading: getLoading(state),
  error: getError(state),
});

export default connect(mapStateToProps)(App);
