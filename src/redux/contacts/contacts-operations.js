import axios from 'axios';
import actions from './contacts-actions';

const addContact = contact => async dispatch => {
  dispatch(actions.addContactRequest());
  try {
    const res = await axios.post('/contacts', contact);
    dispatch(actions.addContactSuccess(res.data));
  } catch (error) {
    dispatch(actions.addContactError(error.message));
  }
};

const deleteContact = id => dispatch => {
  dispatch(actions.deleteContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(actions.deleteContactSuccess(id)))
    .catch(error => dispatch(actions.deleteContactError(error.message)));
};

const fetchContacts = () => async dispatch => {
  dispatch(actions.fetchContactsRequest());
  try {
    const res = await axios.get('/contacts');
    dispatch(actions.fetchContactsSuccess(res.data));
  } catch (error) {
    dispatch(actions.fetchContactsError(error.message));
  }
};

export default { fetchContacts, addContact, deleteContact };
