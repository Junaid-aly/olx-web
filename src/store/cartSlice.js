



import { createSlice } from "@reduxjs/toolkit";

const addToCartSlice = createSlice({
  name: "addToCart",
  initialState: {
    addToCart: [],
  },
  reducers: {
    setToCart: (state, action) => {
      const cartData = action.payload;
      state.addToCart.push(cartData);
    },
    removeFromCart: (state, action) => {
      const indexToRemove = action.payload; // Assuming you pass the index to remove
      state.addToCart.splice(indexToRemove, 1); // Remove 1 item at the specified index
    },
  },
});

export const { setToCart, removeFromCart } = addToCartSlice.actions;

export default addToCartSlice;
