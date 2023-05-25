import React, { ReactNode, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginDisplay from './components/login/login';
import Students from './components/students/students';
import Header from './components/header/header';
import Auth0Bar from './components/auth0Bar/auth0Bar';
import classes from './App.module.scss';

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className={classes.loader}>
        <span>Loading...</span>
        <div className="spinner-grow text-primary" role="status"></div>
      </div>
    );
  }

  return (
    <div className={classes.appContainer}>
      {isAuthenticated ? (
        <>
          <Auth0Bar />
          <Header />
          <Students toastHandler={() => { }} />
        </>
      ) : (
        <LoginDisplay />
      )}
    </div>
  );
}

export default App;
