import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {useAuth} from '../Context/auth'

// Ce décorateur sera utilisé par toute route devant être derrière l'authentification
function PrivateRoute({ component: Component, ...rest }) {

    const { authTokens } = useAuth();
  
  return(
    <Route 
        {...rest} 
        render={(props) => 
            authTokens ? (
      <Component {...props} />
    ) : (
        <Redirect to="/signin"/> 
    )}
    />
  );
}

export default PrivateRoute;