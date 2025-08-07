import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL } from '../utils/constants'
import { addConnection } from '../utils/connectionSlice'

const Connections = () => {
  const connections = useSelector((store) => store.connections)
  const dispatch = useDispatch()

  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connection", {
        withCredentials: true,
      })
      dispatch(addConnection(res.data.data))
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchConnections()
  }, [])

  if (!connections) return 

  if (connections.length === 0)
    return (
      <h1 className="flex justify-center my-10 text-white text-xl">
        No Connections Found
      </h1>
    )

  return (
    <div className="my-10 px-4">
      <h1 className="text-white text-3xl font-bold text-center mb-8">
        Connections
      </h1>

      <div className="flex flex-col gap-6 max-w-3xl mx-auto">
        {connections.map((connection) => {
          const { _id, firstName, lastName, profileUrl, age, gender, about } = connection

          return (
            <div
              key={_id}
              className="flex flex-col sm:flex-row items-center sm:items-start bg-base-300 rounded-xl shadow-md p-5 gap-4"
            >
              <img
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-2 border-gray-200"
                src={profileUrl}
              />

              <div className="text-center sm:text-left">
                <h2 className="text-xl font-semibold text-white">
                  {firstName} {lastName}
                </h2>
                {age && gender && (
                  <p className="text-sm text-gray-400">{age}, {gender}</p>
                )}
                <p className="mt-2 text-gray-300">{about}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Connections
