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
      setItem('token',action.payload.token)
    },
    SingUserFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { SingUserStart, SingUserFailure, SingUserSuccess } =
  authSlice.actions;
export default authSlice.reducer;
