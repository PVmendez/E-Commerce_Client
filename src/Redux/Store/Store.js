import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../userSlice/userSlice";
import cartReducer from "../userSlice/cartSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});
