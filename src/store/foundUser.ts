// import { IRepository } from './../../models/models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../models/models';

interface IFoundUserState {
  foundUser: IUser | null;
}

const initialState: IFoundUserState = {
  foundUser: null
};

export const foundUserSlice = createSlice({
  name: 'foundUser',
  initialState,
  reducers: {
    updateFoundUser(state, action: PayloadAction<IUser | null>) {
      state.foundUser = action.payload;
    }
  }
});

export const foundUserActions = foundUserSlice.actions;
export const foundUserReducer = foundUserSlice.reducer;
