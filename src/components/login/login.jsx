import React from 'react';
import { Redirect } from 'react-router-dom';
import "./bootstrap.min.css";

import './login.css';

function LoginPage({ isLoggedIn, onLogin }) {

    if (isLoggedIn) {
        <Redirect to='/profile'/>
    }

    return (
        <div className='login' >
            <form className="form-signin" onSubmit={onLogin}>
                 <h1 className="h3 mb-3 font-weight-normal">Please, sign in</h1>
                    <label htmlFor="inputEmail" className="sr-only">
                        login
                     </label>
                    <input          
                        id="inputEmail"
                        className="form-control"
                        placeholder="login"
                        required=""                  
                    />
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" defaultValue="remember-me" /> Remember me
                     </label>
                </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit" value="login">Sign in</button>  
            </form>
        </div >
    )
}
export default LoginPage;