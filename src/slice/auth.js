import { createSlice } from "@reduxjs/toolkit";
import { setItem } from "../helpers/peristance-storage";
const initialState = {
  isLoading: false,
  isLoggedIn: false,
  user: null,
  error: null,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SingUserStart: (state) => {
      state.isLoading = true;
    },
    SingUserSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.isLoading = false;
      state.user = action.payload;
      setItem("token", action.payload.token);
    },
    SingUserFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logoutUser: (state) => {
      state.user = null
      state.isLoggedIn = false
    },
  },
});

export const { SingUserStart, SingUserFailure, SingUserSuccess, logoutUser } =
  authSlice.actions;
export default authSlice.reducer;
