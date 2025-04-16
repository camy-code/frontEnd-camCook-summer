import  Grid  from "@mui/material/Grid2"
import { Box } from "@mui/material"

import { useNavigate } from "react-router-dom";


import BackButton from "../components/BackButton";
const About = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate("/");
    }

    return <>
     <Box sx={{padding:"25px"}}>
    <BackButton onClick={handleBack}/>
    </Box>
    <Grid container direction="row" spacing={2} justifyContent={"center"} alignItems="center" sx={{height:"80vh", marginTop:-10}}>
    <h1>About</h1>
    <h1>About</h1>
    </Grid>
    </>
}

export default About
// I think this is how we do it