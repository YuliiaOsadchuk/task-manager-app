import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import usersSlices from './slices';

export const store = configureStore({
  reducer: {
    users: usersSlices.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
