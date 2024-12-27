import React from 'react'
import {Navigate, Outlet}  from "react-router-dom"

const ProtectedRoutes = () => {
    const auth=localStorage.getItem("loggedin");
  return 
    auth? <Outlet/> : <Navigate to={"/login"} />;
  
}

export default ProtectedRoutes;
