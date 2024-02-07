import { AppBar, Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";

const AppLayout = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <AppBar position="static" elevation={4}>
        <Header />
      </AppBar>
      <Box component="main">
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default AppLayout;
