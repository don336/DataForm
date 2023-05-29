import React from "react";
import { Box, Grid, Stack } from "@mui/material";
import SideBar from "../components/Drawer/Drawer";
import Navbar from "../components/NavBar/Navbar";

const DataForm = () => {
  return (
    <Stack direction={"row"}>
      <Box>
        <SideBar />
      </Box>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Navbar />
      </Box>
    </Stack>
  );
};

export default DataForm;
