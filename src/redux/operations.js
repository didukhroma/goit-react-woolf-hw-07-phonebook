//IMPORT
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
//CONSTANTS
import {
  addContactOperationType,
  deleteContactOperationType,
  fetchContactsOperationType,
} from './constants';

axios.defaults.baseURL = 'https://6633ae1cf7d50bbd9b4a5132.mockapi.io';

export const fetchContacts = createAsyncThunk(
  fetchContactsOperationType,
  async () => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const addContact = createAsyncThunk(
  addContactOperationType,

  async data => {
    try {
      const response = await axios.post('/contacts', data);
      return { ...data, id: response.data.id };
    } catch (error) {
      throw error;
    }
  }
);

export const deleteContact = createAsyncThunk(
  deleteContactOperationType,
  async id => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      throw error;
    }
  }
);
