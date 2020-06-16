import { createSlice } from "@reduxjs/toolkit";

export const textSlice = createSlice({
  name: "text",
  initialState: {
    text: "",
    reverseText: "",
    textLength: 0,
  },
  reducers: {
    update: (state, action) => {
      state.textString = action.payload;
      state.textLength = action.payload.length;
      state.reverseText = action.payload.split("").reverse().join("");
    },
  },
});

export default textSlice.reducer;

export const { update } = textSlice.actions;
