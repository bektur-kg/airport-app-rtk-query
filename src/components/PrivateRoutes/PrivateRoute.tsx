import React from 'react'
import {Navigate, Outlet} from "react-router-dom";
import {AuthLocalKeys} from "../../models/auth.models";

const PrivateRoute = () => {
  const isAuthorization = localStorage.getItem(AuthLocalKeys.isAuth)

  return isAuthorization ? <Outlet/> : <Navigate to="/auth/login"/>
}

export default PrivateRoute
