import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContactOperationType,
  deleteContactOperationType,
  fetchContactsOperationType,
} from './constants';
import axios from 'axios';

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
  async () => {
    const response = await axios.post('/contacts');
    console.log(response);
    return response;
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
