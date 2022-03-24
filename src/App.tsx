import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouting from './AppRouting';
import { Header } from './components/header/Header';
import LogInButton from './components/header/loginButton';
import LogOutButton from './components/header/logoutButton';
import ProfileContent from './components/header/profileContent';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
       <LogInButton/>
       <LogOutButton/>
       <p>The users information is below</p>
       <ProfileContent/> 
         <AppRouting/>
      </Router>
    </Suspense>
  );
}

export default App;
