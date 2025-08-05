import React from 'react'
import Navbar from "./Navbar"
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Body = () => {
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