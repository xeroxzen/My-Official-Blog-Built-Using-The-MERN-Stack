import React from "react";
import {
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const PostsCard = ({
  title,
  description,
  image,
  content,
  author,
  publishedAt,
}) => {
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
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              {/* {author.charAt(0).toUpperCase()} */}
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
            {content}
          </Typography>
        </CardContent>
      </Card>
      ;
    </div>
  );
};

export default PostsCard;
