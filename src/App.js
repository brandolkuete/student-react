import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import ListStudents from './components/ListStudents'
import CreateStudent from './components/CreateStudent'
import UpdateStudent from './components/UpdateStudent'
import ViewStudent from './components/ViewStudent'
import {AuthContext} from './Context/auth'
import PrivateRoute from './Authentification/PrivateRoute'
import Login from './Pages/login'
import SignUp from './Pages/signup'

// Provider value= false signifie que notre hook useAuth retournera toujours false lors de la vérification de l'authentification
// par conséquent, toutes les routes privées sont inaccessibles

function App(props) {

  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);
  
  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  return (
    <div className="App">
      <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
        <Router>
          <HeaderComponent/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/all-student" exact component={ListStudents}/>
            <Route path="/signin" exact component={Login}/>
            <Route path="/signup" exact component={SignUp}/>
            <PrivateRoute path="/add-student" component={CreateStudent}/>
            <PrivateRoute path="/update-student/:id" component={UpdateStudent}/>
            <Route path="/view-student/:id" component={ViewStudent}/>
          </Switch>
          <FooterComponent/>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
