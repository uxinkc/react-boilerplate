

import { configureStore, combineReducers } from '@reduxjs/toolkit'
import navigationReducer from '@app/layouts/store/navigation.slice.js';

const rootReducer = combineReducers({
  navigation: navigationReducer,
});

export const setupStore = preloadedState => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}
