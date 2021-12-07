import { createDraftSafeSelector } from '@reduxjs/toolkit';

import { RootState } from './store';

export const usersSelector = createDraftSafeSelector(
  (state: RootState) => state,
  (state) => state.users.users
);
