import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL } from '../utils/constants'
import { addRequests, removeRequests } from '../utils/requestSlice'

const Requests = () => {
    const requests=useSelector((store)=>store.requests)
    const dispatch=useDispatch()

    const reviewRequest=async(status,_id)=>{
        try{
            await axios.post(BASE_URL+"/request/review/"+status+"/"+_id,{},
                {withCredentials:true})

            dispatch(removeRequests(_id))    
            
        }
        catch(err){
            console.error(err)
        }
    }

    const fetchRequests=async()=>{
        try{
            const res=await axios.get(BASE_URL+"/user/request/received",{withCredentials:true})
            
            console.log("fetched request result ",res)
            dispatch(addRequests(res.data.data))
        }catch(err){
            console.error(err)
        }
    }

    useEffect(()=>{
         fetchRequests()
    },[])

        if (!requests) return;

    if (requests.length === 0) return <h1 className='flex justify-center my-10'> No Requests Found</h1>;
  
    return (
    <div className="text-center my-10">
      <h1 className="text-bold text-white text-3xl">Connection Requests</h1>

      {requests.map((request) => {
        const { _id, firstName, lastName, profileUrl, age, gender, about } = request.fromUserId;

        return (
          <div
  key={_id}
  className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 p-4 rounded-lg bg-base-300 mx-2 sm:mx-4 my-4 shadow-md hover:shadow-lg transition-shadow duration-200"
>
  
  <img
    alt="profile"
    className="w-24 h-24 rounded-full object-cover"
    src={profileUrl || "/default-avatar.png"}
  />

  
  <div className="flex-1 text-center sm:text-left">
    <h2 className="font-bold text-xl">
      {firstName + " " + lastName}
    </h2>
    {age && gender && (
      <p className="text-sm text-gray-400">{age + ", " + gender}</p>
    )}
    {about && <p className="text-sm mt-1">{about}</p>}
  </div>

  
  <div className="flex gap-2 justify-center sm:justify-end my-7">
    <button
      className="btn btn-primary"
      onClick={() => reviewRequest("rejected", request._id)}
    >
      Reject
    </button>
    <button
      className="btn btn-secondary"
      onClick={() => reviewRequest("accepted", request._id)}
    >
      Accept
    </button>
  </div>
</div>

        );

        

      })}
     </div>
  )
}

export default Requests 

