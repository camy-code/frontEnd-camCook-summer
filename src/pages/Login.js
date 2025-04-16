import { Box } from "@mui/material"
import Grid from "@mui/material/Grid2";

import LoginCard from "../components/LoginCard";
import BackButton from "../components/BackButton";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
      
    const [error, setError] = useState("");

    // handle this later
    const loginPress = () => {
      console.log("login is pressed");
      navigate("/dashboard");
    }

    // for the back button
    const navigate = useNavigate();
      const handleBack = () => {
         navigate("/");
      }

 return <>
 <Box>
   <Box sx={{padding:"25px"}}>
    <BackButton onClick={handleBack}/>
    </Box>
    <Grid 
    container 
    alignContent={"center"} 
    justifyContent={"center"}
    direction={"column"}
    sx={{height:"80vh", marginTop:-10}}
    >


 <LoginCard
    onEmailChange={(email) => {setEmail(email)}}
    onPasswordChange={(password) => {setPassword(password)}}
    loginClick={loginPress}
    error={error}
/>
 
    </Grid>
 </Box>
 </>
}
export default Login