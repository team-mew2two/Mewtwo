import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './Login.css'


import { useAuth0 } from "@auth0/auth0-react";

const LoginBar = () => {
  const {
    user,
    isAuthenticated,
    loginWithRedirect,
    logout,
  } = useAuth0();

  const navigate = useNavigate();
  const handleRedirect = (path: string) => {
    navigate(path);
  };

  const logoutWithRedirect = () =>
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      }
    });

  useEffect(() => {
    if (user) {
      console.log('USER EMAIL', user);
    }
  }, [user]);

  return (
    <div className="nav-container">
      <ul className="box-1">
        <button onClick={() => handleRedirect('/')}>Home</button>
      </ul>

      {!isAuthenticated && (
        <div className="box-2">
          <button
            id="qsLoginBtn"
            className="btn btn-primary btn-block"
            onClick={() => loginWithRedirect()}
          >
            Log in
          </button>
        </div>
      )}

      {isAuthenticated && (
        <div className="box-2">
          <div className="user-info">
            <img
              src={user?.picture}
              className="user-img"
              width="50"
            />
            <h6 className="user-name">{user?.name}</h6>
          </div>
          <button
            id="qsLogoutBtn"
            className="btn btn-link"
            onClick={() => logoutWithRedirect()}
          >
            Log out
          </button>
        </div>
      )}
    </div>
  );
};

export default LoginBar;
