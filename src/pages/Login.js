import { Box } from "@mui/material"
import Grid from "@mui/material/Grid2";

import LoginCard from "../components/LoginCard";

import { useState } from "react";
const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const loginPress = () => {
      console.log("login is pressed");
    }

 return <>
 <Box >
    <Grid 
    container 
    alignContent={"center"} 
    justifyContent={"center"}
    direction={"column"}
    >


 <LoginCard
    onEmailChange={(email) => {setEmail(email)}}
    onPasswordChange={(password) => {setPassword(password)}}
    loginClick={loginPress}
/>
    <h1>{email}</h1>
    <h1> {password} </h1>
    </Grid>
 </Box>
 </>
}
export default Login