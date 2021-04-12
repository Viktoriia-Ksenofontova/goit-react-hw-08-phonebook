import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions';
const {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactError,
  addContactSuccess,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} = actions;

const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, action) => [...state, action.payload],
  [deleteContactSuccess]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, action) => action.payload,
});

const error = createReducer(null, {
  [addContactError]: (_, { payload }) => payload,
  [deleteContactError]: (_, { payload }) => payload,
  [fetchContactsError]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
