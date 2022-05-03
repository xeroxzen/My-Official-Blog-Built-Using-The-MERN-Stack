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

const PostsCard = ({
  title,
  description,
  image,
  content,
  author,
  publishedAt,
  isUser,
  id,
}) => {
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`/my-post/${id}`);
  };

  const handleDelete = () => {
    console.log("delete");
  };


  console.log(title, isUser);
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
              <ModeEditOutlineIcon />
            </IconButton>
            <IconButton onClick={handleDelete}>
              <DeleteForeverIcon />
            </IconButton>
          </Box>
        )}
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              {author.charAt(0).toUpperCase()}
            </Avatar>
          }
          title={title}
          subheader={publishedAt}
        />
        <CardMedia
          component="img"
          height="194"
          image={image}
          alt={description}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <b>{author}:</b> {content}
          </Typography>
        </CardContent>
      </Card>
      ;
    </div>
  );
};

export default PostsCard;
