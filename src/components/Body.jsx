import React, { useEffect } from 'react'
import Navbar from "./Navbar"
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice'


const Body = () => {
   
   const dispatch=useDispatch()
   const userData= useSelector((store)=>(store.user))
   const navigate=useNavigate()
   const location=useLocation()

   const fetchUser = async () => {
    try {
      if (userData && userData._id) return;  // if user data is present then directly return else..

      const res = await axios.get("http://localhost:4000/user/profile/view", {
        withCredentials: true
      });
      console.log(res.data);
      dispatch(addUser(res.data));
    } catch (err) {
      if (err.response?.status === 401) {
        navigate("/login");
      }
      console.error(err);
    }
  };

  useEffect(() => {
    // Dont call fetchUser if already on login page
    if (location.pathname === "/login") return;

    fetchUser();
  }, [location.pathname]); // rerun if route changes



         
   return (
     <div className="min-h-screen flex flex-col">
         {/* navbar always stick to the top */}
        <Navbar/>  
        {/* adding outlet to render children components */}
        <Outlet/>  

        {/* footer always stick to the bottom of page */}
        <Footer/>
        
        
     </div>
  )
}

export default Body