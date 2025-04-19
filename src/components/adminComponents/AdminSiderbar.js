import Grid from "@mui/material/Grid2";
import { Box, Button } from "@mui/material";

import ButtonDesign from "../../tools/ButtonDesign";
const AdminSidebar = () => {
    return <>

    <Grid container direction={"column"}>
        <Button sx={ButtonDesign.getButtonStyle()}>Hello</Button>
    </Grid>
    </>
} 

export default AdminSidebar;