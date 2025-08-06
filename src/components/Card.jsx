import React from 'react'

const Card = ({user}) => {
    // console.log(user)
    const {_id,firstName,lastName, profileUrl, age ,gender ,about}= user;
  return (
    <div className="card bg-base-300 w-96 shadow-sm ">
  <figure>
    <img
      src={profileUrl}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName + " "+ lastName}</h2>
    {age && gender && <p>{age + ", " + gender}</p>}
    <p>{about?.trim()}</p>
    <div className="card-actions justify-center my-4 ">
      <button className="btn btn-primary">Ignored</button>
      <button className="btn btn-secondary">Interested</button>

    </div>
  </div>
</div>
  )
}

export default Card