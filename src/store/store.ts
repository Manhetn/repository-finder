import { foundUserReducer } from './foundUser';
import { gitHubReducer } from './github/github.slice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
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

// export default store;

// const rootReducer = combineReducers({
//   [githubApi.reducerPath]: githubApi.reducer,
//   currentUser: currentUser.reducer,
// });

// function createStore() {
//   return configureStore({
//     reducer: rootReducer,
//     middleware: (gDM) => gDM().concat(githubApi.middleware)
//   });
// }

// const store = createStore();

// setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export default store;
