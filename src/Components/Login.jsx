//Imports
import React  from 'react';
import illustration from '../assests/illustration.jpg'
import {useNavigate } from 'react-router-dom';
import logomark from '../assests/logomark.svg'
import { useState } from 'react';


const Login = () => {
    const navigate = useNavigate()
        return (
          <>
            <img src={logomark} style={{height:'50px' ,margin:'15px'}}  alt='go to home'/>
              <h1 className='accent'>Finance App</h1>
             <div style={{padding:'100px'}}>
                <div className="intro">
                  <div>
                    <h1>
                      Take Control of <span className='accent'>Your Money</span>
                    </h1>
                    <p>Personal financing is the secret to financial freedom.
                       Start your journey today.</p>
                
                    <div >
                      <input type="email"name="userName" aria-label='Your Name' required placeholder='Enter your Email'/>
                      <input  type='password'name='password' required placeholder='Enter your password'/>
                      <button style={{border:'2px solid black'}} onClick={()=>navigate("/home")} type="submit" className='btn btn--dark'>Create Account </button>
                    </div>
                  </div>
                  <img src={illustration} alt='Person with Money' width={600}/>
                </div>
              </div>
          </>
  );
}

export default Login;
