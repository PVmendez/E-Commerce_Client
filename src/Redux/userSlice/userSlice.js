import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    login: (state, action) => {
      state = action.payload;
    },
    logout: (state) => {
      state = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
