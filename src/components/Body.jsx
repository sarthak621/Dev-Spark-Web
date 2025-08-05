import React, { useEffect } from 'react'
import Navbar from "./Navbar"
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice'

const Body = () => {
   
   const dispatch=useDispatch()
   const userData= useSelector((store)=>(store.user))
   const navigate=useNavigate()

   //If token is not present, redirect user to login page
   const fetchUser= async()=>{
       try{
         if(userData) return; // if user data is present then directly return else:
         const res= await axios.get(BASE_URL+"/user/profile/view", {withCredentials:true});
         dispatch(addUser(res.data))
       }
       catch(err){

          if (err.status === 401) {
            navigate("/login");
          }
          console.error(err)
       }
   }

   useEffect(()=>{
      fetchUser()
   },[])
  
   return (
     <>
         {/* navbar always stick to the top */}
        <Navbar/>  
        {/* adding outlet to render children components */}
        <Outlet/>  

        {/* footer always stick to the bottom of page */}
        <Footer/>
        
        
     </>
  )
}

export default Body