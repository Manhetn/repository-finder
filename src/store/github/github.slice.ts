import { IRepository } from './../../models/models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const FAV_REPOSITORIES = 'favrep';

interface IGithubState {
  favourites: IRepository[];
}

const initialState: IGithubState = {
  favourites: JSON.parse(localStorage.getItem(FAV_REPOSITORIES) ?? '[]')
};

export const gitHubSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {
    addFavourite(state, action: PayloadAction<IRepository>) {
      state.favourites.push(action.payload);
      localStorage.setItem(FAV_REPOSITORIES, JSON.stringify(state.favourites));
    },
    removeFavourite(state, action: PayloadAction<IRepository>) {
      state.favourites = state.favourites.filter(
        (rep) => rep.id !== action.payload.id
      );
      localStorage.setItem(FAV_REPOSITORIES, JSON.stringify(state.favourites));
    }
  }
});

export const gitHubActions = gitHubSlice.actions;
export const gitHubReducer = gitHubSlice.reducer;
