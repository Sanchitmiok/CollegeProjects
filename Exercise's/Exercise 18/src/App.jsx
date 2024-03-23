import { useState } from 'react'
import PostContainer from './postcarf'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <PostContainer/>
   </>
  )
}

export default App
