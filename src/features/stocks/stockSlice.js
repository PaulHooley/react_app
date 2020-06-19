import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

export const stockSlice = createSlice({
  name: "stock",
  initialState: {
    stock: "",
    shareOutstanding: "",
  },
  reducers: {
    getStock: (state, action) => {
      var url =
        "https://finnhub.io/api/v1/stock/profile2?symbol=APPL&token=brl67ifrh5re1lvcnf2g";
      console.log(url);
      axios
        .get(url)
        .then((resp) => {
          console.log(resp.data);
          state.stock = resp.data.name;
          state.shareOutstanding = resp.data.shareOutstanding;
        })
        .catch(console.log("Error"));
    },
  },
});

export default stockSlice.reducer;

export const { getStock, update } = stockSlice.actions;
