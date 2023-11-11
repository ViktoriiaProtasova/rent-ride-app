import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllAdverts, getAdvertsByPage } from '../apiFetch';

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

export const fetchAdvertsByPage = createAsyncThunk(
  'adverts/fetchByPage',
  async ({ page, limit }, thunkAPI) => {
    try {
      const response = await getAdvertsByPage({ page, limit });
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
