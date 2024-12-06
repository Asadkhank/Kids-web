import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.findIndex(
        (item) =>
          item.id === action.payload.id && item.color === action.payload.color
      );
      if (itemIndex >= 0) {
        state[itemIndex].quantity += action.payload.quantity;
      } else {
        state.push({ ...action.payload });
      }
    },
    removeFromCart: (state, action) => {
      return state.filter(
        (item) =>
          !(item.id === action.payload.id && item.color === action.payload.color)
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
