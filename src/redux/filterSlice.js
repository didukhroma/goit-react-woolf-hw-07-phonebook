import { createSlice } from '@reduxjs/toolkit';

const { INITIAL_STATE_APP } = require('settings/settings');

const filterSlice = createSlice({
  name: 'filter',
  initialState: INITIAL_STATE_APP.filter,
  reducers: {
    updateFilter: (_, action) => action.payload,
  },
});

export const { updateFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
