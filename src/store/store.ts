import { foundUserReducer } from './foundUser';
import { gitHubReducer } from './github/github.slice';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import githubApi from './github/github.api';

const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer,
    gitHub: gitHubReducer,
    foundUser: foundUserReducer
  },
  middleware: (gDM) => gDM().concat(githubApi.middleware)
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export default store;
