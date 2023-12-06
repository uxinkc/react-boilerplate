
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import navigationReducer from '@app/layouts/store/navigation.slice.js';
import dashboardReducer from '@dom/Dashboard/store/dashboard.slice.js';
import incidentsReducer from '@dom/Incidents/store/incidents.slice.js';

const rootReducer = combineReducers({
  navigation: navigationReducer,
  dashboard: dashboardReducer,
  incidents: incidentsReducer 
});

export const setupStore = preloadedState => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}
