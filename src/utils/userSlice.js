import { createSlice } from "@reduxjs/toolkit";

const userSlice= createSlice({
    name:"user",
    initialState:null,
    reducers:{
        addUser:(state,action)=>{
            return action.payload
        },

        removeUser:()=>{
            return null
        },
    }
})

//export the action creators{for dispatching actions}
export const{addUser,removeUser}=userSlice.actions

//export the reducers
export default userSlice.reducer