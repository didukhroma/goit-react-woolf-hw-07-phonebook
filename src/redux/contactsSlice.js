//IMPORT
import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';
//SETTINGS
import { INITIAL_STATE_APP } from 'settings/settings';
//OPERATIONS
import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.error.message;
};

const handleFullfilled = state => {
  state.isLoading = false;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE_APP.contacts,

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(({ id }) => id === action.payload);
        state.items.splice(index, 1);
      })
      .addMatcher(
        isPending(fetchContacts, addContact, deleteContact),
        handlePending
      )
      .addMatcher(
        isFulfilled(fetchContacts, addContact, deleteContact),
        handleFullfilled
      )
      .addMatcher(
        isRejected(fetchContacts, addContact, deleteContact),
        handleRejected
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
