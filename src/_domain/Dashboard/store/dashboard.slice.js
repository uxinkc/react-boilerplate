
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0
};

const namespace = 'dashboard'

export const dashboardSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    increment: (_state, _action) => {
      _state.count += _action.payload;
    },
    decrement: (_state, _action) => {
      _state.count -= _action.payload;
    }
  }
});

export const { increment, decrement } = dashboardSlice.actions;

export default dashboardSlice.reducer;