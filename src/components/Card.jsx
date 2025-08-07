import axios from 'axios';
import React from 'react'
import { BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { removeFeed } from '../utils/feedSlice';

const Card = ({user , showActions=true}) => {
    // console.log(user)
    const {_id,firstName,lastName, profileUrl, age ,gender ,about}= user;
    const dispatch=useDispatch() 

    const handleSendRequest=async (status,_id)=>{
      try{
          await axios.post(BASE_URL+"/request/send/"+status+"/"+_id , {}, {withCredentials:true})
          dispatch(removeFeed(_id))
           
          
      }
      catch(err){
        console.error(err)
      }
    }
  return (
    <div className="card bg-base-300 w-96 shadow-sm ">
  <figure>
    <img
      src={profileUrl}
      alt="user photo" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName + " "+ lastName}</h2>
    {age && gender && <p>{age + ", " + gender}</p>}
    <p>{about?.trim()}</p>
    {showActions && <div className="card-actions justify-center my-4 ">
      <button className="btn btn-primary" onClick={()=>handleSendRequest("ignored",_id)}>Ignored</button>
      <button className="btn btn-secondary" onClick={()=>handleSendRequest("interested",_id)}>Interested</button>
    </div>}
  </div>
</div>
  )
}

export default Card