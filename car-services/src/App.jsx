import React from 'react';
import Home from './pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfilePage from './pages/profile';

function App() {
  const username = 'Tupac';

  return (
    <div className='bg-dark'>
      {/* Uncomment this line if you want to render the Home component */}
      {/* <Home username={username} /> */}
      <ProfilePage />
    </div>
  );
}

export default App;
