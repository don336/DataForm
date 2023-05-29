import * as React from "react";
import { CssBaseline, Box, Divider, List } from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

import {
  StyledDrawer,
  StyledBox,
  StyledPlayBox,
  StyledDivider,
  StyledEyeIcon,
  StyledSearch,
} from "./drawer.style";

import { COLORS } from "../../Styles/theme";

const drawerWidth = 70;
function SideBar() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth } }}
        aria-label="mailbox folders"
      >
        <StyledDrawer
          variant="permanent"
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <StyledBox>
            <Box marginBottom={3}>
              <CatchingPokemonIcon />
            </Box>
            <Box marginBottom={3}>
              <StyledPlayBox />
            </Box>
            <StyledDivider flexItem />
          </StyledBox>
          <StyledBox>
            <Box marginBottom={3}>
              <StyledEyeIcon />
            </Box>
            <Box marginBottom={3}>
              <StyledSearch />
            </Box>
            <StyledDivider flexItem />
          </StyledBox>
          <StyledBox>
            <Box marginBottom={3}>
              <StyledEyeIcon />
            </Box>
            <Box marginBottom={3}>
              <StyledSearch />
            </Box>
            <Box marginBottom={3}>
              <StyledSearch />
            </Box>
            <StyledDivider flexItem />
          </StyledBox>
        </StyledDrawer>
      </Box>
    </Box>
  );
}

export default SideBar;
