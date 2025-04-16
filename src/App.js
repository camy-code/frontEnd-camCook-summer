import "./App.css";
import Layout from "./components/Layout";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
// The following is how we define our pages so App.js has less clutter
import HelperPages from "./tools/HelperPages";

import ColorPick from "./tools/ColorPick";
import NoPage from "./pages/NoPage"; // No page is included only here because it will not be anywhere else

function App() {
  // Make a list of all the public pages
  const allPages = HelperPages.getAllPages();

  const AuthPages = HelperPages.getAuthPages();
  const publicPages = HelperPages.getPublicPages();

    // TODO: check if the user is autheticated

  return (
    <div style={{ minHeight: "70vh",  backgroundColor:ColorPick.getWhite()}}>
    <Router>
      <Routes>
        <Route path="/" element={<Layout pageList={allPages}/>}>
        {
          // The following just does a bunch of mapping to make things stupid proof
          allPages.map((page) => (
            <Route
              path={page.path}
              element={page.compo} 
            />
          ))
        }
       
       <Route path ="*" element={<NoPage/>}/>
        </Route>

    {/* This is where we would need to add dif routes */}
        {/* <Route path ="*" element={<NoPage/>}/> */}

      </Routes>
    </Router>
    </div>
  );
}

export default App;
// TODO, make this a list so it is cleaner to deal with

// Make pub pages used in header to be the same so we have one spot to change
