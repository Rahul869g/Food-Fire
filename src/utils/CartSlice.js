import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      const updatedItems = state.items.filter((item) => item.id !== itemId);
      console.log("UI", updatedItems);
      return { ...state, items: updatedItems };
    },

    clearCart: (state) => {
      state.items = [];
    }
  }
});
// console.log(CartSlice);
export const { addItem, removeItem, clearCart } = CartSlice.actions;

export default CartSlice.reducer;
