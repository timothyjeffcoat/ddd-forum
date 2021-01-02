import users from '../../../modules/users/redux/reducers';
import forum from '../../../modules/forum/redux/reducers';
import {
  configureStore,
  getDefaultMiddleware,
  combineReducers
} from '@reduxjs/toolkit';

export default function setupStore(initialState = {}) {
  return configureStore({
    reducer: combineReducers({
      users,
      forum
    }),
    preloadedState: initialState,
    middleware: getDefaultMiddleware({ thunk: true }),
    devTools: process.env.NODE_ENV === 'development'
  });
}
