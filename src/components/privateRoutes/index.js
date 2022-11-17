import React from 'react';
import {Navigate, Outlet} from "react-router-dom";

const PrivateRoutes = () => {
  const access = localStorage.getItem('accessToken')
  return access ? <Outlet/> : <Navigate to={'/auth/login'}/>
}

export default PrivateRoutes;