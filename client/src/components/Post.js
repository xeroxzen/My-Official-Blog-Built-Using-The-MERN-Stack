import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";
import axios from "axios";

const Post = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState();
  const id = useParams().id;
  // console.log(id);

  const [inputs, setInputs] = useState({});
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const fetchPost = async () => {
    const res = await axios
      .get(`http://localhost:5000/api/blog/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  useEffect(() => {
    fetchPost().then((data) => {
      setPost(data.post);
      setInputs({
        title: data.post.title,
        description: data.post.description,
        content: data.post.content,
        image: data.post.image,
      });
    });
  }, [id]);

  const sendRequest = async () => {
    const res = await axios
      .put(`http://localhost:5000/api/blog/update/${id}`, {
        title: inputs.title,
        description: inputs.description,
        content: inputs.content,
        image: inputs.image,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };

  console.log(post);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest()
      .then((data) => console.log(data))
      .then(() => alert("Post successfully updated"))
      .then(() => navigate("/my-posts/"));
  };

  return (
    <div>
      {inputs && (
        <form onSubmit={handleSubmit}>
          <Box
            border={3}
            borderColor="linear-gradient(90deg, rgba(33,127,193,1) 0%, rgba(83,10,89,1) 100%);"
            borderRadius={10}
            boxShadow="10px 10px 20px #ccc"
            padding={3}
            margin="normal"
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
              margin="normal"
              name="title"
              onChange={handleChange}
              value={inputs.title}
              label="Title"
              color="secondary"
              focused
            />
            <TextField
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
              color="warning"
              type="submit"
            >
              Submit
            </Button>
          </Box>
        </form>
      )}
    </div>
  );
};

export default Post;
