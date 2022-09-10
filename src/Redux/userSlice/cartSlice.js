import { createSlice, current } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      if (current(state.cart).length === 0) {
        console.log("new 0");
        state.cart.push(action.payload);
      } else if (
        current(state.cart).findIndex(
          (item) => item.id === action.payload.id
        ) >= 0
      ) {
        const itemIndex = current(state.cart).findIndex(
          (item) => item.id === action.payload.id
        );
        console.log("exist");
        state.cart[itemIndex].quantity += action.payload.quantity;
      } else {
        console.log("new");
        state.cart.push(action.payload);
      }
      console.log(current(state.cart));
    },
    removeFromCart: (state, action) => {
      console.log(current(state.cart));
      for (let i = 0; i < current(state.cart).length; i++) {
        if (current(state.cart)[i].id === action.payload.id) {
          console.log("remove number");
          state.cart[i].quantity += action.payload.quantity;
        }
        if (current(state.cart)[i].quantity <= 0) {
          console.log("remove item");
          state.cart.splice(i, 1);
        }
      }
      console.log(current(state.cart));
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const selectCart = (state) => state.cart.cart;

export default cartSlice.reducer;
