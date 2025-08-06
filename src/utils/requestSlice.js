import { createSlice } from "@reduxjs/toolkit";

const userRequest=createSlice({
    name:"requests",
    initialState:null,
    reducers:{
        addRequests:(state,action)=>{
            return action.payload
        },

        removeRequests:(state,action)=>{
            const newArray = state.filter((r) => r._id !== action.payload);
            return newArray;
        }
    }
})

export const{addRequests,removeRequests}=userRequest.actions
export default userRequest.reducer
