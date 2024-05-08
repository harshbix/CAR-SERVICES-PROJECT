import React from 'react';
import Home from './pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const username = 'Tupac';
  
  return (
    <>
      <div className='bg-dark'>
          <Home username={username}/>
      </div>  
    </>
  )
}

export default App
