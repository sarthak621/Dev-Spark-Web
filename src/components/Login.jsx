import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {

  const [email,setEmailId]=useState("")
  const [password,setPassword]=useState("")

  const[firstName,setFirstName]=useState("")
  const[lastName,setLastName]=useState("")
  const[isLoginForm,setIsLoginForm]=useState(true)

  const dispatch=useDispatch()
  const navigate= useNavigate()

  const [error,setError]= useState("")


  const handleLogin=async()=>{
          try{
            const res= await axios.post(BASE_URL+ "/user/login",{
            email,
            password
            },
          {withCredentials:true})
          // console.log(res.data)
          dispatch(addUser(res.data)); //dispatch the add user
          return navigate("/feed")

          }
          catch(err){
            setError(err.response.data || "Something Went Wrong")
          }
  }


  const handleSignUp=async()=>{
    try{
      const res=await axios.post(BASE_URL+"/user/signup",{firstName,lastName,email,password},{withCredentials:true})
      dispatch(addUser(res.data.data))
      return navigate("/profile")
 
 
    }
    catch(err){
      setError(err.response.data || "Something Went Wrong")
    }
  }

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">
            {isLoginForm ? "Login" : "Sign Up"}
          </h2>
          
           {!isLoginForm && <>
           <label className="form-control w-full max-w-xs mx-auto my-2">
            <div className="label">
              <span className="label-text text-white">First Name</span>
            </div>
            <input
              type="text"
              placeholder="Enter Your First Name"
              className="my-1 input input-bordered w-full focus:outline-none focus:ring-0 focus:border-gray-500"
              value={firstName}
              onChange={(e)=> setFirstName(e.target.value)}

            />
          </label>

          <label className="form-control w-full max-w-xs mx-auto my-2">
            <div className="label">
              <span className="label-text text-white">Last Name</span>
            </div>
            <input
              type="text"
               placeholder="Enter Your Last Name"
              className="my-1 input input-bordered w-full focus:outline-none focus:ring-0 focus:border-gray-500"
              value={lastName}
              onChange={(e)=> setLastName(e.target.value)}

            />
          </label>
          </>}

          <label className="form-control w-full max-w-xs mx-auto my-2">
            <div className="label">
              <span className="label-text text-white">Email Id</span>
            </div>
            <input
              type="email"
              placeholder="Enter Your Email Id"
              className="my-1 input input-bordered w-full focus:outline-none focus:ring-0 focus:border-gray-500"
              value={email}
              onChange={(e)=> setEmailId(e.target.value)}

            />
          </label>

          <label className="form-control w-full max-w-xs mx-auto my-2">
            <div className="label">
              <span className="label-text text-white">Password</span>
            </div>
            <input
              type="password"
              className=" my-1 input input-bordered w-full focus:outline-none focus:ring-0 focus:border-gray-500"
               placeholder="Enter Your Password"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
            />
            
            
          </label>
           <p className="text-red-500 font-bold mt-1">{error}</p>
           
          <div className="card-actions justify-center m-2">
            <button className="btn btn-primary" onClick={isLoginForm?handleLogin:handleSignUp}>{isLoginForm?"Login":"Sign Up"}</button>
          </div>
           <p
            className="m-auto cursor-pointer py-2"
            onClick={() => setIsLoginForm((value) => !value)}
          >
            {isLoginForm
              ? "New User? Signup Here"
              : "Existing User? Login Here"}</p>
        </div>
      </div>
    </div>
  );
};

export default Login;



