import { configureStore } from '@reduxjs/toolkit';
import AppReducer from '../features/counter/appSlice';

export const store = configureStore({
  reducer: {
    app: AppReducer,
  },
});
