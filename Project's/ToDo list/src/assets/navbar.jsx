import React from 'react'

function navbar() {
  return (
    <div className='bg-indigo-700 flex justify-between p-2 text-white font-bold'>
      <div className='mx-60 hover:text-gray-200 cursor-pointer'>
        iTask
      </div>
      <div className='flex gap-5 mx-60 '>
        <p className='hover:text-gray-200 cursor-pointer'>Home</p>
        <p className='hover:text-gray-200 cursor-pointer'>Your task</p>
      </div>
    </div>
  )
}

export default navbar
