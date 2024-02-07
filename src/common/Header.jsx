// React
import { useContext } from "react";
// MUI
import { IconButton, Button, styled, Stack, useTheme, Toolbar } from "@mui/material";
// MUI Icons
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
// Assets
import logo from "../assets/logo.png";
// Context
import { ThemeContext } from "../App";
import { Link } from "react-router-dom";

const HeaderWrapper = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  padding: "0 1rem",
  position: "relative",
  boxShadow: theme.shadows[4],
  zIndex: theme.zIndex.appBar,
  [theme.breakpoints.down("md")]: {
    justifyContent: "space-between",
  },
}));

const Logo = styled(Link)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  padding: 0,
  [theme.breakpoints.down("md")]: {
    position: "static",
    transform: "none",
  },
  "& > img": {
    width: 140,
    [theme.breakpoints.up("md")]: {
      width: 300,
      padding: "1rem",
    },
  },
}));

const Header = () => {
  const theme = useTheme();
  const themeContext = useContext(ThemeContext);
  return (
    <HeaderWrapper>
      <Logo href="/" role="a">
        <img src={logo} alt="Company logo" />
      </Logo>
      <Stack direction="row" spacing={0.5}>
        <IconButton sx={{ color: (theme) => theme.palette.primary.main }} onClick={themeContext.toggleColorMode}>
          {theme.palette.mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
        <Button variant="contained">Login</Button>
      </Stack>
    </HeaderWrapper>
  );
};

export default Header;
