import React, { useEffect, useState } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = (props) => {

  return (
    <React.Fragment>
      <Header />
      <Outlet />
    </React.Fragment>  
  )
}

export default Layout;
