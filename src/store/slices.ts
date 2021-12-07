import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { User } from '../interfaces';

interface UsersState {
  users: User[];
}

const initialState: UsersState = {
  users: [],
};

const BASE_URL = 'http://localhost:3001';

export const loadUsers = createAsyncThunk('users/loadUsers', async (): Promise<User[]> => {
  const response = await axios.get<User[]>(`${BASE_URL}/users`);
  return response.data;
});

const usersSlices = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadUsers.fulfilled, (state: UsersState, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    });
  },
});

export default usersSlices.reducer;
