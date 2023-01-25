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
        SingUserStart: state =>{
            state.isLoading = true
        },
        SingUserSuccess: state =>{
            state.isLoggedIn = true 
            state.isLoading = false
        },
        SingUserFailure: (state, action) =>{
            state.isLoading = false
            state.error = action.payload
        }
    },
    
})


export const {SingUserStart, SingUserFailure, SingUserSuccess} = authSlice.actions
export default authSlice.reducer