import { Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";

import ColorPick from "../tools/ColorPick";
import { Navigate, useNavigate } from "react-router-dom";
import { use } from "react";
const Home = () => {
  // Cam, follow your sketches
    // and add the login button here (make button code into a function?)
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate("/login");
    }

  return (
    <>
      <Grid
        container
        sx={{  height: "80vh"}}
        justifyContent="center"
        alignItems="center"
      >
        <Box sx={{transform:"scale(1.5)",}}>
          <Button sx={{ backgroundColor: "red",
            color:"black",
            textTransform: "none",
            fontSize: "1.5rem",
            padding: "16px 32px",
            borderRadius: "25px",
            "&:hover": {
              backgroundColor: "blue",
            },
            
           }}
           onClick={() => {
            handleLogin();}}
           >Login</Button>
        </Box>
      </Grid>
    </>
  );
};

export default Home;
// I think this is how we do it

// Useful article on Box
// https://mui.com/material-ui/react-box/?srsltid=AfmBOoq6lVkp410XmepUTrSB6ZMHQ6b-7_JVHiGst57I4P1kRnH2goLn
