import { createSelector } from '@reduxjs/toolkit';

export const getAllContacts = state => state.contacts.items;

export const getLoading = state => state.contacts.loading;

export const getFilter = state => state.contacts.filter;

// export const getVisibleContacts = state => {
//   const allContacts = getAllContacts(state);
//   const filter = getFilter(state);
//   const normalizedFilter = filter.toLowerCase();

//   return allContacts.filter(({ name}) =>
//     name.toLowerCase().includes(normalizedFilter),
//   );
// };
export const getError = state => state.contacts.error;

export const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return allContacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);
