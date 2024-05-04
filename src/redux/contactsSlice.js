//IMPORT
import { createSlice, isPending, isRejected } from '@reduxjs/toolkit';
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

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE_APP.contacts,

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(({ id }) => id === action.payload);
        state.items.splice(index, 1);
        state.isLoading = false;
      })
      .addMatcher(
        isPending(fetchContacts, addContact, deleteContact),
        handlePending
      )
      .addMatcher(
        isRejected(fetchContacts, addContact, deleteContact),
        handleRejected
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
