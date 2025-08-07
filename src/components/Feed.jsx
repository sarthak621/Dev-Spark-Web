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

  if (!feed) return;

  if (feed.length <= 0)
    return <h1 className="flex justify-center my-10 text-3xl">No new users founds!</h1>;


  return (
    feed &&(<div className='flex justify-center my-10'>
      <Card user={feed[0]} />
    </div>)
  )
}

export default Feed