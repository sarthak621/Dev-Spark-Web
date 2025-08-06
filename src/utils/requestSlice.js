import { createSlice } from "@reduxjs/toolkit";

const userRequest=createSlice({
    name:"requests",
    initialState:null,
    reducers:{
        addRequests:(state,action)=>{
            return action.payload
        },

        removeRequests:()=>{
            return null
        }
    }
})

export const{addRequests,removeRequests}=userRequest.actions
export default userRequest.reducer
