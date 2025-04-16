import React from "react";
import Header from "./Header";
import Footer from "./Footer";

// Some react imports
import { Outlet } from "react-router-dom";

import { Box } from "@mui/material";

const Layout = ({pageList}) => {
  // TODO: make a header

  return (
    <>
      <Header pageList={pageList}/>

      <Outlet />

      {/* Add later     */}
        {/* <Footer /> */}
      
    </>
  );
};

// TODO: make header/footer components

export default Layout;
