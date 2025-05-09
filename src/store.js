import { configureStore } from "@reduxjs/toolkit";
import productReducers from "./fetures/productSlice";

export const store = configureStore({
  reducer: {
    products: productReducers
  },
});
