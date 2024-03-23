import React from 'react'

function NEW({name , dob}) {
  return (
    <div className='w-full h-25 bg-blue-300 flex-col justify-center '>
      <p>name is {name}</p>
      <p>dob is {dob}</p>
    </div>
  )
}

export default NEW
