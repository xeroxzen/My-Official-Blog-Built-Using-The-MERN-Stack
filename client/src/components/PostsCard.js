import React from "react";
import {
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  Typography,
  Box,
  IconButton,
} from "@mui/material";

import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useStyles } from "./utils";

const PostsCard = ({
  id,
  title,
  description,
  image,
  content,
  author,
  publishedAt,
  isUser,
}) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`/my-post/${id}`);
  };

  const deleteRequest = async () => {
    const res = await axios
      .delete(`http://localhost:5000/api/blog/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleDelete = () => {
    deleteRequest()
      .then(() => navigate("/"))
      .then(() => console.log("Post successfully deleted"))
      .then(() => navigate("/"))
      .then(() => navigate("/posts"));
  };

  // console.log(title, isUser);
  return (
    <div>
      {" "}
      <Card
        sx={{
          width: "40%",
          margin: "auto",
          mt: 2,
          padding: 2,
          boxShadow: "5px 5px 10px #ccc",
          ":hover:": {
            boxShadow: "10px 10px 20px #ccc",
          },
        }}
      >
        {isUser && (
          <Box display="flex">
            <IconButton onClick={handleEdit} sx={{ marginLeft: "auto" }}>
              <ModeEditOutlineIcon color="primary" />
            </IconButton>
            <IconButton onClick={handleDelete}>
              <DeleteForeverIcon color="warning" />
            </IconButton>
          </Box>
        )}
        <CardHeader
          className={classes.font}
          avatar={
            <Avatar
              className={classes.font}
              sx={{ bgcolor: "red" }}
              aria-label="recipe"
            >
              {author ? author.charAt(0).toUpperCase() : ""}
            </Avatar>
          }
          title={title}
          subheader={publishedAt}
        />
        <CardMedia
          className={classes.font}
          component="img"
          height="194"
          image={image}
          alt={description}
        />
        <CardContent>
          <hr />
          <br />
          <Typography
            className={classes.font}
            variant="body2"
            color="text.secondary"
          >
            <b>{author}:</b> {content}
          </Typography>
        </CardContent>
      </Card>
      ;
    </div>
  );
};

export default PostsCard;
