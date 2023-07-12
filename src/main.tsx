import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from "@auth0/auth0-react";

import App from './App';
import './index.css';


// const providerConfig = {
//   domain: 'dev-0rgg2v3h1if8vdbq.us.auth0.com',
//   clientId: 'NzEnjiHah9aCRdvESgtwA78GnDRx0hjw',
//   // onRedirectCallback,
//   authorizationParams: {
//     redirect_uri: window.location.origin,
//     ...(config.audience ? { audience: config.audience } : null),
//   },
// };

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain="dev-0rgg2v3h1if8vdbq.us.auth0.com"
        clientId="NzEnjiHah9aCRdvESgtwA78GnDRx0hjw"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >

        <App />
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
