

import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Body.css';
import SignUp from './SignUp';

const Body = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  // Handle login submission
  // const handleLogin = (e) => {
  //   e.preventDefault();

  //   // Retrieve user data from localStorage
  //   const loggedUser = JSON.parse(localStorage.getItem("user"));

  //   // Check if email and password match
  //   if (loggedUser && input.email.trim() === loggedUser.email.trim() && input.password.trim() === loggedUser.password.trim()) {
  //     localStorage.setItem("loggedin",true);
  //     navigate("/"); // Redirect to the homepage after login
  //   } else {
  //     alert("Wrong Email or Password");
  //   }
  // };

  const handleLogin = (e) => {
    e.preventDefault();
  
    const loggedUser = JSON.parse(localStorage.getItem("user"));
  
    if (loggedUser && input.email.trim() === loggedUser.email.trim() && input.password.trim() === loggedUser.password.trim()) {
      localStorage.setItem("loggedin", true);
      navigate("/Diseases"); // Redirect to the disease prediction page
    } else {
      alert("Wrong Email or Password");
    }
  };
 

  return (
    
    <div>
    {isLogin ? (
          <div className='container'>
           <div className="form-container">
           <div className="form-toggle">
             <button className={isLogin ? 'active' : ""} onClick={() => setIsLogin(true)}>Login</button>
             <button className={!isLogin ? 'active' : ""} onClick={() => setIsLogin(false)}>Sign up</button>
           </div>
          <form className='form' onSubmit={handleLogin}>
            <h2>Login Form</h2>
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
            <a href="#">Forgot password?</a>
            <button type="submit">Login</button> {/* Added type="submit" */}
            <p>Not a member?
               <a href='#' onClick={() => setIsLogin(false)}>Signup now</a>
               </p>
          </form>
          </div>
          </div>
        ) : (
          <SignUp/>
        )}
    
    </div>
  );
}

export default Body;


