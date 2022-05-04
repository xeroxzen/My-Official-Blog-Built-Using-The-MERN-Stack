import React, { useState } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Box,
  Button,
  Tabs,
  Tab,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store";
import { useStyles } from "./utils";
// import { styled } from "@mui/material/styles";

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [value, setValue] = useState(0);
  // const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        background:
          "background: radial-gradient(circle, rgba(0,194,255,1) 0%, rgba(215,8,49,1) 100%);",
      }}
    >
      <Toolbar>
        <Typography className={classes.font} variant="h4">
          Andile Jaden
        </Typography>
        {isAuthenticated && (
          <Box display="flex" marginLeft="auto" marginRight="auto">
            <Tabs textColor="inherit" value={value} onChange={handleChange}>
              <Tab
                className={classes.font}
                LinkComponent={Link}
                to="/posts"
                label="All Posts"
              />
              <Tab
                className={classes.font}
                LinkComponent={Link}
                to="/my-posts"
                label="Your Posts"
              />
              <Tab
                className={classes.font}
                LinkComponent={Link}
                to="/post/create"
                label="Create Post"
              />
            </Tabs>
          </Box>
        )}
        <Box display="flex" marginLeft="auto">
          {!isAuthenticated && (
            <>
              {" "}
              <Button
                LinkComponent={Link}
                to="/auth"
                variant="contained"
                sx={{ margin: 1, borderRadius: 10 }}
                color="warning"
              >
                Login
              </Button>
              <Button
                LinkComponent={Link}
                to="/auth"
                variant="contained"
                sx={{ margin: 1, borderRadius: 10 }}
                color="warning"
              >
                Sign Up
              </Button>{" "}
            </>
          )}
          {isAuthenticated && (
            <Button
              onClick={() => dispatch(authActions.logout())}
              LinkComponent={Link}
              to="/auth"
              variant="contained"
              sx={{ margin: 1, borderRadius: 10 }}
              color="warning"
            >
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
