

import { configureStore, combineReducers } from '@reduxjs/toolkit'
import navigationReducer from '@app/layouts/store/navigation.slice.js';
import searchResultsReducer from '@dom/Search/store/searchResults.slice.js';

const rootReducer = combineReducers({
  navigation: navigationReducer,
  searchResults: searchResultsReducer
});

export const setupStore = preloadedState => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}
