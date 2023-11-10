import { createSlice } from '@reduxjs/toolkit';
import { fetchAdvert, fetchAllAdverts } from './operations';

const advertsInitialState = {
  adverts: {
    advertsList: [],
    carBrand: null,
    carPrice: null,
    carMileage: null,
    isLoading: false,
    error: null,
  },
  filter: '',
};

const handlePending = state => {
  state.adverts.isLoading = true;
};

const handleRejected = (state, action) => {
  state.adverts.isLoading = false;
  state.adverts.error = action.payload;
};

export const advertsSlice = createSlice({
  name: 'adverts',
  initialState: advertsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAllAdverts.pending, handlePending)
      .addCase(fetchAllAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.advertsList = action.payload;
      })
      .addCase(fetchAdvert.pending, handlePending)
      .addCase(fetchAdvert.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.advertsList = action.payload;
      })
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});

export const advertsReducer = advertsSlice.reducer;
