import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "../features/color/colorSlice";
import textReducer from "../features/color/textSlice";
import stockReducer from "../features/stocks/stockSlice";

export default configureStore({
  reducer: {
    color: colorReducer,
    text: textReducer,
    stock: stockReducer,
  },
});
