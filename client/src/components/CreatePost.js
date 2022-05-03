import React, { useState } from "react";
import axios from "axios";
import { Box, Typography, TextField, Button } from "@mui/material";

// const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };

const CreatePost = () => {
  const [post, setPost] = useState(); // eslint-disable-next-line no-unused-vars
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    content: "",
    image: "",
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
    sendRequest().then((data) => setPost(data.post));
    // sendRequest().then((data) => console.log(data.post));
    console.log(post);
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

          <TextField
            sx={{ mt: 3 }}
            margin="auto"
            name="title"
            onChange={handleChange}
            value={inputs.title}
            label="Title"
            color="secondary"
            focused
          />
          <TextField
            sx={{ mt: 3 }}
            margin="auto"
            name="description"
            onChange={handleChange}
            value={inputs.description}
            label="Description"
            // variant="filled"
            color="success"
            focused
          />

          <TextField
            sx={{ mt: 3 }}
            margin="auto"
            name="image"
            onChange={handleChange}
            value={inputs.image}
            label="Image URL"
            // variant="filled"
            color="success"
            focused
          />

          <TextField
            sx={{ mt: 3 }}
            margin="auto"
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
            color="warning"
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
