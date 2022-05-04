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

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        background:
          "linear-gradient(90deg, rgba(33,127,193,1) 0%, rgba(83,10,89,1) 100%);",
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
                variant="outlined"
                sx={{ margin: 1, borderRadius: 10 }}
                color="warning"
              >
                Login
              </Button>
              <Button
                LinkComponent={Link}
                to="/auth"
                variant="outlined"
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
              variant="outlined"
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
