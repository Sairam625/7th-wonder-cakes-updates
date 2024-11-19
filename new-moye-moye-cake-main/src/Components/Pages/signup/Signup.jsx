import React from 'react';
const signup = () =>{
    return(
        <div>
         <form action="#" class="signup">
              <div class="field">
                <input type="text" placeholder="Name" required/>
              </div>
              <div class="field">
                <input type="text" placeholder="Email Address" required/>
              </div>
              <div class="field">
                <input type="password" placeholder="Password" required/>
              </div>
              <div class="field">
                <input type="password" placeholder="Confirm password" required/>
              </div>
              <div class="field btn">
                <div class="btn-layer"></div>
                <input type="submit" value="Signup" className="submit-btn"/>
              </div>
              
            </form>
          </div>
           
           
          )
        }
export default signup;