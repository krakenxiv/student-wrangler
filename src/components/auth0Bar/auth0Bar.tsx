import React, { useRef, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Logout from '../../components/logout/logout';
import classes from './auth0Bar.module.scss';


const Auth0Bar = () => {
    const { user } = useAuth0();
    return <div className={classes.auth0Bar}>
        {user && user.name ? (
            <span className={classes.userInfo}>Welcome {user.name}</span>
        ) : null}
        <Logout />
    </div>;
};

export default Auth0Bar;
