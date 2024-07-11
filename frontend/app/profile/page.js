import Image from 'next/image'
import React from 'react'

const Profile = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="flex justify-center border p-3 font-extrabold text-3xl mt-5 w-1/2 rounded text-primary" style={{ backgroundColor: '#006400' }}>
          <h1>Profile Page</h1>
        </div>
      </div>
      <div className="card card-compact bg-base-100 w-96 shadow-xl mt-10 ml-10">
        <figure>
          <Image
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            width={400}
            height={400}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-between">
            <button className="btn btn-success">Update</button>
            <button className="btn btn-error">Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
