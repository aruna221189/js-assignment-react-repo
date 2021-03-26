import { createSlice } from "@reduxjs/toolkit";

const initialItems = sessionStorage.getItem("cartItems")
  ? JSON.parse(sessionStorage.getItem("cartItems"))
  : [];

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: initialItems
  },
  reducers: {
    productAdded: (state, action) => {
      state.cartItems.push(action.payload);
      sessionStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    productRemoved: (state, action) => {
      const filteredItems = state.cartItems.filter(
        item => item.id !== action.payload
      );
      sessionStorage.setItem("cartItems", JSON.stringify(filteredItems));
      return {
        ...state,
        cartItems: filteredItems
      };
    },
    productRemoveAll: (state, action) => {
      return {
        ...state,
        cartItems: []
      };
    }
  }
});

export const {
  productAdded,
  productRemoved,
  productRemoveAll
} = cartSlice.actions;

export default cartSlice.reducer;
