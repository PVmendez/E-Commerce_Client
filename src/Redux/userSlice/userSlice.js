import { createSlice, current } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    login: (state, action) => {
      console.log(state, action.payload);
      return (state = [action.payload]);
    },
    logout: (state) => {
      console.log("logout", current(state));
      return (state = []);
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
