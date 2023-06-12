import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginDisplay from './components/login/login';
import Students from './components/students/students';
import Header from './components/header/header';
import Auth0Bar from './components/auth0Bar/auth0Bar';
import Spinner from './components/spinner/spinner';
import classes from './App.module.scss';

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className={classes.loader}>
        <Spinner />
      </div>
    );
  }

  return (
    <div className={classes.appContainer}>
      {isAuthenticated ? (
        <>
          <Auth0Bar />
          <Header />
          <Students toastHandler={() => {}} />
        </>
      ) : (
        <LoginDisplay />
      )}
    </div>
  );
}

export default App;
