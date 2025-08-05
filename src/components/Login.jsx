import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {

  const [email,setEmailId]=useState("krishna@k.com")
  const [password,setPassword]=useState("krishna@123")

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

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>

          <label className="form-control w-full max-w-xs mx-auto my-2">
            <div className="label">
              <span className="label-text">Email Id</span>
            </div>
            <input
              type="text"
              className="my-1 input input-bordered w-full focus:outline-none focus:ring-0 focus:border-gray-500"
              value={email}
              onChange={(e)=> setEmailId(e.target.value)}

            />
          </label>

          <label className="form-control w-full max-w-xs mx-auto my-2">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input
              type="text"
              className=" my-1 input input-bordered w-full focus:outline-none focus:ring-0 focus:border-gray-500"

              value={password}
              onChange={(e)=> setPassword(e.target.value)}
            />
            
            <p className="text-red-500 font-bold mt-1">{error}</p>
          </label>
           
           
          <div className="card-actions justify-center m-2">
            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;



