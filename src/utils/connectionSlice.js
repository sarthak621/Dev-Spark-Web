import { createSlice } from "@reduxjs/toolkit";

const userConnection = createSlice({
    name:"connections",
    initialState:null,
    reducers:{
        addConnection:(state,action)=>{
             return action.payload
        }
    }
})

export const{addConnection}=userConnection.actions

export default userConnection.reducer