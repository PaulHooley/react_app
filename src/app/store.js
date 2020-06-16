import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "../features/color/colorSlice";
import textReducer from "../features/color/textSlice";

export default configureStore({
  reducer: {
    color: colorReducer,
    text: textReducer,
  },
});
