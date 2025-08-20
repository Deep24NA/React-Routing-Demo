import React, { useEffect, useState } from 'react'
// to accessing the data which is handle by the loader is genrally use with a hook
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
    // const [data , setData] = useState('')
    // useEffect(() => {
    //   fetch('https://api.github.com/users/Deep24NA')
    //   .then((res) => res.json())
    //   .then((res) => setData(res))
    // }, [])
    
  return (
    <div className='bg-gray-600 text-3xl p-4 text-[#fff] text-center m-4 flex justify-center flex-col items-center'>
        Github Follower : {data.followers}
        <img className='' src={data.avatar_url} alt="github" width={300} />
    </div>
  )
}

export default Github
// now we learn about a feature if loader
export const gitInfoProvider = async () => {
  const response = await fetch('https://api.github.com/users/Deep24NA')
  return response.json()
}