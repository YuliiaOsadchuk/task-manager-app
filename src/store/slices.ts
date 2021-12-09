import { createSlice, createAsyncThunk, PayloadAction, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

import { BASE_URL } from '../constants';
import { User } from '../interfaces';
import { RootState } from './store';

interface UsersState {
  users?: User[];
  loading?: boolean;
}

const initialState = {
  users: [],
  loading: false,
};

const usersAdapter = createEntityAdapter<User>();

export const loadUsers = createAsyncThunk('users/loadUsers', async (): Promise<User[]> => {
  const { data } = await axios.get<User[]>(`${BASE_URL}/users`);
  return data;
});

const usersSlices = createSlice({
  name: 'users',
  initialState: usersAdapter.getInitialState(initialState),
  reducers: {
    usersAddMany: usersAdapter.addMany,
  },
  extraReducers: (builder) => {
    builder.addCase(loadUsers.pending, (state: UsersState) => {
      state.loading = true;
    });
    builder.addCase(loadUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
      state.loading = false;
      usersAdapter.addMany(state, action.payload);
    });
    builder.addCase(loadUsers.rejected, (state: UsersState) => {
      state.loading = false;
    });
  },
});

export default usersSlices;

export const usersSelector = usersAdapter.getSelectors<RootState>((state) => state.users);
