import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  allProducts: 0,
  price: 0,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: () => {},
    removeProduct: () => {},
  },
});

export const { addProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;
