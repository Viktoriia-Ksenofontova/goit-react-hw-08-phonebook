import { Component } from 'react';
import ContactForm from '../ContactForm';
import ContactList from '../Contacts/ContactsList';
import Section from '../Section';
import Filter from '../Filter';

class ContactsView extends Component {
  render() {
    return (
      <div>
        <Section title="Phonebook">
          <ContactForm />
        </Section>

        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      </div>
    );
  }
}

export default ContactsView;
