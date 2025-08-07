import { createSlice } from "@reduxjs/toolkit";

const userFeed=createSlice({
    name:"feed",
    initialState:null,
    reducers:{
        addFeed:(state,action)=>{
            return action.payload
        },

        removeFeed:(state,action)=>{
            if (action.payload === null) return null; // clear all feed

            const newArray=state.filter((r)=>(r._id!==action.payload))
            return newArray
        }
    }
})

export const{addFeed,removeFeed}=userFeed.actions
export default userFeed.reducer