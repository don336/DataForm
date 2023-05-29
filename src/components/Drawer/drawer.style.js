import styled from "styled-components";
import {
  Drawer as muiDrawer,
  Box as muiBox,
  Divider as muiDivider,
} from "@mui/material";
import { COLORS } from "../../Styles/theme";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import IconEye2Line from "../../SVGS/eye-2-line";

export const StyledDrawer = styled(muiDrawer)`
  & .muidrawer-paper: {
    boxsizing: "border-box";
    width: 40;
  }
`;

export const StyledBox = styled(muiBox)`
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${COLORS.WHITE};
`;

export const StyledPlayBox = styled(PlayArrowIcon)`
  background: ${COLORS.LIGHTBLUE};
  padding: 5px;
  border-radius: 10px;
`;

export const StyledDivider = styled(muiDivider)`
  width: 100%;
  margin: auto;
  justify-content: center;
  background: ${COLORS.ARSH_GREY};
`;

export const StyledEyeIcon = styled(IconEye2Line)`
  color: ${COLORS.ARSH_GREY};
  width: 2rem;
  height: 2rem;
`;

export const StyledSearch = styled(SearchOutlinedIcon)`
  color: ${COLORS.ARSH_GREY};
`;
