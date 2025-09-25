import React, { useEffect } from 'react'
import { useState } from 'react'
import {useLoaderData} from  'react-router-dom'
const Github = () => {
     const data = useLoaderData();
    //  const [data, setdata] = useState()
    //  useEffect(() => {
    //    fetch('https://api.github.com/users/hiteshchoudhary') 
    //    .then(response => response.json())
    //    .then(data => setdata(data))
    //  },[])
     
  return (
    <div className='bg-gray-400 
     p-6 text-3xl text-white flex items-center justify-center'>
        Github Followers :{data?.followers}
        <img src={data?.avatar_url} width="300px" />
    </div>
  )
}

export default Github

export const githubinfoloader = async ()=>{
  let response = await fetch('https://api.github.com/users/hiteshchoudhary') 
      return response.json();
}
