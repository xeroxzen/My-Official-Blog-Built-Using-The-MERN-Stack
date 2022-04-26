import React from "react";
import { AppBar, Typography, Toolbar } from "@mui/material";

const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6">Welcome to my Blog</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
