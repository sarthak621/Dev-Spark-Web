import React, {  useState } from 'react'
import { useDispatch } from 'react-redux'
import Card from './Card'
import { BASE_URL } from '../utils/constants'
import axios from 'axios'
import { addUser } from '../utils/userSlice'

const EditProfile = ({user}) => {

  const [firstName,setFirstName]=useState(user.firstName)
  const [lastName,setLastName]=useState(user.lastName)
  const [age,setAge]=useState(user.age)
  const [about,setAbout]=useState(user.about)
  const [gender,setGender]=useState(user.gender)
  const [profileUrl,setProfileUrl]=useState(user.profileUrl)
  
  const [error,setError]= useState("")
  const [showToast,setShowToast]=useState(false)

  const dispatch=useDispatch()


  const saveProfile=async()=>{
    //clear error
    setError("")
    try{
        const res=await axios.patch(BASE_URL+"/user/profile/edit",{
firstName,lastName,age,gender,about,profileUrl
    }, {withCredentials:true})

    // console.log("res data:",res)

    
    dispatch(addUser(res?.data.data))
    // console.log("Updated user:", res.data.data)


    setShowToast(true)

    setTimeout(()=>{
      setShowToast(false)
    },3000)
    }

    catch (err) {
      setError(err.response.data);
    }
    
  }

  return (
    <>
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">Edit Profile</h2>

          <label className="form-control w-full max-w-xs mx-auto my-2">
            <div className="label">
              <span className="label-text">First Name</span>
            </div>
            <input
              type="text"
              className="my-1 input input-bordered w-full focus:outline-none focus:ring-0 focus:border-gray-500"
              value={firstName}
              onChange={(e)=> setFirstName(e.target.value)}

            />
          </label>

          <label className="form-control w-full max-w-xs mx-auto my-2">
            <div className="label">
              <span className="label-text">Last Name</span>
            </div>
            <input
              type="text"
              className="my-1 input input-bordered w-full focus:outline-none focus:ring-0 focus:border-gray-500"
              value={lastName}
              onChange={(e)=> setLastName(e.target.value)}

            />
          </label>

          <label className="form-control w-full max-w-xs mx-auto my-2">
            <div className="label">
              <span className="label-text">Age</span>
            </div>
            <input
              type="text"
              className="my-1 input input-bordered w-full focus:outline-none focus:ring-0 focus:border-gray-500"
              value={age}
              onChange={(e)=> setAge(e.target.value)}

            />
          </label>

          <label className="form-control w-full max-w-xs mx-auto my-2">
            <div className="label">
              <span className="label-text">Gender</span>
            </div>
            <input
              type="text"
              className="my-1 input input-bordered w-full focus:outline-none focus:ring-0 focus:border-gray-500"
              value={gender}
              onChange={(e)=> setGender(e.target.value)}

            />
          </label>

          <label className="form-control w-full max-w-xs mx-auto my-2">
            <div className="label">
              <span className="label-text">About</span>
            </div>
            <input
              type="text"
              className="my-1 input input-bordered w-full focus:outline-none focus:ring-0 focus:border-gray-500"
              value={about}
              onChange={(e)=> setAbout(e.target.value)}

            />
          </label>

          <label className="form-control w-full max-w-xs mx-auto my-2">
            <div className="label">
              <span className="label-text">Profile URL</span>
            </div>
            <input
              type="text"
              className="my-1 input input-bordered w-full focus:outline-none focus:ring-0 focus:border-gray-500"
              value={profileUrl}
              onChange={(e)=> setProfileUrl(e.target.value)}

            />
          </label>

          

          <p className="text-red-500 font-bold mt-1">{error}</p>
           
          <div className="card-actions justify-center m-2">
            <button className="btn btn-primary" onClick={saveProfile}>Save Profile</button>
          </div>
        </div>
      </div>
      <Card user={{firstName, lastName, age, gender, about, profileUrl} } showActions={false}/>
    </div>

    {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Profile saved successfully.</span>
          </div>
        </div>
      )}
    </>  
  )
}

export default EditProfile