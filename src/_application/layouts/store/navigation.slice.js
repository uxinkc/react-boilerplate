
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { navigationService } from '@app/layouts/services/navigation.service.js';

const initState = {
  navigationData: {},
  status: 'idle',
  errors: null
};

const namespace = 'navigationItems'

export const getNavigationItemsThunk = createAsyncThunk(
  `${namespace}/getNavigationItemsThunk`,
  async (_payload, { rejectWithValue }) => {
    try {
      const response = await navigationService.get();
      return response.data;
    } catch (_err) {
      rejectWithValue(_err);
    }
  }
);

const navigationItemsSlice = createSlice({
  name: namespace,
  initialState: initState,
  reducers: {},
  extraReducers: (_builder) => {
    _builder
      .addCase( getNavigationItemsThunk.fulfilled, (_state, _action) => {
        _state.status = 'succeeded';
        //console.log('Nav succeeded', _action)
        _state.navigationData = _action.payload;
      })
      .addCase( getNavigationItemsThunk.pending, (_state, _action) => {
        _state.status = 'pending';
        //console.log('Nav is pending', _action)
      })
      .addCase( getNavigationItemsThunk.rejected, (_state, _action) => {
        _state.status = 'failed';
        //console.log('Nav is failed', _action)
        _state.errors.push(_action.error);
      })
  },
});

// _state.navigation <-- navigation created in Application Store.
export const getNavigationItems = (_state) => _state.navigation.navigationData; 
export const getNavigationStatus = (_state) => _state.navigation.status;
export const getNavigationErrors = (_state) => _state.navigation.errors;

export default navigationItemsSlice.reducer;