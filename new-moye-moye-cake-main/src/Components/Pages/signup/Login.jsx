import React from "react";
 
const Login2 = () =>{
    return(
        <div>
       
            <form action="#" class="login">
              <pre>
              </pre>
              <div class="field">
                <input type="text" placeholder="Email Address" required/>
              </div>
              <div class="field">
                <input type="password" placeholder="Password" required/>
              </div>
              <div class="pass-link"><a href="#">Forgot password?</a></div>
              <div class="field btn">
                <div class="btn-layer"></div>
                <input type="submit" value="Login" className="submit-btn"/>
              </div>
              
            </form>
          </div>
       
 

    )
}

export default Login2;
