import React,{useState} from 'react'
import { Link, Redirect } from 'react-router-dom';
import {useAuth} from '../Context/auth'
import UserService from '../services/UserService'

function Login() {

    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthTokens } = useAuth();

    
    function postLogin(e){
      e.preventDefault();
      let user= {
        username: userName,
        password: password
      }
      console.log(user)
        UserService.signin(user).then(result => {
          if (result.status === 200) {
            setAuthTokens(result.data);
            setLoggedIn(true);
          } else {
            setIsError(true);
          }
        }).catch(e => {
          setIsError(true);
        });
      }
    
      if (isLoggedIn) {
        return <Redirect to="/all-student" />;
      }

    return (
        <div className="container">
            <div className="row">
                <form className="col-md-7 offset-md-3 offset-md-3 mx-auto">
                    <h3>Log In</h3>

                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" placeholder="Enter username"  value={userName} 
                        onChange={e => {setUserName(e.target.value);}}/>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" value={password} 
                        onChange={e => {setPassword(e.target.value);}}/>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block" onClick={postLogin}>Sign In</button>
                    <p className="forgot-password text-right">
                    <Link to="/signup">Sign Up</Link>
                    <br/>
                    { isError ? (<span className="text-danger">The username or password provided were incorrect!</span>) : (<span></span>)}
                    </p>
                </form>
            </div>
        </div>
    )
}
export default Login
