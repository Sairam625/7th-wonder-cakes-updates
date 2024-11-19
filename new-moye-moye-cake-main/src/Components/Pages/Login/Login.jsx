import React, { useState } from "react";
import "./Loginform.css"
import LoginForm  from '../signup/Login';
import Signup from '../signup/Signup';
const Login = () => {
  const [getLogin, setLogin] = useState(<LoginForm  />);
  const [getSignup, setSignup ] = useState();

  const loginform = () => {
    setLogin(<LoginForm  />);
    setSignup();
  }
  const signup = () => {
    setSignup(<Signup  />);
    setLogin();
  }
    return(
        <div className="category-tems-sec form-sec">
        <div class="wrapper">
        <div class="title-text">
          <div class="title login">Login Form</div>
          <div class="title signup">Signup Form</div>
        </div>
        <div class="form-container">
          <div class="slide-controls">
            <input type="radio" name="slide" id="login"/>
            <input type="radio" name="slide" id="signup" />
            <label for="login" class="slide login" onClick={loginform}>Login</label>
            <label for="signup" class="slide signup" onClick={signup}>Signup</label>
            <div class="slider-tab"></div>
          </div>
          <div class="form-inner">
            {getLogin}
            {getSignup} 
          </div>
        </div>
      </div>
      </div>
     

    )
}

export default Login;
