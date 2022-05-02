import React, { useState } from "react";
import { InputLabel, Box, Typography, TextField } from "@mui/material";

const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };

const CreatePost = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  return (
    <div>
      <form>
        <Box
          border={3}
          borderColor="linear-gradient(90deg, rgba(33,127,193,1) 0%, rgba(83,10,89,1) 100%);"
          borderRadius={10}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin={"auto"}
          marginTop={3}
          display="flex"
          flexDirection={"column"}
          width={"80%"}
        >
          <Typography
            fontWeight={"bold"}
            padding={3}
            color="grey"
            variant="h3"
            textAlign="center"
          >
            Create Post
          </Typography>
          <InputLabel sx={labelStyles}>Title</InputLabel>
          <TextField margin="auto" variant="outlined" />
          <InputLabel sx={labelStyles}>Description</InputLabel>
          <TextField margin="auto" variant="outlined" />
          <InputLabel sx={labelStyles}>Image</InputLabel>
          <TextField margin="auto" variant="outlined" />
          <InputLabel sx={labelStyles}>Content</InputLabel>
          <TextField margin="auto" variant="outlined" />
        </Box>
      </form>
    </div>
  );
};

export default CreatePost;
