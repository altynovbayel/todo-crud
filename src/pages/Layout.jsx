import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import Auth from "./Auth";
import Main from "./Main";
import Admin from "./Admin";
import Register from "./Register";
import Header from "../components/Header";
import PrivateRoutes from "../components/privateRoutes";

function Layout() {
  return (
    <>
      <Header/>
      <Routes>
        <Route element={<PrivateRoutes/>}>
          <Route path={'/'} element={<Main/>}/>
          <Route path={'/admin'} element={<Admin/>}/>
          <Route path={'*'} element={<Navigate to={'/'}/>}/>
        </Route>
        <Route path={'/auth/login'} element={<Auth/>}/>
        <Route path={'/auth/register'} element={<Register/>}/>
      </Routes>
    </>
  );
  
}

export default Layout;