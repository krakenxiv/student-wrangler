import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import classes from './logout.module.scss';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className={`btn btn-warning`} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
  );
};

export default LogoutButton;