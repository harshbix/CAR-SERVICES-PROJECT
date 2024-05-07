import { useState } from 'react'
import './App.css'
import MyComponent from './mycomponent';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className='text-start'>Hello World!</h1>
        <MyComponent />
      </div>  
    </>
  )
}

export default App
