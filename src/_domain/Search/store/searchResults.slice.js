
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  expanded: false
};

const namespace = 'searchResults'

export const searchResultsSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    toggleExpanded: (_state, _action) => {
      _state.expanded = _action.payload;
    }
  }
});

export const { toggleExpanded } = searchResultsSlice.actions;

export default searchResultsSlice.reducer;