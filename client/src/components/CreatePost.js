import React, { useState } from "react";
import axios from "axios";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./utils";

const CreatePost = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    image: "",
    content: "",
  });

  const sendRequest = async () => {
    const res = await axios
      .post("http://localhost:5000/api/blog/create", {
        title: inputs.title,
        description: inputs.description,
        content: inputs.content,
        image: inputs.image,
        user: localStorage.getItem("userId"),
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest()
      .then((data) => console.log(data))
      .then(() => console.log("Post created successfully"))
      .then(() => navigate("/my-posts"));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          border={3}
          borderColor="linear-gradient(90deg, rgba(33,127,193,1) 0%, rgba(83,10,89,1) 100%);"
          borderRadius={10}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin="auto"
          marginTop={3}
          display="flex"
          flexDirection={"column"}
          width={"80%"}
        >
          <Typography
            className={classes.font}
            fontWeight={"bold"}
            padding={3}
            color="grey"
            variant="h3"
            textAlign="center"
          >
            Create Post
          </Typography>

          <TextField
            className={classes.font}
            sx={{ mt: 3 }}
            margin="normal"
            name="title"
            onChange={handleChange}
            value={inputs.title}
            label="Title"
            color="secondary"
            focused
          />
          <TextField
            className={classes.font}
            sx={{ mt: 3 }}
            margin="normal"
            name="description"
            onChange={handleChange}
            value={inputs.description}
            label="Description"
            // variant="filled"
            color="success"
            focused
          />

          <TextField
            className={classes.font}
            sx={{ mt: 3 }}
            margin="normal"
            name="image"
            onChange={handleChange}
            value={inputs.image}
            label="Image URL"
            // variant="filled"
            color="success"
            focused
          />

          <TextField
            className={classes.font}
            sx={{ mt: 3 }}
            margin="normal"
            name="content"
            onChange={handleChange}
            value={inputs.content}
            label="Content"
            // variant="standard"
            color="warning"
            focused
          />

          <Button
            sx={{ mt: 2, borderRadius: 4 }}
            variant="contained"
            color="success"
            type="submit"
          >
            Submit
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default CreatePost;
