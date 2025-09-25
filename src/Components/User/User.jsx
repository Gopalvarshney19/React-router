import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
   const {id} = useParams()
  return (
    <div className='bg-gray-400 text-center
     p-6 text-3xl text-white'>
        User: {id}
    </div>
  )
}

export default User
