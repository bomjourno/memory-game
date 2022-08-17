import { createSlice } from '@reduxjs/toolkit';

export const timeSlice = createSlice({
  name: 'time',
  initialState: {
    time: 0,
  },
  reducers: {},
});

export default timeSlice.reducer;
