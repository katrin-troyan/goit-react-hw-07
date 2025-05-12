import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
  },
  reducers: {
    setStatusFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export default filtersSlice.reducer;

export const { setStatusFilter } = filtersSlice.actions;

export const selectNameFilter = state => state.filters.name;
