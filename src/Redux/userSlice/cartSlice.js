import { createSlice, current } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      if (current(state).length === 0) {
        console.log(action);
        return void state.push(action.payload);
      }
      if (
        current(state).findIndex((item) => item.id === action.payload.id) >= 0
      ) {
        const itemIndex = current(state).findIndex(
          (item) => item.id === action.payload.id
        );
        return void (state[itemIndex].quantity += action.payload.quantity);
      }
      void state.push(action.payload);
    },
    removeFromCart: (state, action) => {
      for (let i = 0; i < current(state).length; i++) {
        if (current(state)[i].id === action.payload.id) {
          state[i].quantity += action.payload.quantity;
        }
        if (current(state)[i].quantity <= 0) {
          state.splice(i, 1);
        }
      }
    },
    emptyCart: (state) => {
      return (state = []);
    },
  },
});

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;
