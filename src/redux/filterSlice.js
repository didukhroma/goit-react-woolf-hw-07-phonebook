//IMPORT
import { createSlice } from '@reduxjs/toolkit';
//SETTINGS
import { INITIAL_STATE_APP } from 'settings/settings';

const filterSlice = createSlice({
  name: 'filter',
  initialState: INITIAL_STATE_APP.filter,
  reducers: {
    updateFilter(_, action) {
      return action.payload;
    },
  },
});

export const { updateFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
