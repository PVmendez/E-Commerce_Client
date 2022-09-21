import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    login: (state, action) => {
      console.log(action)
      return (state = [action.payload]);
    },
    logout: (state) => {
      return (state = []);
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
