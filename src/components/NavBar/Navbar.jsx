import React from "react";
import { Stack, Box } from "@mui/material";
import { StyledNav } from "./Navbar.style";

const Navbar = () => {
  return (
    <StyledNav>
      <Stack direction="row">
        <Box>My NAv</Box>
        <Box>My NAv</Box>
      </Stack>
    </StyledNav>
  );
};

export default Navbar;
