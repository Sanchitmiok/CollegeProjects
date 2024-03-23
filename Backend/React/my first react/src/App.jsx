import React, { useState } from 'react'
import NEW from './demo';


function App() {
  var [a,b] = useState(0);
  return (
    <div>
      <div className='w-full h-40   flex items-center  justify-center font-bold  bg-green-700'>
       <h1>{a}</h1>
      </div>
      <div className='bg-gray-600 h-60 flex items-center justify-center'>
      <button onClick={()=>{
        b(a+1)
      }} className='bg-red-600 text-white p-4 rounded-full'>Click</button>
    </div> 
    <NEW name="Sanchit" dob="21" />
    </div> 
  ) 
}

export default App
