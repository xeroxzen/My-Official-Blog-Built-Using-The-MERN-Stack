import React, { useState } from "react";

import { Box, Button, TextField, Typography } from "@mui/material";
const Auth = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isSignUp, setIsSignUp] = useState(false);
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          // sx={{
          //   background:
          //     "linear-gradient(90deg,rgba(0, 40, 69, 1) 0%,rgba(0, 43, 77, 1) 100%);",
          // }}
          maxWidth={300}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin="auto"
          marginTop={5}
          borderRadius={2}
        >
          <Typography
            sx={{ color: "twitter-blue" }}
            variant="h4"
            padding={3}
            textAlign="center"
          >
            {isSignUp ? "Sign Up" : "Login"}
          </Typography>
          {isSignUp && (
            <TextField
              name="name"
              onChange={handleChange}
              value={inputs.name}
              placeholder="Username"
              margin="normal"
            />
          )}
          <TextField
            name="email"
            onChange={handleChange}
            value={inputs.email}
            type={"email"}
            placeholder="Email"
            margin="normal"
          />
          <TextField
            name="password"
            onChange={handleChange}
            value={inputs.password}
            type={"password"}
            placeholder="Password"
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ marginTop: 2 }}
            color="success"
          >
            Submit
          </Button>
          <Button onClick={() => setIsSignUp(!isSignUp)} color="warning">
            {isSignUp ? "Login" : "Register"} Instead
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Auth;

//rafce
