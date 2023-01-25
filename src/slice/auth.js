import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isLoading: false,
    isLoggedIn: false,
    user:null,
    error:null
}
export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        // Login 
        loginUserStart: state => {
            state.isLoading = true
        },
        loginUserSuccess: state => {
            state.isLoggedIn = true 
            state.isLoading = false
        },
        loginUserFailure: state => {
            state.isLoading = false
            state.error = 'error'
        },
        // Register

        regUserStart: state => {
            state.isLoading = true
        },
        regUserSuccess: state => {
            state.isLoggedIn = true 
            state.isLoading = false
        },
        regUserFailure: state => {
            state.isLoading = false
            state.error = 'error'
        },
    },
    
})


export const {regUserStart, regUserFailure, regUserSuccess ,loginUserStart, loginUserSuccess, loginUserFailure} = authSlice.actions
export default authSlice.reducer