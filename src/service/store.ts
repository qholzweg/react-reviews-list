import { configureStore } from '@reduxjs/toolkit';
import type {} from 'redux-thunk/extend-redux'
import settings from './settings-slice';

export const store = configureStore({
  reducer: {settings:settings}
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
