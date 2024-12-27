

     

import React, { useState } from 'react';
import './Body.css';
import Body from './Body';  // Assuming Body is your login component or homepage after login

const SignUp = () => { 
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [isLogin, setIsLogin] = useState(false); // Toggle state

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Save user data in localStorage
    localStorage.setItem("user", JSON.stringify({
      email: input.email.trim(),
      password: input.password.trim(),
    }));
    alert("Signup successful! Please login.");

    // Automatically switch to login form after successful sign-up
    setIsLogin(true);
  };

  return (
    <div>
      {isLogin ? (
        <Body />  // Assuming this is your login form or login functionality
      ) : (
        <div className="container">
          <div className="form-container">
            <div className="form-toggle">
              <button 
                className={isLogin ? 'active' : ""} 
                onClick={() => setIsLogin(true)}>
                Login
              </button>
              <button 
                className={!isLogin ? 'active' : ""} 
                onClick={() => setIsLogin(false)}>
                Sign Up
              </button>
            </div>

            <form className='form' onSubmit={handleSubmit}>
              <h2>Sign Up Form</h2>
              <input
                name="email"
                value={input.email}
                onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                type="email"
                placeholder='Email'
                required
              />
              <input
                name="password"
                value={input.password}
                onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                type="password"
                placeholder='Password'
                required
              />
              <button type="submit">Sign Up</button>
              <p>Already a member? 
                <a href='#'  onClick={() => setIsLogin(true)}>Login now</a>
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;




