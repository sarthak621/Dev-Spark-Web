import { createSlice } from "@reduxjs/toolkit";

const userFeed=createSlice({
    name:"feed",
    initialState:null,
    reducers:{
        addFeed:(state,action)=>{
            return action.payload
        },

        removeFeed:()=>{
            return null
        }
    }
})

export const{addFeed,removeFeed}=userFeed.actions
export default userFeed.reducer