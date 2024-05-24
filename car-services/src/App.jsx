import React from 'react';
import Home from './pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchPage from "./pages/searching";
import Profile from './pages/profile';
function App() {
  const username = 'Tupac Shakur ';

  return (
    <div>
       {/* <Home username={username} /> */}
      {/* <Profile /> */}
      <SearchPage />
    </div>
  );
}

export default App;
