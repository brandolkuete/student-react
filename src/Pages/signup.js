import React, {useState} from 'react'
import { Link, Redirect } from 'react-router-dom'
import UserService from '../services/UserService'

export default function Signup(props) {

    const [isSignUp, setIsSignUp] = useState(false);
    const [isError, setIsError] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function signUp(e) {
      e.preventDefault();
      let user= {
        username: userName,
        password: password,
        confirmPassword: confirmPassword
      }
        UserService.signup(user).then(result => {
          if (result.status === 200) {
            setIsSignUp(true);
          } else {
            setIsError(true);
          }
        }).catch(e => {
          setIsError(true);
        });
      }
    
      if (isSignUp) {
        return <Redirect to="/signin" />;
      }

    return (
        <div className="container">
            <div className="row">
                <form className="col-md-7 offset-md-3 offset-md-3 mx-auto">
                    <h3>Sign Up</h3>

                    <div className="form-group">
                        <label>UserName</label>
                        <input type="text" className="form-control" placeholder="Enter username" value={userName} name="username"
                        onChange={e => {setUserName(e.target.value);}} />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" value={password}  name="password"
                        onChange={e => {setPassword(e.target.value);}}/>
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="password" className="form-control" placeholder="Enter password again" value={confirmPassword}  name="confirmPassword"
                        onChange={e => {setConfirmPassword(e.target.value);}}/>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block" onClick={signUp}>Sign Up</button>
                    <p className="forgot-password text-right">
                     <Link to="/signin">Sign In</Link>
                    <br/>
                    { isError ? (<span className="text-danger">Une erreur est survenue lors de l'enregistrement</span>) : (<span></span>)}
                    </p>
                </form>
            </div>
        </div>
    )
}
