import React, { useEffect } from 'react'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { addFeed } from '../utils/feedSlice'

const Feed = () => {

  const dispatch= useDispatch()
  const feed=useSelector((store)=>store.feed)
  console.log(feed)

  const getFeed= async ()=>{
    if (feed) return;

    try{
      const res= await axios.get(BASE_URL + "/feed",{
        withCredentials:true,
      })
      // console.log(res)
      //after that dispatch an action
      
      dispatch(addFeed(res?.data?.data))

    }

    catch(err){
      console.error(err.message)
    }
  }

  useEffect(()=>{
     getFeed()
  },[])

  return (
    feed && (<div className='flex justify-center my-10'>
      <Card user={feed[4]} />
    </div>)
  )
}

export default Feed