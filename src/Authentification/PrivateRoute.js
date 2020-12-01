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
        <Redirect to={{ pathname: "/signin", state: { referer: props.location } }} /> // lorsque l'utilisateur se connecte, il sera soit redirigé vers le lien demandé, soit vers la page d'accueil
    )}
    />
  );
}

export default PrivateRoute;