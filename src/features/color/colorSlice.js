import { createSlice } from "@reduxjs/toolkit";

export const colorSlice = createSlice({
  name: "color",
  initialState: {
    colorful: false,
  },
  reducers: {
    colorChange: (state, action) => {
      state.colorful = true;
    },
    reset: (state) => {
      state.colorful = false;
    },
  },
});

export const { colorChange, reset } = colorSlice.actions;

export default colorSlice.reducer;
