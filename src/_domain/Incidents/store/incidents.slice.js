
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { incidentsService } from '@dom/Incidents/services/incidents.service.js';

const initState = {
  stuff: { total: 18},
  status: 'idle',
  errors: [],
  itemsCount: 0,
  allItems: [
    {id:1, title:'Tom'},
    {id:2, title: 'Beverly'},
    {id:3, title:'Lee'}],
};

const namespace = 'incidentsItems'

export const getIncidentsItemsThunk = createAsyncThunk(
  `${namespace}/getIncidentsItemsThunk`,
  async (_payload, { rejectWithValue }) => {
    try {
      const response = await incidentsService.get();
      //console.log('$$$ RES >>> ', response)
      if (response.status){
        return response.data;
      } else {
        return rejectWithValue('failure');
      }
    } catch (_err) {
      return rejectWithValue(_err.response.data);
    }
  }
);

const incidentsItemsSlice = createSlice({
  name: namespace,
  initialState: initState,
  reducers: {
    updateTotalCount: (_state) => {
      //console.log('updateTotalCount() called')
      _state.itemsCount = _state.allItems.length;
    }
  },
  /* reducers: {}, */
  extraReducers: (_builder) => {
    _builder
      .addCase( getIncidentsItemsThunk.fulfilled, (_state, _action) => {
        _state.status = 'succeeded';
        //console.log('getIncidentsItemsThunk >> succeeded', _action)
        _state.allItems = _action.payload;
      })
      .addCase( getIncidentsItemsThunk.pending, (_state, _action) => {
        _state.status = 'pending';
        //console.log('getIncidentsItemsThunk >> pending', _action)
      })
      .addCase( getIncidentsItemsThunk.rejected, (_state, _action) => {
        _state.status = 'failed';
        //console.log('getIncidentsItemsThunk >> failed', _action.error)
        _state.errors.push(_action.errors);
      })
  },
});

export const getIncidentsItemsAllItems = (_state) => _state.incidents.allItems;
export const getIncidentsItemsStuff = (_state) => _state.incidents.stuff;
export const getIncidentsItemsStatus = (_state) => _state.incidents.status;
export const getIncidentsItemsErrors = (_state) => _state.incidents.errors;
export const getItemsCount = (_state) => _state.incidents.itemsCount;

export const { updateTotalCount } = incidentsItemsSlice.actions;

export default incidentsItemsSlice.reducer;