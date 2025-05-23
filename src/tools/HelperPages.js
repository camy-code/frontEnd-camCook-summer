// The following are 3 methods that will return 
import Home from "../pages/Home"
import About from "../pages/About" // May not need this, gotta double take design
import Login from "../pages/Login";

// Admin pages that require login
import Dashboard from "../pages/authPages/Dashboard"; // This is the dashboard page
import Label  from "../pages/authPages/Label"; // This is the label page
import PrePro from "../pages/authPages/PrePro";
import Test from "../pages/authPages/Test";
import Share from "../pages/authPages/Share";
import Upload from "../pages/authPages/Upload";


// The following methods make adding more pages to our app the most stupid proof as possible.
// In order to add a page to this site we can just follow the pattern below
import { useNavigate } from 'react-router-dom';
import { common } from "@mui/material/colors";



const publicPages =   [
    {
      compo: <Home/>,
      path: "/",
      name: "home"
    },
    {
      compo: <About/>,
      path: "about",
      name: "about"
    },
  
    {
      compo: <Login/>,
      path:"/login",
      name:"login"
    }
  ]

const authPages = [
  {
    compo: <Dashboard/>,
    path:"/dashboard",
    name:"dashboard"
  },
  {
    compo: <Label/>,
    path:"/label",
    name:"label"
  },
  {
    compo: <PrePro/>,
    path:"/prepro",
    name:"prepro"
  },
  {
    compo: <Test/>,
    path:"/test",
    name:"test"
  },
  {
    compo: <Share/>,
    path:"/share",
    name:"share"
  },
  {
    compo: <Upload/>,
    path:"/upload",
    name:"upload"
  }
]

const getPublicPages = () => {
    return publicPages;
}

const getAuthPages = () => {
    return authPages;
}


const getAllPages = () => {
    return (getPublicPages()).concat(getAuthPages())
}




export default {getAuthPages, getPublicPages, getAllPages}