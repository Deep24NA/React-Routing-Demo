import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-600 text-center justify-center p-6 text-[#fff] text-2xl'>
        User : {userid}
    </div>
  )
}

export default User