import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE_APP } from 'settings/settings';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE_APP.contacts,
  reducers: {
    addContact: (state, action) => {
      state.push(action.payload);
    },
    deleteContact: (state, action) =>
      state.filter(({ id }) => id !== action.payload),
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
