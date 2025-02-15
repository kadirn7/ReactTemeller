import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    users: [],
    loading: false,
    error: null
}
export const getAllUsers=createAsyncThunk('users/getAllUsers',async()=>{
    const response=await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(response.data)
    return response.data;
    
})


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        //htttp isteği olmazsa kullanır.
    },
    extraReducers: (builder) => {
        builder.addCase(getAllUsers.fulfilled,(state,action)=>{
            state.users=action.payload
            state.loading=false
        })
        builder.addCase(getAllUsers.pending,(state,action)=>{
            state.loading=true
        })
        builder.addCase(getAllUsers.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message
        })
    }
})
export const { } = userSlice.actions
export default userSlice.reducer

