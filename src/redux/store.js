import { configureStore } from '@reduxjs/toolkit';
import { advertsReducer } from './advertsSlice';
import { filterReducer } from './filterSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const globalReducer = (state = {}, action) => {
  // Ваші дії та обробка стану
  return state;
};

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['global'], // Ім'я вашого глобального редюсера
};

const persistedReducer = persistReducer(persistConfig, globalReducer);

export const store = configureStore({
  reducer: {
    global: persistedReducer, // Додайте ваш глобальний редюсер тут
    adverts: advertsReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
