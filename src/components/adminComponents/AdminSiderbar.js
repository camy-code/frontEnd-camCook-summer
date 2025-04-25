import Grid from "@mui/material/Grid2";
import { Box, Button } from "@mui/material";

import HomeIcon from '@mui/icons-material/Home';

import ButtonDesign from "../../tools/ButtonDesign";

import { useNavigate } from "react-router-dom";
const AdminSidebar = () => {
  // We need to get a button DS
  const iconStyle = {};
  const mButtons = [
    {
      name: "RED",
      path: "/",
      icon:<HomeIcon sx={iconStyle}/>
    },
    {
      name: "cam",
      path: "/",
      icon:<HomeIcon sx={iconStyle}/>
    },
    {
      name: "camden",
      path: "/",
      icon:<HomeIcon sx={iconStyle}/>
    },
  ];
  const navigte = useNavigate();

  return (
    <>
      <Grid
        container
        direction={"column"}
        spacing={2}

        sx={{marginTop:5, marginLeft: 5}}
      >
        {mButtons.map((button, index) => {
          return (
            <Button
              key={index}
              sx={ButtonDesign.getButtonStyle()}
              onClick={() => {
                navigte(button.path);
              }}
            >
             {button.icon} {button.name} 
            </Button>
          );
        })}
      </Grid>
    </>
  );
};

export default AdminSidebar;
