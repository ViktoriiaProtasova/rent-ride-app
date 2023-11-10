import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllAdverts, getAdvert } from '../apiFetch';

export const fetchAllAdverts = createAsyncThunk(
  'adverts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await getAllAdverts();
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchAdvert = createAsyncThunk(
  'adverts/fetchAdvert',
  async (_, thunkAPI) => {
    try {
      const response = await getAdvert();
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
