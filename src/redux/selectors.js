//IMPORT
import { createSelector } from '@reduxjs/toolkit';
//HELPERS
import { contactsFilter } from 'helpers/contactsFilter';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filterQuery) => contactsFilter(contacts, filterQuery)
);

export const selectContactsLength = createSelector(
  [selectContacts],
  contacts => contacts.length
);
