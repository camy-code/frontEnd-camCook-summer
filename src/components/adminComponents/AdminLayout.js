import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSiderbar";

import Grid from "@mui/material/Grid2";
import { Box } from "@mui/material";

const AdminLayout = () => {
  return (
    <>
      <Grid  container direction={"row"}>
        <Box sx={{width:"15%"}}>
          <AdminSidebar />
        </Box>

        <Box sx={{ width: "85%"}}>
          <Outlet />
        </Box>
      </Grid>
    </>
  );
};

export default AdminLayout;
